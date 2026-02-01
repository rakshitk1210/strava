import svgPaths from "./svg-ixq69bherd";
import imgScreenshot20260114At42951Pm3 from "figma:asset/8f2d3b7405a75b378cd3c608b63ab99c103da347.png";

function Avatar() {
  return (
    <div className="bg-white overflow-clip relative rounded-[1598.4px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Titillium_Web:Bold',sans-serif] justify-center leading-[0] left-[calc(50%-10px)] not-italic text-[#f2f5f7] text-[20px] top-[calc(50%-1px)] whitespace-nowrap">
        <p className="leading-none">♠️</p>
      </div>
    </div>
  );
}

function ContentFrame() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center not-italic relative shrink-0" data-name="Content frame">
      <div className="flex flex-col font-['Titillium_Web:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[#f2f5f7] text-[20px] w-[240px]">
        <p className="leading-none whitespace-pre-wrap">Rakshit’s running dash</p>
      </div>
      <p className="font-['Titillium_Web:SemiBold',sans-serif] leading-[1.4] min-w-full relative shrink-0 text-[#696e70] text-[12px] w-[min-content] whitespace-pre-wrap">Last updated 19 Jan’26</p>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Avatar />
      <ContentFrame />
    </div>
  );
}

function ButtonLabelFrame() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="button-label-frame">
      <p className="font-['Groww_Sans_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#f2f5f7] text-[14px]">2025</p>
    </div>
  );
}

function TrailingIcon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="trailing-icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_94_3085)" id="trailing-icon">
          <g id="vector" />
          <path d={svgPaths.p310f4100} fill="var(--fill-0, #F2F5F7)" id="vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_94_3085">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ButtonContainer() {
  return (
    <div className="bg-[#151819] h-[40px] relative rounded-[999px] shrink-0 w-full" data-name="button-container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center pl-[20px] pr-[16px] py-[12px] relative size-full">
          <ButtonLabelFrame />
          <TrailingIcon />
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

function MiddleFrame() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="middle-frame">
      <p className="font-['Titillium_Web:SemiBold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#060809] text-[14px] tracking-[-0.42px]">Km</p>
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
      <p className="font-['Titillium_Web:SemiBold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#989ea0] text-[14px] tracking-[-0.42px]">Miles</p>
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

function DistancePills() {
  return (
    <div className="bg-[#151819] content-stretch flex items-center p-[2px] relative rounded-[99px] shrink-0" data-name="Distance pills">
      <MdsPill />
      <MdsPill1 />
    </div>
  );
}

function ButtonLabelFrame1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="button-label-frame">
      <p className="font-['Titillium_Web:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f2f5f7] text-[14px]">Connect Strava</p>
    </div>
  );
}

function ButtonContainer1() {
  return (
    <div className="bg-[#fc5200] h-[40px] relative rounded-[99px] shrink-0 w-full" data-name="button-container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative size-full">
          <ButtonLabelFrame1 />
        </div>
      </div>
    </div>
  );
}

function ButtonToConnectStrava() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-center justify-center relative shrink-0" data-name="Button to connect strava">
      <ButtonContainer1 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <MdsButtonPrimaryButton />
      <DistancePills />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#696e70] text-[14px] tracking-[-0.42px] whitespace-nowrap">
        <p className="leading-[18px]">•</p>
      </div>
      <ButtonToConnectStrava />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame39 />
      <Frame38 />
    </div>
  );
}

function Header() {
  return (
    <div className="max-w-[1440px] relative shrink-0 w-full" data-name="Header">
      <div className="content-stretch flex flex-col items-start max-w-[inherit] px-[64px] py-[32px] relative w-full">
        <Frame40 />
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-px items-baseline mb-[-4px] relative shrink-0 w-full">
      <p className="font-['Teko:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[#f2f5f7] text-[56px]">7:01</p>
      <p className="font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#696e70] text-[14px] tracking-[-0.42px]">/km</p>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-[99px]">
      <p className="font-['Titillium_Web:SemiBold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#696e70] text-[14px] w-full whitespace-pre-wrap">Average pace</p>
      <Frame41 />
    </div>
  );
}

function Group() {
  return (
    <div className="h-[50px] relative shrink-0 w-full">
      <div className="absolute inset-[-1.08%_-0.4%_0_-0.16%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 212.384 50.5408">
          <g id="Group 33">
            <path d={svgPaths.pdcb6a00} fill="url(#paint0_linear_94_3089)" id="Vector 94" />
            <path d={svgPaths.p33ea1680} id="Vector 95" stroke="var(--stroke-0, #04B488)" strokeWidth="2" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_94_3089" x1="105.943" x2="105.943" y1="0.540796" y2="50.5408">
              <stop stopColor="#04B488" stopOpacity="0.3" />
              <stop offset="1" stopColor="#04B488" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col h-[148px] items-start justify-between relative rounded-[16px] shrink-0 w-[211.2px]">
      <Frame42 />
      <Group />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex gap-px items-baseline mb-[-4px] relative shrink-0 w-full">
      <p className="font-['Teko:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[#f2f5f7] text-[56px]">347</p>
      <p className="font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#696e70] text-[14px] tracking-[-0.42px]">km</p>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-[99px]">
      <p className="font-['Titillium_Web:SemiBold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#696e70] text-[14px] w-full whitespace-pre-wrap">Distance</p>
      <Frame46 />
    </div>
  );
}

function Group1() {
  return (
    <div className="h-[50px] relative shrink-0 w-full">
      <div className="absolute inset-[-1.08%_-0.16%_0_-0.4%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 212.384 50.5408">
          <g id="Group 33">
            <path d={svgPaths.p5cebd00} fill="url(#paint0_linear_94_3061)" id="Vector 94" />
            <path d={svgPaths.p2088ab00} id="Vector 95" stroke="var(--stroke-0, #FF5E3B)" strokeWidth="2" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_94_3061" x1="106.441" x2="106.441" y1="0.540796" y2="50.5408">
              <stop stopColor="#FC5200" stopOpacity="0.2" />
              <stop offset="1" stopColor="#FC5200" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col h-[148px] items-start justify-between relative rounded-[16px] shrink-0 w-[211.2px]">
      <Frame45 />
      <Group1 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex gap-px items-baseline mb-[-4px] relative shrink-0 w-full">
      <p className="font-['Teko:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[#f2f5f7] text-[56px]">123</p>
      <p className="font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#696e70] text-[14px] tracking-[-0.42px]">hrs</p>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-[99px]">
      <p className="font-['Titillium_Web:SemiBold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#696e70] text-[14px] w-full whitespace-pre-wrap">Time</p>
      <Frame50 />
    </div>
  );
}

