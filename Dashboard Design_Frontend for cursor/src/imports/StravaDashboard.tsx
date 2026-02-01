import svgPaths from "./svg-um09nulttd";
import imgScreenshot20260114At42951Pm3 from "figma:asset/8f2d3b7405a75b378cd3c608b63ab99c103da347.png";

function Frame10() {
  return (
    <div className="bg-[#04b488] overflow-clip relative rounded-[1598.4px] shrink-0 size-[40px]">
      <div className="absolute css-g0mm18 flex flex-col font-['Titillium_Web:Bold',sans-serif] justify-center leading-[0] left-[calc(50%-7.5px)] not-italic text-[#f2f5f7] text-[24px] top-[calc(50%-1px)] translate-y-[-50%]">
        <p className="css-ew64yg leading-none">R</p>
      </div>
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center not-italic relative shrink-0">
      <div className="flex flex-col font-['Titillium_Web:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[#f2f5f7] text-[24px] w-[240px]">
        <p className="css-4hzbpn leading-none">Rakshit’s running dash</p>
      </div>
      <p className="css-4hzbpn font-['Titillium_Web:SemiBold',sans-serif] leading-[1.4] min-w-full relative shrink-0 text-[#696e70] text-[14px] w-[min-content]">Last updated 19 Jan’26</p>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame10 />
      <Frame62 />
    </div>
  );
}

function MiddleFrame() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="middle-frame">
      <p className="css-ew64yg font-['Titillium_Web:SemiBold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#989ea0] text-[14px] tracking-[-0.42px]">Month</p>
    </div>
  );
}

function PillContainer() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[4px] shrink-0" data-name="pill-container">
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
      <p className="css-ew64yg font-['Titillium_Web:SemiBold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#060809] text-[12px] tracking-[-0.36px]">Year</p>
    </div>
  );
}

function PillContainer1() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[99px] shrink-0" data-name="pill-container">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[99px]" />
      <MiddleFrame1 />
    </div>
  );
}

function MdsPill1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[6px] shrink-0" data-name="mds-pill">
      <PillContainer1 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#151819] content-stretch flex items-center p-[2px] relative rounded-[99px] shrink-0">
      <MdsPill />
      <MdsPill1 />
    </div>
  );
}

function MiddleFrame2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="middle-frame">
      <p className="css-ew64yg font-['Titillium_Web:SemiBold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#060809] text-[14px] tracking-[-0.42px]">Km</p>
    </div>
  );
}

function PillContainer2() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[99px] shrink-0" data-name="pill-container">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[99px]" />
      <MiddleFrame2 />
    </div>
  );
}

function MdsPill2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[6px] shrink-0" data-name="mds-pill">
      <PillContainer2 />
    </div>
  );
}

function MiddleFrame3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="middle-frame">
      <p className="css-ew64yg font-['Titillium_Web:SemiBold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#989ea0] text-[14px] tracking-[-0.42px]">Miles</p>
    </div>
  );
}

function PillContainer3() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[4px] shrink-0" data-name="pill-container">
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

function Frame12() {
  return (
    <div className="bg-[#151819] content-stretch flex items-center p-[2px] relative rounded-[99px] shrink-0">
      <MdsPill2 />
      <MdsPill3 />
    </div>
  );
}

function ButtonLabelFrame() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="button-label-frame">
      <p className="css-ew64yg font-['Titillium_Web:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f2f5f7] text-[14px]">Connect Strava</p>
    </div>
  );
}

function ButtonContainer() {
  return (
    <div className="bg-[#fc5200] h-[40px] relative rounded-[99px] shrink-0 w-full" data-name="button-container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative size-full">
          <ButtonLabelFrame />
        </div>
      </div>
    </div>
  );
}

function MdsButtonPrimaryButton() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-center justify-center relative shrink-0" data-name="mds-button/primary-button">
      <ButtonContainer />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame13 />
      <Frame12 />
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#696e70] text-[14px] tracking-[-0.42px]">
        <p className="css-ew64yg leading-[18px]">•</p>
      </div>
      <MdsButtonPrimaryButton />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame41 />
      <Frame40 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="max-w-[1440px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start max-w-[inherit] pb-[24px] pt-[32px] px-[64px] relative w-full">
        <Frame42 />
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex gap-px items-baseline mb-[-4px] relative shrink-0 w-full">
      <p className="css-ew64yg font-['Teko:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[#f2f5f7] text-[56px]">7:01</p>
      <p className="css-ew64yg font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#696e70] text-[14px] tracking-[-0.42px]">/km</p>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] pt-0 px-0 relative shrink-0 w-[99px]">
      <p className="css-4hzbpn font-['Titillium_Web:SemiBold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#696e70] text-[14px] w-full">Average pace</p>
      <Frame45 />
    </div>
  );
}

