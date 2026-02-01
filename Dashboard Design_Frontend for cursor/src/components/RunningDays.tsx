import React from 'react';
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import svgPaths from '../imports/svg-td4twbz2md';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface RunningDaysProps {
  year: number;
}

const MONTHS = [
  { name: 'Jan', days: 31, runDays: 10 },
  { name: 'Feb', days: 28, runDays: 10 },
  { name: 'Mar', days: 31, runDays: 10 },
  { name: 'Apr', days: 30, runDays: 3 },
  { name: 'May', days: 31, runDays: 12 },
  { name: 'Jun', days: 30, runDays: 8 },
  { name: 'Jul', days: 31, runDays: 15 },
  { name: 'Aug', days: 31, runDays: 5 },
  { name: 'Sep', days: 30, runDays: 20 },
  { name: 'Oct', days: 31, runDays: 18 },
  { name: 'Nov', days: 30, runDays: 12 },
  { name: 'Dec', days: 31, runDays: 10 },
];

function DaySquare({ active }: { active: boolean }) {
  return (
    <div className={cn(
      "relative rounded-[4px] shrink-0 size-[24px]",
      active ? "bg-[#04b488]" : "bg-[#151819]"
    )}>
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Separator() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-0 w-full">
      <div className="absolute inset-[-0.5px_0] h-px bg-[#252A2C]" />
    </div>
  );
}

function MonthRow({ month, year, totalDays, runCount, isLast }: { month: string, year: number, totalDays: number, runCount: number, isLast?: boolean }) {
  let activeIndices: Set<number> = new Set();
  
  if (month === 'Jan') {
     [8, 9, 10, 11, 12, 13, 21, 22, 23, 24, 25, 26].forEach(d => activeIndices.add(d));
  } else if (month === 'Feb') {
     [7, 8, 9, 10, 11, 19, 20, 21, 22, 23, 24, 25].forEach(d => activeIndices.add(d));
  } else if (month === 'Mar') {
     [8, 9, 10, 11, 12, 19, 20, 21, 22, 23, 24].forEach(d => activeIndices.add(d));
  } else if (month === 'Apr') {
     [7, 9, 11].forEach(d => activeIndices.add(d)); 
  } else {
     for (let i = 0; i < totalDays; i++) {
        if (i % 3 === 0 && Math.random() > 0.5) activeIndices.add(i);
     }
  }

  return (
    <div className="relative shrink-0 w-full">
        <div className="flex flex-col lg:flex-row gap-[16px] lg:gap-[56px] items-start lg:items-center p-[24px] w-full">
            <p className="font-['Titillium_Web',sans-serif] font-semibold text-[#f2f5f7] text-[16px] tracking-[-0.48px] w-[140px] shrink-0">
                {month}’{year.toString().slice(2)} ({activeIndices.size}/{totalDays})
            </p>
            <div className="flex flex-wrap gap-0 items-center">
                {Array.from({ length: totalDays }).map((_, i) => (
                    <DaySquare key={i} active={activeIndices.has(i)} />
                ))}
            </div>
        </div>
        {!isLast && <Separator />}
    </div>
  );
}

export function RunningDays({ year }: RunningDaysProps) {
  return (
    <div className="bg-[rgba(21,24,25,0)] flex flex-col gap-[24px] items-start pt-[0px] relative rounded-[0px] w-full h-full min-h-[461px] pr-[0px] pb-[0px] pl-[0px] p-[0px]" data-name="RunningDays">
      {/* Header */}
      <div className="flex flex-col items-start pb-[2px] pt-0 px-0 relative shrink-0 w-full">
        <p className="font-['Titillium_Web',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#696e70] text-[14px] tracking-[-0.42px] w-full">
          Consistency
        </p>
        <div className="flex flex-col justify-center leading-[0] mb-[-2px] relative shrink-0">
          <p className="font-['Titillium_Web',sans-serif] font-bold leading-[1.4] text-[#f2f5f7] text-[24px] tracking-[-0.72px]">
            Running days (90)
          </p>
        </div>
      </div>

      {/* Scrollable List Container */}
      <div className="flex-1 w-full min-h-0 relative border border-[#252A2C] rounded-[0px] overflow-hidden bg-[#060809]">
        <div className="absolute inset-0 overflow-y-auto custom-scrollbar">
           {MONTHS.map((m, i) => (
               <MonthRow 
                  key={m.name} 
                  month={m.name} 
                  year={year} 
                  totalDays={m.days} 
                  runCount={m.runDays}
                  isLast={i === MONTHS.length - 1}
               />
           ))}
        </div>
      </div>
    </div>
  );
}
