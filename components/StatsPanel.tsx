'use client'

import { StravaActivity } from '@/lib/strava'
import { formatDistance, formatDuration, calculatePace } from '@/lib/utils'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface StatsPanelProps {
  runs: StravaActivity[]
}

export default function StatsPanel({ runs }: StatsPanelProps) {
  const totalRuns = runs.length
  const totalDistance = runs.reduce((sum, run) => sum + run.distance, 0)
  const totalTime = runs.reduce((sum, run) => sum + run.moving_time, 0)
  const totalElevation = runs.reduce((sum, run) => sum + (run.total_elevation_gain || 0), 0)
  
  const avgPace = totalDistance > 0 ? calculatePace(totalDistance, totalTime) : '0:00'

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Runs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalRuns}</div>
          <p className="text-xs text-muted-foreground">Last 365 days</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Distance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{formatDistance(totalDistance)} km</div>
          <p className="text-xs text-muted-foreground">
            {(totalDistance / 1000 / 365 * 7).toFixed(1)} km/week average
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Time</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{formatDuration(totalTime)}</div>
          <p className="text-xs text-muted-foreground">
            {(totalTime / 3600).toFixed(1)} hours total
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Average Pace</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{avgPace} /km</div>
          <p className="text-xs text-muted-foreground">
            {formatDistance(totalElevation)} m elevation
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