function Group2() {
  return (
    <div className="h-[50px] relative shrink-0 w-full">
      <div className="absolute inset-[-1.08%_-0.4%_0_-0.16%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 212.384 50.5408">
          <g id="Group 33">
            <path d={svgPaths.pdcb6a00} fill="url(#paint0_linear_94_3089)" id="Vector 94" />
            <path d={svgPaths.p33ea1680} id="Vector 95" stroke="var(--stroke-0, #04B488)" strokeWidth="2" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_94_3089" x1="105.943" x2="105.943" y1="0.540796" y2="50.5408">
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
    <div className="content-stretch flex flex-col h-[148px] items-start justify-between relative rounded-[16px] shrink-0 w-[211.2px]">
      <Frame49 />
      <Group2 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex gap-px items-baseline mb-[-4px] relative shrink-0 w-full">
      <p className="font-['Teko:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[#f2f5f7] text-[56px]">340</p>
      <p className="font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#696e70] text-[14px] tracking-[-0.42px]">m</p>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-[99px]">
      <p className="font-['Titillium_Web:SemiBold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#696e70] text-[14px] w-full whitespace-pre-wrap">Elevation</p>
      <Frame53 />
    </div>
  );
}

function Group3() {
  return (
    <div className="h-[50px] relative shrink-0 w-full">
      <div className="absolute inset-[-1.08%_-0.4%_0_-0.16%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 212.384 50.5408">
          <g id="Group 33">
            <path d={svgPaths.pdcb6a00} fill="url(#paint0_linear_94_3081)" id="Vector 94" />
            <path d={svgPaths.p33ea1680} id="Vector 95" stroke="var(--stroke-0, #04B488)" strokeWidth="2" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_94_3081" x1="105.943" x2="105.943" y1="0.540796" y2="50.5408">
              <stop stopColor="#04B488" stopOpacity="0.3" />
              <stop offset="1" stopColor="#04B488" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-col h-[148px] items-start justify-between relative rounded-[16px] shrink-0 w-[211.2px]">
      <Frame52 />
      <Group3 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex items-baseline mb-[-4px] relative shrink-0 w-full">
      <p className="font-['Teko:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[#f2f5f7] text-[56px]">123</p>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-[99px]">
      <p className="font-['Titillium_Web:SemiBold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#696e70] text-[14px] w-full whitespace-pre-wrap">Sessions</p>
      <Frame56 />
    </div>
  );
}

function Group4() {
  return (
    <div className="h-[50px] relative shrink-0 w-full">
      <div className="absolute inset-[-1.08%_-0.16%_0_-0.4%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 212.384 50.5408">
          <g id="Group 34">
            <path d={svgPaths.p26cbc780} fill="url(#paint0_linear_94_3093)" id="Vector 94" />
            <path d={svgPaths.p2088ab00} id="Vector 95" stroke="var(--stroke-0, #FF5E3B)" strokeWidth="2" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_94_3093" x1="106.441" x2="106.441" y1="0.540796" y2="50.5408">
              <stop stopColor="#FC5200" stopOpacity="0.2" />
              <stop offset="1" stopColor="#FC5200" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-col h-[148px] items-start justify-between relative rounded-[16px] shrink-0 w-[211.2px]">
      <Frame55 />
      <Group4 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex gap-[64px] items-center max-w-[1440px] py-[32px] relative shrink-0">
      <Frame43 />
      <Frame44 />
      <Frame47 />
      <Frame51 />
      <Frame54 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic pb-[2px] relative shrink-0 w-[240px]">
      <p className="font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] min-w-full relative shrink-0 text-[#696e70] text-[14px] tracking-[-0.42px] w-[min-content] whitespace-pre-wrap">Map</p>
      <p className="font-['Titillium_Web:Bold',sans-serif] leading-[1.4] relative shrink-0 text-[#f2f5f7] text-[24px] tracking-[-0.72px]">Running routes</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px overflow-clip relative w-full">
      <div className="-translate-x-1/2 absolute aspect-[1462/569] bottom-[-28.23%] left-[calc(50%-0.4px)] top-[-28.49%]" data-name="Screenshot 2026-01-14 at 4.29.51 PM 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[196.31%] left-[-9.1%] max-w-none top-[-79.96%] w-[118.19%]" src={imgScreenshot20260114At42951Pm3} />
        </div>
      </div>
    </div>
  );
}

function MapComponent() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[480px] items-start relative rounded-[8px] shrink-0 w-[1312px]" data-name="Map component">
      <Frame7 />
      <Frame6 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center py-[32px] relative shrink-0 w-full">
      <MapComponent />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic pb-[2px] relative shrink-0 w-[240px] whitespace-pre-wrap">
      <p className="font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] relative shrink-0 text-[#696e70] text-[14px] tracking-[-0.42px] w-full">{`Diligence `}</p>
      <p className="font-['Titillium_Web:Bold',sans-serif] leading-[1.4] relative shrink-0 text-[#f2f5f7] text-[24px] tracking-[-0.72px] w-full">Running trends</p>
    </div>
  );
}

function MiddleFrame2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="middle-frame">
      <p className="font-['Titillium_Web:SemiBold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#060809] text-[12px] tracking-[-0.36px]">Pace</p>
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
      <p className="font-['Titillium_Web:SemiBold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#989ea0] text-[14px] tracking-[-0.42px]">Distance</p>
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

function MiddleFrame4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="middle-frame">
      <p className="font-['Titillium_Web:SemiBold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#989ea0] text-[14px] tracking-[-0.42px]">Elevation</p>
    </div>
  );
}

function PillContainer4() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[4px] shrink-0" data-name="pill-container">
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

