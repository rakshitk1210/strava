import React from 'react';

export function DashboardFooter() {
  return (
    <div className="w-full relative bg-[#060809] pt-[120px] pb-[120px] overflow-hidden flex flex-col items-center">
      {/* Large Gradient Text */}
      <div className="w-full flex justify-center items-center px-0">
        <h1 
          className="font-['Teko',sans-serif] font-semibold text-[80px] md:text-[120px] lg:text-[173px] leading-[0.85] text-center tracking-[-0.03em] select-none uppercase whitespace-nowrap"
          style={{ 
             background: "linear-gradient(180deg, #494949 20.19%, #060809 66.94%)",
             WebkitBackgroundClip: "text",
             WebkitTextFillColor: "transparent",
             backgroundClip: "text",
          }}
        >
          RUNNING IS A PRIVILEGE
        </h1>
      </div>

      {/* Bottom Info */}
      <div className="w-full max-w-[1316px] mx-auto px-[0px] md:px-[0px] lg:px-[0px] mt-0 flex flex-col md:flex-row justify-between items-center gap-[0px]">
        <p className="font-['Titillium_Web',sans-serif] font-semibold text-[#989ea0] text-[14px] tracking-[-0.42px] md:text-left">
          Design & built by Rakshit
        </p>
        <p className="font-['Titillium_Web',sans-serif] font-semibold text-[#989ea0] text-[14px] tracking-[-0.42px]">
          www.rakshit.design
        </p>
        <p className="font-['Titillium_Web',sans-serif] font-semibold text-[#989ea0] text-[14px] tracking-[-0.42px] text-center md:text-right">
          Built with Cursor • Hosted on Vercel
        </p>
      </div>
    </div>
  );
}
