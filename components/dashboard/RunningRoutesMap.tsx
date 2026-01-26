import React from 'react';

// Placeholder component - will be replaced with actual RunsMap
export function RunningRoutesMap() {
  return (
    <div className="bg-[#151819] flex flex-col gap-[24px] items-start p-[24px] pt-[16px] relative rounded-[16px] w-full h-full" data-name="Map component">
      {/* Header */}
      <div className="flex flex-col items-start pb-[2px] pt-0 px-0 relative shrink-0 w-full">
        <div className="flex flex-col justify-center leading-[0] mb-[-2px] relative shrink-0 text-[#f2f5f7]">
          <p className="font-['Titillium_Web',sans-serif] font-bold text-[20px] leading-[1.4] tracking-[-0.6px]">
            Running routes
          </p>
        </div>
        <p className="font-['Titillium_Web',sans-serif] font-semibold leading-[1.5] min-w-full not-italic relative shrink-0 text-[#696e70] text-[14px] tracking-[-0.42px]">
          Click on the routes to know more details
        </p>
      </div>

      {/* Map Placeholder */}
      <div className="flex-1 w-full overflow-hidden relative rounded-[12px] bg-[#0e1111] flex items-center justify-center">
        <p className="text-[#696e70] text-sm">Map will appear here</p>
      </div>
    </div>
  );
}
