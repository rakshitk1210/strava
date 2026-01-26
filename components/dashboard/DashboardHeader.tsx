import React, { useState, useRef, useEffect } from 'react';
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { format, subMonths, startOfMonth } from 'date-fns';
import Link from 'next/link';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface DashboardHeaderProps {
  lastUpdated?: Date;
  athleteName?: string;
  unit: 'Km' | 'Miles';
  onUnitChange: (unit: 'Km' | 'Miles') => void;
  selectedMonth?: Date | null;
  onMonthChange?: (date: Date | null) => void;
}

export function DashboardHeader({ 
  lastUpdated = new Date(), 
  athleteName = "Rakshit", 
  unit, 
  onUnitChange,
  selectedMonth = null,
  onMonthChange
}: DashboardHeaderProps) {
  const [isMonthPickerOpen, setIsMonthPickerOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Generate last 12 months
  const months = Array.from({ length: 12 }, (_, i) => {
    return subMonths(new Date(), i);
  });

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsMonthPickerOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMonthSelect = (date: Date | null) => {
    if (date === null) {
      // "1 Year" selected
      onMonthChange?.(null);
    } else {
      onMonthChange?.(startOfMonth(date));
    }
    setIsMonthPickerOpen(false);
  };
  
  // Get display text for the button
  const getDisplayText = () => {
    if (selectedMonth === null) {
      return "1 Year";
    }
    return format(selectedMonth, "MMM''yy");
  };

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
                {athleteName}'s running dash
              </p>
              <p className="font-['Titillium_Web',sans-serif] font-semibold leading-[1.4] text-[#696e70] text-[12px]">
                Last updated {format(lastUpdated, "dd MMM''yy")}
              </p>
            </div>
          </div>

          {/* Right: Controls */}
          <div className="flex gap-[16px] items-center">
            {/* Date Button with Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <div className="bg-[#151819] h-[40px] rounded-full flex items-center justify-center px-[4px]">
                <button 
                  className="flex items-center gap-[6px] pl-[16px] pr-[12px] h-full text-[#f2f5f7] hover:opacity-80 transition-opacity"
                  onClick={() => setIsMonthPickerOpen(!isMonthPickerOpen)}
                >
                  <span className="font-medium text-[14px]">{getDisplayText()}</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.56251 12.0625L6.54168 9.04167C6.50001 9 6.46876 8.95486 6.44793 8.90625C6.42709 8.85764 6.41668 8.80556 6.41668 8.75C6.41668 8.63889 6.45487 8.54167 6.53126 8.45833C6.60765 8.375 6.70834 8.33333 6.83334 8.33333H13.1667C13.2917 8.33333 13.3924 8.375 13.4688 8.45833C13.5451 8.54167 13.5833 8.63889 13.5833 8.75C13.5833 8.77778 13.5417 8.875 13.4583 9.04167L10.4375 12.0625C10.3681 12.1319 10.2986 12.1806 10.2292 12.2083C10.1597 12.2361 10.0833 12.25 10 12.25C9.91668 12.25 9.84029 12.2361 9.77084 12.2083C9.7014 12.1806 9.63195 12.1319 9.56251 12.0625Z" fill="#F2F5F7"/>
                  </svg>
                </button>
              </div>

              {/* Dropdown Menu */}
              {isMonthPickerOpen && (
                <div className="absolute top-[48px] right-0 bg-[#151819] border border-[#44494b] rounded-[12px] shadow-lg z-50 py-[8px] min-w-[140px]">
                  <div className="max-h-[320px] overflow-y-auto">
                    <button
                      onClick={() => handleMonthSelect(null)}
                      className={cn(
                        "w-full text-left px-[16px] py-[8px] text-[14px] font-['Titillium_Web',sans-serif] transition-colors",
                        selectedMonth === null
                          ? "bg-[#04b488] text-[#f2f5f7] font-semibold"
                          : "text-[#f2f5f7] hover:bg-[#1f2425]"
                      )}
                    >
                      1 Year
                    </button>
                    <div className="border-t border-[#44494b] my-[4px]"></div>
                    {months.map((month) => (
                      <button
                        key={month.toISOString()}
                        onClick={() => handleMonthSelect(month)}
                        className={cn(
                          "w-full text-left px-[16px] py-[8px] text-[14px] font-['Titillium_Web',sans-serif] transition-colors",
                          selectedMonth !== null && format(selectedMonth, "MMM yyyy") === format(month, "MMM yyyy")
                            ? "bg-[#04b488] text-[#f2f5f7] font-semibold"
                            : "text-[#f2f5f7] hover:bg-[#1f2425]"
                        )}
                      >
                        {format(month, "MMMM yyyy")}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Unit Toggle */}
            <div className="bg-[#151819] flex items-center p-[2px] rounded-full">
              {(['Km', 'Miles'] as const).map((u) => (
                <button
                  key={u}
                  onClick={() => onUnitChange(u)}
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
            <Link href="/auth">
              <button className="bg-[#fc5200] h-[40px] px-[24px] rounded-full flex items-center justify-center hover:opacity-90 transition-opacity">
                <span className="font-['Titillium_Web',sans-serif] font-semibold text-[#f2f5f7] text-[14px] leading-[20px]">
                  Connect Strava
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