function Frame12() {
  return (
    <div className="bg-[#1e2224] content-stretch flex items-center p-[2px] relative rounded-[99px] shrink-0">
      <MdsPill2 />
      <MdsPill3 />
      <MdsPill4 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame8 />
      <Frame12 />
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
  return <div className="bg-gradient-to-b from-[#04b488] h-[123px] rounded-[4px] shrink-0 to-[122.36%] to-[rgba(4,180,136,0)] w-[32px]" data-name="01" />;
}

function Component9() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[83px] rounded-[4px] shrink-0 to-[122.36%] to-[rgba(4,180,136,0)] w-[32px]" data-name="02" />;
}

function Component10() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[144px] rounded-[4px] shrink-0 to-[122.36%] to-[rgba(4,180,136,0)] w-[32px]" data-name="03" />;
}

function Component11() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[123px] rounded-[4px] shrink-0 to-[122.36%] to-[rgba(4,180,136,0)] w-[32px]" data-name="04" />;
}

function Component12() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[14px] rounded-[4px] shrink-0 to-[122.36%] to-[rgba(4,180,136,0)] w-[32px]" data-name="05" />;
}

function Component13() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[168px] rounded-[4px] shrink-0 to-[122.36%] to-[rgba(4,180,136,0)] w-[32px]" data-name="06" />;
}

function Component14() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[77px] rounded-[4px] shrink-0 to-[122.36%] to-[rgba(4,180,136,0)] w-[32px]" data-name="07" />;
}

function Component15() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[14px] rounded-[4px] shrink-0 to-[122.36%] to-[rgba(4,180,136,0)] w-[32px]" data-name="08" />;
}

function Component16() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[95px] rounded-[4px] shrink-0 to-[122.36%] to-[rgba(4,180,136,0)] w-[32px]" data-name="09" />;
}

function Component17() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[77px] rounded-[4px] shrink-0 to-[122.36%] to-[rgba(4,180,136,0)] w-[32px]" data-name="10" />;
}

function Component18() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[14px] rounded-[4px] shrink-0 to-[122.36%] to-[rgba(4,180,136,0)] w-[32px]" data-name="11" />;
}

function Component19() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[95px] rounded-[4px] shrink-0 to-[122.36%] to-[rgba(4,180,136,0)] w-[32px]" data-name="12" />;
}

function Component20() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[77px] rounded-[4px] shrink-0 to-[122.36%] to-[rgba(4,180,136,0)] w-[32px]" data-name="13" />;
}

function Component21() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[14px] rounded-[4px] shrink-0 to-[122.36%] to-[rgba(4,180,136,0)] w-[32px]" data-name="14" />;
}

function Component22() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[144px] rounded-[4px] shrink-0 to-[122.36%] to-[rgba(4,180,136,0)] w-[32px]" data-name="15" />;
}

function Component23() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[77px] rounded-[4px] shrink-0 to-[122.36%] to-[rgba(4,180,136,0)] w-[32px]" data-name="16" />;
}

function Component24() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[52px] rounded-[4px] shrink-0 to-[122.36%] to-[rgba(4,180,136,0)] w-[32px]" data-name="17" />;
}

function Component25() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[106px] rounded-[4px] shrink-0 to-[122.36%] to-[rgba(4,180,136,0)] w-[32px]" data-name="18" />;
}

function Component26() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[123px] rounded-[4px] shrink-0 to-[122.36%] to-[rgba(4,180,136,0)] w-[32px]" data-name="19" />;
}

function Component27() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[83px] rounded-[4px] shrink-0 to-[122.36%] to-[rgba(4,180,136,0)] w-[32px]" data-name="20" />;
}

function Component28() {
  return <div className="bg-gradient-to-b from-[#04b488] h-[144px] rounded-[4px] shrink-0 to-[122.36%] to-[rgba(4,180,136,0)] w-[32px]" data-name="21" />;
}

function Frame32() {
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

function Frame33() {
  return (
    <div className="col-1 h-[221px] ml-0 mt-0 overflow-clip relative row-1 w-[1011.2px]">
      <GridLinesInBack />
      <div className="absolute h-[176px] left-[39px] top-[24px] w-0" data-name="axis">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 176">
            <path d="M0.5 0V176" id="axis" stroke="var(--stroke-0, #252A2C)" />
          </svg>
        </div>
      </div>
      <div className="absolute flex h-0 items-center justify-center left-[39px] top-[200px] w-[960px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
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
      <Frame32 />
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
      <Frame33 />
    </div>
  );
}

function Frame34() {
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
      <Frame35 />
      <Frame34 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-2px] relative shrink-0 w-full">
      <p className="font-['Titillium_Web:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#f2f5f7] text-[24px] tracking-[-0.72px] w-full whitespace-pre-wrap">Records</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[2px] relative shrink-0 w-full">
      <p className="font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#696e70] text-[14px] tracking-[-0.42px] w-full whitespace-pre-wrap">Effort</p>
      <Frame9 />
    </div>
  );
}

