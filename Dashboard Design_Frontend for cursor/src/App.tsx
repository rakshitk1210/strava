import React, { useState } from 'react';
import { DashboardHeader } from './components/DashboardHeader';
import { DashboardMetrics } from './components/DashboardMetrics';
import { PerformanceCard } from './components/PerformanceCard';
import { RunningRoutesMap } from './components/RunningRoutesMap';
import { RecordsCard } from './components/RecordsCard';
import { RunningTrends } from './components/RunningTrends';
import { RunningDays } from './components/RunningDays';
import { DashboardFooter } from './components/DashboardFooter';

export default function App() {
  const [year, setYear] = useState(2025);

  return (
    <div className="min-h-screen w-full bg-[#060809] text-[#f2f5f7] flex flex-col items-center font-['Titillium_Web',sans-serif]">
      {/* Header Section */}
      <DashboardHeader year={year} setYear={setYear} />
      
      {/* Main Content Stack */}
      <div className="w-full max-w-[1440px] flex flex-col gap-[64px] md:px-[64px] mb-[120px] p-[0px]">
        
        {/* Metrics Section */}
        <DashboardMetrics />
        
        {/* Map Section */}
        <div className="w-full h-[480px]">
           <RunningRoutesMap />
        </div>

        {/* Records & Trends Row */}
        <div className="flex flex-col lg:flex-row gap-[32px] w-full">
          {/* Left: Records */}
          <div className="w-full lg:w-[264px] shrink-0 h-full">
             <RecordsCard />
          </div>
          {/* Right: Trends */}
          <div className="w-full lg:flex-1 min-w-0 h-[360px] lg:h-auto">
             <RunningTrends />
          </div>
        </div>

        {/* Performance & Consistency Row */}
        <div className="flex flex-col lg:flex-row gap-[32px] w-full">
          {/* Left: Performance */}
          <div className="w-full lg:w-[264px] shrink-0 h-full">
             <PerformanceCard />
          </div>
          {/* Right: Running Days (Year Streaks) */}
          <div className="w-full lg:flex-1 min-w-0 h-full">
             <RunningDays year={year} />
          </div>
        </div>

      </div>

      {/* Footer Branding */}
      <DashboardFooter />
    </div>
  );
}
