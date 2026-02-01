function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]">
      <div className="flex flex-col font-['Teko:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f2f5f7] text-[24px] w-full">
        <p className="css-4hzbpn leading-none">RUNNING TRENDS</p>
      </div>
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#696e70] text-[12px] tracking-[-0.36px] w-full">See how you’ve been doing</p>
    </div>
  );
}

function MiddleFrame() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="middle-frame">
      <p className="css-ew64yg font-['Groww_Sans_Variable:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#989ea0] text-[12px]">Elevation</p>
    </div>
  );
}

function PillContainer() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[99px] shrink-0" data-name="pill-container">
      <MiddleFrame />
    </div>
  );
}

function MdsPill() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="mds-pill">
      <PillContainer />
    </div>
  );
}

function MiddleFrame1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="middle-frame">
      <p className="css-ew64yg font-['Groww_Sans_Variable:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#989ea0] text-[12px]">Distance</p>
    </div>
  );
}

function PillContainer1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[99px] shrink-0" data-name="pill-container">
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
      <p className="css-ew64yg font-['Groww_Sans_Variable:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#f2f5f7] text-[12px]">Pace</p>
    </div>
  );
}

function PillContainer2() {
  return (
    <div className="bg-[#04b488] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[99px] shrink-0" data-name="pill-container">
      <div aria-hidden="true" className="absolute border border-[#04b488] border-solid inset-0 pointer-events-none rounded-[99px]" />
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

function Frame3() {
  return (
    <div className="bg-[#1e2224] content-stretch flex items-center p-[2px] relative rounded-[999px] shrink-0">
      <MdsPill />
      <MdsPill1 />
      <MdsPill2 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame />
      <Frame3 />
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

function Component8() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[123px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="01" />;
}

function Component9() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[83px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="02" />;
}

function Component10() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[144px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="03" />;
}

function Component11() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[123px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="04" />;
}

function Component12() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[14px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="05" />;
}

function Component13() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[168px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="06" />;
}

function Component14() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[77px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="07" />;
}

function Component15() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[14px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="08" />;
}

function Component16() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[95px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="09" />;
}

function Component17() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[77px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="10" />;
}

function Component18() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[14px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="11" />;
}

function Component19() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[95px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="12" />;
}

function Component20() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[77px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="13" />;
}

function Component21() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[14px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="14" />;
}

function Component22() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[144px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="15" />;
}

function Component23() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[77px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="16" />;
}

function Component24() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[52px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="17" />;
}

function Component25() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[106px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="18" />;
}

function Component26() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[123px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="19" />;
}

function Component27() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[83px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="20" />;
}

function Component28() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[144px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="21" />;
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[184px] items-end left-[55px] top-[16px]">
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
      <Component21 />
      <Component22 />
      <Component23 />
      <Component24 />
      <Component25 />
      <Component26 />
      <Component27 />
      <Component28 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="col-1 h-[221px] ml-0 mt-0 overflow-clip relative row-1 w-[984px]">
      <GridLinesInBack />
      <div className="absolute h-[176px] left-[39px] top-[24px] w-0" data-name="axis">
        <div className="absolute inset-[0_-0.5px]" style={{ "--stroke-0": "rgba(37, 42, 44, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 176">
            <path d="M0.5 0V176" id="axis" stroke="var(--stroke-0, #252A2C)" />
          </svg>
        </div>
      </div>
      <div className="absolute flex h-0 items-center justify-center left-[39px] top-[200px] w-[960px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-[960px] relative w-0" data-name="axis">
            <div className="absolute inset-[0_-0.5px]" style={{ "--stroke-0": "rgba(37, 42, 44, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 960">
                <path d="M0.5 0V960" id="axis" stroke="var(--stroke-0, #252A2C)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame6 />
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[31px] not-italic text-[#989ea0] text-[10px] text-right top-[60px] tracking-[-0.3px] translate-x-[-100%]">7:30</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[31px] not-italic text-[#989ea0] text-[10px] text-right top-[17px] tracking-[-0.3px] translate-x-[-100%]">10:30</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[31px] not-italic text-[#989ea0] text-[10px] text-right top-[103px] tracking-[-0.3px] translate-x-[-100%]">6:00</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[31px] not-italic text-[#989ea0] text-[10px] text-right top-[146px] tracking-[-0.3px] translate-x-[-100%]">5:30</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[31px] not-italic text-[#989ea0] text-[10px] text-right top-[189px] tracking-[-0.3px] translate-x-[-100%]">0:00</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[71px] not-italic text-[#989ea0] text-[10px] text-center top-[206px] tracking-[-0.3px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[115px] not-italic text-[#989ea0] text-[10px] text-center top-[206px] tracking-[-0.3px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[159px] not-italic text-[#989ea0] text-[10px] text-center top-[206px] tracking-[-0.3px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[203px] not-italic text-[#989ea0] text-[10px] text-center top-[206px] tracking-[-0.3px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[247px] not-italic text-[#989ea0] text-[10px] text-center top-[206px] tracking-[-0.3px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[291px] not-italic text-[#989ea0] text-[10px] text-center top-[206px] tracking-[-0.3px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[335px] not-italic text-[#989ea0] text-[10px] text-center top-[206px] tracking-[-0.3px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[379px] not-italic text-[#989ea0] text-[10px] text-center top-[206px] tracking-[-0.3px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[423px] not-italic text-[#989ea0] text-[10px] text-center top-[206px] tracking-[-0.3px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[467px] not-italic text-[#989ea0] text-[10px] text-center top-[206px] tracking-[-0.3px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[511px] not-italic text-[#989ea0] text-[10px] text-center top-[206px] tracking-[-0.3px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[555px] not-italic text-[#989ea0] text-[10px] text-center top-[206px] tracking-[-0.3px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[599px] not-italic text-[#989ea0] text-[10px] text-center top-[206px] tracking-[-0.3px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[643px] not-italic text-[#989ea0] text-[10px] text-center top-[206px] tracking-[-0.3px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[687px] not-italic text-[#989ea0] text-[10px] text-center top-[206px] tracking-[-0.3px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[731px] not-italic text-[#989ea0] text-[10px] text-center top-[206px] tracking-[-0.3px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[775px] not-italic text-[#989ea0] text-[10px] text-center top-[206px] tracking-[-0.3px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[819px] not-italic text-[#989ea0] text-[10px] text-center top-[206px] tracking-[-0.3px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[863px] not-italic text-[#989ea0] text-[10px] text-center top-[206px] tracking-[-0.3px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[907px] not-italic text-[#989ea0] text-[10px] text-center top-[206px] tracking-[-0.3px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[951px] not-italic text-[#989ea0] text-[10px] text-center top-[206px] tracking-[-0.3px] translate-x-[-50%]">12 Jun</p>
    </div>
  );
}

function FrameWithChart() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0 w-full" data-name="frame with chart">
      <Frame7 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <FrameWithChart />
    </div>
  );
}

function RunningTrendsComponent() {
  return (
    <div className="absolute bg-[#151819] content-stretch flex flex-col gap-[16px] items-start left-1/2 p-[24px] rounded-[16px] top-[87px] translate-x-[-50%] w-[1032px]" data-name="Running trends component">
      <Frame14 />
      <Frame9 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]">
      <div className="flex flex-col font-['Teko:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f2f5f7] text-[24px] w-full">
        <p className="css-4hzbpn leading-none">RUNNING TRENDS</p>
      </div>
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#696e70] text-[12px] tracking-[-0.36px] w-full">See how you’ve been doing</p>
    </div>
  );
}

function MiddleFrame3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="middle-frame">
      <p className="css-ew64yg font-['Groww_Sans_Variable:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#989ea0] text-[12px]">Elevation</p>
    </div>
  );
}

function PillContainer3() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[99px] shrink-0" data-name="pill-container">
      <MiddleFrame3 />
    </div>
  );
}

function MdsPill3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="mds-pill">
      <PillContainer3 />
    </div>
  );
}

