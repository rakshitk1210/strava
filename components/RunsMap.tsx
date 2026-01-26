'use client'

import { useEffect, useRef } from 'react'
import { StravaActivity } from '@/lib/strava'
import polyline from '@mapbox/polyline'

interface RunsMapProps {
  runs: StravaActivity[]
}

export default function RunsMap({ runs }: RunsMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<any>(null)
  const initialized = useRef(false)

  useEffect(() => {
    if (!mapContainer.current || initialized.current) return

    // Dynamically import mapbox-gl to avoid SSR issues
    import('mapbox-gl').then((mapboxgl) => {
      mapboxgl.default.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || ''

      // Calculate bounds from all runs
      const runsWithCoords = runs.filter(run => run.start_latlng && run.start_latlng[0] && run.start_latlng[1])
      
      if (runsWithCoords.length === 0) return

      // Sort by date to get most recent run
      const sortedRuns = [...runsWithCoords].sort((a, b) => 
        new Date(b.start_date_local).getTime() - new Date(a.start_date_local).getTime()
      )
      
      // Use most recent run's location as center
      const mostRecentRun = sortedRuns[0]
      const center: [number, number] = [mostRecentRun.start_latlng![1], mostRecentRun.start_latlng![0]]

      // Initialize map with dark theme
      map.current = new mapboxgl.default.Map({
        container: mapContainer.current!,
        style: 'mapbox://styles/mapbox/dark-v11',
        center: center,
        zoom: 12
      })
      
      initialized.current = true

      map.current.on('load', () => {
        // Add routes for each run
        runs.forEach((run, index) => {
          if (run.map?.summary_polyline) {
            try {
              const coordinates = polyline.decode(run.map.summary_polyline).map(
                ([lat, lng]) => [lng, lat]
              )

              const sourceId = `route-${index}`
              const layerId = `route-${index}`

              // Check if source already exists
              const sourceExists = map.current.getSource(sourceId)
              if (sourceExists) return

              // Add route line
              map.current.addSource(sourceId, {
                type: 'geojson',
                data: {
                  type: 'Feature',
                  properties: {
                    name: run.name,
                    distance: run.distance,
                    date: run.start_date_local
                  },
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
                  'line-color': '#04b488',
                  'line-width': 3,
                  'line-opacity': 0.8
                }
              })

              // Add start marker with green color
              if (run.start_latlng) {
                new mapboxgl.default.Marker({ color: '#04b488' })
                  .setLngLat([run.start_latlng[1], run.start_latlng[0]])
                  .setPopup(
                    new mapboxgl.default.Popup({ className: 'dark-popup' }).setHTML(
                      `<div style="background: #151819; color: #f2f5f7; padding: 8px; border-radius: 8px;">
                        <strong style="font-family: 'Titillium Web', sans-serif;">${run.name}</strong><br/>
                        <span style="color: #696e70;">${(run.distance / 1000).toFixed(2)} km</span>
                      </div>`
                    )
                  )
                  .addTo(map.current)
              }
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
  }, [])

  return (
    <div className="bg-[#151819] flex flex-col gap-[24px] items-start p-[24px] pt-[16px] relative rounded-[16px] w-full h-full" data-name="Map component">
      {/* Header */}
      <div className="flex flex-col items-start pb-[2px] pt-0 px-0 relative shrink-0 w-full">
        <div className="flex flex-col justify-center leading-[0] mb-[-2px] relative shrink-0 text-[#f2f5f7]">
          <p className="font-['Titillium_Web',sans-serif] font-bold text-[20px] leading-[1.4] tracking-[-0.6px]">
            Running routes
          </p>
        </div>
        <p className="font-['Titillium_Web',sans-serif] font-semibold leading-[1.5] min-w-full not-italic relative shrink-0 text-[#696e70] text-[14px] tracking-[-0.42px]">
          Click on the routes to know more details
        </p>
      </div>

      {/* Map Frame */}
      <div 
        ref={mapContainer} 
        className="flex-1 w-full overflow-hidden relative rounded-[12px] bg-[#0e1111]"
        style={{ minHeight: '450px' }}
      />
    </div>
  )
}

