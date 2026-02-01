import React from 'react';
import { StravaActivity } from '@/lib/strava';
import {
  findBestPace,
  findMostElevation,
  findHighestMaxSpeed,
  findLongestDuration,
} from '@/lib/stats-calculator';

interface RecordItemProps {
  label: string;
  value: string;
  unit: string;
}

function RecordItem({ label, value, unit }: RecordItemProps) {
  return (
    <div className="flex flex-col gap-[2px] items-start w-full md:w-[168px] shrink-0">
      <p className="font-['Titillium_Web',sans-serif] font-semibold text-[13px] md:text-[14px] leading-[1.5] text-[#696e70] tracking-[-0.42px]">
        {label}
      </p>
      <p className="font-['Teko',sans-serif] font-bold text-[22px] md:text-[24px] leading-none text-[#f2f5f7] flex items-baseline gap-[4px]">
        {value}
        <span className="font-['Titillium_Web',sans-serif] font-semibold text-[13px] md:text-[14px] leading-[1.5] text-[#696e70] tracking-[-0.42px]">
          {unit}
        </span>
      </p>
    </div>
  );
}

interface RecordsCardProps {
  runs: StravaActivity[];
  unit: 'Km' | 'Miles';
}

export function RecordsCard({ runs, unit }: RecordsCardProps) {
  const bestPace = findBestPace(runs, unit);
  const mostElevation = findMostElevation(runs);
  const highestMaxSpeed = findHighestMaxSpeed(runs, unit);
  const longestDuration = findLongestDuration(runs);

  return (
    <div className="bg-[rgba(21,24,25,0)] rounded-[0px] flex flex-col items-start gap-[20px] md:gap-[24px] w-full h-full p-[0px]">
      {/* Header */}
      <div className="flex flex-col items-start w-full shrink-0">
        <p className="font-['Titillium_Web',sans-serif] font-semibold text-[12px] md:text-[13px] lg:text-[14px] leading-[1.5] text-[#696e70] tracking-[-0.42px]">
          Effort
        </p>
        <div className="flex flex-col items-start w-full mb-[-2px]">
          <p className="font-['Titillium_Web',sans-serif] font-bold text-[20px] md:text-[22px] lg:text-[24px] leading-[1.4] text-[#f2f5f7] tracking-[-0.72px]">
            Records
          </p>
        </div>
      </div>

      {/* List */}
      <div className="flex flex-col gap-[16px] md:gap-[20px] items-start w-full">
        <RecordItem label="Best pace" value={bestPace} unit={`/${unit.toLowerCase()}`} />
        <RecordItem label="Most elevation" value={mostElevation.toString()} unit="mts" />
        <RecordItem label="Highest max speed" value={highestMaxSpeed.toString()} unit={`${unit.toLowerCase()}/hr`} />
        <RecordItem label="Longest duration" value={longestDuration} unit="hrs" />
      </div>
    </div>
  );
}
