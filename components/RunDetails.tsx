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
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
      <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto bg-[#151819] border-[#44494b]">
        <CardHeader className="flex flex-row items-start justify-between space-y-0">
          <div className="flex-1">
            <CardTitle className="text-2xl mb-2 text-[#f2f5f7] font-['Titillium_Web',sans-serif]">{run.name}</CardTitle>
            <p className="text-sm text-[#696e70] flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {formatDateTime(run.start_date_local)}
            </p>
          </div>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={onClose}
            className="h-8 w-8 text-[#696e70] hover:text-[#f2f5f7] hover:bg-[#1f2425]"
          >
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Primary Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-[#1f2425] rounded-lg">
              <div className="text-2xl font-bold text-[#04b488] font-['Teko',sans-serif]">
                {formatDistance(run.distance)}
              </div>
              <div className="text-xs text-[#696e70] mt-1">Kilometers</div>
            </div>
            
            <div className="text-center p-4 bg-[#1f2425] rounded-lg">
              <div className="text-2xl font-bold text-[#04b488] flex items-center justify-center gap-1 font-['Teko',sans-serif]">
                <Clock className="h-5 w-5" />
                {formatDuration(run.moving_time)}
              </div>
              <div className="text-xs text-[#696e70] mt-1">Duration</div>
            </div>
            
            <div className="text-center p-4 bg-[#1f2425] rounded-lg">
              <div className="text-2xl font-bold text-[#fc5200] flex items-center justify-center gap-1 font-['Teko',sans-serif]">
                <TrendingUp className="h-5 w-5" />
                {pace}
              </div>
              <div className="text-xs text-[#696e70] mt-1">Pace /km</div>
            </div>
            
            <div className="text-center p-4 bg-[#1f2425] rounded-lg">
              <div className="text-2xl font-bold text-[#04b488] flex items-center justify-center gap-1 font-['Teko',sans-serif]">
                <Mountain className="h-5 w-5" />
                {run.total_elevation_gain.toFixed(0)}
              </div>
              <div className="text-xs text-[#696e70] mt-1">Elev Gain (m)</div>
            </div>
          </div>

          {/* Additional Details */}
          <div className="space-y-3">
            <h3 className="font-semibold text-lg text-[#f2f5f7] font-['Titillium_Web',sans-serif]">Additional Details</h3>
            
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex justify-between p-3 bg-[#1f2425] rounded">
                <span className="text-[#696e70]">Activity Type:</span>
                <span className="font-medium text-[#f2f5f7]">{run.type}</span>
              </div>
              
              <div className="flex justify-between p-3 bg-[#1f2425] rounded">
                <span className="text-[#696e70]">Elapsed Time:</span>
                <span className="font-medium text-[#f2f5f7]">{formatDuration(run.elapsed_time)}</span>
              </div>
              
              <div className="flex justify-between p-3 bg-[#1f2425] rounded">
                <span className="text-[#696e70]">Avg Speed:</span>
                <span className="font-medium text-[#f2f5f7]">{(run.average_speed * 3.6).toFixed(2)} km/h</span>
              </div>
              
              <div className="flex justify-between p-3 bg-[#1f2425] rounded">
                <span className="text-[#696e70]">Max Speed:</span>
                <span className="font-medium text-[#f2f5f7]">{(run.max_speed * 3.6).toFixed(2)} km/h</span>
              </div>

              {run.average_heartrate && (
                <div className="flex justify-between p-3 bg-[#1f2425] rounded">
                  <span className="text-[#696e70] flex items-center gap-1">
                    <Heart className="h-4 w-4 text-[#fc5200]" />
                    Avg HR:
                  </span>
                  <span className="font-medium text-[#f2f5f7]">{run.average_heartrate.toFixed(0)} bpm</span>
                </div>
              )}
              
              {run.max_heartrate && (
                <div className="flex justify-between p-3 bg-[#1f2425] rounded">
                  <span className="text-[#696e70] flex items-center gap-1">
                    <Heart className="h-4 w-4 text-[#fc5200]" />
                    Max HR:
                  </span>
                  <span className="font-medium text-[#f2f5f7]">{run.max_heartrate.toFixed(0)} bpm</span>
                </div>
              )}

              {run.calories && (
                <div className="flex justify-between p-3 bg-[#1f2425] rounded">
                  <span className="text-[#696e70]">Calories:</span>
                  <span className="font-medium text-[#f2f5f7]">{run.calories}</span>
                </div>
              )}
            </div>
          </div>

          {/* View on Strava Button */}
          <div className="pt-4 border-t border-[#44494b]">
            <Button 
              className="w-full bg-[#fc5200] hover:bg-[#fc5200]/90 text-[#f2f5f7]"
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