function Frame14() {
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

function Frame23() {
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

function Frame15() {
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

function Frame22() {
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

function Frame36() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px min-w-px relative w-full">
      <Frame14 />
      <Frame23 />
      <Frame15 />
      <Frame22 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="col-[1] content-stretch css-vsca90 flex flex-col gap-[24px] items-start relative rounded-[8px] row-[1] self-stretch shrink-0">
      <Frame37 />
      <Frame36 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="gap-[16px] gap-[32px] grid grid-cols-[repeat(5,_minmax(0,_1fr))] grid-rows-[repeat(1,_fit-content(100%))] max-w-[1440px] py-[32px] relative shrink-0 w-full">
      <RunningTrendsComponent />
      <Frame13 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-2px] relative shrink-0 w-full">
      <p className="font-['Titillium_Web:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#f2f5f7] text-[24px] tracking-[-0.72px]">Performance</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[2px] relative shrink-0">
      <p className="font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#696e70] text-[14px] tracking-[-0.42px] w-full whitespace-pre-wrap">Push</p>
      <Frame10 />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#0e1111] overflow-clip relative shrink-0 size-[44px]">
      <p className="absolute font-['Teko:SemiBold',sans-serif] font-semibold leading-none left-[calc(50%-10px)] text-[#f2f5f7] text-[20px] top-[calc(50%-8px)]">5K</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative whitespace-pre-wrap">
      <p className="font-['Teko:Bold',sans-serif] font-bold leading-none relative shrink-0 text-[#f2f5f7] text-[20px] w-full">29:45</p>
      <p className="font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#696e70] text-[14px] tracking-[-0.42px] w-full">15th Jan • 5:30/km</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <Frame />
      <Frame17 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#0e1111] overflow-clip relative shrink-0 size-[44px]">
      <p className="-translate-x-1/2 absolute font-['Teko:SemiBold',sans-serif] font-semibold leading-none left-[calc(50%-0.5px)] text-[#f2f5f7] text-[20px] text-center top-[calc(50%-9px)]">10K</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative whitespace-pre-wrap">
      <p className="font-['Teko:Bold',sans-serif] font-bold leading-none relative shrink-0 text-[#f2f5f7] text-[20px] w-full">1:03:45</p>
      <p className="font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#696e70] text-[14px] tracking-[-0.42px] w-full">12th Jan • 6:30/km</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <Frame1 />
      <Frame19 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#0e1111] overflow-clip relative shrink-0 size-[44px]">
      <p className="-translate-x-1/2 absolute font-['Teko:SemiBold',sans-serif] font-semibold leading-none left-[calc(50%-0.5px)] text-[#f2f5f7] text-[20px] text-center top-[calc(50%-9px)]">15K</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <div className="flex flex-col font-['Teko:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f2f5f7] text-[20px] w-full">
        <p className="leading-none whitespace-pre-wrap">1:43:45</p>
      </div>
      <p className="font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#696e70] text-[14px] tracking-[-0.42px] w-full whitespace-pre-wrap">12th Jan • 7:30/km</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <Frame2 />
      <Frame25 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#0e1111] overflow-clip relative shrink-0 size-[44px]">
      <p className="-translate-x-1/2 absolute font-['Teko:SemiBold',sans-serif] font-semibold leading-none left-[calc(50%-0.5px)] text-[#f2f5f7] text-[20px] text-center top-[calc(50%-9px)]">HM</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative whitespace-pre-wrap">
      <p className="font-['Teko:Bold',sans-serif] font-bold leading-none relative shrink-0 text-[#f2f5f7] text-[20px] w-full">2:55:45</p>
      <p className="font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#696e70] text-[14px] tracking-[-0.42px] w-full">12th Jan • 8:00/km</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <Frame3 />
      <Frame27 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#0e1111] overflow-clip relative shrink-0 size-[44px]">
      <p className="-translate-x-1/2 absolute font-['Teko:SemiBold',sans-serif] font-semibold leading-none left-1/2 text-[#44494b] text-[20px] text-center top-[calc(50%-8px)]">30K</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px not-italic relative text-[#44494b] whitespace-pre-wrap">
      <p className="font-['Titillium_Web:Bold',sans-serif] leading-none relative shrink-0 text-[20px] w-full">--</p>
      <p className="font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] relative shrink-0 text-[14px] tracking-[-0.42px] w-full">Waiting for you : )</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <Frame4 />
      <Frame29 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#0e1111] overflow-clip relative shrink-0 size-[44px]">
      <p className="-translate-x-1/2 absolute font-['Teko:SemiBold',sans-serif] font-semibold leading-none left-[calc(50%-0.5px)] text-[#44494b] text-[20px] text-center top-[calc(50%-9px)]">FM</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px not-italic relative text-[#44494b] whitespace-pre-wrap">
      <p className="font-['Titillium_Web:Bold',sans-serif] leading-none relative shrink-0 text-[20px] w-full">--</p>
      <p className="font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] relative shrink-0 text-[14px] tracking-[-0.42px] w-full">Waiting for you : )</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <Frame5 />
      <Frame31 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame16 />
      <Frame18 />
      <Frame24 />
      <Frame26 />
      <Frame28 />
      <Frame30 />
    </div>
  );
}

function Performance() {
  return (
    <div className="col-[1] content-stretch css-vsca90 flex flex-col gap-[24px] h-[461px] items-start relative rounded-[8px] row-[1] self-start shrink-0" data-name="Performance">
      <Frame21 />
      <Frame20 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic pb-[2px] relative shrink-0 w-[240px] whitespace-pre-wrap">
      <p className="font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] relative shrink-0 text-[#696e70] text-[14px] tracking-[-0.42px] w-full">Consistency</p>
      <p className="font-['Titillium_Web:Bold',sans-serif] leading-[1.4] relative shrink-0 text-[#f2f5f7] text-[24px] tracking-[-0.72px] w-full">Running days (90)</p>
    </div>
  );
}

function Component1() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="01">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component2() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="03">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component4() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="05">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component6() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="07">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component29() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="09">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component30() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="11">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component31() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="13">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component32() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="15">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component33() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="17">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component34() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="21">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component35() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="26">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component3() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="02">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component5() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="04">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component7() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="06">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component36() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="08">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component37() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="10">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component38() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="12">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component39() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="14">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component40() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="16">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component41() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="18">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component42() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="22">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component43() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="27">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component44() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="19">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component45() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="23">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component46() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="28">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component47() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="20">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component48() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="24">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component49() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="29">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component50() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="25">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component51() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="30">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component52() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="31">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-center flex flex-wrap gap-0 items-center relative shrink-0">
      <Component1 />
      <Component2 />
      <Component4 />
      <Component6 />
      <Component29 />
      <Component30 />
      <Component31 />
      <Component32 />
      <Component33 />
      <Component34 />
      <Component35 />
      <Component3 />
      <Component5 />
      <Component7 />
      <Component36 />
      <Component37 />
      <Component38 />
      <Component39 />
      <Component40 />
      <Component41 />
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
    </div>
  );
}

function Separator() {
  return (
    <div className="absolute bottom-0 h-0 left-0 w-[1043px]" data-name="Separator">
      <div className="absolute inset-[-0.5px_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1043 1">
          <g id="Separator">
            <path d={svgPaths.p24f32400} fill="var(--stroke-0, #252A2C)" id="Vector 97" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex gap-[56px] items-center p-[24px] relative shrink-0 w-[1044px]" data-name="01">
      <p className="font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#f2f5f7] text-[16px] tracking-[-0.48px] w-[140px] whitespace-pre-wrap">Jan’25 (10/31)</p>
      <Frame61 />
      <Separator />
    </div>
  );
}