function Group() {
  return (
    <div className="h-[50px] relative shrink-0 w-full">
      <div className="absolute inset-[-1.08%_-0.4%_0_-0.16%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 212.384 50.5408">
          <g id="Group 33">
            <path d={svgPaths.pdcb6a00} fill="url(#paint0_linear_43_9562)" id="Vector 94" />
            <path d={svgPaths.p33ea1680} id="Vector 95" stroke="var(--stroke-0, #04B488)" strokeWidth="2" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_43_9562" x1="105.943" x2="105.943" y1="0.540796" y2="50.5408">
              <stop stopColor="#04B488" stopOpacity="0.3" />
              <stop offset="1" stopColor="#04B488" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[148px] items-start justify-between min-h-px min-w-px relative rounded-[16px]">
      <Frame46 />
      <Group />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex gap-px items-baseline mb-[-4px] relative shrink-0 w-full">
      <p className="css-ew64yg font-['Teko:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[#f2f5f7] text-[56px]">347</p>
      <p className="css-ew64yg font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#696e70] text-[14px] tracking-[-0.42px]">km</p>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] pt-0 px-0 relative shrink-0 w-[99px]">
      <p className="css-4hzbpn font-['Titillium_Web:SemiBold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#696e70] text-[14px] w-full">Distance</p>
      <Frame54 />
    </div>
  );
}

function Group2() {
  return (
    <div className="h-[50px] relative shrink-0 w-full">
      <div className="absolute inset-[-1.08%_-0.16%_0_-0.4%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 212.384 50.5408">
          <g id="Group 33">
            <path d={svgPaths.p5cebd00} fill="url(#paint0_linear_43_9550)" id="Vector 94" />
            <path d={svgPaths.p2088ab00} id="Vector 95" stroke="var(--stroke-0, #FF5E3B)" strokeWidth="2" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_43_9550" x1="106.441" x2="106.441" y1="0.540796" y2="50.5408">
              <stop stopColor="#FC5200" stopOpacity="0.2" />
              <stop offset="1" stopColor="#FC5200" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[148px] items-start justify-between min-h-px min-w-px relative rounded-[16px]">
      <Frame55 />
      <Group2 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex gap-px items-baseline mb-[-4px] relative shrink-0 w-full">
      <p className="css-ew64yg font-['Teko:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[#f2f5f7] text-[56px]">123</p>
      <p className="css-ew64yg font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#696e70] text-[14px] tracking-[-0.42px]">hrs</p>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] pt-0 px-0 relative shrink-0 w-[99px]">
      <p className="css-4hzbpn font-['Titillium_Web:SemiBold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#696e70] text-[14px] w-full">Time</p>
      <Frame56 />
    </div>
  );
}

function Group3() {
  return (
    <div className="h-[50px] relative shrink-0 w-full">
      <div className="absolute inset-[-1.08%_-0.4%_0_-0.16%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 212.384 50.5408">
          <g id="Group 33">
            <path d={svgPaths.pdcb6a00} fill="url(#paint0_linear_43_9562)" id="Vector 94" />
            <path d={svgPaths.p33ea1680} id="Vector 95" stroke="var(--stroke-0, #04B488)" strokeWidth="2" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_43_9562" x1="105.943" x2="105.943" y1="0.540796" y2="50.5408">
              <stop stopColor="#04B488" stopOpacity="0.3" />
              <stop offset="1" stopColor="#04B488" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[148px] items-start justify-between min-h-px min-w-px relative rounded-[16px]">
      <Frame57 />
      <Group3 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex gap-px items-baseline mb-[-4px] relative shrink-0 w-full">
      <p className="css-ew64yg font-['Teko:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[#f2f5f7] text-[56px]">340</p>
      <p className="css-ew64yg font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#696e70] text-[14px] tracking-[-0.42px]">m</p>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] pt-0 px-0 relative shrink-0 w-[99px]">
      <p className="css-4hzbpn font-['Titillium_Web:SemiBold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#696e70] text-[14px] w-full">Elevation</p>
      <Frame58 />
    </div>
  );
}

