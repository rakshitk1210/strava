function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic pb-[2px] relative shrink-0 w-[240px] whitespace-pre-wrap">
      <p className="font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] relative shrink-0 text-[#696e70] text-[14px] tracking-[-0.42px] w-full">{`Diligence `}</p>
      <p className="font-['Titillium_Web:Bold',sans-serif] leading-[1.4] relative shrink-0 text-[#f2f5f7] text-[24px] tracking-[-0.72px] w-full">Running trends</p>
    </div>
  );
}

function MiddleFrame() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="middle-frame">
      <p className="font-['Titillium_Web:SemiBold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#060809] text-[14px] tracking-[-0.42px]">Pace</p>
    </div>
  );
}

function PillContainer() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[99px] shrink-0" data-name="pill-container">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[99px]" />
      <MiddleFrame />
    </div>
  );
}

function MdsPill() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[6px] shrink-0" data-name="mds-pill">
      <PillContainer />
    </div>
  );
}

function MiddleFrame1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="middle-frame">
      <p className="font-['Titillium_Web:SemiBold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#989ea0] text-[14px] tracking-[-0.42px]">Distance</p>
    </div>
  );
}

function PillContainer1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[4px] shrink-0" data-name="pill-container">
      <MiddleFrame1 />
    </div>
  );
}

function MdsPill1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="mds-pill">
      <PillContainer1 />
    </div>
  );
}

function MiddleFrame2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="middle-frame">
      <p className="font-['Titillium_Web:SemiBold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#989ea0] text-[14px] tracking-[-0.42px]">Elevation</p>
    </div>
  );
}

function PillContainer2() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[4px] shrink-0" data-name="pill-container">
      <MiddleFrame2 />
    </div>
  );
}

function MdsPill2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="mds-pill">
      <PillContainer2 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#1e2224] content-stretch flex items-center p-[2px] relative rounded-[99px] shrink-0">
      <MdsPill />
      <MdsPill1 />
      <MdsPill2 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame />
      <Frame2 />
    </div>
  );
}

