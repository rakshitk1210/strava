import React from 'react';
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

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
      <div className="bg-[#0e1111] h-[44px] w-[44px] overflow-hidden relative rounded-[4px] shrink-0 flex items-center justify-center">
        <p className={cn(
          "font-['Teko',sans-serif] font-semibold leading-none text-[20px] text-center mt-[2px]",
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
          "font-['Teko',sans-serif] font-bold leading-none relative shrink-0 text-[18px] w-full",
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

export function PerformanceCard() {
  const performanceData: PerformanceItemProps[] = [
    { label: '5K', value: '29:45', subtext: '15th Jan • 5:30/km' },
    { label: '10K', value: '1:03:45', subtext: '12th Jan • 6:30/km' },
    { label: '15K', value: '1:43:45', subtext: '12th Jan • 7:30/km' },
    { label: 'HM', value: '2:55:45', subtext: '12th Jan • 8:00/km' },
    { label: '30K', value: '--', subtext: 'Waiting for you : )', isWaiting: true },
    { label: 'FM', value: '--', subtext: 'Waiting for you : )', isWaiting: true },
  ];

  return (
    <div className="bg-[rgba(21,24,25,0)] flex flex-col gap-[24px] items-start relative rounded-[0px] w-full h-full min-h-[461px] p-[0px]" data-name="Performance">
      {/* Header */}
      <div className="flex flex-col items-start pb-[2px] pt-0 px-0 relative shrink-0 w-full">
        <p className="font-['Titillium_Web',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#696e70] text-[14px] tracking-[-0.42px] w-full">
          Push
        </p>
        <div className="flex flex-col justify-center leading-[0] mb-[-2px] relative shrink-0">
          <p className="font-['Titillium_Web',sans-serif] font-bold leading-[1.4] text-[#f2f5f7] text-[24px] tracking-[-0.72px]">
            Performance
          </p>
        </div>
      </div>

      {/* List */}
      <div className="flex flex-col gap-[16px] items-start relative shrink-0 w-full">
        {performanceData.map((item, index) => (
          <PerformanceItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
