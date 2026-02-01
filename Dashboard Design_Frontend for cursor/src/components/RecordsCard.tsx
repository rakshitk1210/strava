import React from 'react';

interface RecordItemProps {
  label: string;
  value: string;
  unit: string;
}

function RecordItem({ label, value, unit }: RecordItemProps) {
  return (
    <div className="flex flex-col gap-[2px] items-start w-[168px] shrink-0">
      <p className="font-['Titillium_Web',sans-serif] font-semibold text-[14px] leading-[1.5] text-[#696e70] tracking-[-0.42px]">
        {label}
      </p>
      <p className="font-['Teko',sans-serif] font-bold text-[24px] leading-none text-[#f2f5f7] flex items-baseline gap-[4px]">
        {value}
        <span className="font-['Titillium_Web',sans-serif] font-semibold text-[14px] leading-[1.5] text-[#696e70] tracking-[-0.42px]">
          {unit}
        </span>
      </p>
    </div>
  );
}

export function RecordsCard() {
  return (
    <div className="bg-[rgba(21,24,25,0)] rounded-[0px] flex flex-col items-start gap-[24px] w-full h-full p-[0px]">
      {/* Header */}
      <div className="flex flex-col items-start w-full shrink-0">
        <p className="font-['Titillium_Web',sans-serif] font-semibold text-[14px] leading-[1.5] text-[#696e70] tracking-[-0.42px]">
          Effort
        </p>
        <div className="flex flex-col items-start w-full mb-[-2px]">
          <p className="font-['Titillium_Web',sans-serif] font-bold text-[24px] leading-[1.4] text-[#f2f5f7] tracking-[-0.72px]">
            Records
          </p>
        </div>
      </div>

      {/* List */}
      <div className="flex flex-col gap-[20px] items-start w-full">
        <RecordItem label="Best pace" value="5:37" unit="/km" />
        <RecordItem label="Most elevation" value="36.5" unit="mts" />
        <RecordItem label="Highest max speed" value="36.5" unit="km/hr" />
        <RecordItem label="Longest duration" value="2:55" unit="hrs" />
      </div>
    </div>
  );
}