function Component54() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="01">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component55() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="03">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component56() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="05">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component57() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="07">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component58() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="09">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component59() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="11">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component60() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="13">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component61() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="15">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component62() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="17">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component63() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="21">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component64() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="26">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component65() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="02">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component66() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="04">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component67() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="06">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component68() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="08">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component69() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="10">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component70() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="12">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component71() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="14">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component72() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="16">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component73() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="18">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component74() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="22">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component75() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="27">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component76() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="19">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component77() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="23">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component78() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="28">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component79() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="20">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component80() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="24">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component81() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="29">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-center flex flex-wrap gap-0 items-center relative shrink-0">
      <Component54 />
      <Component55 />
      <Component56 />
      <Component57 />
      <Component58 />
      <Component59 />
      <Component60 />
      <Component61 />
      <Component62 />
      <Component63 />
      <Component64 />
      <Component65 />
      <Component66 />
      <Component67 />
      <Component68 />
      <Component69 />
      <Component70 />
      <Component71 />
      <Component72 />
      <Component73 />
      <Component74 />
      <Component75 />
      <Component76 />
      <Component77 />
      <Component78 />
      <Component79 />
      <Component80 />
      <Component81 />
    </div>
  );
}

function Separator1() {
  return (
    <div className="absolute bottom-0 h-0 left-0 w-[1043px]" data-name="Separator">
      <div className="absolute inset-[-0.5px_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1043 1">
          <g id="Separator">
            <path d={svgPaths.p24f32400} fill="var(--stroke-0, #252A2C)" id="Vector 97" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Component53() {
  return (
    <div className="content-stretch flex gap-[56px] items-center p-[24px] relative shrink-0 w-[1044px]" data-name="02">
      <p className="font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#f2f5f7] text-[16px] tracking-[-0.48px] w-[140px] whitespace-pre-wrap">Feb’25 (10/28)</p>
      <Frame62 />
      <Separator1 />
    </div>
  );
}

function Component83() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="01">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component84() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="03">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component85() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="05">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component86() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="07">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component87() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="09">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component88() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="11">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component89() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="13">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component90() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="15">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component91() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="17">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component92() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="21">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component93() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="26">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component94() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="02">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component95() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="04">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component96() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="06">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component97() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="08">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component98() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="10">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component99() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="12">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component100() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="14">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component101() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="16">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component102() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="18">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component103() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="22">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component104() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="27">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component105() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="19">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component106() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="23">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component107() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="28">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component108() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="20">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component109() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="24">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component110() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="29">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component111() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="25">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component112() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="30">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component113() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="31">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-center flex flex-wrap gap-0 items-center relative shrink-0">
      <Component83 />
      <Component84 />
      <Component85 />
      <Component86 />
      <Component87 />
      <Component88 />
      <Component89 />
      <Component90 />
      <Component91 />
      <Component92 />
      <Component93 />
      <Component94 />
      <Component95 />
      <Component96 />
      <Component97 />
      <Component98 />
      <Component99 />
      <Component100 />
      <Component101 />
      <Component102 />
      <Component103 />
      <Component104 />
      <Component105 />
      <Component106 />
      <Component107 />
      <Component108 />
      <Component109 />
      <Component110 />
      <Component111 />
      <Component112 />
      <Component113 />
    </div>
  );
}

function Separator2() {
  return (
    <div className="absolute bottom-0 h-0 left-0 w-[1043px]" data-name="Separator">
      <div className="absolute inset-[-0.5px_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1043 1">
          <g id="Separator">
            <path d={svgPaths.p24f32400} fill="var(--stroke-0, #252A2C)" id="Vector 97" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Component82() {
  return (
    <div className="content-stretch flex gap-[56px] items-center p-[24px] relative shrink-0 w-[1044px]" data-name="03">
      <p className="font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#f2f5f7] text-[16px] tracking-[-0.48px] w-[140px] whitespace-pre-wrap">Mar’25 (10/31)</p>
      <Frame63 />
      <Separator2 />
    </div>
  );
}

function Component115() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="01">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component116() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="03">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component117() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="05">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component118() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="07">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component119() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="09">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component120() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="11">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component121() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="13">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component122() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="15">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component123() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="17">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component124() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="21">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component125() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="26">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component126() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="02">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component127() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="04">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component128() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="06">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component129() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="08">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component130() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="10">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component131() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="12">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component132() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="14">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component133() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="16">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component134() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="18">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component135() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="22">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component136() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="27">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component137() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="19">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component138() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="23">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component139() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="28">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component140() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="20">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component141() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="24">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component142() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="29">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component143() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="25">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component144() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="30">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-center flex flex-wrap gap-0 items-center relative shrink-0">
      <Component115 />
      <Component116 />
      <Component117 />
      <Component118 />
      <Component119 />
      <Component120 />
      <Component121 />
      <Component122 />
      <Component123 />
      <Component124 />
      <Component125 />
      <Component126 />
      <Component127 />
      <Component128 />
      <Component129 />
      <Component130 />
      <Component131 />
      <Component132 />
      <Component133 />
      <Component134 />
      <Component135 />
      <Component136 />
      <Component137 />
      <Component138 />
      <Component139 />
      <Component140 />
      <Component141 />
      <Component142 />
      <Component143 />
      <Component144 />
    </div>
  );
}

function Separator3() {
  return (
    <div className="absolute bottom-0 h-0 left-0 w-[1043px]" data-name="Separator">
      <div className="absolute inset-[-0.5px_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1043 1">
          <g id="Separator">
            <path d={svgPaths.p24f32400} fill="var(--stroke-0, #252A2C)" id="Vector 97" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Component114() {
  return (
    <div className="content-stretch flex gap-[56px] items-center p-[24px] relative shrink-0 w-[1044px]" data-name="04">
      <p className="font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#f2f5f7] text-[16px] tracking-[-0.48px] w-[140px] whitespace-pre-wrap">Apr’25 (3/30)</p>
      <Frame64 />
      <Separator3 />
    </div>
  );
}

function ScrollBar() {
  return <div className="absolute bg-[rgba(105,110,112,0.7)] h-[87px] right-[8.5px] rounded-[16px] top-[21px] w-[8px]" data-name="Scroll bar" />;
}

function Component146() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="01">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component147() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="03">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component148() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="05">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component149() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="07">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component150() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="09">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component151() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="11">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component152() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="13">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component153() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="15">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component154() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="17">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component155() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="21">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component156() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="26">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component157() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="02">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component158() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="04">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component159() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="06">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component160() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="08">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component161() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="10">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component162() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="12">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component163() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="14">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component164() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="16">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component165() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="18">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component166() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="22">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component167() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="27">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component168() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="19">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component169() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="23">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component170() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="28">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component171() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="20">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component172() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="24">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component173() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="29">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component174() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="25">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component175() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="30">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component176() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="31">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-center flex flex-wrap gap-0 items-center relative shrink-0">
      <Component146 />
      <Component147 />
      <Component148 />
      <Component149 />
      <Component150 />
      <Component151 />
      <Component152 />
      <Component153 />
      <Component154 />
      <Component155 />
      <Component156 />
      <Component157 />
      <Component158 />
      <Component159 />
      <Component160 />
      <Component161 />
      <Component162 />
      <Component163 />
      <Component164 />
      <Component165 />
      <Component166 />
      <Component167 />
      <Component168 />
      <Component169 />
      <Component170 />
      <Component171 />
      <Component172 />
      <Component173 />
      <Component174 />
      <Component175 />
      <Component176 />
    </div>
  );
}

