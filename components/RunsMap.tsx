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
  const mapboxgl = useRef<any>(null)
  const markers = useRef<any[]>([])
  const initialized = useRef(false)

  // Initialize map once
  useEffect(() => {
    if (!mapContainer.current || initialized.current) return

    // Dynamically import mapbox-gl to avoid SSR issues
    import('mapbox-gl').then((module) => {
      mapboxgl.current = module.default
      mapboxgl.current.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || ''

      // Initialize map with dark theme (center will be updated when runs are added)
      map.current = new mapboxgl.current.Map({
        container: mapContainer.current!,
        style: 'mapbox://styles/mapbox/dark-v11',
        center: [0, 0],
        zoom: 2
      })
      
      initialized.current = true

      // Add navigation controls
      map.current.addControl(new mapboxgl.current.NavigationControl())
    })

    return () => {
      if (map.current) {
        map.current.remove()
        map.current = null
        initialized.current = false
      }
    }
  }, [])

  // Update routes when runs change
  useEffect(() => {
    if (!map.current || !mapboxgl.current || !initialized.current) return
    
    const updateRoutes = () => {
      // Remove all existing markers
      markers.current.forEach(marker => marker.remove())
      markers.current = []

      // Remove all existing layers and sources
      const style = map.current.getStyle()
      if (style && style.layers) {
        style.layers.forEach((layer: any) => {
          if (layer.id.startsWith('route-')) {
            map.current.removeLayer(layer.id)
          }
        })
      }
      
      if (style && style.sources) {
        Object.keys(style.sources).forEach(sourceId => {
          if (sourceId.startsWith('route-')) {
            map.current.removeSource(sourceId)
          }
        })
      }

      // Calculate bounds from all runs
      const runsWithCoords = runs.filter(run => run.start_latlng && run.start_latlng[0] && run.start_latlng[1])
      
      if (runsWithCoords.length === 0) {
        // Keep current position if no runs for selected year
        return
      }

      // Sort by date to get most recent run
      const sortedRuns = [...runsWithCoords].sort((a, b) => 
        new Date(b.start_date_local).getTime() - new Date(a.start_date_local).getTime()
      )
      
      // Use most recent run's location as default center
      const mostRecentRun = sortedRuns[0]
      const defaultCenter: [number, number] = [mostRecentRun.start_latlng![1], mostRecentRun.start_latlng![0]]

      // Add routes for each run
      runs.forEach((run, index) => {
        if (run.map?.summary_polyline) {
          try {
            const coordinates = polyline.decode(run.map.summary_polyline).map(
              ([lat, lng]) => [lng, lat]
            )

            const sourceId = `route-${run.id}-${index}`
            const layerId = `route-${run.id}-${index}`

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
              const marker = new mapboxgl.current.Marker({ color: '#04b488' })
                .setLngLat([run.start_latlng[1], run.start_latlng[0]])
                .setPopup(
                  new mapboxgl.current.Popup({ 
                    closeButton: true,
                    offset: 25
                  }).setHTML(
                    `<div style="padding: 12px 16px 12px 16px; min-width: 180px;">
                      <div style="font-family: 'Titillium Web', sans-serif; font-weight: 700; font-size: 16px; color: #060809; line-height: 1.4; margin-bottom: 4px; padding-right: 16px;">
                        ${run.name}
                      </div>
                      <div style="font-family: 'Titillium Web', sans-serif; font-weight: 600; font-size: 14px; color: #696e70; line-height: 1.4;">
                        ${(run.distance / 1000).toFixed(2)} km
                      </div>
                    </div>`
                  )
                )
                .addTo(map.current)
              
              markers.current.push(marker)
            }
          } catch (error) {
            console.error('Error decoding polyline for run:', run.id, error)
          }
        }
      })

      // Always center on the most recent run location (last run of the year)
      if (runsWithCoords.length > 0) {
        map.current.flyTo({
          center: defaultCenter,
          zoom: 12,
          duration: 1000
        })
      }
    }

    // Wait for map to be fully loaded before updating routes
    if (map.current.isStyleLoaded()) {
      updateRoutes()
    } else {
      map.current.once('load', updateRoutes)
    }
  }, [runs])

  return (
    <>
      <style jsx global>{`
        /* Canvas sizing */
        .mapboxgl-canvas {
          width: 100% !important;
          height: 100% !important;
        }
        
        /* Light theme popup styling for contrast */
        .mapboxgl-popup-content {
          background: #ffffff !important;
          border: none !important;
          border-radius: 12px !important;
          padding: 0 !important;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6) !important;
        }
        
        .mapboxgl-popup-tip {
          border-top-color: #ffffff !important;
          border-bottom-color: #ffffff !important;
        }
        
        .mapboxgl-popup-close-button {
          color: #696e70 !important;
          font-size: 18px !important;
          padding: 0 !important;
          width: 24px !important;
          height: 24px !important;
          line-height: 24px !important;
          right: 8px !important;
          top: 8px !important;
          border-radius: 4px !important;
        }
        
        .mapboxgl-popup-close-button:hover {
          color: #060809 !important;
          background: #f2f5f7 !important;
        }
      `}</style>
      
      <div className="bg-[rgba(21,24,25,0)] flex flex-col gap-[16px] md:gap-[20px] lg:gap-[24px] items-start relative rounded-[16px] w-full h-full p-[0px]" data-name="Map component">
        {/* Header */}
        <div className="flex flex-col items-start pb-[2px] pt-0 px-0 relative shrink-0 w-full">
          <p className="font-['Titillium_Web',sans-serif] font-semibold leading-[1.5] min-w-full not-italic relative shrink-0 text-[#696e70] text-[12px] md:text-[13px] lg:text-[14px] tracking-[-0.42px] w-[min-content] whitespace-pre-wrap">
            Map
          </p>
          <p className="font-['Titillium_Web',sans-serif] font-bold text-[20px] md:text-[22px] lg:text-[24px] leading-[1.4] relative shrink-0 text-[#f2f5f7] tracking-[-0.72px]">
            Running routes
          </p>
        </div>

        {/* Map Frame */}
        <div 
          ref={mapContainer} 
          className="flex-[1_0_0] min-h-px min-w-px overflow-clip relative w-full rounded-[0px] bg-[#0e1111]"
        />
      </div>
    </>
  )
}

