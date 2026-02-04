import React from 'react';
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
import { getSparklineData } from '@/lib/sparkline-generator';

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
    <>
      {/* Mobile: Horizontal layout with center alignment */}
      <div className="md:hidden flex items-center justify-center h-[94px] w-full relative overflow-hidden rounded-[0px]">
        <div className="flex items-start justify-center h-full w-full max-w-[360px]">
          {/* Left: Label and Value */}
          <div className="flex flex-col items-start z-10 w-[132px] shrink-0 pb-[4px] h-full">
            <p className="font-['Titillium_Web',sans-serif] font-semibold text-[12px] text-[#696e70] leading-[1.4] mb-[2px]">
              {label}
            </p>
            <div className="flex items-baseline gap-[2px] mb-[-4px]">
              <p className="font-['Teko',sans-serif] font-bold text-[40px] text-[#f2f5f7] leading-[1.4]">
                {value}
              </p>
              <p className="font-['Titillium_Web',sans-serif] font-semibold text-[12px] text-[#696e70] leading-[1.5] tracking-[-0.42px]">
                {unit}
              </p>
            </div>
          </div>

          {/* Right: Sparkline - Takes remaining space */}
          <div className="flex-1 h-full min-h-px min-w-px relative w-full">
            <div className="absolute bottom-0 left-0 w-full h-[50px]">
              <svg className="w-full h-full block" viewBox="0 0 231.536 50.5742" preserveAspectRatio="none">
                <defs>
                  <linearGradient id={`${gradientId}-mobile`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={color} stopOpacity="0.4" />
                    <stop offset="100%" stopColor={color} stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                <path
                  d={fill}
                  fill={`url(#${gradientId}-mobile)`}
                  fillOpacity="1"
                />
                <path
                  d={stroke}
                  stroke={color}
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop: Vertical layout (label/value on top, sparkline below) */}
      <div className="hidden md:flex flex-col justify-between h-[120px] lg:h-[148px] w-full relative overflow-hidden rounded-[0px]">
        <div className="flex flex-col items-start z-10">
          <p className="font-['Titillium_Web',sans-serif] font-semibold text-[13px] lg:text-[14px] text-[#696e70] leading-[1.4] mb-[3px] lg:mb-[4px]">
            {label}
          </p>
          <div className="flex items-baseline gap-[2px]">
            <p className="font-['Teko',sans-serif] font-bold text-[48px] lg:text-[56px] text-[#f2f5f7] leading-[1.4]">
              {value}
            </p>
            <p className="font-['Titillium_Web',sans-serif] font-semibold text-[13px] lg:text-[14px] text-[#696e70] leading-[1.5] tracking-[-0.42px]">
              {unit}
            </p>
          </div>
        </div>

        {/* Sparkline - Below content */}
        <div className="absolute bottom-0 left-0 w-full h-[42px] lg:h-[50px]">
          <svg className="w-full h-full block" viewBox="0 0 231.536 50.5742" preserveAspectRatio="none">
            <defs>
              <linearGradient id={`${gradientId}-desktop`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={color} stopOpacity="0.4" />
                <stop offset="100%" stopColor={color} stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <path
              d={fill}
              fill={`url(#${gradientId}-desktop)`}
              fillOpacity="0.6"
            />
            <path
              d={stroke}
              stroke={color}
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
      </div>
    </>
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

  // Generate real sparkline data from runs
  const paceSparkline = getSparklineData(runs, 'pace', unit, 20);
  const distanceSparkline = getSparklineData(runs, 'distance', unit, 20);
  const timeSparkline = getSparklineData(runs, 'time', unit, 20);
  const elevationSparkline = getSparklineData(runs, 'elevation', unit, 20);
  const sessionsSparkline = getSparklineData(runs, 'sessions', unit, 20);

  const getTrendColor = (start: number, end: number, type: 'pace' | 'volume') => {
    // For pace, lower is better (faster)
    if (type === 'pace') {
      return end < start ? '#04b488' : '#fc5200';
    }
    // For others (distance, etc), higher is better
    return end > start ? '#04b488' : '#fc5200';
  };

  const paceColor = getTrendColor(paceSparkline.startValue, paceSparkline.endValue, 'pace');
  const distanceColor = getTrendColor(distanceSparkline.startValue, distanceSparkline.endValue, 'volume');
  const timeColor = getTrendColor(timeSparkline.startValue, timeSparkline.endValue, 'volume');
  const elevationColor = getTrendColor(elevationSparkline.startValue, elevationSparkline.endValue, 'volume');
  const sessionsColor = getTrendColor(sessionsSparkline.startValue, sessionsSparkline.endValue, 'volume');

  return (
    <div className="w-full max-w-[1440px] px-[0px] pb-[0px] pt-[32px] md:pt-[24px] lg:pt-[32px]">
      {/* Mobile: Vertical stack with horizontal card content */}
      <div className="md:hidden flex flex-col gap-[32px] px-[16px]">
        <StatCard
          label="Average pace"
          value={avgPace}
          unit={`/${unit.toLowerCase()}`}
          fill={paceSparkline.fill}
          stroke={paceSparkline.stroke}
          color={paceColor}
          gradientId="grad-pace"
        />
        <StatCard
          label="Distance"
          value={totalDistance.toString()}
          unit={unit.toLowerCase()}
          fill={distanceSparkline.fill}
          stroke={distanceSparkline.stroke}
          color={distanceColor}
          gradientId="grad-distance"
        />
        <StatCard
          label="Time"
          value={totalTime.toString()}
          unit="hrs"
          fill={timeSparkline.fill}
          stroke={timeSparkline.stroke}
          color={timeColor}
          gradientId="grad-time"
        />
        <StatCard
          label="Elevation"
          value={totalElevation.toString()}
          unit="m"
          fill={elevationSparkline.fill}
          stroke={elevationSparkline.stroke}
          color={elevationColor}
          gradientId="grad-elevation"
        />
        <StatCard
          label="Sessions"
          value={totalSessions.toString()}
          unit=""
          fill={sessionsSparkline.fill}
          stroke={sessionsSparkline.stroke}
          color={sessionsColor}
          gradientId="grad-sessions"
        />
      </div>

      {/* Tablet & Desktop: Grid */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-5 gap-[24px] lg:gap-[32px]">
        <StatCard
          label="Average pace"
          value={avgPace}
          unit={`/${unit.toLowerCase()}`}
          fill={paceSparkline.fill}
          stroke={paceSparkline.stroke}
          color={paceColor}
          gradientId="grad-pace-lg"
        />
        <StatCard
          label="Distance"
          value={totalDistance.toString()}
          unit={unit.toLowerCase()}
          fill={distanceSparkline.fill}
          stroke={distanceSparkline.stroke}
          color={distanceColor}
          gradientId="grad-distance-lg"
        />
        <StatCard
          label="Time"
          value={totalTime.toString()}
          unit="hrs"
          fill={timeSparkline.fill}
          stroke={timeSparkline.stroke}
          color={timeColor}
          gradientId="grad-time-lg"
        />
        <StatCard
          label="Elevation"
          value={totalElevation.toString()}
          unit="m"
          fill={elevationSparkline.fill}
          stroke={elevationSparkline.stroke}
          color={elevationColor}
          gradientId="grad-elevation-lg"
        />
        <StatCard
          label="Sessions"
          value={totalSessions.toString()}
          unit=""
          fill={sessionsSparkline.fill}
          stroke={sessionsSparkline.stroke}
          color={sessionsColor}
          gradientId="grad-sessions-lg"
        />
      </div>
    </div>
  );
}