function Separator4() {
  return (
    <div className="absolute bottom-0 h-0 left-0 w-[1043px]" data-name="Separator">
      <div className="absolute inset-[-0.5px_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1043 1">
          <g id="Separator">
            <path d={svgPaths.p24f32400} fill="var(--stroke-0, #252A2C)" id="Vector 97" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Component145() {
  return (
    <div className="content-stretch flex gap-[56px] items-center p-[24px] relative shrink-0 w-[1044px]" data-name="05">
      <p className="font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#f2f5f7] text-[16px] tracking-[-0.48px] w-[140px] whitespace-pre-wrap">Mar’25 (10/31)</p>
      <Frame65 />
      <Separator4 />
    </div>
  );
}

function Component178() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="01">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component179() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="03">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component180() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="05">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component181() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="07">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component182() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="09">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component183() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="11">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component184() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="13">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component185() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="15">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component186() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="17">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component187() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="21">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component188() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="26">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component189() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="02">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component190() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="04">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component191() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="06">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component192() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="08">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component193() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="10">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component194() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="12">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component195() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="14">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component196() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="16">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component197() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="18">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component198() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="22">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component199() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="27">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component200() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="19">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component201() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="23">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component202() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="28">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component203() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="20">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component204() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="24">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component205() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="29">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component206() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="25">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component207() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="30">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-center flex flex-wrap gap-0 items-center relative shrink-0">
      <Component178 />
      <Component179 />
      <Component180 />
      <Component181 />
      <Component182 />
      <Component183 />
      <Component184 />
      <Component185 />
      <Component186 />
      <Component187 />
      <Component188 />
      <Component189 />
      <Component190 />
      <Component191 />
      <Component192 />
      <Component193 />
      <Component194 />
      <Component195 />
      <Component196 />
      <Component197 />
      <Component198 />
      <Component199 />
      <Component200 />
      <Component201 />
      <Component202 />
      <Component203 />
      <Component204 />
      <Component205 />
      <Component206 />
      <Component207 />
    </div>
  );
}

function Separator5() {
  return (
    <div className="absolute bottom-0 h-0 left-0 w-[1043px]" data-name="Separator">
      <div className="absolute inset-[-0.5px_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1043 1">
          <g id="Separator">
            <path d={svgPaths.p24f32400} fill="var(--stroke-0, #252A2C)" id="Vector 97" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Component177() {
  return (
    <div className="content-stretch flex gap-[56px] items-center p-[24px] relative shrink-0 w-[1044px]" data-name="06">
      <p className="font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#f2f5f7] text-[16px] tracking-[-0.48px] w-[140px] whitespace-pre-wrap">Apr’25 (3/30)</p>
      <Frame67 />
      <Separator5 />
    </div>
  );
}

function Component209() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="01">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component210() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="03">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component211() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="05">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component212() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="07">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component213() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="09">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component214() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="11">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component215() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="13">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component216() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="15">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component217() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="17">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component218() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="21">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component219() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="26">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component220() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="02">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component221() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="04">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component222() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="06">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component223() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="08">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component224() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="10">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component225() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="12">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component226() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="14">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component227() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="16">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component228() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="18">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component229() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="22">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component230() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="27">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component231() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="19">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component232() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="23">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component233() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="28">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component234() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="20">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component235() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="24">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component236() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="29">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component237() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="25">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component238() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="30">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component239() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="31">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-center flex flex-wrap gap-0 items-center relative shrink-0">
      <Component209 />
      <Component210 />
      <Component211 />
      <Component212 />
      <Component213 />
      <Component214 />
      <Component215 />
      <Component216 />
      <Component217 />
      <Component218 />
      <Component219 />
      <Component220 />
      <Component221 />
      <Component222 />
      <Component223 />
      <Component224 />
      <Component225 />
      <Component226 />
      <Component227 />
      <Component228 />
      <Component229 />
      <Component230 />
      <Component231 />
      <Component232 />
      <Component233 />
      <Component234 />
      <Component235 />
      <Component236 />
      <Component237 />
      <Component238 />
      <Component239 />
    </div>
  );
}

function Separator6() {
  return (
    <div className="absolute bottom-0 h-0 left-0 w-[1043px]" data-name="Separator">
      <div className="absolute inset-[-0.5px_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1043 1">
          <g id="Separator">
            <path d={svgPaths.p24f32400} fill="var(--stroke-0, #252A2C)" id="Vector 97" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Component208() {
  return (
    <div className="content-stretch flex gap-[56px] items-center p-[24px] relative shrink-0 w-[1044px]" data-name="07">
      <p className="font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#f2f5f7] text-[16px] tracking-[-0.48px] w-[140px] whitespace-pre-wrap">Mar’25 (10/31)</p>
      <Frame68 />
      <Separator6 />
    </div>
  );
}

function Component241() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="01">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component242() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="03">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component243() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="05">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component244() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="07">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component245() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="09">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component246() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="11">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component247() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="13">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component248() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="15">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component249() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="17">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component250() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="21">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component251() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="26">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component252() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="02">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component253() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="04">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component254() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="06">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component255() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="08">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component256() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="10">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component257() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="12">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component258() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="14">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component259() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="16">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component260() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="18">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component261() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="22">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component262() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="27">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component263() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="19">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component264() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="23">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component265() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="28">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component266() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="20">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component267() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="24">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component268() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="29">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component269() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="25">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component270() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="30">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-center flex flex-wrap gap-0 items-center relative shrink-0">
      <Component241 />
      <Component242 />
      <Component243 />
      <Component244 />
      <Component245 />
      <Component246 />
      <Component247 />
      <Component248 />
      <Component249 />
      <Component250 />
      <Component251 />
      <Component252 />
      <Component253 />
      <Component254 />
      <Component255 />
      <Component256 />
      <Component257 />
      <Component258 />
      <Component259 />
      <Component260 />
      <Component261 />
      <Component262 />
      <Component263 />
      <Component264 />
      <Component265 />
      <Component266 />
      <Component267 />
      <Component268 />
      <Component269 />
      <Component270 />
    </div>
  );
}