function Group4() {
  return (
    <div className="h-[50px] relative shrink-0 w-full">
      <div className="absolute inset-[-1.08%_-0.4%_0_-0.16%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 212.384 50.5408">
          <g id="Group 33">
            <path d={svgPaths.pdcb6a00} fill="url(#paint0_linear_43_9554)" id="Vector 94" />
            <path d={svgPaths.p33ea1680} id="Vector 95" stroke="var(--stroke-0, #04B488)" strokeWidth="2" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_43_9554" x1="105.943" x2="105.943" y1="0.540796" y2="50.5408">
              <stop stopColor="#04B488" stopOpacity="0.3" />
              <stop offset="1" stopColor="#04B488" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[148px] items-start justify-between min-h-px min-w-px relative rounded-[16px]">
      <Frame59 />
      <Group4 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex items-baseline mb-[-4px] relative shrink-0 w-full">
      <p className="css-ew64yg font-['Teko:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[#f2f5f7] text-[56px]">123</p>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] pt-0 px-0 relative shrink-0 w-[99px]">
      <p className="css-4hzbpn font-['Titillium_Web:SemiBold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#696e70] text-[14px] w-full">Sessions</p>
      <Frame60 />
    </div>
  );
}

function Group1() {
  return (
    <div className="h-[50px] relative shrink-0 w-full">
      <div className="absolute inset-[-1.08%_-0.16%_0_-0.4%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 212.384 50.5408">
          <g id="Group 34">
            <path d={svgPaths.p26cbc780} fill="url(#paint0_linear_43_9558)" id="Vector 94" />
            <path d={svgPaths.p2088ab00} id="Vector 95" stroke="var(--stroke-0, #FF5E3B)" strokeWidth="2" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_43_9558" x1="106.441" x2="106.441" y1="0.540796" y2="50.5408">
              <stop stopColor="#FC5200" stopOpacity="0.2" />
              <stop offset="1" stopColor="#FC5200" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[148px] items-start justify-between min-h-px min-w-px relative rounded-[16px]">
      <Frame61 />
      <Group1 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="max-w-[1440px] relative shrink-0 w-full">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex gap-[64px] items-center max-w-[inherit] px-[64px] py-[32px] relative w-full">
          <Frame47 />
          <Frame48 />
          <Frame49 />
          <Frame50 />
          <Frame51 />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic pb-[2px] pt-0 px-0 relative shrink-0 w-[240px]">
      <p className="css-ew64yg font-['Titillium_Web:Bold',sans-serif] leading-[1.4] relative shrink-0 text-[#f2f5f7] text-[20px] tracking-[-0.6px]">Running routes</p>
      <p className="css-4hzbpn font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] min-w-full relative shrink-0 text-[#696e70] text-[14px] tracking-[-0.42px] w-[min-content]">Click on the routes to know more details</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="h-[366px] overflow-clip relative rounded-[12px] shrink-0 w-full">
      <div className="absolute aspect-[1462/569] bottom-[-28.23%] left-[calc(50%-0.4px)] top-[-28.49%] translate-x-[-50%]" data-name="Screenshot 2026-01-14 at 4.29.51 PM 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[196.31%] left-[-9.1%] max-w-none top-[-79.96%] w-[118.19%]" src={imgScreenshot20260114At42951Pm3} />
        </div>
      </div>
    </div>
  );
}

