import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, CartesianGrid } from 'recharts';
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Data mocks for different tabs to visualize changes
const paceData = [
  { date: '12 Jun', value: 7.30 }, { date: '12 Jun', value: 6.00 }, { date: '12 Jun', value: 8.15 },
  { date: '12 Jun', value: 7.30 }, { date: '12 Jun', value: 1.00 }, { date: '12 Jun', value: 10.30 },
  { date: '12 Jun', value: 5.30 }, { date: '12 Jun', value: 1.00 }, { date: '12 Jun', value: 6.15 },
  { date: '12 Jun', value: 5.30 }, { date: '12 Jun', value: 1.00 }, { date: '12 Jun', value: 6.15 },
  { date: '12 Jun', value: 5.00 }, { date: '12 Jun', value: 1.00 }, { date: '12 Jun', value: 8.15 },
  { date: '12 Jun', value: 5.30 }, { date: '12 Jun', value: 4.00 }, { date: '12 Jun', value: 7.00 },
  { date: '12 Jun', value: 8.15 }, { date: '12 Jun', value: 5.45 }, { date: '12 Jun', value: 8.15 },
];

const distanceData = [
  { date: '12 Jun', value: 8.5 }, { date: '12 Jun', value: 4.2 }, { date: '12 Jun', value: 9.8 },
  { date: '12 Jun', value: 8.5 }, { date: '12 Jun', value: 1.2 }, { date: '12 Jun', value: 13.5 },
  { date: '12 Jun', value: 3.5 }, { date: '12 Jun', value: 1.2 }, { date: '12 Jun', value: 5.5 },
  { date: '12 Jun', value: 4.2 }, { date: '12 Jun', value: 1.2 }, { date: '12 Jun', value: 5.5 },
  { date: '12 Jun', value: 4.2 }, { date: '12 Jun', value: 1.2 }, { date: '12 Jun', value: 10.5 },
  { date: '12 Jun', value: 4.2 }, { date: '12 Jun', value: 3.8 }, { date: '12 Jun', value: 6.5 },
  { date: '12 Jun', value: 8.5 }, { date: '12 Jun', value: 4.2 }, { date: '12 Jun', value: 10.5 },
];

const elevationData = [
  { date: '12 Jun', value: 180 }, { date: '12 Jun', value: 140 }, { date: '12 Jun', value: 200 },
  { date: '12 Jun', value: 180 }, { date: '12 Jun', value: 20 },  { date: '12 Jun', value: 230 },
  { date: '12 Jun', value: 130 }, { date: '12 Jun', value: 20 },  { date: '12 Jun', value: 150 },
  { date: '12 Jun', value: 130 }, { date: '12 Jun', value: 20 },  { date: '12 Jun', value: 150 },
  { date: '12 Jun', value: 130 }, { date: '12 Jun', value: 20 },  { date: '12 Jun', value: 200 },
  { date: '12 Jun', value: 130 }, { date: '12 Jun', value: 110 }, { date: '12 Jun', value: 160 },
  { date: '12 Jun', value: 180 }, { date: '12 Jun', value: 140 }, { date: '12 Jun', value: 200 },
];

type TabType = 'Pace' | 'Distance' | 'Elevation';

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
    ticks: [0, 5.30, 6.00, 7.30, 10.30],
    domain: [0, 12],
    formatTick: (val) => val === 0 ? '0:00' : val.toFixed(2).replace('.', ':')
  },
  Distance: {
    data: distanceData,
    color: '#FFB020', 
    gradientId: 'distanceGradient',
    gradientStop: '#FFB020', // Orange/Yellow
    ticks: [0, 3.0, 4.0, 9.0, 14.0],
    domain: [0, 16],
    formatTick: (val) => val.toFixed(1)
  },
  Elevation: {
    data: elevationData,
    color: '#5A7CFF',
    gradientId: 'elevationGradient',
    gradientStop: '#5A7CFF', // Blue
    ticks: [0, 100, 150, 180, 230],
    domain: [0, 250],
    formatTick: (val) => val.toString()
  }
};

export function RunningTrends() {
  const [activeTab, setActiveTab] = useState<TabType>('Pace');
  const currentTab = tabs[activeTab];

  return (
    <div className="bg-[rgba(21,24,25,0)] rounded-[0px] w-full h-full flex flex-col gap-[20px] relative overflow-hidden p-[0px]">
      {/* Header */}
      <div className="flex items-start justify-between w-full z-10 relative shrink-0 lg:items-center">
        <div className="flex flex-col gap-[2px]">
          <p className="font-['Titillium_Web',sans-serif] font-semibold text-[14px] leading-[1.5] text-[#696e70] tracking-[-0.42px]">
            Diligence
          </p>
          <h2 className="font-['Titillium_Web',sans-serif] font-bold text-[24px] leading-[1.4] text-[#f2f5f7] tracking-[-0.72px]">
            Running trends
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex bg-[#1e2224] p-[2px] rounded-[99px]">
          {(['Pace', 'Distance', 'Elevation'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-[16px] py-[8px] rounded-[99px] text-[14px] font-['Titillium_Web',sans-serif] font-semibold transition-all leading-[18px]",
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

      {/* Chart */}
      <div className="w-full  flex-1 min-h-0 relative z-10 border border-[#252A2C] p-[16px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={currentTab.data} margin={{ top: 10, right: 0, left: -25, bottom: 0 }} barGap={2}>
            <defs>
              <linearGradient id="paceGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#04b488" stopOpacity={1} />
                <stop offset="100%" stopColor="#04b488" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="distanceGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FFB020" stopOpacity={1} />
                <stop offset="100%" stopColor="#FFB020" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="elevationGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#5A7CFF" stopOpacity={1} />
                <stop offset="100%" stopColor="#5A7CFF" stopOpacity={0} />
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
              interval={1}
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
