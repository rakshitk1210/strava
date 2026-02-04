import React, { useState, useRef, useEffect } from 'react';
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { format } from 'date-fns';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface DashboardHeaderProps {
  lastUpdated?: Date;
  athleteName?: string;
  unit: 'Km' | 'Miles';
  onUnitChange: (unit: 'Km' | 'Miles') => void;
  selectedYear?: number;
  onYearChange?: (year: number) => void;
  isDemo?: boolean;
  isOwnData?: boolean;
  onConnect?: () => void;
  onDisconnect?: () => void;
}

export function DashboardHeader({ 
  lastUpdated = new Date(), 
  athleteName = "Rakshit", 
  unit, 
  onUnitChange,
  selectedYear = new Date().getFullYear(),
  onYearChange,
  isDemo = false,
  isOwnData = false,
  onConnect,
  onDisconnect
}: DashboardHeaderProps) {
  const [isYearPickerOpen, setIsYearPickerOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);

  // Generate years from 2020 to 2026
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 7 }, (_, i) => 2020 + i);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      const isOutsideDesktop = dropdownRef.current && !dropdownRef.current.contains(target);
      const isOutsideMobile = mobileDropdownRef.current && !mobileDropdownRef.current.contains(target);
      
      if (isOutsideDesktop && isOutsideMobile) {
        setIsYearPickerOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleYearSelect = (year: number) => {
    console.log('Year selected:', year, 'Current year:', selectedYear);
    if (onYearChange) {
      console.log('Calling onYearChange with:', year);
      onYearChange(year);
    } else {
      console.warn('onYearChange is not defined!');
    }
    setIsYearPickerOpen(false);
  };
  
  // Get display text for the button
  const getDisplayText = () => {
    return selectedYear.toString();
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

      {/* Header - Top on mobile, integrated on desktop */}
      <div className="w-full max-w-[1440px] flex justify-center pt-[16px] md:pt-[24px] lg:pt-[32px] px-[16px] md:px-[32px] lg:px-[64px] pb-[16px] md:pb-[24px] lg:pb-[32px] bg-[#060809] sticky top-0 z-50">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full max-w-[1440px] gap-[12px] md:gap-0">
          {/* Left: Avatar & Title */}
          <div className="flex gap-[12px] md:gap-[16px] items-center w-full md:w-auto">
            <div className="bg-white rounded-full w-[32px] h-[32px] md:w-[40px] md:h-[40px] flex items-center justify-center shrink-0 relative overflow-hidden">
              <span className="font-['Titillium_Web',sans-serif] font-bold text-[#f2f5f7] text-[16px] md:text-[20px] leading-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                ♠️
              </span>
            </div>
            <div className="flex flex-col items-start justify-center">
              <p className="font-['Titillium_Web',sans-serif] font-bold leading-none text-[#f2f5f7] text-[14px] md:text-[18px] lg:text-[20px]">
                {athleteName}'s running dash
              </p>
              <p className="font-['Titillium_Web',sans-serif] font-semibold leading-[1.4] text-[#696e70] text-[11px] md:text-[12px]">
                Last updated {format(lastUpdated, "dd MMM''yy")}
              </p>
            </div>
          </div>

          {/* Right: Controls - Only visible on desktop */}
          <div className="hidden md:flex gap-[12px] lg:gap-[16px] items-center">
            {/* Year Button with Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <div className="bg-[#151819] h-[40px] rounded-full flex items-center justify-center px-[4px]">
                <button 
                  className="flex items-center gap-[6px] pl-[16px] pr-[12px] h-full text-[#f2f5f7] hover:opacity-80 transition-opacity"
                  onClick={() => setIsYearPickerOpen(!isYearPickerOpen)}
                >
                  <span className="font-medium text-[14px]">{getDisplayText()}</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.56251 12.0625L6.54168 9.04167C6.50001 9 6.46876 8.95486 6.44793 8.90625C6.42709 8.85764 6.41668 8.80556 6.41668 8.75C6.41668 8.63889 6.45487 8.54167 6.53126 8.45833C6.60765 8.375 6.70834 8.33333 6.83334 8.33333H13.1667C13.2917 8.33333 13.3924 8.375 13.4688 8.45833C13.5451 8.54167 13.5833 8.63889 13.5833 8.75C13.5833 8.77778 13.5417 8.875 13.4583 9.04167L10.4375 12.0625C10.3681 12.1319 10.2986 12.1806 10.2292 12.2083C10.1597 12.2361 10.0833 12.25 10 12.25C9.91668 12.25 9.84029 12.2361 9.77084 12.2083C9.7014 12.1806 9.63195 12.1319 9.56251 12.0625Z" fill="#F2F5F7"/>
                  </svg>
                </button>
              </div>

              {/* Dropdown Menu */}
              {isYearPickerOpen && (
                <div className="absolute top-[48px] right-0 bg-[#151819] border border-[#44494b] rounded-[12px] shadow-lg z-[9999] py-[8px] min-w-[120px]">
                  <div className="max-h-[320px] overflow-y-auto">
                    {years.map((year) => (
                      <button
                        key={year}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleYearSelect(year);
                        }}
                        className={cn(
                          "w-full text-left px-[16px] py-[8px] text-[14px] font-['Titillium_Web',sans-serif] transition-colors",
                          selectedYear === year
                            ? "bg-[#04b488] text-[#f2f5f7] font-semibold"
                            : "text-[#f2f5f7] hover:bg-[#1f2425]"
                        )}
                      >
                        {year}
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

            {/* Connection Controls */}
            <div className="flex gap-[12px] items-center">
              {/* {isDemo && (
                <div className="px-[12px] py-[8px] rounded-full bg-[#fc5200]/20 border border-[#fc5200]/50">
                  <span className="text-[12px] font-medium text-[#fc5200] font-['Titillium_Web',sans-serif]">Demo Data</span>
                </div>
              )} */}
              
              {isOwnData ? (
                <button 
                  onClick={onDisconnect}
                  className="h-[40px] px-[20px] rounded-full flex items-center justify-center border border-[#44494b] hover:bg-[#151819] transition-colors"
                >
                  <span className="font-['Titillium_Web',sans-serif] font-semibold text-[#f2f5f7] text-[14px] leading-[20px]">
                    Disconnect Strava
                  </span>
                </button>
              ) : (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button 
                        onClick={onConnect}
                        disabled
                        className="bg-[#44494b] h-[40px] px-[24px] rounded-full flex items-center justify-center cursor-not-allowed opacity-50"
                      >
                        <span className="font-['Titillium_Web',sans-serif] font-semibold text-[#f2f5f7] text-[14px] leading-[20px]">
                          Connect My Strava
                        </span>
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Coming Soon</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Controls - Mobile Only */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#151819] z-50 border-t border-[#252A2C]">
        <div className="flex items-center justify-between px-[16px] py-[16px] gap-[8px]">
          {/* Year Button */}
          <div className="relative" ref={mobileDropdownRef}>
            <button 
              className="flex items-center gap-[6px] px-[16px] py-[8px] h-[32px] bg-[#1e2224] rounded-full text-[#f2f5f7] hover:opacity-80 transition-opacity"
              onClick={() => setIsYearPickerOpen(!isYearPickerOpen)}
            >
              <span className="font-medium text-[13px]">{getDisplayText()}</span>
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.56251 12.0625L6.54168 9.04167C6.50001 9 6.46876 8.95486 6.44793 8.90625C6.42709 8.85764 6.41668 8.80556 6.41668 8.75C6.41668 8.63889 6.45487 8.54167 6.53126 8.45833C6.60765 8.375 6.70834 8.33333 6.83334 8.33333H13.1667C13.2917 8.33333 13.3924 8.375 13.4688 8.45833C13.5451 8.54167 13.5833 8.63889 13.5833 8.75C13.5833 8.77778 13.5417 8.875 13.4583 9.04167L10.4375 12.0625C10.3681 12.1319 10.2986 12.1806 10.2292 12.2083C10.1597 12.2361 10.0833 12.25 10 12.25C9.91668 12.25 9.84029 12.2361 9.77084 12.2083C9.7014 12.1806 9.63195 12.1319 9.56251 12.0625Z" fill="#F2F5F7"/>
              </svg>
            </button>

            {/* Dropdown Menu - Mobile (positioned above) */}
            {isYearPickerOpen && (
              <div className="absolute bottom-[48px] left-0 bg-[#151819] border border-[#44494b] rounded-[12px] shadow-lg z-[9999] py-[8px] min-w-[120px]">
                <div className="max-h-[320px] overflow-y-auto">
                  {years.map((year) => (
                    <button
                      key={year}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleYearSelect(year);
                      }}
                      className={cn(
                        "w-full text-left px-[16px] py-[8px] text-[13px] font-['Titillium_Web',sans-serif] transition-colors",
                        selectedYear === year
                          ? "bg-[#04b488] text-[#f2f5f7] font-semibold"
                          : "text-[#f2f5f7] hover:bg-[#1f2425]"
                      )}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Unit Toggle */}
          <div className="bg-[#1e2224] flex items-center p-[2px] rounded-full">
            {(['Km', 'Miles'] as const).map((u) => (
              <button
                key={u}
                onClick={() => onUnitChange(u)}
                className={cn(
                  "flex items-center justify-center px-[12px] py-[5px] rounded-full transition-all duration-200",
                  unit === u 
                    ? "bg-white text-[#060809]" 
                    : "bg-transparent text-[#989ea0] hover:text-[#f2f5f7]"
                )}
              >
                <span className="font-['Titillium_Web',sans-serif] font-semibold text-[13px] leading-[18px]">
                  {u}
                </span>
              </button>
            ))}
          </div>

          <div className="flex flex-col justify-center leading-[0] text-[#696e70] text-[14px] font-medium">
            <p className="leading-[18px]">•</p>
          </div>

          {/* Connection Controls */}
          <div className="flex gap-[8px] items-center">
            {/* {isDemo && (
              <div className="px-[10px] py-[5px] rounded-full bg-[#fc5200]/20 border border-[#fc5200]/50">
                <span className="text-[11px] font-medium text-[#fc5200] font-['Titillium_Web',sans-serif]">Demo</span>
              </div>
            )} */}
            
            {isOwnData ? (
              <button 
                onClick={onDisconnect}
                className="h-[32px] px-[16px] rounded-full flex items-center justify-center border border-[#44494b] hover:bg-[#1e2224] transition-colors"
              >
                <span className="font-['Titillium_Web',sans-serif] font-semibold text-[#f2f5f7] text-[13px] leading-[20px]">
                  Disconnect
                </span>
              </button>
            ) : (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button 
                      onClick={onConnect}
                      disabled
                      className="bg-[#44494b] h-[32px] px-[16px] rounded-full flex items-center justify-center cursor-not-allowed opacity-50 whitespace-nowrap"
                    >
                      <span className="font-['Titillium_Web',sans-serif] font-semibold text-[#f2f5f7] text-[13px] leading-[20px]">
                        Connect My Strava
                      </span>
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Coming Soon</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