function Separator7() {
  return (
    <div className="absolute bottom-0 h-0 left-0 w-[1043px]" data-name="Separator">
      <div className="absolute inset-[-0.5px_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1043 1">
          <g id="Separator">
            <path d={svgPaths.p24f32400} fill="var(--stroke-0, #252A2C)" id="Vector 97" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Component240() {
  return (
    <div className="content-stretch flex gap-[56px] items-center p-[24px] relative shrink-0 w-[1044px]" data-name="08">
      <p className="font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#f2f5f7] text-[16px] tracking-[-0.48px] w-[140px] whitespace-pre-wrap">Apr’25 (3/30)</p>
      <Frame69 />
      <Separator7 />
    </div>
  );
}

function Component272() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="01">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component273() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="03">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component274() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="05">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component275() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="07">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component276() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="09">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component277() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="11">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component278() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="13">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component279() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="15">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component280() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="17">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component281() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="21">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component282() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="26">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component283() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="02">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component284() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="04">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component285() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="06">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component286() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="08">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component287() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="10">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component288() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="12">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component289() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="14">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component290() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="16">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component291() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="18">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component292() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="22">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component293() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="27">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component294() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="19">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component295() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="23">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component296() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="28">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component297() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="20">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component298() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="24">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component299() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="29">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component300() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="25">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component301() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="30">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component302() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="31">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-center flex flex-wrap gap-0 items-center relative shrink-0">
      <Component272 />
      <Component273 />
      <Component274 />
      <Component275 />
      <Component276 />
      <Component277 />
      <Component278 />
      <Component279 />
      <Component280 />
      <Component281 />
      <Component282 />
      <Component283 />
      <Component284 />
      <Component285 />
      <Component286 />
      <Component287 />
      <Component288 />
      <Component289 />
      <Component290 />
      <Component291 />
      <Component292 />
      <Component293 />
      <Component294 />
      <Component295 />
      <Component296 />
      <Component297 />
      <Component298 />
      <Component299 />
      <Component300 />
      <Component301 />
      <Component302 />
    </div>
  );
}

function Separator8() {
  return (
    <div className="absolute bottom-0 h-0 left-0 w-[1043px]" data-name="Separator">
      <div className="absolute inset-[-0.5px_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1043 1">
          <g id="Separator">
            <path d={svgPaths.p24f32400} fill="var(--stroke-0, #252A2C)" id="Vector 97" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Component271() {
  return (
    <div className="content-stretch flex gap-[56px] items-center p-[24px] relative shrink-0 w-[1044px]" data-name="09">
      <p className="font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#f2f5f7] text-[16px] tracking-[-0.48px] w-[140px] whitespace-pre-wrap">Mar’25 (10/31)</p>
      <Frame70 />
      <Separator8 />
    </div>
  );
}

function Component304() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="01">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component305() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="03">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component306() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="05">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component307() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="07">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component308() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="09">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component309() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="11">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component310() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="13">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component311() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="15">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component312() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="17">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component313() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="21">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component314() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="26">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component315() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="02">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component316() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="04">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component317() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="06">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component318() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="08">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component319() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="10">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component320() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="12">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component321() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="14">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component322() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="16">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component323() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="18">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component324() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="22">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component325() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="27">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component326() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="19">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component327() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="23">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component328() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="28">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component329() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="20">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component330() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="24">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component331() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="29">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component332() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="25">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component333() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="30">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-center flex flex-wrap gap-0 items-center relative shrink-0">
      <Component304 />
      <Component305 />
      <Component306 />
      <Component307 />
      <Component308 />
      <Component309 />
      <Component310 />
      <Component311 />
      <Component312 />
      <Component313 />
      <Component314 />
      <Component315 />
      <Component316 />
      <Component317 />
      <Component318 />
      <Component319 />
      <Component320 />
      <Component321 />
      <Component322 />
      <Component323 />
      <Component324 />
      <Component325 />
      <Component326 />
      <Component327 />
      <Component328 />
      <Component329 />
      <Component330 />
      <Component331 />
      <Component332 />
      <Component333 />
    </div>
  );
}

function Separator9() {
  return (
    <div className="absolute bottom-0 h-0 left-0 w-[1043px]" data-name="Separator">
      <div className="absolute inset-[-0.5px_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1043 1">
          <g id="Separator">
            <path d={svgPaths.p24f32400} fill="var(--stroke-0, #252A2C)" id="Vector 97" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Component303() {
  return (
    <div className="content-stretch flex gap-[56px] items-center p-[24px] relative shrink-0 w-[1044px]" data-name="10">
      <p className="font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#f2f5f7] text-[16px] tracking-[-0.48px] w-[140px] whitespace-pre-wrap">Apr’25 (3/30)</p>
      <Frame71 />
      <Separator9 />
    </div>
  );
}

function Component335() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="01">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component336() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="03">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component337() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="05">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component338() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="07">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component339() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="09">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component340() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="11">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component341() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="13">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component342() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="15">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component343() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="17">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component344() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="21">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component345() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="26">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component346() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="02">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component347() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="04">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component348() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="06">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component349() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="08">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component350() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="10">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component351() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="12">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component352() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="14">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component353() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="16">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component354() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="18">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component355() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="22">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component356() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="27">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component357() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="19">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component358() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="23">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component359() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="28">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component360() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="20">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component361() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="24">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component362() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="29">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component363() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="25">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component364() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="30">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component365() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="31">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-center flex flex-wrap gap-0 items-center relative shrink-0">
      <Component335 />
      <Component336 />
      <Component337 />
      <Component338 />
      <Component339 />
      <Component340 />
      <Component341 />
      <Component342 />
      <Component343 />
      <Component344 />
      <Component345 />
      <Component346 />
      <Component347 />
      <Component348 />
      <Component349 />
      <Component350 />
      <Component351 />
      <Component352 />
      <Component353 />
      <Component354 />
      <Component355 />
      <Component356 />
      <Component357 />
      <Component358 />
      <Component359 />
      <Component360 />
      <Component361 />
      <Component362 />
      <Component363 />
      <Component364 />
      <Component365 />
    </div>
  );
}

