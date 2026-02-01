import React from 'react';
import imgScreenshot from "figma:asset/8f2d3b7405a75b378cd3c608b63ab99c103da347.png";

export function RunningRoutesMap() {
  return (
    <div className="bg-[rgba(21,24,25,0)] flex flex-col gap-[24px] items-start relative rounded-[16px] w-full h-full p-[0px]" data-name="Map component">
      {/* Header */}
      <div className="flex flex-col items-start pb-[2px] pt-0 px-0 relative shrink-0 w-full">
        <p className="font-['Titillium_Web',sans-serif] font-semibold leading-[1.5] min-w-full not-italic relative shrink-0 text-[#696e70] text-[14px] tracking-[-0.42px] w-[min-content] whitespace-pre-wrap">
          Map
        </p>
        <p className="font-['Titillium_Web',sans-serif] font-bold text-[24px] leading-[1.4] relative shrink-0 text-[#f2f5f7] tracking-[-0.72px]">
          Running routes
        </p>
      </div>

      {/* Map Frame */}
      <div className="flex-[1_0_0] min-h-px min-w-px overflow-clip relative w-full rounded-[0px]">
        <div className="-translate-x-1/2 absolute aspect-[1462/569] bottom-[-28.23%] left-[calc(50%-0.4px)] top-[-28.49%]" data-name="Screenshot 2026-01-14 at 4.29.51 PM 3">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="Running Routes Map" className="absolute h-[196.31%] left-[-9.1%] max-w-none top-[-79.96%] w-[118.19%]" src={imgScreenshot} />
          </div>
        </div>
      </div>
    </div>
  );
}
