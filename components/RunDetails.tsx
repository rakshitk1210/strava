'use client'

import { StravaActivity } from '@/lib/strava'
import { formatDistance, formatDuration, calculatePace, formatDateTime } from '@/lib/utils'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { X, Calendar, Clock, TrendingUp, Mountain, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface RunDetailsProps {
  run: StravaActivity
  onClose: () => void
}

export default function RunDetails({ run, onClose }: RunDetailsProps) {
  const pace = calculatePace(run.distance, run.moving_time)
  
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-start justify-between space-y-0">
          <div className="flex-1">
            <CardTitle className="text-2xl mb-2">{run.name}</CardTitle>
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {formatDateTime(run.start_date_local)}
            </p>
          </div>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={onClose}
            className="h-8 w-8"
          >
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Primary Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">
                {formatDistance(run.distance)}
              </div>
              <div className="text-xs text-muted-foreground mt-1">Kilometers</div>
            </div>
            
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600 flex items-center justify-center gap-1">
                <Clock className="h-5 w-5" />
                {formatDuration(run.moving_time)}
              </div>
              <div className="text-xs text-muted-foreground mt-1">Duration</div>
            </div>
            
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-600 flex items-center justify-center gap-1">
                <TrendingUp className="h-5 w-5" />
                {pace}
              </div>
              <div className="text-xs text-muted-foreground mt-1">Pace /km</div>
            </div>
            
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600 flex items-center justify-center gap-1">
                <Mountain className="h-5 w-5" />
                {run.total_elevation_gain.toFixed(0)}
              </div>
              <div className="text-xs text-muted-foreground mt-1">Elev Gain (m)</div>
            </div>
          </div>

          {/* Additional Details */}
          <div className="space-y-3">
            <h3 className="font-semibold text-lg">Additional Details</h3>
            
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex justify-between p-3 bg-gray-50 rounded">
                <span className="text-muted-foreground">Activity Type:</span>
                <span className="font-medium">{run.type}</span>
              </div>
              
              <div className="flex justify-between p-3 bg-gray-50 rounded">
                <span className="text-muted-foreground">Elapsed Time:</span>
                <span className="font-medium">{formatDuration(run.elapsed_time)}</span>
              </div>
              
              <div className="flex justify-between p-3 bg-gray-50 rounded">
                <span className="text-muted-foreground">Avg Speed:</span>
                <span className="font-medium">{(run.average_speed * 3.6).toFixed(2)} km/h</span>
              </div>
              
              <div className="flex justify-between p-3 bg-gray-50 rounded">
                <span className="text-muted-foreground">Max Speed:</span>
                <span className="font-medium">{(run.max_speed * 3.6).toFixed(2)} km/h</span>
              </div>

              {run.average_heartrate && (
                <div className="flex justify-between p-3 bg-gray-50 rounded">
                  <span className="text-muted-foreground flex items-center gap-1">
                    <Heart className="h-4 w-4 text-red-500" />
                    Avg HR:
                  </span>
                  <span className="font-medium">{run.average_heartrate.toFixed(0)} bpm</span>
                </div>
              )}
              
              {run.max_heartrate && (
                <div className="flex justify-between p-3 bg-gray-50 rounded">
                  <span className="text-muted-foreground flex items-center gap-1">
                    <Heart className="h-4 w-4 text-red-500" />
                    Max HR:
                  </span>
                  <span className="font-medium">{run.max_heartrate.toFixed(0)} bpm</span>
                </div>
              )}

              {run.calories && (
                <div className="flex justify-between p-3 bg-gray-50 rounded">
                  <span className="text-muted-foreground">Calories:</span>
                  <span className="font-medium">{run.calories}</span>
                </div>
              )}
            </div>
          </div>

          {/* View on Strava Button */}
          <div className="pt-4 border-t">
            <Button 
              className="w-full"
              onClick={() => window.open(`https://www.strava.com/activities/${run.id}`, '_blank')}
            >
              View on Strava →
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

