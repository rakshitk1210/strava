import React from 'react';
import { DashboardHeader } from './components/DashboardHeader';
import { DashboardMetrics } from './components/DashboardMetrics';
import { PerformanceCard } from './components/PerformanceCard';
import { RunningRoutesMap } from './components/RunningRoutesMap';
import { RecordsCard } from './components/RecordsCard';
import { RunningTrends } from './components/RunningTrends';
import { MonthlyStreak } from './components/MonthlyStreak';
import { PhotoGallery } from './components/PhotoGallery';

import { DashboardFooter } from './components/DashboardFooter';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#060809] text-[#f2f5f7] flex flex-col items-center pb-0 font-['Titillium_Web',sans-serif]">
      {/* Header Section */}
      <DashboardHeader />
      
      {/* Metrics Section */}
      <DashboardMetrics />
      
      {/* Main Content Stack */}
      <div className="w-full max-w-[1440px] flex flex-col gap-[40px] px-[0px] mb-[80px]">
        
        {/* Row 1: Performance & Map */}
        <div className="flex flex-col lg:flex-row gap-[40px] w-full">
          {/* Left: Fixed Width */}
          <div className="w-full lg:w-[264px] shrink-0 h-[541px]">
             <PerformanceCard />
          </div>
          {/* Right: Flexible Width */}
          <div className="w-full lg:flex-1 min-w-0 h-[541px]">
             <RunningRoutesMap />
          </div>
        </div>

        {/* Row 2: Monthly Streak & Photo Gallery */}
        <div className="w-full bg-[#151819] rounded-[16px] p-[24px]">
          <div className="flex flex-col lg:flex-row gap-[40px] w-full">
            <div className="w-full lg:w-[264px] shrink-0">
               <MonthlyStreak />
            </div>
            <div className="w-full lg:flex-1 min-w-0 overflow-hidden">
               <PhotoGallery />
            </div>
          </div>
        </div>

        {/* Row 3: Records & Running Trends */}
        <div className="flex flex-col lg:flex-row gap-[40px] w-full h-auto lg:h-[360px]">
          <div className="w-full lg:w-[264px] shrink-0 h-full">
             <RecordsCard />
          </div>
          <div className="w-full lg:flex-1 min-w-0 h-full">
             <RunningTrends />
          </div>
        </div>

      </div>

      {/* Footer Branding */}
      <DashboardFooter />
    </div>
  );
}
