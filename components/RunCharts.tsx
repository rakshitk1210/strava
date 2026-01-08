'use client'

import { useState } from 'react'
import { StravaActivity } from '@/lib/strava'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { format, startOfWeek, startOfMonth, eachWeekOfInterval, eachMonthOfInterval, isSameWeek, isSameMonth } from 'date-fns'

interface RunChartsProps {
  runs: StravaActivity[]
}

type ViewMode = 'weekly' | 'monthly'

export default function RunCharts({ runs }: RunChartsProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('weekly')

  if (runs.length === 0) {
    return (
      <Card className="p-6">
        <p className="text-muted-foreground text-center">No runs available</p>
      </Card>
    )
  }

  // Get date range
  const dates = runs.map(run => new Date(run.start_date_local))
  const minDate = new Date(Math.min(...dates.map(d => d.getTime())))
  const maxDate = new Date(Math.max(...dates.map(d => d.getTime())))

  // Prepare weekly data
  const weeklyData = eachWeekOfInterval({ start: minDate, end: maxDate })
    .map(weekStart => {
      const weekRuns = runs.filter(run => 
        isSameWeek(new Date(run.start_date_local), weekStart, { weekStartsOn: 1 })
      )
      
      const totalDistance = weekRuns.reduce((sum, run) => sum + run.distance, 0) / 1000
      const totalTime = weekRuns.reduce((sum, run) => sum + run.moving_time, 0)
      const avgPace = totalDistance > 0 ? (totalTime / totalDistance / 60) : 0
      
      return {
        week: format(weekStart, 'MMM d'),
        distance: parseFloat(totalDistance.toFixed(2)),
        pace: parseFloat(avgPace.toFixed(2)),
        runs: weekRuns.length,
        time: parseFloat((totalTime / 3600).toFixed(2)) // hours
      }
    })
    .filter(week => week.runs > 0)

  // Prepare monthly data
  const monthlyData = eachMonthOfInterval({ start: minDate, end: maxDate })
    .map(monthStart => {
      const monthRuns = runs.filter(run => 
        isSameMonth(new Date(run.start_date_local), monthStart)
      )
      
      const totalDistance = monthRuns.reduce((sum, run) => sum + run.distance, 0) / 1000
      const totalTime = monthRuns.reduce((sum, run) => sum + run.moving_time, 0)
      const avgPace = totalDistance > 0 ? (totalTime / totalDistance / 60) : 0
      
      return {
        month: format(monthStart, 'MMM yy'),
        distance: parseFloat(totalDistance.toFixed(2)),
        pace: parseFloat(avgPace.toFixed(2)),
        runs: monthRuns.length,
        time: parseFloat((totalTime / 3600).toFixed(2)) // hours
      }
    })
    .filter(month => month.runs > 0)

  const data = viewMode === 'weekly' ? weeklyData : monthlyData
  const xAxisKey = viewMode === 'weekly' ? 'week' : 'month'

  return (
    <div className="space-y-6">
      {/* Header with View Toggle */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">Performance Trends</h2>
          <p className="text-muted-foreground">Your running statistics over time</p>
        </div>
        <div className="flex gap-2">
          <Button
            variant={viewMode === 'weekly' ? 'default' : 'outline'}
            onClick={() => setViewMode('weekly')}
            size="sm"
          >
            Weekly
          </Button>
          <Button
            variant={viewMode === 'monthly' ? 'default' : 'outline'}
            onClick={() => setViewMode('monthly')}
            size="sm"
          >
            Monthly
          </Button>
        </div>
      </div>

      {/* Distance Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Distance Covered</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey={xAxisKey} 
                tick={{ fontSize: 12 }}
                angle={-45}
                textAnchor="end"
                height={80}
              />
              <YAxis 
                label={{ value: 'Distance (km)', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip 
                formatter={(value: number) => [`${value} km`, 'Distance']}
                labelStyle={{ color: '#000' }}
              />
              <Bar dataKey="distance" fill="#3b82f6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Pace Trend */}
      <Card>
        <CardHeader>
          <CardTitle>Average Pace Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey={xAxisKey}
                tick={{ fontSize: 12 }}
                angle={-45}
                textAnchor="end"
                height={80}
              />
              <YAxis 
                label={{ value: 'Pace (min/km)', angle: -90, position: 'insideLeft' }}
                reversed
              />
              <Tooltip 
                formatter={(value: number) => {
                  const minutes = Math.floor(value)
                  const seconds = Math.floor((value - minutes) * 60)
                  return [`${minutes}:${seconds.toString().padStart(2, '0')} /km`, 'Pace']
                }}
                labelStyle={{ color: '#000' }}
              />
              <Line 
                type="monotone" 
                dataKey="pace" 
                stroke="#f97316" 
                strokeWidth={2}
                dot={{ fill: '#f97316', r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Activity Count and Time */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Number of Runs</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey={xAxisKey}
                  tick={{ fontSize: 12 }}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                />
                <YAxis />
                <Tooltip 
                  formatter={(value: number) => [`${value}`, 'Runs']}
                  labelStyle={{ color: '#000' }}
                />
                <Bar dataKey="runs" fill="#10b981" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Time Spent Running</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey={xAxisKey}
                  tick={{ fontSize: 12 }}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                />
                <YAxis 
                  label={{ value: 'Hours', angle: -90, position: 'insideLeft' }}
                />
                <Tooltip 
                  formatter={(value: number) => [`${value.toFixed(2)} hrs`, 'Time']}
                  labelStyle={{ color: '#000' }}
                />
                <Bar dataKey="time" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

