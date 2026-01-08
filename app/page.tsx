'use client'

import { useState, useEffect } from 'react'
import { StravaActivity } from '@/lib/strava'
import StatsPanel from '@/components/StatsPanel'
import RunsMap from '@/components/RunsMap'
import RunDetails from '@/components/RunDetails'
import RunCharts from '@/components/RunCharts'
import PersonalRecords from '@/components/PersonalRecords'
import Heatmap from '@/components/Heatmap'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Map, BarChart3, Trophy, Flame, RefreshCw } from 'lucide-react'
import 'mapbox-gl/dist/mapbox-gl.css'

type ViewMode = 'map' | 'charts' | 'records' | 'heatmap'

export default function Home() {
  const [runs, setRuns] = useState<StravaActivity[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [viewMode, setViewMode] = useState<ViewMode>('map')
  const [selectedRun, setSelectedRun] = useState<StravaActivity | null>(null)

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
    } catch (err) {
      console.error('Error fetching activities:', err)
      setError('Failed to load activities. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground">Loading runs...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <Card className="p-8 max-w-md w-full text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <Button onClick={fetchActivities}>Try Again</Button>
          <p className="text-sm text-muted-foreground mt-4">
            Make sure you have set up your .env.local file with Strava credentials.
            <br />
            Visit <a href="/auth" className="text-blue-600 underline">/auth</a> to get tokens.
          </p>
        </Card>
      </div>
    )
  }

  const navItems = [
    { id: 'map' as ViewMode, label: 'Map', icon: Map },
    { id: 'charts' as ViewMode, label: 'Charts', icon: BarChart3 },
    { id: 'records' as ViewMode, label: 'Records', icon: Trophy },
    { id: 'heatmap' as ViewMode, label: 'Heatmap', icon: Flame },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-40 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">🏃‍♂️ Running Dashboard</h1>
            <p className="text-sm text-muted-foreground">
              {runs.length} runs in the last year
            </p>
          </div>
          <Button 
            onClick={fetchActivities} 
            variant="outline"
            size="sm"
            className="gap-2"
          >
            <RefreshCw className="h-4 w-4" />
            Refresh
          </Button>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-white border-b border-gray-200 px-6 sticky top-[73px] z-30">
        <div className="flex gap-1 overflow-x-auto">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = viewMode === item.id
            return (
              <button
                key={item.id}
                onClick={() => setViewMode(item.id)}
                className={`
                  flex items-center gap-2 px-4 py-3 font-medium transition-colors
                  border-b-2 whitespace-nowrap
                  ${isActive 
                    ? 'border-blue-600 text-blue-600' 
                    : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                  }
                `}
              >
                <Icon className="h-5 w-5" />
                {item.label}
              </button>
            )
          })}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Stats Panel - Always visible */}
        <StatsPanel runs={runs} />
        
        {/* View-specific content */}
        <div className="mt-6">
          {viewMode === 'map' && (
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">Your Running Routes</h2>
              <p className="text-muted-foreground mb-4">
                Click on routes to see details • Showing {runs.length} runs from the last year
              </p>
              <RunsMap runs={runs} />
            </Card>
          )}

          {viewMode === 'charts' && (
            <RunCharts runs={runs} />
          )}

          {viewMode === 'records' && (
            <PersonalRecords 
              runs={runs} 
              onRunClick={setSelectedRun}
            />
          )}

          {viewMode === 'heatmap' && (
            <Heatmap runs={runs} />
          )}
        </div>
      </main>

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
