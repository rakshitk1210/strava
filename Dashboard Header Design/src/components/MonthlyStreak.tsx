import React from 'react';
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

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

export function MonthlyStreak() {
  return (
    <div className="flex flex-col gap-[16px] w-full h-full">
      {/* Header */}
      <div className="flex flex-col items-start gap-[2px]">
        <h3 className="font-['Titillium_Web',sans-serif] font-bold text-[20px] text-[#f2f5f7] leading-[1.4] tracking-[-0.6px]">
          Monthly streak: 9 days
        </h3>
        <p className="font-['Titillium_Web',sans-serif] font-semibold text-[14px] text-[#696e70] leading-[1.5] tracking-[-0.42px]">
          You’ve been consistent
        </p>
      </div>

      {/* Grid */}
      <div className="bg-[#1e2224] rounded-[12px] p-[24px] w-full">
        <div className="flex justify-between gap-[8px]">
          <DayColumn day="Sun" status={['empty', 'filled', 'grey', 'grey', 'filled']} />
          <DayColumn day="Mon" status={['empty', 'grey', 'filled', 'grey', 'grey']} />
          <DayColumn day="Tue" status={['empty', 'grey', 'grey', 'grey', 'grey']} />
          <DayColumn day="Wed" status={['grey', 'grey', 'filled', 'filled', 'filled']} />
          <DayColumn day="Thu" status={['grey', 'filled', 'grey', 'grey', 'grey']} />
          <DayColumn day="Fri" status={['grey', 'filled', 'grey', 'filled', 'grey']} />
          <DayColumn day="Sat" status={['grey', 'grey', 'grey', 'grey', 'empty']} />
        </div>
      </div>
    </div>
  );
}