function HorizontalGrid() {
  return (
    <div className="absolute h-[176px] left-[39px] top-[24px] w-px" data-name="Horizontal grid">
      <div className="absolute inset-[-0.28%_-95900%_-0.28%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 960 177">
          <g id="Horizontal grid">
            <path d="M960 0.5L0 0.5" id="Vector 88" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M960 16.5L0 16.5" id="Vector 87" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M960 32.5L0 32.5" id="Vector 86" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M960 48.5L0 48.5" id="Vector 85" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M960 64.5L0 64.5" id="Vector 84" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M960 80.5L0 80.5" id="Vector 83" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M960 96.5L0 96.5" id="Vector 82" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M960 112.5L0 112.5" id="Vector 81" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M960 128.5L0 128.5" id="Vector 80" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M960 144.5L0 144.5" id="Vector 89" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M960 160.5L0 160.5" id="Vector 90" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M960 176.5L0 176.5" id="Vector 79" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function VerticalGrid() {
  return (
    <div className="absolute h-[176px] left-[39px] top-[24px] w-[960px]" data-name="Vertical grid">
      <div className="absolute inset-[0_-0.05%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 961 176">
          <g id="Vertical grid">
            <path d="M0.5 0V176" id="Vector 18" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M16.5 0V176" id="Vector 19" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M32.5 0V176" id="Vector 20" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M48.5 0V176" id="Vector 21" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M64.5 0V176" id="Vector 22" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M80.5 0V176" id="Vector 23" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M96.5 0V176" id="Vector 24" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M112.5 0V176" id="Vector 25" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M128.5 0V176" id="Vector 26" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M144.5 0V176" id="Vector 27" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M160.5 0V176" id="Vector 28" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M176.5 0V176" id="Vector 29" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M192.5 0V176" id="Vector 30" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M208.5 0V176" id="Vector 31" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M224.5 0V176" id="Vector 32" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M240.5 0V176" id="Vector 33" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M256.5 0V176" id="Vector 34" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M272.5 0V176" id="Vector 35" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M288.5 0V176" id="Vector 36" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M304.5 0V176" id="Vector 37" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M320.5 0V176" id="Vector 38" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M336.5 0V176" id="Vector 39" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M352.5 0V176" id="Vector 40" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M368.5 0V176" id="Vector 41" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M384.5 0V176" id="Vector 42" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M400.5 0V176" id="Vector 43" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M416.5 0V176" id="Vector 44" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M432.5 0V176" id="Vector 45" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M448.5 0V176" id="Vector 46" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M464.5 0V176" id="Vector 47" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M480.5 0V176" id="Vector 48" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M496.5 0V176" id="Vector 49" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M512.5 0V176" id="Vector 50" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M528.5 0V176" id="Vector 51" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M544.5 0V176" id="Vector 52" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M560.5 0V176" id="Vector 53" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M576.5 0V176" id="Vector 54" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M592.5 0V176" id="Vector 55" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M608.5 0V176" id="Vector 56" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M624.5 0V176" id="Vector 57" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M640.5 0V176" id="Vector 58" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M656.5 0V176" id="Vector 59" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M672.5 0V176" id="Vector 60" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M688.5 0V176" id="Vector 61" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M704.5 0V176" id="Vector 62" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M720.5 0V176" id="Vector 63" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M736.5 0V176" id="Vector 64" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M752.5 0V176" id="Vector 65" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M768.5 0V176" id="Vector 66" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M784.5 0V176" id="Vector 67" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M800.5 0V176" id="Vector 68" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M816.5 0V176" id="Vector 69" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M832.5 0V176" id="Vector 70" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M848.5 0V176" id="Vector 71" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M864.5 0V176" id="Vector 72" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M880.5 0V176" id="Vector 73" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M896.5 0V176" id="Vector 74" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M912.5 0V176" id="Vector 75" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M928.5 0V176" id="Vector 76" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M944.5 0V176" id="Vector 77" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
            <path d="M960.5 0V176" id="Vector 79" opacity="0.5" stroke="var(--stroke-0, #1E2224)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function GridLinesInBack() {
  return (
    <div className="absolute contents left-[39px] top-[24px]" data-name="Grid lines in back">
      <HorizontalGrid />
      <VerticalGrid />
    </div>
  );
}

function Component() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[123px] rounded-[4px] shrink-0 to-[122.36%] to-[rgba(4,180,136,0)] w-[32px]" data-name="01" />;
}

function Component1() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[83px] rounded-[4px] shrink-0 to-[122.36%] to-[rgba(4,180,136,0)] w-[32px]" data-name="02" />;
}

function Component2() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[144px] rounded-[4px] shrink-0 to-[122.36%] to-[rgba(4,180,136,0)] w-[32px]" data-name="03" />;
}

function Component3() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[123px] rounded-[4px] shrink-0 to-[122.36%] to-[rgba(4,180,136,0)] w-[32px]" data-name="04" />;
}

function Component4() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[14px] rounded-[4px] shrink-0 to-[122.36%] to-[rgba(4,180,136,0)] w-[32px]" data-name="05" />;
}

function Component5() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[168px] rounded-[4px] shrink-0 to-[122.36%] to-[rgba(4,180,136,0)] w-[32px]" data-name="06" />;
}

function Component6() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[77px] rounded-[4px] shrink-0 to-[122.36%] to-[rgba(4,180,136,0)] w-[32px]" data-name="07" />;
}

function Component7() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[14px] rounded-[4px] shrink-0 to-[122.36%] to-[rgba(4,180,136,0)] w-[32px]" data-name="08" />;
}

function Component8() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[95px] rounded-[4px] shrink-0 to-[122.36%] to-[rgba(4,180,136,0)] w-[32px]" data-name="09" />;
}

function Component9() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[77px] rounded-[4px] shrink-0 to-[122.36%] to-[rgba(4,180,136,0)] w-[32px]" data-name="10" />;
}

function Component10() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[14px] rounded-[4px] shrink-0 to-[122.36%] to-[rgba(4,180,136,0)] w-[32px]" data-name="11" />;
}

function Component11() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[95px] rounded-[4px] shrink-0 to-[122.36%] to-[rgba(4,180,136,0)] w-[32px]" data-name="12" />;
}