function MiddleFrame4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="middle-frame">
      <p className="css-ew64yg font-['Groww_Sans_Variable:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#f2f5f7] text-[12px]">Distance</p>
    </div>
  );
}

function PillContainer4() {
  return (
    <div className="bg-[#ed5533] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[99px] shrink-0" data-name="pill-container">
      <div aria-hidden="true" className="absolute border border-[#ed5533] border-solid inset-0 pointer-events-none rounded-[99px]" />
      <MiddleFrame4 />
    </div>
  );
}

function MdsPill4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="mds-pill">
      <PillContainer4 />
    </div>
  );
}

function MiddleFrame5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="middle-frame">
      <p className="css-ew64yg font-['Groww_Sans_Variable:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#989ea0] text-[12px]">Pace</p>
    </div>
  );
}

function PillContainer5() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[99px] shrink-0" data-name="pill-container">
      <MiddleFrame5 />
    </div>
  );
}

function MdsPill5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="mds-pill">
      <PillContainer5 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#1e2224] content-stretch flex items-center p-[2px] relative rounded-[999px] shrink-0">
      <MdsPill3 />
      <MdsPill4 />
      <MdsPill5 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame1 />
      <Frame4 />
    </div>
  );
}

function HorizontalGrid1() {
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

function VerticalGrid1() {
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

function GridLinesInBack1() {
  return (
    <div className="absolute contents left-[39px] top-[24px]" data-name="Grid lines in back">
      <HorizontalGrid1 />
      <VerticalGrid1 />
    </div>
  );
}

function Component() {
  return <div className="bg-gradient-to-b from-[#ed5533] h-[123px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="01" />;
}

function Component1() {
  return <div className="bg-gradient-to-b from-[#ed5533] h-[83px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="02" />;
}

function Component2() {
  return <div className="bg-gradient-to-b from-[#ed5533] h-[144px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="03" />;
}

function Component3() {
  return <div className="bg-gradient-to-b from-[#ed5533] h-[123px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="04" />;
}

function Component4() {
  return <div className="bg-gradient-to-b from-[#ed5533] h-[14px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="05" />;
}

function Component5() {
  return <div className="bg-gradient-to-b from-[#ed5533] h-[168px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="06" />;
}

function Component6() {
  return <div className="bg-gradient-to-b from-[#ed5533] h-[77px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="07" />;
}

function Component7() {
  return <div className="bg-gradient-to-b from-[#ed5533] h-[14px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="08" />;
}

function Component29() {
  return <div className="bg-gradient-to-b from-[#ed5533] h-[95px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="09" />;
}

function Component30() {
  return <div className="bg-gradient-to-b from-[#ed5533] h-[77px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="10" />;
}

function Component31() {
  return <div className="bg-gradient-to-b from-[#ed5533] h-[14px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="11" />;
}

function Component32() {
  return <div className="bg-gradient-to-b from-[#ed5533] h-[95px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="12" />;
}

function Component33() {
  return <div className="bg-gradient-to-b from-[#ed5533] h-[77px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="13" />;
}

function Component34() {
  return <div className="bg-gradient-to-b from-[#ed5533] h-[14px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="14" />;
}

function Component35() {
  return <div className="bg-gradient-to-b from-[#ed5533] h-[144px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="15" />;
}

function Component36() {
  return <div className="bg-gradient-to-b from-[#ed5533] h-[77px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="16" />;
}

function Component37() {
  return <div className="bg-gradient-to-b from-[#ed5533] h-[52px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="17" />;
}

function Component38() {
  return <div className="bg-gradient-to-b from-[#ed5533] h-[106px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="18" />;
}

function Component39() {
  return <div className="bg-gradient-to-b from-[#ed5533] h-[123px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="19" />;
}

function Component40() {
  return <div className="bg-gradient-to-b from-[#ed5533] h-[83px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="20" />;
}

function Component41() {
  return <div className="bg-gradient-to-b from-[#ed5533] h-[144px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="21" />;
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
      <Component29 />
      <Component30 />
      <Component31 />
      <Component32 />
      <Component33 />
      <Component34 />
      <Component35 />
      <Component36 />
      <Component37 />
      <Component38 />
      <Component39 />
      <Component40 />
      <Component41 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="col-1 h-[221px] ml-0 mt-0 overflow-clip relative row-1 w-[984px]">
      <GridLinesInBack1 />
      <div className="absolute h-[176px] left-[39px] top-[24px] w-0" data-name="axis">
        <div className="absolute inset-[0_-0.5px]" style={{ "--stroke-0": "rgba(37, 42, 44, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 176">
            <path d="M0.5 0V176" id="axis" stroke="var(--stroke-0, #252A2C)" />
          </svg>
        </div>
      </div>
      <div className="absolute flex h-0 items-center justify-center left-[39px] top-[200px] w-[960px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-[960px] relative w-0" data-name="axis">
            <div className="absolute inset-[0_-0.5px]" style={{ "--stroke-0": "rgba(37, 42, 44, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 960">
                <path d="M0.5 0V960" id="axis" stroke="var(--stroke-0, #252A2C)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame8 />
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[31px] not-italic text-[#989ea0] text-[10px] text-right top-[60px] tracking-[-0.3px] translate-x-[-100%]">8km</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[31px] not-italic text-[#989ea0] text-[10px] text-right top-[17px] tracking-[-0.3px] translate-x-[-100%]">10km</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[31px] not-italic text-[#989ea0] text-[10px] text-right top-[103px] tracking-[-0.3px] translate-x-[-100%]">4km</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[31px] not-italic text-[#989ea0] text-[10px] text-right top-[146px] tracking-[-0.3px] translate-x-[-100%]">2km</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[31px] not-italic text-[#989ea0] text-[10px] text-right top-[189px] tracking-[-0.3px] translate-x-[-100%]">0km</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[71px] not-italic text-[#989ea0] text-[10px] text-center top-[206px] tracking-[-0.3px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[115px] not-italic text-[#989ea0] text-[10px] text-center top-[206px] tracking-[-0.3px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[159px] not-italic text-[#989ea0] text-[10px] text-center top-[206px] tracking-[-0.3px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[203px] not-italic text-[#989ea0] text-[10px] text-center top-[206px] tracking-[-0.3px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[247px] not-italic text-[#989ea0] text-[10px] text-center top-[206px] tracking-[-0.3px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[291px] not-italic text-[#989ea0] text-[10px] text-center top-[206px] tracking-[-0.3px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[335px] not-italic text-[#989ea0] text-[10px] text-center top-[206px] tracking-[-0.3px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[379px] not-italic text-[#989ea0] text-[10px] text-center top-[206px] tracking-[-0.3px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[423px] not-italic text-[#989ea0] text-[10px] text-center top-[206px] tracking-[-0.3px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[467px] not-italic text-[#989ea0] text-[10px] text-center top-[206px] tracking-[-0.3px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[511px] not-italic text-[#989ea0] text-[10px] text-center top-[206px] tracking-[-0.3px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[555px] not-italic text-[#989ea0] text-[10px] text-center top-[206px] tracking-[-0.3px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[599px] not-italic text-[#989ea0] text-[10px] text-center top-[206px] tracking-[-0.3px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[643px] not-italic text-[#989ea0] text-[10px] text-center top-[206px] tracking-[-0.3px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[687px] not-italic text-[#989ea0] text-[10px] text-center top-[206px] tracking-[-0.3px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[731px] not-italic text-[#989ea0] text-[10px] text-center top-[206px] tracking-[-0.3px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[775px] not-italic text-[#989ea0] text-[10px] text-center top-[206px] tracking-[-0.3px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[819px] not-italic text-[#989ea0] text-[10px] text-center top-[206px] tracking-[-0.3px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[863px] not-italic text-[#989ea0] text-[10px] text-center top-[206px] tracking-[-0.3px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[907px] not-italic text-[#989ea0] text-[10px] text-center top-[206px] tracking-[-0.3px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[951px] not-italic text-[#989ea0] text-[10px] text-center top-[206px] tracking-[-0.3px] translate-x-[-50%]">12 Jun</p>
    </div>
  );
}

function FrameWithChart1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0 w-full" data-name="frame with chart">
      <Frame10 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <FrameWithChart1 />
    </div>
  );
}

function RunningTrendsComponent1() {
  return (
    <div className="absolute bg-[#151819] content-stretch flex flex-col gap-[16px] items-start left-1/2 p-[24px] rounded-[16px] top-[474px] translate-x-[-50%] w-[1032px]" data-name="Running trends component">
      <Frame15 />
      <Frame11 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]">
      <div className="flex flex-col font-['Teko:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f2f5f7] text-[24px] w-full">
        <p className="css-4hzbpn leading-none">RUNNING TRENDS</p>
      </div>
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#696e70] text-[12px] tracking-[-0.36px] w-full">See how you’ve been doing</p>
    </div>
  );
}

function MiddleFrame6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="middle-frame">
      <p className="css-ew64yg font-['Groww_Sans_Variable:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#f2f5f7] text-[12px]">Elevation</p>
    </div>
  );
}

function PillContainer6() {
  return (
    <div className="bg-[#5e69ff] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[99px] shrink-0" data-name="pill-container">
      <div aria-hidden="true" className="absolute border border-[#5e69ff] border-solid inset-0 pointer-events-none rounded-[99px]" />
      <MiddleFrame6 />
    </div>
  );
}

function MdsPill6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="mds-pill">
      <PillContainer6 />
    </div>
  );
}