function MapComponent() {
  return (
    <div className="/ 4] bg-[#151819] col-[2 css-por8k5 relative rounded-[16px] row-[1] self-start shrink-0 span" data-name="Map component">
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[24px] pt-[16px] px-[20px] relative w-full">
        <Frame7 />
        <Frame6 />
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-2px] relative shrink-0 w-full">
      <p className="css-ew64yg font-['Titillium_Web:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#f2f5f7] text-[20px] tracking-[-0.6px]">Performance</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[2px] pt-0 px-0 relative shrink-0">
      <Frame8 />
      <p className="css-4hzbpn font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#696e70] text-[14px] tracking-[-0.42px] w-full">Run the distance</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#0e1111] h-full overflow-clip relative rounded-[8px] shrink-0 w-[41px]">
      <p className="absolute css-ew64yg font-['Teko:SemiBold',sans-serif] font-semibold leading-none left-[calc(50%-9.5px)] text-[#f2f5f7] text-[20px] top-[calc(50%-7.5px)]">5K</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <p className="css-4hzbpn font-['Teko:Bold',sans-serif] font-bold leading-none relative shrink-0 text-[#f2f5f7] text-[20px] w-full">29:45</p>
      <p className="css-4hzbpn font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#696e70] text-[14px] tracking-[-0.42px] w-full">15th Jan • 5:30/km</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <div className="flex flex-row items-center self-stretch">
        <Frame />
      </div>
      <Frame16 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#0e1111] h-full overflow-clip relative rounded-[8px] shrink-0 w-[41px]">
      <p className="absolute css-ew64yg font-['Teko:SemiBold',sans-serif] font-semibold leading-none left-1/2 text-[#f2f5f7] text-[20px] text-center top-[calc(50%-8.5px)] translate-x-[-50%]">10K</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <p className="css-4hzbpn font-['Teko:Bold',sans-serif] font-bold leading-none relative shrink-0 text-[#f2f5f7] text-[20px] w-full">1:03:45</p>
      <p className="css-4hzbpn font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#696e70] text-[14px] tracking-[-0.42px] w-full">12th Jan • 6:30/km</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <div className="flex flex-row items-center self-stretch">
        <Frame1 />
      </div>
      <Frame26 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#0e1111] h-full overflow-clip relative rounded-[8px] shrink-0 w-[41px]">
      <p className="absolute css-ew64yg font-['Teko:SemiBold',sans-serif] font-semibold leading-none left-1/2 text-[#f2f5f7] text-[20px] text-center top-[calc(50%-8.5px)] translate-x-[-50%]">15K</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <div className="flex flex-col font-['Teko:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f2f5f7] text-[20px] w-full">
        <p className="css-4hzbpn leading-none">1:43:45</p>
      </div>
      <p className="css-4hzbpn font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#696e70] text-[14px] tracking-[-0.42px] w-full">12th Jan • 7:30/km</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <div className="flex flex-row items-center self-stretch">
        <Frame2 />
      </div>
      <Frame27 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#0e1111] h-full overflow-clip relative rounded-[8px] shrink-0 w-[41px]">
      <p className="absolute css-ew64yg font-['Teko:SemiBold',sans-serif] font-semibold leading-none left-1/2 text-[#f2f5f7] text-[20px] text-center top-[calc(50%-8.5px)] translate-x-[-50%]">HM</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <p className="css-4hzbpn font-['Teko:Bold',sans-serif] font-bold leading-none relative shrink-0 text-[#f2f5f7] text-[20px] w-full">2:55:45</p>
      <p className="css-4hzbpn font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#696e70] text-[14px] tracking-[-0.42px] w-full">12th Jan • 8:00/km</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <div className="flex flex-row items-center self-stretch">
        <Frame3 />
      </div>
      <Frame28 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#0e1111] h-full overflow-clip relative rounded-[8px] shrink-0 w-[41px]">
      <p className="absolute css-ew64yg font-['Teko:SemiBold',sans-serif] font-semibold leading-none left-[calc(50%+0.5px)] text-[#44494b] text-[20px] text-center top-[calc(50%-7.5px)] translate-x-[-50%]">30K</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px not-italic relative text-[#44494b]">
      <p className="css-4hzbpn font-['Titillium_Web:Bold',sans-serif] leading-none relative shrink-0 text-[20px] w-full">--</p>
      <p className="css-4hzbpn font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] relative shrink-0 text-[14px] tracking-[-0.42px] w-full">Waiting for you : )</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <div className="flex flex-row items-center self-stretch">
        <Frame4 />
      </div>
      <Frame29 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#0e1111] h-full overflow-clip relative rounded-[8px] shrink-0 w-[41px]">
      <p className="absolute css-ew64yg font-['Teko:SemiBold',sans-serif] font-semibold leading-none left-1/2 text-[#44494b] text-[20px] text-center top-[calc(50%-8.5px)] translate-x-[-50%]">FM</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px not-italic relative text-[#44494b]">
      <p className="css-4hzbpn font-['Titillium_Web:Bold',sans-serif] leading-none relative shrink-0 text-[20px] w-full">--</p>
      <p className="css-4hzbpn font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] relative shrink-0 text-[14px] tracking-[-0.42px] w-full">Waiting for you : )</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <div className="flex flex-row items-center self-stretch">
        <Frame5 />
      </div>
      <Frame30 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame17 />
      <Frame18 />
      <Frame19 />
      <Frame20 />
      <Frame21 />
      <Frame22 />
    </div>
  );
}