function Component12() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[77px] rounded-[4px] shrink-0 to-[122.36%] to-[rgba(4,180,136,0)] w-[32px]" data-name="13" />;
}

function Component13() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[14px] rounded-[4px] shrink-0 to-[122.36%] to-[rgba(4,180,136,0)] w-[32px]" data-name="14" />;
}

function Component14() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[144px] rounded-[4px] shrink-0 to-[122.36%] to-[rgba(4,180,136,0)] w-[32px]" data-name="15" />;
}

function Component15() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[77px] rounded-[4px] shrink-0 to-[122.36%] to-[rgba(4,180,136,0)] w-[32px]" data-name="16" />;
}

function Component16() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[52px] rounded-[4px] shrink-0 to-[122.36%] to-[rgba(4,180,136,0)] w-[32px]" data-name="17" />;
}

function Component17() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[106px] rounded-[4px] shrink-0 to-[122.36%] to-[rgba(4,180,136,0)] w-[32px]" data-name="18" />;
}

function Component18() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[123px] rounded-[4px] shrink-0 to-[122.36%] to-[rgba(4,180,136,0)] w-[32px]" data-name="19" />;
}

function Component19() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[83px] rounded-[4px] shrink-0 to-[122.36%] to-[rgba(4,180,136,0)] w-[32px]" data-name="20" />;
}

