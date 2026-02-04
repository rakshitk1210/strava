import React from 'react';

export function DashboardFooter() {
  return (
    <div className="w-full relative bg-[#060809] pt-[60px] md:pt-[90px] lg:pt-[120px] pb-[60px] md:pb-[90px] lg:pb-[120px] overflow-hidden flex flex-col items-center px-[16px] md:px-[32px] lg:px-[64px]">
      {/* Large Gradient Text */}
      <div className="w-full flex justify-center items-center px-0">
        <h1 
          className="font-['Teko',sans-serif] font-semibold text-[56px] sm:text-[80px] md:text-[100px] lg:text-[140px] xl:text-[173px] leading-[0.85] text-center tracking-[-0.03em] select-none uppercase"
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
      <div className="w-full max-w-[1316px] mx-auto px-[0px] md:px-[0px] lg:px-[0px] mt-[24px] md:mt-[32px] lg:mt-0 flex flex-col md:flex-row justify-between items-center gap-[12px] md:gap-[16px]">
        <p className="font-['Titillium_Web',sans-serif] font-semibold text-[#989ea0] text-[12px] md:text-[13px] lg:text-[14px] tracking-[-0.42px] text-center md:text-left">
          Design & built by Rakshit
        </p>
        <p className="font-['Titillium_Web',sans-serif] font-semibold text-[#989ea0] text-[12px] md:text-[13px] lg:text-[14px] tracking-[-0.42px] text-center">
          www.rakshit.design
        </p>
        <p className="font-['Titillium_Web',sans-serif] font-semibold text-[#989ea0] text-[12px] md:text-[13px] lg:text-[14px] tracking-[-0.42px] text-center md:text-right">
          Built with Cursor • Hosted on Vercel
        </p>
      </div>
    </div>
  );
}
