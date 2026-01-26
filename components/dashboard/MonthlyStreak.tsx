import React from 'react';
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { StravaActivity } from '@/lib/strava';
import { getActivityDates, calculateCurrentStreak } from '@/lib/stats-calculator';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, getDay, isSameDay } from 'date-fns';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function DayColumn({ day, status }: { day: string, status: ('empty' | 'filled' | 'grey')[] }) {
  return (
    <div className="flex flex-col gap-[8px] items-center w-[24px]">
      <span className="font-['Titillium_Web',sans-serif] font-semibold text-[10px] text-[#696e70] text-center tracking-[-0.3px]">
        {day}
      </span>
      {status.map((s, i) => (
        <div 
          key={i}
          className={cn(
            "w-full h-[24px] rounded-[6px]",
            s === 'filled' ? "bg-[#04b488]" : 
            s === 'grey' ? "bg-[#44494b]" : 
            "bg-[#1f2425]"
          )}
        />
      ))}
    </div>
  );
}

interface MonthlyStreakProps {
  runs: StravaActivity[];
}

export function MonthlyStreak({ runs }: MonthlyStreakProps) {
  const currentStreak = calculateCurrentStreak(runs);
  const activityDates = getActivityDates(runs);
  
  // Get current month calendar
  const today = new Date();
  const monthStart = startOfMonth(today);
  const monthEnd = endOfMonth(today);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });
  
  // Group days by day of week
  const daysByWeek: Record<number, Date[]> = { 0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [] };
  daysInMonth.forEach(day => {
    const dayOfWeek = getDay(day);
    daysByWeek[dayOfWeek].push(day);
  });
  
  // Calculate status for each day
  const getStatusForDay = (day: Date): 'empty' | 'filled' | 'grey' => {
    const isFuture = day > today;
    if (isFuture) return 'empty';
    
    const hasActivity = activityDates.some(activityDate => 
      isSameDay(activityDate, day)
    );
    
    return hasActivity ? 'filled' : 'grey';
  };
  
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  return (
    <div className="flex flex-col gap-[16px] w-full h-full">
      {/* Header */}
      <div className="flex flex-col items-start gap-[2px]">
        <h3 className="font-['Titillium_Web',sans-serif] font-bold text-[20px] text-[#f2f5f7] leading-[1.4] tracking-[-0.6px]">
          {currentStreak > 0 ? `Monthly streak: ${currentStreak} days` : 'Start your streak today!'}
        </h3>
        <p className="font-['Titillium_Web',sans-serif] font-semibold text-[14px] text-[#696e70] leading-[1.5] tracking-[-0.42px]">
          {currentStreak > 0 ? "You've been consistent" : 'Track your running consistency'}
        </p>
      </div>

      {/* Grid */}
      <div className="bg-[#1e2224] rounded-[12px] p-[24px] w-full">
        <div className="flex justify-between gap-[8px]">
          {dayNames.map((dayName, dayOfWeek) => (
            <DayColumn 
              key={dayName} 
              day={dayName} 
              status={daysByWeek[dayOfWeek].map(getStatusForDay)} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}