function Performance() {
  return (
    <div className="bg-[#151819] col-[1] css-por8k5 relative rounded-[16px] row-[1] self-start shrink-0" data-name="Performance">
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[24px] pt-[16px] px-[20px] relative w-full">
        <Frame23 />
        <Frame31 />
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="max-w-[1440px] relative shrink-0 w-full">
      <div className="gap-[16px] gap-[48px] grid grid-cols-[repeat(5,_minmax(0,_1fr))] grid-rows-[repeat(1,_fit-content(100%))] max-w-[inherit] px-[64px] py-[32px] relative w-full">
        <MapComponent />
        <Performance />
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic pb-[2px] pt-0 px-0 relative shrink-0 w-[240px]">
      <p className="css-4hzbpn font-['Titillium_Web:Bold',sans-serif] leading-[1.4] relative shrink-0 text-[#f2f5f7] text-[20px] tracking-[-0.6px] w-full">Running trends</p>
      <p className="css-4hzbpn font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] relative shrink-0 text-[#696e70] text-[14px] tracking-[-0.42px] w-full">Pace • Distance • Elevation</p>
    </div>
  );
}

function MiddleFrame4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="middle-frame">
      <p className="css-ew64yg font-['Titillium_Web:SemiBold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#060809] text-[12px] tracking-[-0.36px]">Pace</p>
    </div>
  );
}

function PillContainer4() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[99px] shrink-0" data-name="pill-container">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[99px]" />
      <MiddleFrame4 />
    </div>
  );
}

function MdsPill4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[6px] shrink-0" data-name="mds-pill">
      <PillContainer4 />
    </div>
  );
}

function MiddleFrame5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="middle-frame">
      <p className="css-ew64yg font-['Titillium_Web:SemiBold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#989ea0] text-[14px] tracking-[-0.42px]">Distance</p>
    </div>
  );
}

function PillContainer5() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[4px] shrink-0" data-name="pill-container">
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

function MiddleFrame6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="middle-frame">
      <p className="css-ew64yg font-['Titillium_Web:SemiBold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#989ea0] text-[14px] tracking-[-0.42px]">Elevation</p>
    </div>
  );
}

function PillContainer6() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[4px] shrink-0" data-name="pill-container">
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