function Component20() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[144px] rounded-[4px] shrink-0 to-[122.36%] to-[rgba(4,180,136,0)] w-[32px]" data-name="21" />;
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[184px] items-end left-[55px] top-[16px]">
      <Component />
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
      <Component5 />
      <Component6 />
      <Component7 />
      <Component8 />
      <Component9 />
      <Component10 />
      <Component11 />
      <Component12 />
      <Component13 />
      <Component14 />
      <Component15 />
      <Component16 />
      <Component17 />
      <Component18 />
      <Component19 />
      <Component20 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="col-1 h-[221px] ml-0 mt-0 overflow-clip relative row-1 w-[819.2px]">
      <GridLinesInBack />
      <div className="absolute h-[176px] left-[39px] top-[24px] w-0" data-name="axis">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 176">
            <path d="M0.5 0V176" id="axis" stroke="var(--stroke-0, #252A2C)" />
          </svg>
        </div>
      </div>
      <div className="absolute flex h-0 items-center justify-center left-[39px] top-[200px] w-[960px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-[960px] relative w-0" data-name="axis">
            <div className="absolute inset-[0_-0.5px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 960">
                <path d="M0.5 0V960" id="axis" stroke="var(--stroke-0, #252A2C)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame8 />
      <p className="absolute font-['Titillium_Web:Regular',sans-serif] leading-[1.5] left-[5px] not-italic text-[#989ea0] text-[12px] top-[61px] tracking-[-0.36px]">7:30</p>
      <p className="absolute font-['Titillium_Web:Regular',sans-serif] leading-[1.5] left-[5px] not-italic text-[#989ea0] text-[12px] top-[19px] tracking-[-0.36px]">10:30</p>
      <p className="absolute font-['Titillium_Web:Regular',sans-serif] leading-[1.5] left-[5px] not-italic text-[#989ea0] text-[12px] top-[103px] tracking-[-0.36px]">6:00</p>
      <p className="absolute font-['Titillium_Web:Regular',sans-serif] leading-[1.5] left-[5px] not-italic text-[#989ea0] text-[12px] top-[145px] tracking-[-0.36px]">5:30</p>
      <p className="absolute font-['Titillium_Web:Regular',sans-serif] leading-[1.5] left-[5px] not-italic text-[#989ea0] text-[12px] top-[187px] tracking-[-0.36px]">0:00</p>
      <p className="-translate-x-1/2 absolute font-['Titillium_Web:Regular',sans-serif] leading-[1.5] left-[71.5px] not-italic text-[#989ea0] text-[12px] text-center top-[206px] tracking-[-0.36px]">12 Jun</p>
      <p className="-translate-x-1/2 absolute font-['Titillium_Web:Regular',sans-serif] leading-[1.5] left-[115.5px] not-italic text-[#989ea0] text-[12px] text-center top-[206px] tracking-[-0.36px]">12 Jun</p>
      <p className="-translate-x-1/2 absolute font-['Titillium_Web:Regular',sans-serif] leading-[1.5] left-[159.5px] not-italic text-[#989ea0] text-[12px] text-center top-[206px] tracking-[-0.36px]">12 Jun</p>
      <p className="-translate-x-1/2 absolute font-['Titillium_Web:Regular',sans-serif] leading-[1.5] left-[203.5px] not-italic text-[#989ea0] text-[12px] text-center top-[206px] tracking-[-0.36px]">12 Jun</p>
      <p className="-translate-x-1/2 absolute font-['Titillium_Web:Regular',sans-serif] leading-[1.5] left-[247.5px] not-italic text-[#989ea0] text-[12px] text-center top-[206px] tracking-[-0.36px]">12 Jun</p>
      <p className="-translate-x-1/2 absolute font-['Titillium_Web:Regular',sans-serif] leading-[1.5] left-[291.5px] not-italic text-[#989ea0] text-[12px] text-center top-[206px] tracking-[-0.36px]">12 Jun</p>
      <p className="-translate-x-1/2 absolute font-['Titillium_Web:Regular',sans-serif] leading-[1.5] left-[335.5px] not-italic text-[#989ea0] text-[12px] text-center top-[206px] tracking-[-0.36px]">12 Jun</p>
      <p className="-translate-x-1/2 absolute font-['Titillium_Web:Regular',sans-serif] leading-[1.5] left-[379.5px] not-italic text-[#989ea0] text-[12px] text-center top-[206px] tracking-[-0.36px]">12 Jun</p>
      <p className="-translate-x-1/2 absolute font-['Titillium_Web:Regular',sans-serif] leading-[1.5] left-[423.5px] not-italic text-[#989ea0] text-[12px] text-center top-[206px] tracking-[-0.36px]">12 Jun</p>
      <p className="-translate-x-1/2 absolute font-['Titillium_Web:Regular',sans-serif] leading-[1.5] left-[467.5px] not-italic text-[#989ea0] text-[12px] text-center top-[206px] tracking-[-0.36px]">12 Jun</p>
      <p className="-translate-x-1/2 absolute font-['Titillium_Web:Regular',sans-serif] leading-[1.5] left-[511.5px] not-italic text-[#989ea0] text-[12px] text-center top-[206px] tracking-[-0.36px]">12 Jun</p>
      <p className="-translate-x-1/2 absolute font-['Titillium_Web:Regular',sans-serif] leading-[1.5] left-[555.5px] not-italic text-[#989ea0] text-[12px] text-center top-[206px] tracking-[-0.36px]">12 Jun</p>
      <p className="-translate-x-1/2 absolute font-['Titillium_Web:Regular',sans-serif] leading-[1.5] left-[599.5px] not-italic text-[#989ea0] text-[12px] text-center top-[206px] tracking-[-0.36px]">12 Jun</p>
      <p className="-translate-x-1/2 absolute font-['Titillium_Web:Regular',sans-serif] leading-[1.5] left-[643.5px] not-italic text-[#989ea0] text-[12px] text-center top-[206px] tracking-[-0.36px]">12 Jun</p>
      <p className="-translate-x-1/2 absolute font-['Titillium_Web:Regular',sans-serif] leading-[1.5] left-[687.5px] not-italic text-[#989ea0] text-[12px] text-center top-[206px] tracking-[-0.36px]">12 Jun</p>
      <p className="-translate-x-1/2 absolute font-['Titillium_Web:Regular',sans-serif] leading-[1.5] left-[731.5px] not-italic text-[#989ea0] text-[12px] text-center top-[206px] tracking-[-0.36px]">12 Jun</p>
      <p className="-translate-x-1/2 absolute font-['Titillium_Web:Regular',sans-serif] leading-[1.5] left-[775.5px] not-italic text-[#989ea0] text-[12px] text-center top-[206px] tracking-[-0.36px]">12 Jun</p>
      <p className="-translate-x-1/2 absolute font-['Titillium_Web:Regular',sans-serif] leading-[1.5] left-[819.5px] not-italic text-[#989ea0] text-[12px] text-center top-[206px] tracking-[-0.36px]">12 Jun</p>
      <p className="-translate-x-1/2 absolute font-['Titillium_Web:Regular',sans-serif] leading-[1.5] left-[863.5px] not-italic text-[#989ea0] text-[12px] text-center top-[206px] tracking-[-0.36px]">12 Jun</p>
      <p className="-translate-x-1/2 absolute font-['Titillium_Web:Regular',sans-serif] leading-[1.5] left-[907.5px] not-italic text-[#989ea0] text-[12px] text-center top-[206px] tracking-[-0.36px]">12 Jun</p>
      <p className="-translate-x-1/2 absolute font-['Titillium_Web:Regular',sans-serif] leading-[1.5] left-[951.5px] not-italic text-[#989ea0] text-[12px] text-center top-[206px] tracking-[-0.36px]">12 Jun</p>
    </div>
  );
}

