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
  const mapReady = useRef(false)
  const controlsAdded = useRef(false)

  // Initialize map once
  useEffect(() => {
    if (!mapContainer.current || initialized.current) {
      // #region agent log
      console.log('[DEBUG-D] Map init skipped:', {hasContainer:!!mapContainer.current,alreadyInit:initialized.current});
      fetch('http://127.0.0.1:7246/ingest/390d698b-bce8-4585-98d8-29d7ba3381e7',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'RunsMap.tsx:initSkip',message:'Map init skipped',data:{hasContainer:!!mapContainer.current,alreadyInit:initialized.current},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'D'})}).catch(()=>{});
      // #endregion
      return
    }

    // #region agent log
    console.log('[DEBUG-D] Starting map initialization...');
    fetch('http://127.0.0.1:7246/ingest/390d698b-bce8-4585-98d8-29d7ba3381e7',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'RunsMap.tsx:initStart',message:'Starting map init',data:{hasContainer:!!mapContainer.current},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'D'})}).catch(()=>{});
    // #endregion

    // Dynamically import mapbox-gl to avoid SSR issues
    import('mapbox-gl').then((module) => {
      mapboxgl.current = module.default
      const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || ''
      mapboxgl.current.accessToken = token
      
      // #region agent log
      console.log('[DEBUG-D] Mapbox imported:', {hasToken:!!token,tokenLength:token.length});
      fetch('http://127.0.0.1:7246/ingest/390d698b-bce8-4585-98d8-29d7ba3381e7',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'RunsMap.tsx:mapboxImported',message:'Mapbox imported',data:{hasToken:!!token,tokenLength:token.length},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'D'})}).catch(()=>{});
      // #endregion

      // Initialize map with dark theme centered on Seattle (will be updated when runs are added)
      map.current = new mapboxgl.current.Map({
        container: mapContainer.current!,
        style: 'mapbox://styles/mapbox/dark-v11',
        center: [-122.3321, 47.6062], // Seattle, WA
        zoom: 11
      })
      
      initialized.current = true
      
      // #region agent log
      console.log('[DEBUG-D] Map instance created, waiting for load...');
      fetch('http://127.0.0.1:7246/ingest/390d698b-bce8-4585-98d8-29d7ba3381e7',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'RunsMap.tsx:mapCreated',message:'Map created',data:{initialized:true},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'D'})}).catch(()=>{});
      // #endregion

      // Wait for map to be fully loaded
      map.current.on('load', () => {
        console.log('Map loaded and ready')
        mapReady.current = true
        // #region agent log
        console.log('[DEBUG-D] Map fully loaded and ready');
        fetch('http://127.0.0.1:7246/ingest/390d698b-bce8-4585-98d8-29d7ba3381e7',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'RunsMap.tsx:mapReady',message:'Map ready',data:{mapReady:true},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'D'})}).catch(()=>{});
        // #endregion
        // Add navigation controls only once
        if (!controlsAdded.current) {
          map.current.addControl(new mapboxgl.current.NavigationControl())
          controlsAdded.current = true
        }
      })
      
      map.current.on('error', (e: any) => {
        // #region agent log
        console.log('[DEBUG-D] Map error:', e);
        fetch('http://127.0.0.1:7246/ingest/390d698b-bce8-4585-98d8-29d7ba3381e7',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'RunsMap.tsx:mapError',message:'Map error',data:{error:e.error?.message || String(e)},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'D'})}).catch(()=>{});
        // #endregion
      })
    }).catch((err) => {
      // #region agent log
      console.log('[DEBUG-D] Failed to import mapbox:', err);
      fetch('http://127.0.0.1:7246/ingest/390d698b-bce8-4585-98d8-29d7ba3381e7',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'RunsMap.tsx:importError',message:'Import error',data:{error:err.message || String(err)},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'D'})}).catch(()=>{});
      // #endregion
    })

    return () => {
      if (map.current) {
        map.current.remove()
        map.current = null
        initialized.current = false
        mapReady.current = false
        controlsAdded.current = false
      }
    }
  }, [])

  // Update routes when runs change OR when map becomes ready
  useEffect(() => {
    // #region agent log
    console.log('[DEBUG-D] RunsMap effect triggered:', {runsCount:runs.length,mapReady:mapReady.current,initialized:initialized.current,hasMap:!!map.current,hasMapboxgl:!!mapboxgl.current});
    fetch('http://127.0.0.1:7246/ingest/390d698b-bce8-4585-98d8-29d7ba3381e7',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'RunsMap.tsx:effectEntry',message:'RunsMap effect triggered',data:{runsCount:runs.length,mapReady:mapReady.current,initialized:initialized.current,hasMap:!!map.current,hasMapboxgl:!!mapboxgl.current},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'D'})}).catch(()=>{});
    // #endregion
    console.log('RunsMap effect triggered, runs count:', runs.length, 'mapReady:', mapReady.current)
    
    // Early exit if map not initialized
    if (!map.current || !mapboxgl.current || !initialized.current) {
      console.log('Map not initialized yet')
      // #region agent log
      console.log('[DEBUG-D] Map not initialized:', {hasMap:!!map.current,hasMapboxgl:!!mapboxgl.current,initialized:initialized.current});
      fetch('http://127.0.0.1:7246/ingest/390d698b-bce8-4585-98d8-29d7ba3381e7',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'RunsMap.tsx:earlyExit',message:'Map not initialized',data:{hasMap:!!map.current,hasMapboxgl:!!mapboxgl.current,initialized:initialized.current},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'D'})}).catch(()=>{});
      // #endregion
      return
    }
    
    // Early exit if no runs
    if (runs.length === 0) {
      console.log('No runs to display')
      // #region agent log
      console.log('[DEBUG-B] No runs to display:', {runsLength:runs.length});
      fetch('http://127.0.0.1:7246/ingest/390d698b-bce8-4585-98d8-29d7ba3381e7',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'RunsMap.tsx:noRuns',message:'No runs to display',data:{runsLength:runs.length},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'B'})}).catch(()=>{});
      // #endregion
      return
    }
    
    const updateRoutes = () => {
      // Check if map is actually ready to accept sources/layers
      if (!map.current.isStyleLoaded()) {
        console.log('Map style not loaded, scheduling retry...')
        setTimeout(updateRoutes, 100)
        return
      }

      try {
        console.log('Starting updateRoutes...')
        
        // Remove all existing markers
        markers.current.forEach(marker => marker.remove())
        markers.current = []

        // Remove all existing layers and sources
        const style = map.current.getStyle()
        if (style && style.layers) {
          style.layers.forEach((layer: any) => {
            if (layer.id.startsWith('route-')) {
              try {
                map.current.removeLayer(layer.id)
              } catch (e) {
                // Layer might not exist
              }
            }
          })
        }
        
        if (style && style.sources) {
          Object.keys(style.sources).forEach(sourceId => {
            if (sourceId.startsWith('route-')) {
              try {
                map.current.removeSource(sourceId)
              } catch (e) {
                // Source might not exist
              }
            }
          })
        }

        // Calculate bounds from all runs
        const runsWithCoords = runs.filter(run => run.start_latlng && run.start_latlng[0] && run.start_latlng[1])
        
        // #region agent log
        console.log('[DEBUG-C] Checking runs coordinates:', {totalRuns:runs.length,runsWithCoords:runsWithCoords.length,firstRunHasPolyline:runs[0]?.map?.summary_polyline ? 'yes' : 'no',firstRunCoords:runs[0]?.start_latlng});
        fetch('http://127.0.0.1:7246/ingest/390d698b-bce8-4585-98d8-29d7ba3381e7',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'RunsMap.tsx:coordsCheck',message:'Checking runs coordinates',data:{totalRuns:runs.length,runsWithCoords:runsWithCoords.length,firstRunHasPolyline:runs[0]?.map?.summary_polyline ? 'yes' : 'no',firstRunCoords:runs[0]?.start_latlng},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'C'})}).catch(()=>{});
        // #endregion
        
        if (runsWithCoords.length === 0) {
          console.log('No runs with coordinates')
          // #region agent log
          console.log('[DEBUG-C] No runs with coordinates:', {totalRuns:runs.length,sampleRun:runs[0]});
          fetch('http://127.0.0.1:7246/ingest/390d698b-bce8-4585-98d8-29d7ba3381e7',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'RunsMap.tsx:noCoords',message:'No runs with coordinates',data:{totalRuns:runs.length,sampleRun:runs[0]},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'C'})}).catch(()=>{});
          // #endregion
          return
        }

        console.log(`Rendering ${runs.length} runs on map (${runsWithCoords.length} with coordinates)`)

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
                  'line-width': 2,
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
                        <div style="font-family: 'Titillium Web', sans-serif; font-weight: 600; font-size: 14px; color: #060809; line-height: 1.4; margin-bottom: 2px; padding-right: 16px;">
                          ${run.name}
                        </div>
                        <div style="font-family: 'Titillium Web', sans-serif; font-weight: 600; font-size: 14px; color: #060809; line-height: 1.4;">
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
        
        console.log('Routes rendered successfully')
      } catch (error) {
        console.error('Error in updateRoutes:', error)
      }
    }

    // Try to update routes, handling map ready state
    if (map.current.loaded() && map.current.isStyleLoaded()) {
      // Map is fully ready, update immediately
      console.log('Map is ready, updating routes immediately')
      updateRoutes()
    } else {
      // Map not ready yet, wait for load event
      console.log('Map not ready yet, waiting for load...')
      const onLoad = () => {
        console.log('Map loaded, updating routes')
        mapReady.current = true
        updateRoutes()
      }
      
      map.current.once('load', onLoad)
      
      return () => {
        if (map.current) {
          map.current.off('load', onLoad)
        }
      }
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
          border-radius: 8px !important;
          padding: 0 !important;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3) !important;
        }
        
        .mapboxgl-popup-tip {
          border-top-color: #ffffff !important;
          border-bottom-color: #ffffff !important;
        }
        
        .mapboxgl-popup-close-button {
          color: #060804 !important;
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
          background: #f8f8f8 !important;
        }
      `}</style>
      
      <div className="bg-[rgba(21,24,25,0)] flex flex-col gap-[16px] md:gap-[20px] lg:gap-[24px] items-start relative rounded-[16px] w-full h-full p-[0px]" data-name="Map component">
        {/* Header */}
        <div className="flex flex-col items-start pb-[2px] pt-0 px-0 relative shrink-0 w-full">
          <p className="font-['Titillium_Web',sans-serif] font-semibold leading-[1.5] min-w-full not-italic relative shrink-0 text-[#696e70] text-[12px] md:text-[13px] lg:text-[14px] tracking-[-0.42px] w-[min-content] whitespace-pre-wrap">
            Map
          </p>
          <p className="font-['Titillium_Web',sans-serif] font-bold text-[24px] md:text-[22px] lg:text-[24px] leading-[1.4] relative shrink-0 text-[#f2f5f7] tracking-[-0.72px]">
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

