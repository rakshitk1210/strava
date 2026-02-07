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
    <div className="flex gap-[16px] md:gap-[16px] items-center relative shrink-0 w-full">
      {/* Label Box */}
      <div className="bg-[#0e1111] h-[38px] w-[38px] md:h-[41px] md:w-[41px] overflow-hidden relative rounded-[6px] md:rounded-[8px] shrink-0 flex items-center justify-center">
        <p className={cn(
          "font-['Teko',sans-serif] font-semibold leading-none text-[18px] md:text-[20px] text-center",
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
          "font-['Teko',sans-serif] font-bold leading-[1] relative shrink-0 text-[18px] md:text-[20px] h-[18px] md:h-[24px] w-full flex items-center",
          isWaiting ? "text-[#44494b]" : "text-[#f2f5f7]"
        )}>
          {value}
        </p>
        <p className={cn(
          "font-['Titillium_Web',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[13px] md:text-[14px] tracking-[-0.42px] w-full",
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
    <div className="bg-[rgba(21,24,25,0)] flex flex-col gap-[20px] md:gap-[24px] items-start relative rounded-[0px] w-full h-full min-h-[400px] md:min-h-[461px] p-[0px]" data-name="Performance">
      {/* Header */}
      <div className="flex flex-col items-start pb-[2px] pt-0 px-0 relative shrink-0 w-full">
        <p className="font-['Titillium_Web',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#696e70] text-[12px] md:text-[13px] lg:text-[14px] tracking-[-0.42px] w-full">
          Push
        </p>
        <div className="flex flex-col justify-center leading-[0] mb-[-2px] relative shrink-0">
          <p className="font-['Titillium_Web',sans-serif] font-bold leading-[1.4] text-[#f2f5f7] text-[24px] md:text-[22px] lg:text-[24px] tracking-[-0.72px]">
            Performance
          </p>
        </div>
      </div>

      {/* List */}
      <div className="flex flex-col gap-[14px] md:gap-[24px] items-start relative shrink-0 w-full">
        {performanceData.map((item, index) => (
          <PerformanceItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
