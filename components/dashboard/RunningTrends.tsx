import React, { useState, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, CartesianGrid } from 'recharts';
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { StravaActivity } from '@/lib/strava';
import { aggregateTrendsByDate, aggregateTrendsByWeek } from '@/lib/stats-calculator';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type TabType = 'Pace' | 'Distance' | 'Elevation';
type ViewType = 'Weekly' | 'Monthly';

interface RunningTrendsProps {
  runs: StravaActivity[];
  unit: 'Km' | 'Miles';
}

export function RunningTrends({ runs, unit }: RunningTrendsProps) {
  const [activeTab, setActiveTab] = useState<TabType>('Pace');
  const [viewType, setViewType] = useState<ViewType>('Monthly');


  // Calculate trend data for each metric (both monthly and weekly)
  const paceDataMonthly = useMemo(() => aggregateTrendsByDate(runs, 'pace', unit), [runs, unit]);
  const distanceDataMonthly = useMemo(() => aggregateTrendsByDate(runs, 'distance', unit), [runs, unit]);
  const elevationDataMonthly = useMemo(() => aggregateTrendsByDate(runs, 'elevation', unit), [runs, unit]);

  const paceDataWeekly = useMemo(() => aggregateTrendsByWeek(runs, 'pace', unit), [runs, unit]);
  const distanceDataWeekly = useMemo(() => aggregateTrendsByWeek(runs, 'distance', unit), [runs, unit]);
  const elevationDataWeekly = useMemo(() => aggregateTrendsByWeek(runs, 'elevation', unit), [runs, unit]);

  // Select data based on view type
  const paceData = viewType === 'Weekly' ? paceDataWeekly : paceDataMonthly;
  const distanceData = viewType === 'Weekly' ? distanceDataWeekly : distanceDataMonthly;
  const elevationData = viewType === 'Weekly' ? elevationDataWeekly : elevationDataMonthly;

  // Calculate dynamic domains and ticks based on real data
  const calculateDomainAndTicks = (data: typeof paceData, metric: TabType) => {
    if (data.length === 0) {
      return { domain: [0, 10] as [number, number], ticks: [0, 2, 4, 6, 8, 10] };
    }

    const values = data.map(d => d.value);
    const minVal = Math.min(...values);
    const maxVal = Math.max(...values);
    const range = maxVal - minVal;

    // If range is too small (all values are similar or zero), create a sensible range
    if (range < 0.1) {
      const baseValue = maxVal > 0 ? maxVal : 5;
      const domainMin = Math.max(0, Math.floor(baseValue * 0.8));
      const domainMax = Math.ceil(baseValue * 1.2);
      const step = (domainMax - domainMin) / 4;
      const ticks = Array.from({ length: 5 }, (_, i) => Math.round((domainMin + step * i) * 10) / 10);
      return { domain: [domainMin, domainMax] as [number, number], ticks };
    }

    const padding = range * 0.2;
    const domainMin = Math.max(0, Math.floor(minVal - padding));
    const domainMax = Math.ceil(maxVal + padding);

    // Generate 5 ticks
    const step = (domainMax - domainMin) / 4;
    const ticks = Array.from({ length: 5 }, (_, i) => Math.round((domainMin + step * i) * 10) / 10);

    // Ensure ticks are unique by using a Set and regenerating if needed
    const uniqueTicks = [...new Set(ticks)];
    if (uniqueTicks.length < 5) {
      // Fallback: create evenly spaced ticks with more precision
      const preciseTicks = Array.from({ length: 5 }, (_, i) =>
        Math.round((domainMin + step * i) * 100) / 100
      );
      return { domain: [domainMin, domainMax] as [number, number], ticks: preciseTicks };
    }

    return { domain: [domainMin, domainMax] as [number, number], ticks };
  };

  const tabs: Record<TabType, {
    data: typeof paceData,
    color: string,
    gradientId: string,
    gradientStop: string,
    ticks: number[],
    domain: [number, number],
    formatTick: (val: number) => string
  }> = {
    Pace: {
      data: paceData,
      color: '#04b488',
      gradientId: 'paceGradient',
      gradientStop: '#04b488',
      ...calculateDomainAndTicks(paceData, 'Pace'),
      formatTick: (val) => {
        if (val === 0) return '0:00';
        const minutes = Math.floor(val);
        const seconds = Math.round((val - minutes) * 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
      }
    },
    Distance: {
      data: distanceData,
      color: '#5A7CFF',
      gradientId: 'distanceGradient',
      gradientStop: '#5A7CFF',
      ...calculateDomainAndTicks(distanceData, 'Distance'),
      formatTick: (val) => val.toFixed(1)
    },
    Elevation: {
      data: elevationData,
      color: '#FFB020',
      gradientId: 'elevationGradient',
      gradientStop: '#FFB020',
      ...calculateDomainAndTicks(elevationData, 'Elevation'),
      formatTick: (val) => val.toString()
    }
  };

  const currentTab = tabs[activeTab];

  return (
    <div className="bg-[rgba(21,24,25,0)] rounded-[0px] w-full h-full flex flex-col gap-[16px] md:gap-[18px] lg:gap-[20px] relative overflow-hidden p-[0px]">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start justify-between w-full z-10 relative shrink-0 gap-[12px] md:gap-0 lg:items-center">
        <div className="flex flex-col gap-[2px]">
          <p className="font-['Titillium_Web',sans-serif] font-semibold text-[12px] md:text-[13px] lg:text-[14px] leading-[1.5] text-[#696e70] tracking-[-0.42px]">
            Diligence
          </p>
          <h2 className="font-['Titillium_Web',sans-serif] font-bold text-[20px] md:text-[22px] lg:text-[24px] leading-[1.4] text-[#f2f5f7] tracking-[-0.72px]">
            Running trends
          </h2>
        </div>

        {/* Switchers Container */}
        <div className="flex gap-[12px] items-center">
          {/* Week/Month Switcher */}
          <div className="flex bg-[#1e2224] p-[2px] rounded-[99px]">
            {(['Weekly', 'Monthly'] as const).map((view) => (
              <button
                key={view}
                onClick={() => setViewType(view)}
                className={cn(
                  "px-[12px] md:px-[14px] lg:px-[16px] py-[6px] md:py-[7px] lg:py-[8px] rounded-[99px] text-[12px] md:text-[13px] lg:text-[14px] font-['Titillium_Web',sans-serif] font-semibold transition-all leading-[18px]",
                  viewType === view
                    ? "bg-[#f2f5f7] text-[#060809]"
                    : "text-[#989ea0] hover:text-[#f2f5f7]"
                )}
              >
                {view}
              </button>
            ))}
          </div>

          {/* Pace/Distance/Elevation Tabs */}
          <div className="flex bg-[#1e2224] p-[2px] rounded-[99px]">
            {(['Pace', 'Distance', 'Elevation'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-[12px] md:px-[14px] lg:px-[16px] py-[6px] md:py-[7px] lg:py-[8px] rounded-[99px] text-[12px] md:text-[13px] lg:text-[14px] font-['Titillium_Web',sans-serif] font-semibold transition-all leading-[18px]",
                  activeTab === tab
                    ? "bg-[#f2f5f7] text-[#060809]"
                    : "text-[#989ea0] hover:text-[#f2f5f7]"
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="w-full flex-1 min-h-0 relative z-10 border border-[#252A2C] p-[12px] md:p-[14px] lg:p-[16px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={currentTab.data} margin={{ top: 10, right: 0, left: -25, bottom: 0 }} barGap={2}>
            <defs>
              <linearGradient id="paceGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#04b488" stopOpacity={1} />
                <stop offset="100%" stopColor="#060809" stopOpacity={0.8} />
              </linearGradient>
              <linearGradient id="distanceGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#5A7CFF" stopOpacity={1} />
                <stop offset="100%" stopColor="#060809" stopOpacity={0.8} />
              </linearGradient>
              <linearGradient id="elevationGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FFB020" stopOpacity={1} />
                <stop offset="100%" stopColor="#060809" stopOpacity={0.8} />
              </linearGradient>
            </defs>
            <CartesianGrid
              vertical={true}
              horizontal={true}
              stroke="#1E2224"
              strokeOpacity={0.5}
            />
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#696e70', fontSize: 10, fontFamily: 'Titillium Web' }}
              dy={10}
              interval="preserveStartEnd"
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#696e70', fontSize: 10, fontFamily: 'Titillium Web' }}
              ticks={currentTab.ticks}
              domain={currentTab.domain}
              tickFormatter={currentTab.formatTick}
            />
            <Tooltip
              cursor={{ fill: 'rgba(255, 255, 255, 0.05)' }}
              contentStyle={{ backgroundColor: '#151819', border: '1px solid #252a2c', borderRadius: '8px' }}
              labelStyle={{ color: '#989ea0' }}
              itemStyle={{ color: currentTab.color }}
            />
            <Bar dataKey="value" radius={[4, 4, 4, 4]} maxBarSize={32}>
              {currentTab.data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={`url(#${currentTab.gradientId})`}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
