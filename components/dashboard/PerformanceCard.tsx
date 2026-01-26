import React from 'react';
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { StravaActivity } from '@/lib/strava';
import { getAllPRs } from '@/lib/stats-calculator';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface PerformanceItemProps {
  label: string;
  value: string;
  subtext: string;
  isWaiting?: boolean;
}

function PerformanceItem({ label, value, subtext, isWaiting }: PerformanceItemProps) {
  return (
    <div className="flex gap-[12px] items-center relative shrink-0 w-full">
      {/* Label Box */}
      <div className="bg-[#0e1111] h-[41px] w-[41px] overflow-hidden relative rounded-[8px] shrink-0 flex items-center justify-center">
        <p className={cn(
          "font-['Teko',sans-serif] font-semibold leading-none text-[20px] text-center",
          isWaiting ? "text-[#44494b]" : "text-[#f2f5f7]"
        )}>
          {label}
        </p>
      </div>
      
      {/* Text Info */}
      <div className={cn(
        "flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative",
        isWaiting ? "text-[#44494b]" : ""
      )}>
        <p className={cn(
          "font-['Teko',sans-serif] font-bold leading-none relative shrink-0 text-[20px] w-full",
          isWaiting ? "text-[#44494b]" : "text-[#f2f5f7]"
        )}>
          {value}
        </p>
        <p className={cn(
          "font-['Titillium_Web',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[14px] tracking-[-0.42px] w-full",
          isWaiting ? "text-[#44494b]" : "text-[#696e70]"
        )}>
          {subtext}
        </p>
      </div>
    </div>
  );
}

interface PerformanceCardProps {
  runs: StravaActivity[];
  unit: 'Km' | 'Miles';
}

export function PerformanceCard({ runs, unit }: PerformanceCardProps) {
  const prs = getAllPRs(runs, unit);
  
  const performanceData: PerformanceItemProps[] = [
    prs['5K'] 
      ? { label: '5K', value: prs['5K'].time, subtext: `${prs['5K'].date} • ${prs['5K'].pace}/${unit.toLowerCase()}` }
      : { label: '5K', value: '--', subtext: 'Waiting for you : )', isWaiting: true },
    prs['10K']
      ? { label: '10K', value: prs['10K'].time, subtext: `${prs['10K'].date} • ${prs['10K'].pace}/${unit.toLowerCase()}` }
      : { label: '10K', value: '--', subtext: 'Waiting for you : )', isWaiting: true },
    prs['15K']
      ? { label: '15K', value: prs['15K'].time, subtext: `${prs['15K'].date} • ${prs['15K'].pace}/${unit.toLowerCase()}` }
      : { label: '15K', value: '--', subtext: 'Waiting for you : )', isWaiting: true },
    prs['HM']
      ? { label: 'HM', value: prs['HM'].time, subtext: `${prs['HM'].date} • ${prs['HM'].pace}/${unit.toLowerCase()}` }
      : { label: 'HM', value: '--', subtext: 'Waiting for you : )', isWaiting: true },
    prs['30K']
      ? { label: '30K', value: prs['30K'].time, subtext: `${prs['30K'].date} • ${prs['30K'].pace}/${unit.toLowerCase()}` }
      : { label: '30K', value: '--', subtext: 'Waiting for you : )', isWaiting: true },
    prs['FM']
      ? { label: 'FM', value: prs['FM'].time, subtext: `${prs['FM'].date} • ${prs['FM'].pace}/${unit.toLowerCase()}` }
      : { label: 'FM', value: '--', subtext: 'Waiting for you : )', isWaiting: true },
  ];

  return (
    <div className="bg-[#151819] flex flex-col gap-[24px] items-start p-[24px] pt-[16px] relative rounded-[16px] w-full h-[541px]" data-name="Performance">
      {/* Header */}
      <div className="flex flex-col items-start pb-[2px] pt-0 px-0 relative shrink-0 w-full">
        <div className="flex flex-col justify-center leading-[0] mb-[-2px] relative shrink-0">
          <p className="font-['Titillium_Web',sans-serif] font-bold leading-[1.4] text-[#f2f5f7] text-[20px] tracking-[-0.6px]">
            Performance
          </p>
        </div>
        <p className="font-['Titillium_Web',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#696e70] text-[14px] tracking-[-0.42px] w-full">
          All time data
        </p>
      </div>

      {/* List */}
      <div className="flex flex-col gap-[24px] items-start relative shrink-0 w-full">
        {performanceData.map((item, index) => (
          <PerformanceItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
