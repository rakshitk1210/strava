import React from 'react';
import { sparklinePaths } from './SparklineSvgs';
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { StravaActivity } from '@/lib/strava';
import {
  calculateAveragePace,
  calculateTotalDistance,
  calculateTotalTime,
  calculateTotalElevation,
  calculateTotalSessions,
} from '@/lib/stats-calculator';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface StatCardProps {
  label: string;
  value: string;
  unit: string;
  fill: string;
  stroke: string;
  color: string;
  gradientId: string;
}

function StatCard({ label, value, unit, fill, stroke, color, gradientId }: StatCardProps) {
  return (
    <div className="flex flex-col justify-between h-[148px] w-full relative overflow-hidden group rounded-[0px] cursor-pointer transition-all duration-300 hover:scale-[1.02]">
      <div className="flex flex-col items-start z-10">
        <p className="font-['Titillium_Web',sans-serif] font-semibold text-[14px] text-[#696e70] leading-[1.4] mb-[4px]">
          {label}
        </p>
        <div className="flex items-baseline gap-[2px]">
          <p className="font-['Teko',sans-serif] font-bold text-[56px] text-[#f2f5f7] leading-[1.4]">
            {value}
          </p>
          <p className="font-['Titillium_Web',sans-serif] font-semibold text-[14px] text-[#696e70] leading-[1.5] tracking-[-0.42px]">
            {unit}
          </p>
        </div>
      </div>
      
      {/* Sparkline with hover animation */}
      <div className="absolute bottom-0 left-0 w-full h-[50px] transition-transform duration-500 group-hover:scale-x-[1.05] origin-left">
        <svg className="w-full h-full block" viewBox="0 0 231.536 50.5742" preserveAspectRatio="none">
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity="0.3" />
              <stop offset="100%" stopColor={color} stopOpacity="0" />
            </linearGradient>
          </defs>
          <path 
            d={fill} 
            fill={`url(#${gradientId})`}
            className="transition-opacity duration-300 group-hover:opacity-80"
          />
          <path 
            d={stroke} 
            stroke={color} 
            strokeWidth="2" 
            fill="none"
            className="transition-all duration-300 group-hover:stroke-[3]"
          />
        </svg>
      </div>
    </div>
  );
}

interface DashboardMetricsProps {
  runs: StravaActivity[];
  unit: 'Km' | 'Miles';
}

export function DashboardMetrics({ runs, unit }: DashboardMetricsProps) {
  const avgPace = calculateAveragePace(runs, unit);
  const totalDistance = calculateTotalDistance(runs, unit);
  const totalTime = calculateTotalTime(runs);
  const totalElevation = calculateTotalElevation(runs);
  const totalSessions = calculateTotalSessions(runs);

  return (
    <div className="w-full max-w-[1440px] px-[0px] pb-[64px] grid grid-cols-5 gap-[40px] pt-[32px] pr-[0px] pl-[0px] py-[32px]">
      <StatCard 
        label="Average pace" 
        value={avgPace} 
        unit={`/${unit.toLowerCase()}`} 
        fill={sparklinePaths.greenFillA} 
        stroke={sparklinePaths.greenStrokeA} 
        color="#04b488" 
        gradientId="grad-pace"
      />
      <StatCard 
        label="Distance" 
        value={totalDistance.toString()} 
        unit={unit.toLowerCase()} 
        fill={sparklinePaths.orangeFill} 
        stroke={sparklinePaths.orangeStroke} 
        color="#fc5200"
        gradientId="grad-distance"
      />
      <StatCard 
        label="Time" 
        value={totalTime.toString()} 
        unit="hrs" 
        fill={sparklinePaths.greenFillB} 
        stroke={sparklinePaths.greenStrokeB} 
        color="#04b488"
        gradientId="grad-time"
      />
      <StatCard 
        label="Elevation" 
        value={totalElevation.toString()} 
        unit="m" 
        fill={sparklinePaths.greenFillA} 
        stroke={sparklinePaths.greenStrokeA} 
        color="#04b488"
        gradientId="grad-elevation"
      />
      <StatCard 
        label="Sessions" 
        value={totalSessions.toString()} 
        unit="" 
        fill={sparklinePaths.orangeFill} 
        stroke={sparklinePaths.orangeStroke} 
        color="#fc5200"
        gradientId="grad-sessions"
      />
    </div>
  );
}
