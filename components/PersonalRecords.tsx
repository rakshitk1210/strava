'use client'

import { StravaActivity } from '@/lib/strava'
import { formatDistance, formatDuration, calculatePace, formatDate } from '@/lib/utils'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Trophy, TrendingUp, Mountain, Clock, Zap } from 'lucide-react'

interface PersonalRecordsProps {
  runs: StravaActivity[]
  onRunClick?: (run: StravaActivity) => void
}

export default function PersonalRecords({ runs, onRunClick }: PersonalRecordsProps) {
  if (runs.length === 0) {
    return (
      <Card className="p-6">
        <p className="text-muted-foreground text-center">No runs available</p>
      </Card>
    )
  }

  // Calculate personal records
  const longestRun = [...runs].sort((a, b) => b.distance - a.distance)[0]
  
  const fastestPaceRun = [...runs]
    .filter(run => run.distance > 1000) // At least 1km to be fair
    .sort((a, b) => {
      const paceA = a.moving_time / (a.distance / 1000)
      const paceB = b.moving_time / (b.distance / 1000)
      return paceA - paceB
    })[0]
  
  const mostElevationRun = [...runs].sort((a, b) => 
    (b.total_elevation_gain || 0) - (a.total_elevation_gain || 0)
  )[0]
  
  const longestTimeRun = [...runs].sort((a, b) => b.moving_time - a.moving_time)[0]
  
  const fastestSpeedRun = [...runs].sort((a, b) => b.max_speed - a.max_speed)[0]

  const records = [
    {
      id: 'longest',
      title: 'Longest Run',
      icon: Trophy,
      value: `${formatDistance(longestRun.distance)} km`,
      subtitle: formatDate(longestRun.start_date_local),
      run: longestRun,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      id: 'fastest-pace',
      title: 'Best Pace',
      icon: TrendingUp,
      value: `${calculatePace(fastestPaceRun.distance, fastestPaceRun.moving_time)} /km`,
      subtitle: `${formatDistance(fastestPaceRun.distance)} km run`,
      run: fastestPaceRun,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 'most-elevation',
      title: 'Most Elevation',
      icon: Mountain,
      value: `${mostElevationRun.total_elevation_gain.toFixed(0)} m`,
      subtitle: formatDate(mostElevationRun.start_date_local),
      run: mostElevationRun,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      id: 'longest-time',
      title: 'Longest Duration',
      icon: Clock,
      value: formatDuration(longestTimeRun.moving_time),
      subtitle: `${formatDistance(longestTimeRun.distance)} km`,
      run: longestTimeRun,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      id: 'fastest-speed',
      title: 'Highest Max Speed',
      icon: Zap,
      value: `${(fastestSpeedRun.max_speed * 3.6).toFixed(2)} km/h`,
      subtitle: formatDate(fastestSpeedRun.start_date_local),
      run: fastestSpeedRun,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Trophy className="h-8 w-8 text-yellow-600" />
        <div>
          <h2 className="text-2xl font-bold">Personal Records</h2>
          <p className="text-muted-foreground">Your best performances from the last year</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {records.map((record) => {
          const Icon = record.icon
          return (
            <Card 
              key={record.id}
              className="hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => onRunClick?.(record.run)}
            >
              <CardHeader className="pb-3">
                <div className={`w-12 h-12 rounded-full ${record.bgColor} flex items-center justify-center mb-3`}>
                  <Icon className={`h-6 w-6 ${record.color}`} />
                </div>
                <CardTitle className="text-lg">{record.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className={`text-3xl font-bold mb-2 ${record.color}`}>
                  {record.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {record.subtitle}
                </div>
                <div className="text-xs text-muted-foreground mt-2 truncate">
                  {record.run.name}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Summary Stats */}
      <Card className="p-6 bg-gradient-to-r from-blue-50 to-purple-50">
        <h3 className="font-semibold text-lg mb-4">Summary Statistics</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-600">{runs.length}</div>
            <div className="text-sm text-muted-foreground">Total Runs</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600">
              {formatDistance(runs.reduce((sum, run) => sum + run.distance, 0))} km
            </div>
            <div className="text-sm text-muted-foreground">Total Distance</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-600">
              {formatDuration(runs.reduce((sum, run) => sum + run.moving_time, 0))}
            </div>
            <div className="text-sm text-muted-foreground">Total Time</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-orange-600">
              {(runs.reduce((sum, run) => sum + (run.total_elevation_gain || 0), 0)).toFixed(0)} m
            </div>
            <div className="text-sm text-muted-foreground">Total Elevation</div>
          </div>
        </div>
      </Card>
    </div>
  )
}