function FrameWithChart() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0 w-full" data-name="frame with chart">
      <Frame9 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#252a2c] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[24px] relative w-full">
          <FrameWithChart />
        </div>
      </div>
    </div>
  );
}

function RunningTrendsComponent() {
  return (
    <div className="/ 4] col-[2 content-stretch css-vsca90 flex flex-col gap-[24px] items-start relative rounded-[8px] row-[1] self-start shrink-0 span" data-name="Running trends component">
      <Frame11 />
      <Frame10 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-2px] relative shrink-0 w-full">
      <p className="font-['Titillium_Web:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#f2f5f7] text-[24px] tracking-[-0.72px] w-full whitespace-pre-wrap">Records</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[2px] relative shrink-0 w-full">
      <p className="font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#696e70] text-[14px] tracking-[-0.42px] w-full whitespace-pre-wrap">Effort</p>
      <Frame1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-[168px]">
      <p className="font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#696e70] text-[14px] tracking-[-0.42px]">Best pace</p>
      <p className="font-['Teko:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#f2f5f7] text-[0px]">
        <span className="leading-none text-[24px]">5:37</span>
        <span className="font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic text-[#696e70] text-[14px] tracking-[-0.42px]">/km</span>
      </p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-[168px]">
      <p className="font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#696e70] text-[14px] tracking-[-0.42px]">Most elevation</p>
      <p className="font-['Teko:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#f2f5f7] text-[0px]">
        <span className="leading-none text-[24px]">{`36.5 `}</span>
        <span className="font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic text-[#696e70] text-[14px] tracking-[-0.42px]">mts</span>
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-[168px]">
      <p className="font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#696e70] text-[14px] tracking-[-0.42px]">Highest max speed</p>
      <p className="font-['Teko:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#f2f5f7] text-[0px]">
        <span className="leading-none text-[24px]">{`36.5 `}</span>
        <span className="font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic text-[#696e70] text-[14px] tracking-[-0.42px]">km/hr</span>
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-[168px]">
      <p className="font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#696e70] text-[14px] tracking-[-0.42px]">Longest duration</p>
      <p className="font-['Teko:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#f2f5f7] text-[0px]">
        <span className="leading-none text-[24px]">{`2:55 `}</span>
        <span className="font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic text-[#696e70] text-[14px] tracking-[-0.42px]">hrs</span>
      </p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px min-w-px relative w-full">
      <Frame4 />
      <Frame7 />
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="col-[1] content-stretch css-vsca90 flex flex-col gap-[24px] items-start relative rounded-[8px] row-[1] self-stretch shrink-0">
      <Frame13 />
      <Frame12 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute gap-[16px] gap-[32px] grid grid-cols-[repeat(5,_minmax(0,_1fr))] grid-rows-[repeat(1,_fit-content(100%))] left-0 max-w-[1440px] px-[64px] py-[32px] top-0 w-[1200px]">
      <RunningTrendsComponent />
      <Frame3 />
    </div>
  );
}

export default function StravaDashboardXRecordsAndTrends() {
  return (
    <div className="bg-[#060809] relative size-full" data-name="Strava dashboard x Records and trends">
      <Frame14 />
    </div>
  );
}