function Separator10() {
  return (
    <div className="absolute bottom-0 h-0 left-0 w-[1043px]" data-name="Separator">
      <div className="absolute inset-[-0.5px_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1043 1">
          <g id="Separator">
            <path d={svgPaths.p24f32400} fill="var(--stroke-0, #252A2C)" id="Vector 97" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Component334() {
  return (
    <div className="content-stretch flex gap-[56px] items-center p-[24px] relative shrink-0 w-[1044px]" data-name="11">
      <p className="font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#f2f5f7] text-[16px] tracking-[-0.48px] w-[140px] whitespace-pre-wrap">Mar’25 (10/31)</p>
      <Frame72 />
      <Separator10 />
    </div>
  );
}

function Component367() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="01">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component368() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="03">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component369() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="05">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component370() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="07">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component371() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="09">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component372() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="11">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component373() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="13">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component374() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="15">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component375() {
  return (
    <div className="bg-[#04b488] relative rounded-[4px] shrink-0 size-[24px]" data-name="17">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component376() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="21">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component377() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="26">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component378() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="02">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component379() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="04">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component380() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="06">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component381() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="08">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component382() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="10">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component383() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="12">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component384() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="14">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component385() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="16">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component386() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="18">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component387() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="22">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component388() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="27">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component389() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="19">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component390() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="23">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component391() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="28">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component392() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="20">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component393() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="24">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component394() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="29">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component395() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="25">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component396() {
  return (
    <div className="bg-[#151819] relative rounded-[4px] shrink-0 size-[24px]" data-name="30">
      <div aria-hidden="true" className="absolute border-2 border-[#060809] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-center flex flex-wrap gap-0 items-center relative shrink-0">
      <Component367 />
      <Component368 />
      <Component369 />
      <Component370 />
      <Component371 />
      <Component372 />
      <Component373 />
      <Component374 />
      <Component375 />
      <Component376 />
      <Component377 />
      <Component378 />
      <Component379 />
      <Component380 />
      <Component381 />
      <Component382 />
      <Component383 />
      <Component384 />
      <Component385 />
      <Component386 />
      <Component387 />
      <Component388 />
      <Component389 />
      <Component390 />
      <Component391 />
      <Component392 />
      <Component393 />
      <Component394 />
      <Component395 />
      <Component396 />
    </div>
  );
}

function Separator11() {
  return (
    <div className="absolute bottom-0 h-0 left-0 w-[1043px]" data-name="Separator">
      <div className="absolute inset-[-0.5px_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1043 1">
          <g id="Separator">
            <path d={svgPaths.p24f32400} fill="var(--stroke-0, #252A2C)" id="Vector 97" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Component366() {
  return (
    <div className="content-stretch flex gap-[56px] items-center p-[24px] relative shrink-0 w-[1044px]" data-name="12">
      <p className="font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#f2f5f7] text-[16px] tracking-[-0.48px] w-[140px] whitespace-pre-wrap">Apr’25 (3/30)</p>
      <Frame73 />
      <Separator11 />
    </div>
  );
}

function Streaks() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Streaks">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Component />
        <Component53 />
        <Component82 />
        <Component114 />
        <ScrollBar />
        <Component145 />
        <Component177 />
        <Component208 />
        <Component240 />
        <Component271 />
        <Component303 />
        <Component334 />
        <Component366 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#252a2c] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame66() {
  return (
    <div className="/ 4] col-[2 content-stretch flex flex-col gap-[24px] items-start relative row-[1] self-stretch shrink-0 span w-[1043.2px]">
      <Frame11 />
      <Streaks />
    </div>
  );
}

function Frame58() {
  return (
    <div className="gap-[16px] gap-[32px] grid grid-cols-[repeat(5,_minmax(0,_1fr))] grid-rows-[repeat(1,_fit-content(100%))] max-w-[1440px] py-[32px] relative shrink-0 w-full">
      <Performance />
      <Frame66 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <Frame60 />
      <Frame57 />
      <Frame58 />
    </div>
  );
}

function StravaDashboard() {
  return (
    <div className="bg-[#060809] h-[261px] leading-[normal] overflow-clip relative shrink-0 w-[1573px]" data-name="Strava dashboard">
      <p className="-translate-x-1/2 absolute bg-clip-text bg-gradient-to-b bottom-[218.52px] font-['Teko:SemiBold',sans-serif] font-semibold from-[#494949] from-[20.186%] left-[calc(50%-0.5px)] text-[173px] text-center to-[#060809] to-[66.935%] tracking-[-5.19px] translate-y-full" style={{ WebkitTextFillColor: "transparent" }}>{`RUNNING IS A PRIVILEGE `}</p>
      <p className="absolute bottom-[29px] font-['Titillium_Web:SemiBold',sans-serif] not-italic right-[130px] text-[#989ea0] text-[14px] text-right tracking-[-0.42px] translate-y-full">Built with Cursor • Hosted on Vercel</p>
      <p className="-translate-x-1/2 absolute bottom-[29px] font-['Titillium_Web:SemiBold',sans-serif] left-1/2 not-italic text-[#989ea0] text-[14px] text-center tracking-[-0.42px] translate-y-full">January 2026</p>
      <p className="absolute bottom-[29px] font-['Titillium_Web:SemiBold',sans-serif] left-[130px] not-italic text-[#989ea0] text-[14px] tracking-[-0.42px] translate-y-full">{`Design & built by Rakshit`}</p>
    </div>
  );
}

export default function StravaDashboardX() {
  return (
    <div className="bg-[#060809] content-stretch flex flex-col items-center relative size-full" data-name="Strava dashboard x 1728">
      <Header />
      <Frame48 />
      <Frame59 />
      <StravaDashboard />
    </div>
  );
}