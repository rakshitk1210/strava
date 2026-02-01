import React, { useMemo } from 'react';
import { StravaActivity } from '@/lib/strava';
import { format, getDaysInMonth } from 'date-fns';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface YearStreaksProps {
  runs: StravaActivity[];
  year: number;
}

export function YearStreaks({ runs, year }: YearStreaksProps) {
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
          <p className="font-['Titillium_Web',sans-serif] font-bold leading-[1.4] text-[#f2f5f7] text-[20px] md:text-[22px] lg:text-[24px] tracking-[-0.72px]">
            Running days ({runningDaysData.totalRunningDays})
          </p>
        </div>
      </div>

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
                              className={`relative rounded-[3px] md:rounded-[4px] shrink-0 size-[20px] md:size-[24px] cursor-pointer transition-transform hover:scale-110 ${
                                dayData.isRunningDay ? 'bg-[#04b488]' : 'bg-[#151819]'
                              }`}
                            >
                              <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[3px] md:rounded-[4px]" />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent side="top" className="max-w-[280px]">
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
                                      {activity.average_speed > 0 && (
                                        <span>{(1000 / 60 / activity.average_speed).toFixed(2)} min/km</span>
                                      )}
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
