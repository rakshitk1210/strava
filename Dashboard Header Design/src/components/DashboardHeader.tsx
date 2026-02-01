import React, { useState } from 'react';
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function DashboardHeader() {
  const [timeRange, setTimeRange] = useState<'Month' | 'Year'>('Month'); // Default to Jan'26 implies Month view? actually the button says Jan'26
  const [unit, setUnit] = useState<'Km' | 'Miles'>('Km');

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Teko:wght@300;400;500;600;700&family=Titillium+Web:wght@400;600;700&display=swap');
          @font-face {
            font-family: 'Groww Sans Variable';
            src: local('Arial'); /* Fallback */
          }
        `}
      </style>

      <div className="w-full flex justify-center pt-[32px] px-[64px] pb-[32px] bg-[#060809]">
        <div className="flex items-center justify-between w-full max-w-[1440px]">
          {/* Left: Avatar & Title */}
          <div className="flex gap-[16px] items-center">
            <div className="bg-white rounded-full w-[40px] h-[40px] flex items-center justify-center shrink-0 relative overflow-hidden">
              <span className="font-['Titillium_Web',sans-serif] font-bold text-[#f2f5f7] text-[20px] leading-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                ♠️
              </span>
            </div>
            <div className="flex flex-col items-start justify-center">
              <p className="font-['Titillium_Web',sans-serif] font-bold leading-none text-[#f2f5f7] text-[20px]">
                Rakshit’s running dash
              </p>
              <p className="font-['Titillium_Web',sans-serif] font-semibold leading-[1.4] text-[#696e70] text-[12px]">
                Last updated 19 Jan’26
              </p>
            </div>
          </div>

          {/* Right: Controls */}
          <div className="flex gap-[16px] items-center">
            {/* Date Button */}
             <div className="bg-[#151819] h-[40px] rounded-full flex items-center justify-center px-[4px]">
                <button className="flex items-center gap-[6px] pl-[16px] pr-[12px] h-full text-[#f2f5f7]">
                  <span className="font-medium text-[14px]">Jan’26</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.56251 12.0625L6.54168 9.04167C6.50001 9 6.46876 8.95486 6.44793 8.90625C6.42709 8.85764 6.41668 8.80556 6.41668 8.75C6.41668 8.63889 6.45487 8.54167 6.53126 8.45833C6.60765 8.375 6.70834 8.33333 6.83334 8.33333H13.1667C13.2917 8.33333 13.3924 8.375 13.4688 8.45833C13.5451 8.54167 13.5833 8.63889 13.5833 8.75C13.5833 8.77778 13.5417 8.875 13.4583 9.04167L10.4375 12.0625C10.3681 12.1319 10.2986 12.1806 10.2292 12.2083C10.1597 12.2361 10.0833 12.25 10 12.25C9.91668 12.25 9.84029 12.2361 9.77084 12.2083C9.7014 12.1806 9.63195 12.1319 9.56251 12.0625Z" fill="#F2F5F7"/>
                  </svg>
                </button>
             </div>

            {/* Unit Toggle */}
            <div className="bg-[#151819] flex items-center p-[2px] rounded-full">
              {(['Km', 'Miles'] as const).map((u) => (
                <button
                  key={u}
                  onClick={() => setUnit(u)}
                  className={cn(
                    "flex items-center justify-center px-[16px] py-[8px] rounded-full transition-all duration-200",
                    unit === u 
                      ? "bg-white text-[#060809]" 
                      : "bg-transparent text-[#989ea0] hover:text-[#f2f5f7]"
                  )}
                >
                  <span className="font-['Titillium_Web',sans-serif] font-semibold text-[14px] leading-[18px]">
                    {u}
                  </span>
                </button>
              ))}
            </div>

            {/* Divider */}
            <div className="flex flex-col justify-center leading-[0] text-[#696e70] text-[14px] font-medium font-['Inter',sans-serif] tracking-[-0.42px] mx-[0px]">
              <p className="leading-[18px]">•</p>
            </div>

            {/* Connect Button */}
            <button className="bg-[#fc5200] h-[40px] px-[24px] rounded-full flex items-center justify-center hover:opacity-90 transition-opacity">
              <span className="font-['Titillium_Web',sans-serif] font-semibold text-[#f2f5f7] text-[14px] leading-[20px]">
                Connect Strava
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