function MiddleFrame7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="middle-frame">
      <p className="css-ew64yg font-['Groww_Sans_Variable:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#989ea0] text-[12px]">Distance</p>
    </div>
  );
}

function PillContainer7() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[99px] shrink-0" data-name="pill-container">
      <MiddleFrame7 />
    </div>
  );
}

function MdsPill7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="mds-pill">
      <PillContainer7 />
    </div>
  );
}

function MiddleFrame8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="middle-frame">
      <p className="css-ew64yg font-['Groww_Sans_Variable:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#989ea0] text-[12px]">Pace</p>
    </div>
  );
}

function PillContainer8() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[99px] shrink-0" data-name="pill-container">
      <MiddleFrame8 />
    </div>
  );
}

function MdsPill8() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="mds-pill">
      <PillContainer8 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#1e2224] content-stretch flex items-center p-[2px] relative rounded-[999px] shrink-0">
      <MdsPill6 />
      <MdsPill7 />
      <MdsPill8 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame2 />
      <Frame5 />
    </div>
  );
}

function HorizontalGrid2() {
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

function VerticalGrid2() {
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

function GridLinesInBack2() {
  return (
    <div className="absolute contents left-[39px] top-[24px]" data-name="Grid lines in back">
      <HorizontalGrid2 />
      <VerticalGrid2 />
    </div>
  );
}

function Component42() {
  return <div className="bg-gradient-to-b from-[#5e69ff] h-[123px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="01" />;
}

function Component43() {
  return <div className="bg-gradient-to-b from-[#5e69ff] h-[83px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="02" />;
}

function Component44() {
  return <div className="bg-gradient-to-b from-[#5e69ff] h-[45px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="03" />;
}

function Component45() {
  return <div className="bg-gradient-to-b from-[#5e69ff] h-[38px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="04" />;
}

function Component46() {
  return <div className="bg-gradient-to-b from-[#5e69ff] h-[14px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="05" />;
}

function Component47() {
  return <div className="bg-gradient-to-b from-[#5e69ff] h-[168px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="06" />;
}

function Component48() {
  return <div className="bg-gradient-to-b from-[#5e69ff] h-[77px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="07" />;
}

function Component49() {
  return <div className="bg-gradient-to-b from-[#5e69ff] h-[14px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="08" />;
}

function Component50() {
  return <div className="bg-gradient-to-b from-[#5e69ff] h-[149px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="09" />;
}

function Component51() {
  return <div className="bg-gradient-to-b from-[#5e69ff] h-[121px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="10" />;
}

function Component52() {
  return <div className="bg-gradient-to-b from-[#5e69ff] h-[14px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="11" />;
}

function Component53() {
  return <div className="bg-gradient-to-b from-[#5e69ff] h-[149px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="12" />;
}

function Component54() {
  return <div className="bg-gradient-to-b from-[#5e69ff] h-[121px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="13" />;
}

function Component55() {
  return <div className="bg-gradient-to-b from-[#5e69ff] h-[14px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="14" />;
}

function Component56() {
  return <div className="bg-gradient-to-b from-[#5e69ff] h-[48px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="15" />;
}

function Component57() {
  return <div className="bg-gradient-to-b from-[#5e69ff] h-[77px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="16" />;
}

function Component58() {
  return <div className="bg-gradient-to-b from-[#5e69ff] h-[52px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="17" />;
}

function Component59() {
  return <div className="bg-gradient-to-b from-[#5e69ff] h-[106px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="18" />;
}

function Component60() {
  return <div className="bg-gradient-to-b from-[#5e69ff] h-[41px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="19" />;
}

function Component61() {
  return <div className="bg-gradient-to-b from-[#5e69ff] h-[83px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="20" />;
}

function Component62() {
  return <div className="bg-gradient-to-b from-[#5e69ff] h-[48px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="21" />;
}

function Frame12() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[184px] items-end left-[55px] top-[16px]">
      <Component42 />
      <Component43 />
      <Component44 />
      <Component45 />
      <Component46 />
      <Component47 />
      <Component48 />
      <Component49 />
      <Component50 />
      <Component51 />
      <Component52 />
      <Component53 />
      <Component54 />
      <Component55 />
      <Component56 />
      <Component57 />
      <Component58 />
      <Component59 />
      <Component60 />
      <Component61 />
      <Component62 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="col-1 h-[221px] ml-0 mt-0 overflow-clip relative row-1 w-[984px]">
      <GridLinesInBack2 />
      <div className="absolute h-[176px] left-[39px] top-[24px] w-0" data-name="axis">
        <div className="absolute inset-[0_-0.5px]" style={{ "--stroke-0": "rgba(37, 42, 44, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 176">
            <path d="M0.5 0V176" id="axis" stroke="var(--stroke-0, #252A2C)" />
          </svg>
        </div>
      </div>
      <div className="absolute flex h-0 items-center justify-center left-[39px] top-[200px] w-[960px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-[960px] relative w-0" data-name="axis">
            <div className="absolute inset-[0_-0.5px]" style={{ "--stroke-0": "rgba(37, 42, 44, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 960">
                <path d="M0.5 0V960" id="axis" stroke="var(--stroke-0, #252A2C)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame12 />
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[31px] not-italic text-[#989ea0] text-[10px] text-right top-[60px] tracking-[-0.3px] translate-x-[-100%]">100m</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[31px] not-italic text-[#989ea0] text-[10px] text-right top-[17px] tracking-[-0.3px] translate-x-[-100%]">132m</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[31px] not-italic text-[#989ea0] text-[10px] text-right top-[103px] tracking-[-0.3px] translate-x-[-100%]">80m</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[31px] not-italic text-[#989ea0] text-[10px] text-right top-[146px] tracking-[-0.3px] translate-x-[-100%]">40m</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[31px] not-italic text-[#989ea0] text-[10px] text-right top-[189px] tracking-[-0.3px] translate-x-[-100%]">0m</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[71px] not-italic text-[#989ea0] text-[10px] text-center top-[206px] tracking-[-0.3px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[115px] not-italic text-[#989ea0] text-[10px] text-center top-[206px] tracking-[-0.3px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[159px] not-italic text-[#989ea0] text-[10px] text-center top-[206px] tracking-[-0.3px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[203px] not-italic text-[#989ea0] text-[10px] text-center top-[206px] tracking-[-0.3px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[247px] not-italic text-[#989ea0] text-[10px] text-center top-[206px] tracking-[-0.3px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[291px] not-italic text-[#989ea0] text-[10px] text-center top-[206px] tracking-[-0.3px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[335px] not-italic text-[#989ea0] text-[10px] text-center top-[206px] tracking-[-0.3px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[379px] not-italic text-[#989ea0] text-[10px] text-center top-[206px] tracking-[-0.3px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[423px] not-italic text-[#989ea0] text-[10px] text-center top-[206px] tracking-[-0.3px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[467px] not-italic text-[#989ea0] text-[10px] text-center top-[206px] tracking-[-0.3px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[511px] not-italic text-[#989ea0] text-[10px] text-center top-[206px] tracking-[-0.3px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[555px] not-italic text-[#989ea0] text-[10px] text-center top-[206px] tracking-[-0.3px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[599px] not-italic text-[#989ea0] text-[10px] text-center top-[206px] tracking-[-0.3px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[643px] not-italic text-[#989ea0] text-[10px] text-center top-[206px] tracking-[-0.3px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[687px] not-italic text-[#989ea0] text-[10px] text-center top-[206px] tracking-[-0.3px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[731px] not-italic text-[#989ea0] text-[10px] text-center top-[206px] tracking-[-0.3px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[775px] not-italic text-[#989ea0] text-[10px] text-center top-[206px] tracking-[-0.3px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[819px] not-italic text-[#989ea0] text-[10px] text-center top-[206px] tracking-[-0.3px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[863px] not-italic text-[#989ea0] text-[10px] text-center top-[206px] tracking-[-0.3px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[907px] not-italic text-[#989ea0] text-[10px] text-center top-[206px] tracking-[-0.3px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[951px] not-italic text-[#989ea0] text-[10px] text-center top-[206px] tracking-[-0.3px] translate-x-[-50%]">12 Jun</p>
    </div>
  );
}

function FrameWithChart2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0 w-full" data-name="frame with chart">
      <Frame13 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <FrameWithChart2 />
    </div>
  );
}

function RunningTrendsComponent2() {
  return (
    <div className="absolute bg-[#151819] content-stretch flex flex-col gap-[16px] items-start left-1/2 p-[24px] rounded-[16px] top-[861px] translate-x-[-50%] w-[1032px]" data-name="Running trends component">
      <Frame16 />
      <Frame17 />
    </div>
  );
}

export default function RunningTrendsFrameThatCarriesComponents() {
  return (
    <div className="bg-[#060809] relative size-full" data-name="Running trends frame that carries components">
      <RunningTrendsComponent />
      <RunningTrendsComponent1 />
      <RunningTrendsComponent2 />
    </div>
  );
}