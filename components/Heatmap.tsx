'use client'

import { useEffect, useRef } from 'react'
import { StravaActivity } from '@/lib/strava'
import polyline from '@mapbox/polyline'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface HeatmapProps {
  runs: StravaActivity[]
}

export default function Heatmap({ runs }: HeatmapProps) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<any>(null)
  const initialized = useRef(false)

  useEffect(() => {
    if (!mapContainer.current || initialized.current) return

    // Dynamically import mapbox-gl to avoid SSR issues
    import('mapbox-gl').then((mapboxgl) => {
      mapboxgl.default.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || ''

      // Calculate center from all runs
      const runsWithCoords = runs.filter(run => run.start_latlng && run.start_latlng[0] && run.start_latlng[1])
      
      if (runsWithCoords.length === 0) return

      // Use first run's location as center
      const firstRun = runsWithCoords[0]
      const center: [number, number] = [firstRun.start_latlng![1], firstRun.start_latlng![0]]

      // Initialize map
      map.current = new mapboxgl.default.Map({
        container: mapContainer.current!,
        style: 'mapbox://styles/mapbox/dark-v11', // Dark style for heatmap
        center: center,
        zoom: 12
      })
      
      initialized.current = true

      map.current.on('load', () => {
        // Collect all coordinates from all routes
        const allCoordinates: [number, number][] = []
        
        runs.forEach((run) => {
          if (run.map?.summary_polyline) {
            try {
              const coordinates = polyline.decode(run.map.summary_polyline).map(
                ([lat, lng]): [number, number] => [lng, lat]
              )
              allCoordinates.push(...coordinates)
            } catch (error) {
              console.error('Error decoding polyline for run:', run.id, error)
            }
          }
        })

        // Create heatmap source
        map.current.addSource('routes-heatmap', {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: allCoordinates.map(coord => ({
              type: 'Feature',
              properties: {},
              geometry: {
                type: 'Point',
                coordinates: coord
              }
            }))
          }
        })

        // Add heatmap layer
        map.current.addLayer({
          id: 'routes-heatmap-layer',
          type: 'heatmap',
          source: 'routes-heatmap',
          paint: {
            // Increase the heatmap weight based on frequency
            'heatmap-weight': 1,
            // Increase the heatmap color intensity based on zoom level
            'heatmap-intensity': [
              'interpolate',
              ['linear'],
              ['zoom'],
              0, 1,
              15, 3
            ],
            // Color ramp for heatmap
            'heatmap-color': [
              'interpolate',
              ['linear'],
              ['heatmap-density'],
              0, 'rgba(33,102,172,0)',
              0.2, 'rgb(103,169,207)',
              0.4, 'rgb(209,229,240)',
              0.6, 'rgb(253,219,199)',
              0.8, 'rgb(239,138,98)',
              1, 'rgb(178,24,43)'
            ],
            // Adjust the heatmap radius based on zoom level
            'heatmap-radius': [
              'interpolate',
              ['linear'],
              ['zoom'],
              0, 2,
              15, 20
            ],
            // Transition from heatmap to circle layer at zoom level 14
            'heatmap-opacity': [
              'interpolate',
              ['linear'],
              ['zoom'],
              7, 1,
              15, 0.8
            ]
          }
        })

        // Add routes as thin lines for reference
        runs.forEach((run, index) => {
          if (run.map?.summary_polyline) {
            try {
              const coordinates = polyline.decode(run.map.summary_polyline).map(
                ([lat, lng]) => [lng, lat]
              )

              const sourceId = `route-line-${index}`
              const layerId = `route-line-${index}`

              map.current.addSource(sourceId, {
                type: 'geojson',
                data: {
                  type: 'Feature',
                  properties: {},
                  geometry: {
                    type: 'LineString',
                    coordinates: coordinates
                  }
                }
              })

              map.current.addLayer({
                id: layerId,
                type: 'line',
                source: sourceId,
                layout: {
                  'line-join': 'round',
                  'line-cap': 'round'
                },
                paint: {
                  'line-color': '#ffffff',
                  'line-width': 0.5,
                  'line-opacity': 0.3
                }
              })
            } catch (error) {
              console.error('Error decoding polyline for run:', run.id, error)
            }
          }
        })

        // Fit bounds to show all runs
        if (runsWithCoords.length > 0) {
          const bounds = new mapboxgl.default.LngLatBounds()
          runsWithCoords.forEach(run => {
            if (run.start_latlng) {
              bounds.extend([run.start_latlng[1], run.start_latlng[0]])
            }
            if (run.end_latlng) {
              bounds.extend([run.end_latlng[1], run.end_latlng[0]])
            }
          })
          map.current.fitBounds(bounds, { padding: 50 })
        }
      })

      // Add navigation controls
      map.current.addControl(new mapboxgl.default.NavigationControl())
    })

    return () => {
      if (map.current) {
        map.current.remove()
        map.current = null
        initialized.current = false
      }
    }
  }, [runs])

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Activity Heatmap</h2>
        <p className="text-muted-foreground">
          Visualize your most frequented running areas. Brighter colors indicate routes you run more often.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Heatmap View</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div 
            ref={mapContainer} 
            className="w-full h-[600px] rounded-b-lg"
            style={{ minHeight: '600px' }}
          />
        </CardContent>
      </Card>

      {/* Legend */}
      <Card className="p-6">
        <h3 className="font-semibold mb-4">Legend</h3>
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <div className="h-8 rounded" style={{
              background: 'linear-gradient(to right, rgba(33,102,172,0.3), rgb(103,169,207), rgb(209,229,240), rgb(253,219,199), rgb(239,138,98), rgb(178,24,43))'
            }}></div>
            <div className="flex justify-between text-xs text-muted-foreground mt-2">
              <span>Less Frequent</span>
              <span>More Frequent</span>
            </div>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          The heatmap shows the density of your running routes. Areas with warmer colors (red/orange) are 
          places you've run more frequently, while cooler colors (blue) indicate less frequent routes.
        </p>
      </Card>
    </div>
  )
}