function Frame15() {
  return (
    <div className="bg-[#1e2224] content-stretch flex items-center p-[2px] relative rounded-[99px] shrink-0">
      <MdsPill4 />
      <MdsPill5 />
      <MdsPill6 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame9 />
      <Frame15 />
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
  return <div className="bg-gradient-to-b from-[#04b488] h-[123px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="01" />;
}

function Component1() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[83px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="02" />;
}

function Component2() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[144px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="03" />;
}

function Component3() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[123px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="04" />;
}

function Component4() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[14px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="05" />;
}

function Component5() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[168px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="06" />;
}

function Component6() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[77px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="07" />;
}

function Component7() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[14px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="08" />;
}

function Component8() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[95px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="09" />;
}

function Component9() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[77px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="10" />;
}

function Component10() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[14px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="11" />;
}

function Component11() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[95px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="12" />;
}

function Component12() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[77px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="13" />;
}

function Component13() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[14px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="14" />;
}

function Component14() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[144px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="15" />;
}

function Component15() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[77px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="16" />;
}

function Component16() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[52px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="17" />;
}

function Component17() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[106px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="18" />;
}

function Component18() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[123px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="19" />;
}

function Component19() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[83px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="20" />;
}

function Component20() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[144px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 to-[#060809] to-[122.36%] w-[32px]" data-name="21" />;
}

function Frame34() {
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

function Frame35() {
  return (
    <div className="col-1 h-[221px] ml-0 mt-0 overflow-clip relative row-1 w-[1000px]">
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
      <Frame34 />
      <p className="absolute css-ew64yg font-['Titillium_Web:Regular',sans-serif] leading-[1.5] left-[5px] not-italic text-[#989ea0] text-[12px] top-[61px] tracking-[-0.36px]">7:30</p>
      <p className="absolute css-ew64yg font-['Titillium_Web:Regular',sans-serif] leading-[1.5] left-[5px] not-italic text-[#989ea0] text-[12px] top-[19px] tracking-[-0.36px]">10:30</p>
      <p className="absolute css-ew64yg font-['Titillium_Web:Regular',sans-serif] leading-[1.5] left-[5px] not-italic text-[#989ea0] text-[12px] top-[103px] tracking-[-0.36px]">6:00</p>
      <p className="absolute css-ew64yg font-['Titillium_Web:Regular',sans-serif] leading-[1.5] left-[5px] not-italic text-[#989ea0] text-[12px] top-[145px] tracking-[-0.36px]">5:30</p>
      <p className="absolute css-ew64yg font-['Titillium_Web:Regular',sans-serif] leading-[1.5] left-[5px] not-italic text-[#989ea0] text-[12px] top-[187px] tracking-[-0.36px]">0:00</p>
      <p className="absolute css-ew64yg font-['Titillium_Web:Regular',sans-serif] leading-[1.5] left-[71.5px] not-italic text-[#989ea0] text-[12px] text-center top-[206px] tracking-[-0.36px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Titillium_Web:Regular',sans-serif] leading-[1.5] left-[115.5px] not-italic text-[#989ea0] text-[12px] text-center top-[206px] tracking-[-0.36px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Titillium_Web:Regular',sans-serif] leading-[1.5] left-[159.5px] not-italic text-[#989ea0] text-[12px] text-center top-[206px] tracking-[-0.36px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Titillium_Web:Regular',sans-serif] leading-[1.5] left-[203.5px] not-italic text-[#989ea0] text-[12px] text-center top-[206px] tracking-[-0.36px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Titillium_Web:Regular',sans-serif] leading-[1.5] left-[247.5px] not-italic text-[#989ea0] text-[12px] text-center top-[206px] tracking-[-0.36px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Titillium_Web:Regular',sans-serif] leading-[1.5] left-[291.5px] not-italic text-[#989ea0] text-[12px] text-center top-[206px] tracking-[-0.36px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Titillium_Web:Regular',sans-serif] leading-[1.5] left-[335.5px] not-italic text-[#989ea0] text-[12px] text-center top-[206px] tracking-[-0.36px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Titillium_Web:Regular',sans-serif] leading-[1.5] left-[379.5px] not-italic text-[#989ea0] text-[12px] text-center top-[206px] tracking-[-0.36px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Titillium_Web:Regular',sans-serif] leading-[1.5] left-[423.5px] not-italic text-[#989ea0] text-[12px] text-center top-[206px] tracking-[-0.36px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Titillium_Web:Regular',sans-serif] leading-[1.5] left-[467.5px] not-italic text-[#989ea0] text-[12px] text-center top-[206px] tracking-[-0.36px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Titillium_Web:Regular',sans-serif] leading-[1.5] left-[511.5px] not-italic text-[#989ea0] text-[12px] text-center top-[206px] tracking-[-0.36px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Titillium_Web:Regular',sans-serif] leading-[1.5] left-[555.5px] not-italic text-[#989ea0] text-[12px] text-center top-[206px] tracking-[-0.36px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Titillium_Web:Regular',sans-serif] leading-[1.5] left-[599.5px] not-italic text-[#989ea0] text-[12px] text-center top-[206px] tracking-[-0.36px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Titillium_Web:Regular',sans-serif] leading-[1.5] left-[643.5px] not-italic text-[#989ea0] text-[12px] text-center top-[206px] tracking-[-0.36px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Titillium_Web:Regular',sans-serif] leading-[1.5] left-[687.5px] not-italic text-[#989ea0] text-[12px] text-center top-[206px] tracking-[-0.36px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Titillium_Web:Regular',sans-serif] leading-[1.5] left-[731.5px] not-italic text-[#989ea0] text-[12px] text-center top-[206px] tracking-[-0.36px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Titillium_Web:Regular',sans-serif] leading-[1.5] left-[775.5px] not-italic text-[#989ea0] text-[12px] text-center top-[206px] tracking-[-0.36px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Titillium_Web:Regular',sans-serif] leading-[1.5] left-[819.5px] not-italic text-[#989ea0] text-[12px] text-center top-[206px] tracking-[-0.36px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Titillium_Web:Regular',sans-serif] leading-[1.5] left-[863.5px] not-italic text-[#989ea0] text-[12px] text-center top-[206px] tracking-[-0.36px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Titillium_Web:Regular',sans-serif] leading-[1.5] left-[907.5px] not-italic text-[#989ea0] text-[12px] text-center top-[206px] tracking-[-0.36px] translate-x-[-50%]">12 Jun</p>
      <p className="absolute css-ew64yg font-['Titillium_Web:Regular',sans-serif] leading-[1.5] left-[951.5px] not-italic text-[#989ea0] text-[12px] text-center top-[206px] tracking-[-0.36px] translate-x-[-50%]">12 Jun</p>
    </div>
  );
}

function FrameWithChart() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0 w-full" data-name="frame with chart">
      <Frame35 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <FrameWithChart />
    </div>
  );
}

function RunningTrendsComponent() {
  return (
    <div className="/ 3] bg-[#151819] col-[2 content-stretch flex flex-col items-start justify-between pb-[20px] pt-[16px] px-[16px] relative rounded-[16px] row-[1] self-stretch shrink-0 span w-[1032px]" data-name="Running trends component">
      <Frame37 />
      <Frame36 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-2px] relative shrink-0 w-full">
      <p className="css-4hzbpn font-['Titillium_Web:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#f2f5f7] text-[20px] tracking-[-0.6px] w-full">Records</p>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[2px] pt-0 px-0 relative shrink-0 w-full">
      <Frame11 />
      <p className="css-4hzbpn font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#696e70] text-[14px] tracking-[-0.42px] w-full">Data you should be proud of</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-[168px]">
      <p className="css-ew64yg font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#696e70] text-[14px] tracking-[-0.42px]">Best pace</p>
      <p className="css-ew64yg font-['Teko:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#f2f5f7] text-[0px]">
        <span className="leading-none text-[24px]">5:37</span>
        <span className="font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic text-[#696e70] text-[14px] tracking-[-0.42px]">/km</span>
      </p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-[168px]">
      <p className="css-ew64yg font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#696e70] text-[14px] tracking-[-0.42px]">Most elevation</p>
      <p className="css-ew64yg font-['Teko:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#f2f5f7] text-[0px]">
        <span className="leading-none text-[24px]">{`36.5 `}</span>
        <span className="font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic text-[#696e70] text-[14px] tracking-[-0.42px]">mts</span>
      </p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-[168px]">
      <p className="css-ew64yg font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#696e70] text-[14px] tracking-[-0.42px]">Highest max speed</p>
      <p className="css-ew64yg font-['Teko:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#f2f5f7] text-[0px]">
        <span className="leading-none text-[24px]">{`36.5 `}</span>
        <span className="font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic text-[#696e70] text-[14px] tracking-[-0.42px]">km/hr</span>
      </p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-[168px]">
      <p className="css-ew64yg font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#696e70] text-[14px] tracking-[-0.42px]">Longest duration</p>
      <p className="css-ew64yg font-['Teko:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#f2f5f7] text-[0px]">
        <span className="leading-none text-[24px]">{`2:55 `}</span>
        <span className="font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic text-[#696e70] text-[14px] tracking-[-0.42px]">hrs</span>
      </p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0">
      <Frame32 />
      <Frame25 />
      <Frame33 />
      <Frame24 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[#151819] col-[1] css-por8k5 relative rounded-[16px] row-[1] self-start shrink-0">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[24px] pt-[16px] px-[16px] relative w-full">
        <Frame39 />
        <Frame38 />
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="max-w-[1440px] relative shrink-0 w-full">
      <div className="gap-[16px] gap-[48px] grid grid-cols-[repeat(5,_minmax(0,_1fr))] grid-rows-[repeat(1,_fit-content(100%))] max-w-[inherit] pb-[32px] pt-[16px] px-[64px] relative w-full">
        <RunningTrendsComponent />
        <Frame14 />
      </div>
    </div>
  );
}

export default function StravaDashboard() {
  return (
    <div className="bg-[#060809] content-stretch flex flex-col items-center pb-[240px] pt-0 px-0 relative size-full" data-name="Strava dashboard">
      <Frame43 />
      <Frame52 />
      <Frame44 />
      <Frame53 />
    </div>
  );
}