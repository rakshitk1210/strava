import React, { useMemo, useState } from 'react';
import { StravaActivity } from '@/lib/strava';
import { format, getDaysInMonth } from 'date-fns';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface YearStreaksProps {
  runs: StravaActivity[];
  year: number;
}

interface DayData {
  day: number;
  date: string;
  isRunningDay: boolean;
  activities: StravaActivity[];
}

export function YearStreaks({ runs, year }: YearStreaksProps) {
  const [selectedDay, setSelectedDay] = useState<DayData | null>(null);
  
  // Calculate running days for the year
  const runningDaysData = useMemo(() => {
    // Create a Map of running days with their activities
    const runningDaysMap = new Map<string, StravaActivity[]>();
    
    runs.forEach(run => {
      const runDate = new Date(run.start_date_local);
      const dateStr = format(runDate, 'yyyy-MM-dd');
      
      if (!runningDaysMap.has(dateStr)) {
        runningDaysMap.set(dateStr, []);
      }
      runningDaysMap.get(dateStr)!.push(run);
    });

    // Generate data for each month
    const months = Array.from({ length: 12 }, (_, i) => {
      const monthDate = new Date(year, i, 1);
      const daysInMonth = getDaysInMonth(monthDate);
      const monthName = format(monthDate, 'MMM');
      
      // Create array of days for this month
      const days = Array.from({ length: daysInMonth }, (_, dayIndex) => {
        const day = dayIndex + 1;
        const dateStr = format(new Date(year, i, day), 'yyyy-MM-dd');
        const activities = runningDaysMap.get(dateStr) || [];
        const isRunningDay = activities.length > 0;
        
        return {
          day,
          date: dateStr,
          isRunningDay,
          activities
        };
      });
      
      return {
        month: monthName,
        days
      };
    });

    return {
      months,
      totalRunningDays: runningDaysMap.size
    };
  }, [runs, year]);

  return (
    <div className="bg-[rgba(21,24,25,0)] flex flex-col gap-[20px] md:gap-[24px] items-start pt-[0px] relative rounded-[0px] w-full h-full min-h-[400px] md:min-h-[461px] pr-[0px] pb-[0px] pl-[0px] p-[0px]" data-name="YearStreaks">
      {/* Header */}
      <div className="flex flex-col items-start pb-[2px] pt-0 px-0 relative shrink-0 w-full">
        <p className="font-['Titillium_Web',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#696e70] text-[12px] md:text-[13px] lg:text-[14px] tracking-[-0.42px] w-full">
          Consistency
        </p>
        <div className="flex flex-col justify-center leading-[0] mb-[-2px] relative shrink-0">
          <p className="font-['Titillium_Web',sans-serif] font-bold leading-[1.4] text-[#f2f5f7] text-[24px] md:text-[22px] lg:text-[24px] tracking-[-0.72px]">
            Running days ({runningDaysData.totalRunningDays})
          </p>
        </div>
      </div>

      {/* Mobile Day Details Bottom Sheet */}
      {selectedDay && (
        <>
          {/* Backdrop */}
          <div 
            className="md:hidden fixed inset-0 bg-black/70 z-40 animate-in fade-in duration-200"
            onClick={() => setSelectedDay(null)}
          />
          
          {/* Bottom Sheet */}
          <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#151819] rounded-t-[16px] border-t border-[#252A2C] animate-in slide-in-from-bottom duration-300">
            <div className="p-[20px]">
              {/* Handle bar */}
              <div className="w-[40px] h-[4px] bg-[#44494b] rounded-full mx-auto mb-[20px]" />
              
              {/* Header with close button */}
              <div className="flex justify-between items-start mb-[16px]">
                <p className={`font-semibold text-[16px] ${selectedDay.isRunningDay ? 'text-[#04b488]' : 'text-[#f2f5f7]'}`}>
                  {format(new Date(selectedDay.date), 'EEEE, MMM d, yyyy')}
                </p>
                <button 
                  onClick={() => setSelectedDay(null)}
                  className="text-[#696e70] hover:text-[#f2f5f7] transition-colors p-1"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
              
              {/* Content */}
              {selectedDay.isRunningDay ? (
                <div className="space-y-4 max-h-[60vh] overflow-y-auto pb-[20px]">
                  {selectedDay.activities.map((activity, idx) => (
                    <div key={idx} className="space-y-2 border-t border-[#44494b] pt-4 first:border-t-0 first:pt-0">
                      <p className="font-semibold text-[#f2f5f7] text-[15px]">{activity.name}</p>
                      <div className="flex gap-5 text-[13px] text-[#696e70]">
                        <span>{(activity.distance / 1000).toFixed(2)} km</span>
                        <span>{Math.floor(activity.moving_time / 60)} min</span>
                        {activity.distance > 0 && (() => {
                          const paceMinPerKm = (activity.moving_time / 60) / (activity.distance / 1000);
                          const minutes = Math.floor(paceMinPerKm);
                          const seconds = Math.floor((paceMinPerKm - minutes) * 60);
                          return <span>{minutes}:{seconds.toString().padStart(2, '0')} min/km</span>;
                        })()}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-[14px] text-[#696e70] pb-[20px]">Rest day</p>
              )}
            </div>
          </div>
        </>
      )}

      {/* Scrollable List Container */}
      <div className="flex-1 w-full min-h-0 relative border border-[#252A2C] rounded-[0px] overflow-hidden bg-[#060809]">
        <div className="absolute inset-0 overflow-y-auto custom-scrollbar">
          {runningDaysData.months.map((monthData, monthIndex) => {
            const runCount = monthData.days.filter(d => d.isRunningDay).length;
            const isLast = monthIndex === runningDaysData.months.length - 1;
            
            return (
              <div key={monthIndex} className="relative shrink-0 w-full">
                <div className="flex flex-col lg:flex-row gap-[12px] md:gap-[16px] lg:gap-[56px] items-start lg:items-center p-[16px] md:p-[20px] lg:p-[24px] w-full">
                  <p className="font-['Titillium_Web',sans-serif] font-semibold text-[#f2f5f7] text-[14px] md:text-[15px] lg:text-[16px] tracking-[-0.48px] w-full lg:w-[140px] shrink-0">
                    {monthData.month}'{year.toString().slice(2)} ({runCount}/{monthData.days.length})
                  </p>
                  <TooltipProvider delayDuration={200}>
                    <div className="flex flex-wrap gap-0 items-center">
                      {monthData.days.map((dayData, dayIndex) => (
                        <Tooltip key={dayIndex}>
                          <TooltipTrigger asChild>
                            <div
                              className={`relative rounded-[0px] shrink-0 size-[20px] md:size-[24px] cursor-pointer transition-all hover:scale-110 ${
                                dayData.isRunningDay ? 'bg-[#04b488]' : 'bg-[#151819]'
                              } ${selectedDay?.date === dayData.date ? 'ring-2 ring-[#04b488] ring-offset-2 ring-offset-[#060809]' : ''}`}
                              onClick={() => setSelectedDay(selectedDay?.date === dayData.date ? null : dayData)}
                            >
                              <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[0px]" />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent side="top" className="max-w-[280px] hidden md:block">
                            {dayData.isRunningDay ? (
                              <div className="space-y-2">
                                <p className="font-semibold text-[#04b488]">
                                  {format(new Date(dayData.date), 'EEEE, MMM d, yyyy')}
                                </p>
                                {dayData.activities.map((activity, idx) => (
                                  <div key={idx} className="text-xs space-y-1 border-t border-[#44494b] pt-2 first:border-t-0 first:pt-0">
                                    <p className="font-medium">{activity.name}</p>
                                    <div className="flex gap-3 text-[#696e70]">
                                      <span>{(activity.distance / 1000).toFixed(2)} km</span>
                                      <span>{Math.floor(activity.moving_time / 60)} min</span>
                                      {activity.distance > 0 && (() => {
                                        const paceMinPerKm = (activity.moving_time / 60) / (activity.distance / 1000);
                                        const minutes = Math.floor(paceMinPerKm);
                                        const seconds = Math.floor((paceMinPerKm - minutes) * 60);
                                        return <span>{minutes}:{seconds.toString().padStart(2, '0')} min/km</span>;
                                      })()}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <div>
                                <p className="text-[#696e70]">
                                  {format(new Date(dayData.date), 'EEEE, MMM d, yyyy')}
                                </p>
                                <p className="text-xs text-[#696e70] mt-1">Rest day</p>
                              </div>
                            )}
                          </TooltipContent>
                        </Tooltip>
                      ))}
                    </div>
                  </TooltipProvider>
                </div>
                {!isLast && (
                  <div className="absolute bottom-0 h-px left-0 right-0 w-full">
                    <div className="absolute inset-[-0.5px_0] h-px bg-[#252A2C]" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
