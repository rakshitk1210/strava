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
import { MonthlyStreak } from '@/components/dashboard/MonthlyStreak'
import { PhotoGallery } from '@/components/dashboard/PhotoGallery'
import { DashboardFooter } from '@/components/dashboard/DashboardFooter'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { startOfMonth, endOfMonth, isWithinInterval } from 'date-fns'
import 'mapbox-gl/dist/mapbox-gl.css'

export default function Home() {
  const [runs, setRuns] = useState<StravaActivity[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [unit, setUnit] = useState<'Km' | 'Miles'>('Km')
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date())
  const [selectedRun, setSelectedRun] = useState<StravaActivity | null>(null)
  const [selectedMonth, setSelectedMonth] = useState<Date | null>(null) // null = "1 Year"

  // Filter runs by selected month
  const filteredRuns = useMemo(() => {
    // If selectedMonth is null, show all runs from the last year (1 Year option)
    if (selectedMonth === null) {
      return runs;
    }

    // Otherwise filter by the selected specific month
    const monthStart = startOfMonth(selectedMonth);
    const monthEnd = endOfMonth(selectedMonth);

    return runs.filter(run => {
      const runDate = new Date(run.start_date_local);
      return isWithinInterval(runDate, { start: monthStart, end: monthEnd });
    });
  }, [runs, selectedMonth]);

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
      setRuns(data.activities)
      setLastUpdated(new Date())
    } catch (err) {
      console.error('Error fetching activities:', err)
      setError('Failed to load activities. Please try again.')
    } finally {
      setLoading(false)
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
    <div className="min-h-screen w-full bg-[#060809] text-[#f2f5f7] flex flex-col items-center pb-0 font-['Titillium_Web',sans-serif]">
      {/* Header Section */}
      <DashboardHeader 
        lastUpdated={lastUpdated}
        unit={unit}
        onUnitChange={setUnit}
        selectedMonth={selectedMonth}
        onMonthChange={setSelectedMonth}
      />
      
      {/* Metrics Section */}
      <DashboardMetrics runs={filteredRuns} unit={unit} />
      
      {/* Main Content Stack */}
      <div className="w-full max-w-[1440px] flex flex-col gap-[40px] px-[0px] mb-[80px]">
        
        {/* Row 1: Performance & Map */}
        <div className="flex flex-col lg:flex-row gap-[40px] w-full">
          {/* Left: Fixed Width - Always shows ALL TIME data */}
          <div className="w-full lg:w-[264px] shrink-0 h-[541px]">
             <PerformanceCard runs={runs} unit={unit} />
          </div>
          {/* Right: Flexible Width */}
          <div className="w-full lg:flex-1 min-w-0 h-[541px]">
             <RunsMap runs={filteredRuns} />
          </div>
        </div>

        {/* Row 2: Monthly Streak & Photo Gallery */}
        <div className="w-full bg-[#151819] rounded-[16px] p-[24px]">
          <div className="flex flex-col lg:flex-row gap-[40px] w-full">
            <div className="w-full lg:w-[264px] shrink-0">
               <MonthlyStreak runs={filteredRuns} />
            </div>
            <div className="w-full lg:flex-1 min-w-0 overflow-hidden">
               <PhotoGallery runs={filteredRuns} onRunClick={setSelectedRun} unit={unit} />
            </div>
          </div>
        </div>

        {/* Row 3: Records & Running Trends */}
        <div className="flex flex-col lg:flex-row gap-[40px] w-full h-auto lg:h-[360px]">
          <div className="w-full lg:w-[264px] shrink-0 h-full">
             <RecordsCard runs={runs} unit={unit} />
          </div>
          <div className="w-full lg:flex-1 min-w-0 h-full">
             <RunningTrends runs={filteredRuns} unit={unit} />
          </div>
        </div>

      </div>

      {/* Footer Branding with spacing */}
      <div className="mt-[40px]">
        <DashboardFooter />
      </div>

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
