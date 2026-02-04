'use client'

import { useState, useEffect, useMemo } from 'react'
import { StravaActivity } from '@/lib/strava'
import RunsMap from '@/components/RunsMap'
import RunDetails from '@/components/RunDetails'
import { DashboardHeader } from '@/components/dashboard/DashboardHeader'
import { DashboardMetrics } from '@/components/dashboard/DashboardMetrics'
import { PerformanceCard } from '@/components/dashboard/PerformanceCard'
import { RecordsCard } from '@/components/dashboard/RecordsCard'
import { RunningTrends } from '@/components/dashboard/RunningTrends'
import { YearStreaks } from '@/components/dashboard/YearStreaks'
import { DashboardFooter } from '@/components/dashboard/DashboardFooter'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { startOfYear, endOfYear, isWithinInterval, getYear } from 'date-fns'
import 'mapbox-gl/dist/mapbox-gl.css'

export default function Home() {
  const [runs, setRuns] = useState<StravaActivity[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [unit, setUnit] = useState<'Km' | 'Miles'>('Km')
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date())
  const [selectedRun, setSelectedRun] = useState<StravaActivity | null>(null)
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear())
  const [isOwnData, setIsOwnData] = useState(false)
  const [isDemo, setIsDemo] = useState(false)

  // Debug year changes
  const handleYearChange = (year: number) => {
    console.log('Page.tsx: Year change requested:', year, 'Current:', selectedYear);
    setSelectedYear(year);
    console.log('Page.tsx: setSelectedYear called with:', year);
  }

  // Debug: Log when selectedYear changes
  useEffect(() => {
    console.log('Page.tsx: selectedYear state changed to:', selectedYear);
  }, [selectedYear]);

  // Filter runs by selected year
  const filteredRuns = useMemo(() => {
    // If no runs yet, return empty array
    if (runs.length === 0) {
      // #region agent log
      console.log('[DEBUG-B] No runs available:', {runsLength:runs.length,selectedYear:selectedYear});
      fetch('http://127.0.0.1:7246/ingest/390d698b-bce8-4585-98d8-29d7ba3381e7',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'page.tsx:filteredRuns',message:'No runs available',data:{runsLength:runs.length,selectedYear:selectedYear},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'B'})}).catch(()=>{});
      // #endregion
      return [];
    }
    
    const yearStart = startOfYear(new Date(selectedYear, 0, 1));
    const yearEnd = endOfYear(new Date(selectedYear, 0, 1));

    const filtered = runs.filter(run => {
      const runDate = new Date(run.start_date_local);
      return isWithinInterval(runDate, { start: yearStart, end: yearEnd });
    });
    // #region agent log
    console.log('[DEBUG-B] Filtered runs by year:', {selectedYear:selectedYear,totalRuns:runs.length,filteredCount:filtered.length,yearStart:yearStart.toISOString(),yearEnd:yearEnd.toISOString()});
    fetch('http://127.0.0.1:7246/ingest/390d698b-bce8-4585-98d8-29d7ba3381e7',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'page.tsx:filteredRuns',message:'Filtered runs by year',data:{selectedYear:selectedYear,totalRuns:runs.length,filteredCount:filtered.length,yearStart:yearStart.toISOString(),yearEnd:yearEnd.toISOString()},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'B'})}).catch(()=>{});
    // #endregion
    return filtered;
  }, [runs, selectedYear]);

  useEffect(() => {
    fetchActivities()
  }, [])

  const fetchActivities = async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/public-activities')

      if (!response.ok) {
        throw new Error('Failed to fetch activities')
      }

      const data = await response.json()
      // #region agent log
      console.log('[DEBUG-E] API response received:', {activitiesCount:data.activities?.length,isOwnData:data.isOwnData,isDemo:data.isDemo,firstActivity:data.activities?.[0]?.start_date_local,hasActivities:!!data.activities});
      fetch('http://127.0.0.1:7246/ingest/390d698b-bce8-4585-98d8-29d7ba3381e7',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'page.tsx:fetchActivities',message:'API response received',data:{activitiesCount:data.activities?.length,isOwnData:data.isOwnData,isDemo:data.isDemo,firstActivity:data.activities?.[0]?.start_date_local},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'E'})}).catch(()=>{});
      // #endregion
      // Auto-select the most recent year with data BEFORE setting runs
      if (data.activities.length > 0) {
        const years = data.activities.map((run: StravaActivity) => 
          getYear(new Date(run.start_date_local))
        )
        const mostRecentYear = Math.max(...years)
        // #region agent log
        console.log('[DEBUG-A] Year auto-detection:', {selectedYearBefore:selectedYear,yearsFound:years,mostRecentYear:mostRecentYear,activitiesCount:data.activities.length});
        fetch('http://127.0.0.1:7246/ingest/390d698b-bce8-4585-98d8-29d7ba3381e7',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'page.tsx:yearDetection',message:'Year auto-detection',data:{selectedYearBefore:selectedYear,yearsFound:years,mostRecentYear:mostRecentYear,activitiesCount:data.activities.length},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'A'})}).catch(()=>{});
        // #endregion
        
        // Set year FIRST to avoid race conditions
        setSelectedYear(mostRecentYear)
      }
      
      setRuns(data.activities)
      setIsOwnData(data.isOwnData || false)
      setIsDemo(data.isDemo || false)
      setLastUpdated(new Date())
    } catch (err) {
      console.error('Error fetching activities:', err)
      // #region agent log
      fetch('http://127.0.0.1:7246/ingest/390d698b-bce8-4585-98d8-29d7ba3381e7',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'page.tsx:fetchActivitiesError',message:'Fetch error',data:{error:err instanceof Error ? err.message : String(err)},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'E'})}).catch(()=>{});
      // #endregion
      setError('Failed to load activities. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleConnectStrava = () => {
    const clientId = process.env.NEXT_PUBLIC_STRAVA_CLIENT_ID
    const redirectUri = `${window.location.origin}/api/strava/callback`
    const scope = 'read,activity:read_all'
    
    window.location.href = `https://www.strava.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}`
  }

  const handleDisconnect = async () => {
    try {
      await fetch('/api/strava/disconnect', { method: 'POST' })
      window.location.reload()
    } catch (err) {
      console.error('Error disconnecting:', err)
      setError('Failed to disconnect. Please try again.')
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#060809]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#04b488] mx-auto mb-4"></div>
          <p className="text-lg text-[#696e70]">Loading runs...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-[#060809]">
        <Card className="p-8 max-w-md w-full text-center bg-[#151819] border-[#44494b]">
          <p className="text-[#fc5200] mb-4">{error}</p>
          <Button onClick={fetchActivities} className="bg-[#04b488] hover:bg-[#04b488]/90">
            Try Again
          </Button>
          <p className="text-sm text-[#696e70] mt-4">
            Make sure you have set up your .env.local file with Strava credentials.
            <br />
            Visit <a href="/auth" className="text-[#04b488] underline">/auth</a> to get tokens.
          </p>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen w-full bg-[#060809] text-[#f2f5f7] flex flex-col items-center font-['Titillium_Web',sans-serif] pb-[80px] md:pb-0">
      {/* Header Section */}
      <DashboardHeader 
        lastUpdated={lastUpdated}
        unit={unit}
        onUnitChange={setUnit}
        selectedYear={selectedYear}
        onYearChange={handleYearChange}
        isDemo={isDemo}
        isOwnData={isOwnData}
        onConnect={handleConnectStrava}
        onDisconnect={handleDisconnect}
      />
      
      {/* Main Content Stack - Mobile First, Desktop Responsive */}
      <div className="w-full max-w-[1440px] flex flex-col gap-[32px] md:gap-[48px] lg:gap-[64px] mb-[80px] md:mb-[100px] lg:mb-[120px] px-[16px] md:px-[32px] lg:px-[64px] justify-start items-center">
        
        {/* Metrics Section - Stacks vertically on mobile, grid on larger screens */}
        <DashboardMetrics runs={filteredRuns} unit={unit} />
        
        {/* Map Section - Smaller height on mobile */}
        <div className="w-full h-[400px] md:h-[480px] lg:h-[557px]">
          <RunsMap runs={filteredRuns} />
        </div>

        {/* Records & Trends Row - Stack on mobile */}
        <div className="flex flex-col lg:flex-row gap-[32px] w-full">
          {/* Records - Full width on mobile */}
          <div className="w-full lg:w-[328px] xl:w-[264px] shrink-0 h-full">
            <RecordsCard runs={runs} unit={unit} />
          </div>
          {/* Trends - Full width on mobile, min height for chart visibility */}
          <div className="w-full lg:flex-1 min-w-0 h-[400px] md:h-[450px] lg:h-auto">
            <RunningTrends runs={filteredRuns} unit={unit} />
          </div>
        </div>

        {/* Performance & Consistency Row - Stack on mobile */}
        <div className="flex flex-col lg:flex-row gap-[32px] w-full">
          {/* Performance - Full width on mobile */}
          <div className="w-full lg:w-[328px] xl:w-[264px] shrink-0 h-full">
            <PerformanceCard runs={runs} unit={unit} />
          </div>
          {/* Running Days - Full width on mobile, scrollable on all screens */}
          <div className="w-full lg:flex-1 min-w-0 h-[640px] md:h-[700px] lg:h-full">
            <YearStreaks runs={filteredRuns} year={selectedYear} />
          </div>
        </div>

      </div>

      {/* Footer Branding */}
      <DashboardFooter />

      {/* Run Details Modal */}
      {selectedRun && (
        <RunDetails 
          run={selectedRun} 
          onClose={() => setSelectedRun(null)} 
        />
      )}
    </div>
  )
}
