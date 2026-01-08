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
    // #region agent log
    fetch('http://127.0.0.1:7244/ingest/b2a6f3b5-f17d-44c2-adad-3120d905d8cb',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'RunsMap.tsx:16',message:'useEffect called',data:{hasMapContainer:!!mapContainer.current,hasMapInstance:!!map.current,isInitialized:initialized.current,runsCount:runs.length},timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix',hypothesisId:'B,C,D'})}).catch(()=>{});
    // #endregion
    if (!mapContainer.current || initialized.current) return

    // Dynamically import mapbox-gl to avoid SSR issues
    import('mapbox-gl').then((mapboxgl) => {
      mapboxgl.default.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || ''
      // #region agent log
      fetch('http://127.0.0.1:7244/ingest/b2a6f3b5-f17d-44c2-adad-3120d905d8cb',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'RunsMap.tsx:20',message:'Mapbox loaded, creating map',data:{runsCount:runs.length},timestamp:Date.now(),sessionId:'debug-session',runId:'debug',hypothesisId:'B,D'})}).catch(()=>{});
      // #endregion

      // Calculate bounds from all runs
      const runsWithCoords = runs.filter(run => run.start_latlng && run.start_latlng[0] && run.start_latlng[1])
      
      if (runsWithCoords.length === 0) return

      // Use first run's location as center
      const firstRun = runsWithCoords[0]
      const center: [number, number] = [firstRun.start_latlng![1], firstRun.start_latlng![0]]

      // Initialize map
      map.current = new mapboxgl.default.Map({
        container: mapContainer.current!,
        style: 'mapbox://styles/mapbox/outdoors-v12',
        center: center,
        zoom: 12
      })
      
      initialized.current = true
      
      // #region agent log
      fetch('http://127.0.0.1:7244/ingest/b2a6f3b5-f17d-44c2-adad-3120d905d8cb',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'RunsMap.tsx:40',message:'Map instance created, initialized flag set',data:{mapExists:!!map.current,initialized:initialized.current},timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix',hypothesisId:'B,D,E'})}).catch(()=>{});
      // #endregion

      map.current.on('load', () => {
        // #region agent log
        fetch('http://127.0.0.1:7244/ingest/b2a6f3b5-f17d-44c2-adad-3120d905d8cb',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'RunsMap.tsx:45',message:'Map load event fired',data:{runsToAdd:runs.length,initialized:initialized.current},timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix',hypothesisId:'D'})}).catch(()=>{});
        // #endregion
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
              // #region agent log
              fetch('http://127.0.0.1:7244/ingest/b2a6f3b5-f17d-44c2-adad-3120d905d8cb',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'RunsMap.tsx:52',message:'Checking source',data:{sourceId,sourceExists:!!sourceExists,runId:run.id,index},timestamp:Date.now(),sessionId:'debug-session',runId:'debug',hypothesisId:'A,D'})}).catch(()=>{});
              // #endregion
              if (sourceExists) {
                // #region agent log
                fetch('http://127.0.0.1:7244/ingest/b2a6f3b5-f17d-44c2-adad-3120d905d8cb',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'RunsMap.tsx:53',message:'Source already exists, skipping',data:{sourceId,runId:run.id},timestamp:Date.now(),sessionId:'debug-session',runId:'debug',hypothesisId:'A'})}).catch(()=>{});
                // #endregion
                return
              }

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
                  'line-color': '#FC4C02',
                  'line-width': 3,
                  'line-opacity': 0.7
                }
              })

              // Add start marker
              if (run.start_latlng) {
                new mapboxgl.default.Marker({ color: '#22c55e' })
                  .setLngLat([run.start_latlng[1], run.start_latlng[0]])
                  .setPopup(
                    new mapboxgl.default.Popup().setHTML(
                      `<div style="color: black;">
                        <strong>${run.name}</strong><br/>
                        ${(run.distance / 1000).toFixed(2)} km
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
      // #region agent log
      fetch('http://127.0.0.1:7244/ingest/b2a6f3b5-f17d-44c2-adad-3120d905d8cb',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'RunsMap.tsx:133',message:'Cleanup function called',data:{hasMap:!!map.current,initialized:initialized.current},timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix',hypothesisId:'B,E'})}).catch(()=>{});
      // #endregion
      if (map.current) {
        map.current.remove()
        map.current = null
        initialized.current = false
        // #region agent log
        fetch('http://127.0.0.1:7244/ingest/b2a6f3b5-f17d-44c2-adad-3120d905d8cb',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'RunsMap.tsx:138',message:'Map removed, flags reset',data:{initialized:initialized.current},timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix',hypothesisId:'E'})}).catch(()=>{});
        // #endregion
      }
    }
  }, [])

  return (
    <div 
      ref={mapContainer} 
      className="w-full h-[600px] rounded-lg shadow-lg"
      style={{ minHeight: '600px' }}
    />
  )
}

