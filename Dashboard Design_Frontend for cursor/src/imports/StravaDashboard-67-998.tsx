import svgPaths from "./svg-arhpdc298h";
import imgScreenshot20260114At42951Pm3 from "figma:asset/8f2d3b7405a75b378cd3c608b63ab99c103da347.png";
import imgImage58 from "figma:asset/349e914e3464f92880dd2640cba55fc53460b4c0.png";
import imgImage59 from "figma:asset/fafc84db20cdcb576e52ac3496381f7a5bd5e139.png";
import imgImage60 from "figma:asset/ddcb19a06760ccaf71d31fb5fbc0f7a483c8d204.png";
import imgImage61 from "figma:asset/da352727c5e709f414d6af74bc360b7f4ecfb238.png";
import imgImage62 from "figma:asset/9d0a510938bbdff1b1be5bb1ad5095ae9f1022fa.png";
import imgImage63 from "figma:asset/ff8e1987a3e5ed73f6a8874d14bd2fd48eae4495.png";
import imgImage64 from "figma:asset/b016f7edfc1a7607754d1a25935b9d34141d9e80.png";

function Avatar() {
  return (
    <div className="bg-white overflow-clip relative rounded-[1598.4px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="absolute css-g0mm18 flex flex-col font-['Titillium_Web:Bold',sans-serif] justify-center leading-[0] left-[calc(50%-10px)] not-italic text-[#f2f5f7] text-[20px] top-[calc(50%-1px)] translate-y-[-50%]">
        <p className="css-ew64yg leading-none">♠️</p>
      </div>
    </div>
  );
}

function ContentFrame() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center not-italic relative shrink-0" data-name="Content frame">
      <div className="flex flex-col font-['Titillium_Web:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[#f2f5f7] text-[20px] w-[240px]">
        <p className="css-4hzbpn leading-none">Rakshit’s running dash</p>
      </div>
      <p className="css-4hzbpn font-['Titillium_Web:SemiBold',sans-serif] leading-[1.4] min-w-full relative shrink-0 text-[#696e70] text-[12px] w-[min-content]">Last updated 19 Jan’26</p>
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
      <p className="css-ew64yg font-['Groww_Sans_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#f2f5f7] text-[14px]">Jan’26</p>
    </div>
  );
}

function TrailingIcon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="trailing-icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_67_1006)" id="trailing-icon">
          <g id="vector"></g>
          <path d={svgPaths.p310f4100} fill="var(--fill-0, #F2F5F7)" id="vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_67_1006">
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
      <p className="css-ew64yg font-['Titillium_Web:SemiBold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#060809] text-[14px] tracking-[-0.42px]">Km</p>
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
      <p className="css-ew64yg font-['Titillium_Web:SemiBold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#989ea0] text-[14px] tracking-[-0.42px]">Miles</p>
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
      <p className="css-ew64yg font-['Titillium_Web:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f2f5f7] text-[14px]">Connect Strava</p>
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
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#696e70] text-[14px] tracking-[-0.42px]">
        <p className="css-ew64yg leading-[18px]">•</p>
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

function Frame42() {
  return (
    <div className="content-stretch flex gap-px items-baseline mb-[-4px] relative shrink-0 w-full">
      <p className="css-ew64yg font-['Teko:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[#f2f5f7] text-[56px]">7:01</p>
      <p className="css-ew64yg font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#696e70] text-[14px] tracking-[-0.42px]">/km</p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-[99px]">
      <p className="css-4hzbpn font-['Titillium_Web:SemiBold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#696e70] text-[14px] w-full">Average pace</p>
      <Frame42 />
    </div>
  );
}

function Group() {
  return (
    <div className="h-[50px] relative shrink-0 w-full">
      <div className="absolute inset-[-1.15%_-0.36%_0_-0.14%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 231.536 50.5742">
          <g id="Group 33">
            <path d={svgPaths.p36bcb800} fill="url(#paint0_linear_67_1025)" id="Vector 94" />
            <path d={svgPaths.p1b683818} id="Vector 95" stroke="var(--stroke-0, #04B488)" strokeWidth="2" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_67_1025" x1="115.517" x2="115.517" y1="0.574215" y2="50.5742">
              <stop stopColor="#04B488" stopOpacity="0.3" />
              <stop offset="1" stopColor="#04B488" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[148px] items-start justify-between min-h-px min-w-px relative rounded-[16px]">
      <Frame43 />
      <Group />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex gap-px items-baseline mb-[-4px] relative shrink-0 w-full">
      <p className="css-ew64yg font-['Teko:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[#f2f5f7] text-[56px]">347</p>
      <p className="css-ew64yg font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#696e70] text-[14px] tracking-[-0.42px]">km</p>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-[99px]">
      <p className="css-4hzbpn font-['Titillium_Web:SemiBold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#696e70] text-[14px] w-full">Distance</p>
      <Frame52 />
    </div>
  );
}

function Group2() {
  return (
    <div className="h-[50px] relative shrink-0 w-full">
      <div className="absolute inset-[-1.15%_-0.14%_0_-0.36%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 231.536 50.5742">
          <g id="Group 33">
            <path d={svgPaths.p8c09400} fill="url(#paint0_linear_67_1017)" id="Vector 94" />
            <path d={svgPaths.p1c840100} id="Vector 95" stroke="var(--stroke-0, #FF5E3B)" strokeWidth="2" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_67_1017" x1="116.019" x2="116.019" y1="0.574215" y2="50.5742">
              <stop stopColor="#FC5200" stopOpacity="0.2" />
              <stop offset="1" stopColor="#FC5200" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[148px] items-start justify-between min-h-px min-w-px relative rounded-[16px]">
      <Frame53 />
      <Group2 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex gap-px items-baseline mb-[-4px] relative shrink-0 w-full">
      <p className="css-ew64yg font-['Teko:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[#f2f5f7] text-[56px]">123</p>
      <p className="css-ew64yg font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#696e70] text-[14px] tracking-[-0.42px]">hrs</p>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-[99px]">
      <p className="css-4hzbpn font-['Titillium_Web:SemiBold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#696e70] text-[14px] w-full">Time</p>
      <Frame54 />
    </div>
  );
}

function Group3() {
  return (
    <div className="h-[50px] relative shrink-0 w-full">
      <div className="absolute inset-[-1.15%_-0.36%_0_-0.14%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 231.536 50.5742">
          <g id="Group 33">
            <path d={svgPaths.p1ed5a080} fill="url(#paint0_linear_67_1021)" id="Vector 94" />
            <path d={svgPaths.p3671cd00} id="Vector 95" stroke="var(--stroke-0, #04B488)" strokeWidth="2" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_67_1021" x1="115.517" x2="115.517" y1="0.574215" y2="50.5742">
              <stop stopColor="#04B488" stopOpacity="0.3" />
              <stop offset="1" stopColor="#04B488" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[148px] items-start justify-between min-h-px min-w-px relative rounded-[16px]">
      <Frame55 />
      <Group3 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex gap-px items-baseline mb-[-4px] relative shrink-0 w-full">
      <p className="css-ew64yg font-['Teko:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[#f2f5f7] text-[56px]">340</p>
      <p className="css-ew64yg font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#696e70] text-[14px] tracking-[-0.42px]">m</p>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-[99px]">
      <p className="css-4hzbpn font-['Titillium_Web:SemiBold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#696e70] text-[14px] w-full">Elevation</p>
      <Frame56 />
    </div>
  );
}

function Group4() {
  return (
    <div className="h-[50px] relative shrink-0 w-full">
      <div className="absolute inset-[-1.15%_-0.36%_0_-0.14%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 231.536 50.5742">
          <g id="Group 33">
            <path d={svgPaths.p36bcb800} fill="url(#paint0_linear_67_1025)" id="Vector 94" />
            <path d={svgPaths.p1b683818} id="Vector 95" stroke="var(--stroke-0, #04B488)" strokeWidth="2" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_67_1025" x1="115.517" x2="115.517" y1="0.574215" y2="50.5742">
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
      <Frame57 />
      <Group4 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex items-baseline mb-[-4px] relative shrink-0 w-full">
      <p className="css-ew64yg font-['Teko:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[#f2f5f7] text-[56px]">123</p>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-[99px]">
      <p className="css-4hzbpn font-['Titillium_Web:SemiBold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#696e70] text-[14px] w-full">Sessions</p>
      <Frame58 />
    </div>
  );
}

function Group1() {
  return (
    <div className="h-[50px] relative shrink-0 w-full">
      <div className="absolute inset-[-1.15%_-0.14%_0_-0.36%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 231.536 50.5742">
          <g id="Group 33">
            <path d={svgPaths.p8c09400} fill="url(#paint0_linear_67_1017)" id="Vector 94" />
            <path d={svgPaths.p1c840100} id="Vector 95" stroke="var(--stroke-0, #FF5E3B)" strokeWidth="2" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_67_1017" x1="116.019" x2="116.019" y1="0.574215" y2="50.5742">
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
      <Frame59 />
      <Group1 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="max-w-[1440px] relative shrink-0 w-full">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex gap-[40px] items-center max-w-[inherit] px-[64px] py-[32px] relative w-full">
          <Frame44 />
          <Frame45 />
          <Frame46 />
          <Frame47 />
          <Frame48 />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic pb-[2px] relative shrink-0 w-[240px]">
      <p className="css-ew64yg font-['Titillium_Web:Bold',sans-serif] leading-[1.4] relative shrink-0 text-[#f2f5f7] text-[20px] tracking-[-0.6px]">Running routes</p>
      <p className="css-4hzbpn font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] min-w-full relative shrink-0 text-[#696e70] text-[14px] tracking-[-0.42px] w-[min-content]">Click on the routes to know more details</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="h-[366px] overflow-clip relative rounded-[12px] shrink-0 w-full">
      <div className="absolute aspect-[1462/569] bottom-[-28.23%] left-[calc(50%-0.2px)] top-[-28.49%] translate-x-[-50%]" data-name="Screenshot 2026-01-14 at 4.29.51 PM 3">
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

function Frame21() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[2px] relative shrink-0">
      <Frame8 />
      <p className="css-4hzbpn font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#696e70] text-[14px] tracking-[-0.42px] w-full">All time data</p>
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

function Frame14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <p className="css-4hzbpn font-['Teko:Bold',sans-serif] font-bold leading-none relative shrink-0 text-[#f2f5f7] text-[20px] w-full">29:45</p>
      <p className="css-g0mm18 font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic overflow-hidden relative shrink-0 text-[#696e70] text-[14px] text-ellipsis tracking-[-0.42px] w-full">15th Jan • 5:30/km</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <div className="flex flex-row items-center self-stretch">
        <Frame />
      </div>
      <Frame14 />
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

function Frame24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <p className="css-4hzbpn font-['Teko:Bold',sans-serif] font-bold leading-none relative shrink-0 text-[#f2f5f7] text-[20px] w-full">1:03:45</p>
      <p className="css-g0mm18 font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic overflow-hidden relative shrink-0 text-[#696e70] text-[14px] text-ellipsis tracking-[-0.42px] w-full">12th Jan • 6:30/km</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <div className="flex flex-row items-center self-stretch">
        <Frame1 />
      </div>
      <Frame24 />
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

function Frame25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <div className="flex flex-col font-['Teko:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f2f5f7] text-[20px] w-full">
        <p className="css-4hzbpn leading-none">1:43:45</p>
      </div>
      <p className="css-g0mm18 font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic overflow-hidden relative shrink-0 text-[#696e70] text-[14px] text-ellipsis tracking-[-0.42px] w-full">12th Jan • 7:30/km</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <div className="flex flex-row items-center self-stretch">
        <Frame2 />
      </div>
      <Frame25 />
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

function Frame26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <p className="css-4hzbpn font-['Teko:Bold',sans-serif] font-bold leading-none relative shrink-0 text-[#f2f5f7] text-[20px] w-full">2:55:45</p>
      <p className="css-g0mm18 font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic overflow-hidden relative shrink-0 text-[#696e70] text-[14px] text-ellipsis tracking-[-0.42px] w-full">12th Jan • 8:00/km</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <div className="flex flex-row items-center self-stretch">
        <Frame3 />
      </div>
      <Frame26 />
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

function Frame27() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px not-italic relative text-[#44494b]">
      <p className="css-4hzbpn font-['Titillium_Web:Bold',sans-serif] leading-none relative shrink-0 text-[20px] w-full">--</p>
      <p className="css-g0mm18 font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] overflow-hidden relative shrink-0 text-[14px] text-ellipsis tracking-[-0.42px] w-full">Waiting for you : )</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <div className="flex flex-row items-center self-stretch">
        <Frame4 />
      </div>
      <Frame27 />
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

function Frame28() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px not-italic relative text-[#44494b]">
      <p className="css-4hzbpn font-['Titillium_Web:Bold',sans-serif] leading-none relative shrink-0 text-[20px] w-full">--</p>
      <p className="css-g0mm18 font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] overflow-hidden relative shrink-0 text-[14px] text-ellipsis tracking-[-0.42px] w-full">Waiting for you : )</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <div className="flex flex-row items-center self-stretch">
        <Frame5 />
      </div>
      <Frame28 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame15 />
      <Frame16 />
      <Frame17 />
      <Frame18 />
      <Frame19 />
      <Frame20 />
    </div>
  );
}

function Performance() {
  return (
    <div className="bg-[#151819] col-[1] css-por8k5 relative rounded-[16px] row-[1] self-start shrink-0" data-name="Performance">
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[24px] pt-[16px] px-[20px] relative w-full">
        <Frame21 />
        <Frame29 />
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="max-w-[1440px] relative shrink-0 w-full">
      <div className="gap-[16px] gap-[40px] grid grid-cols-[repeat(5,_minmax(0,_1fr))] grid-rows-[repeat(1,_fit-content(100%))] max-w-[inherit] px-[64px] py-[32px] relative w-full">
        <MapComponent />
        <Performance />
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic pb-[2px] relative shrink-0 w-[240px]">
      <p className="css-4hzbpn font-['Titillium_Web:Bold',sans-serif] leading-[1.4] relative shrink-0 text-[#f2f5f7] text-[20px] tracking-[-0.6px] w-full">Monthly streak: 9 days</p>
      <p className="css-4hzbpn font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] relative shrink-0 text-[#696e70] text-[14px] tracking-[-0.42px] w-full">You’ve been consistent</p>
    </div>
  );
}

function Frame60() {
  return <div className="bg-[#1f2425] h-[24px] rounded-[6px] shrink-0 w-full" />;
}

function Frame61() {
  return <div className="bg-[#04b488] h-[24px] rounded-[6px] shrink-0 w-full" />;
}

function Frame62() {
  return <div className="bg-[#44494b] h-[24px] rounded-[6px] shrink-0 w-full" />;
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[24px]">
      <p className="css-4hzbpn font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#696e70] text-[10px] text-center tracking-[-0.3px] w-full">Sun</p>
      <Frame60 />
      <Frame61 />
      {[...Array(2).keys()].map((_, i) => (
        <Frame62 key={i} />
      ))}
      <Frame61 />
    </div>
  );
}

function Frame72() {
  return <div className="bg-[#1f2425] h-[24px] rounded-[6px] shrink-0 w-full" />;
}

function Frame74() {
  return <div className="bg-[#44494b] h-[24px] rounded-[6px] shrink-0 w-full" />;
}

function Frame75() {
  return <div className="bg-[#04b488] h-[24px] rounded-[6px] shrink-0 w-full" />;
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[24px]">
      <p className="css-4hzbpn font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#696e70] text-[10px] text-center tracking-[-0.3px] w-full">Mon</p>
      <Frame72 />
      <Frame74 />
      <Frame75 />
      <Frame74 />
      <Frame74 />
    </div>
  );
}

function Frame86() {
  return <div className="bg-[#1f2425] h-[24px] rounded-[6px] shrink-0 w-full" />;
}

function Frame87() {
  return <div className="bg-[#44494b] h-[24px] rounded-[6px] shrink-0 w-full" />;
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[24px]">
      <p className="css-4hzbpn font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#696e70] text-[10px] text-center tracking-[-0.3px] w-full">Tue</p>
      <Frame86 />
      {[...Array(4).keys()].map((_, i) => (
        <Frame87 key={i} />
      ))}
    </div>
  );
}

function Frame88() {
  return <div className="bg-[#44494b] h-[24px] rounded-[6px] shrink-0 w-full" />;
}

function Frame89() {
  return <div className="bg-[#04b488] h-[24px] rounded-[6px] shrink-0 w-full" />;
}

function Frame66() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[24px]">
      <p className="css-4hzbpn font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#696e70] text-[10px] text-center tracking-[-0.3px] w-full">Wed</p>
      {[...Array(2).keys()].map((_, i) => (
        <Frame88 key={i} />
      ))}
      {[...Array(3).keys()].map((_, i) => (
        <Frame89 key={i} />
      ))}
    </div>
  );
}

function Frame90() {
  return <div className="bg-[#44494b] h-[24px] rounded-[6px] shrink-0 w-full" />;
}

function Frame91() {
  return <div className="bg-[#04b488] h-[24px] rounded-[6px] shrink-0 w-full" />;
}

function Frame67() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[24px]">
      <p className="css-4hzbpn font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#696e70] text-[10px] text-center tracking-[-0.3px] w-full">Thu</p>
      <Frame90 />
      <Frame91 />
      <Frame90 />
      <Frame90 />
      <Frame90 />
    </div>
  );
}

function Frame92() {
  return <div className="bg-[#44494b] h-[24px] rounded-[6px] shrink-0 w-full" />;
}

function Frame93() {
  return <div className="bg-[#04b488] h-[24px] rounded-[6px] shrink-0 w-full" />;
}

function Frame68() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[24px]">
      <p className="css-4hzbpn font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#696e70] text-[10px] text-center tracking-[-0.3px] w-full">Fri</p>
      <Frame92 />
      <Frame93 />
      <Frame92 />
      <Frame93 />
      <Frame92 />
    </div>
  );
}

function Frame94() {
  return <div className="bg-[#44494b] h-[24px] rounded-[6px] shrink-0 w-full" />;
}

function Frame95() {
  return <div className="bg-[#1f2425] h-[24px] rounded-[6px] shrink-0 w-full" />;
}

function Frame69() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[24px]">
      <p className="css-4hzbpn font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#696e70] text-[10px] text-center tracking-[-0.3px] w-full">Sat</p>
      {[...Array(4).keys()].map((_, i) => (
        <Frame94 key={i} />
      ))}
      <Frame95 />
    </div>
  );
}

function Frame70() {
  return (
    <div className="bg-[#1e2224] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[24px] relative w-full">
          <Frame63 />
          <Frame64 />
          <Frame65 />
          <Frame66 />
          <Frame67 />
          <Frame68 />
          <Frame69 />
        </div>
      </div>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[264px]">
      <Frame9 />
      <Frame70 />
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic pb-[2px] relative shrink-0 w-full">
      <p className="css-4hzbpn font-['Titillium_Web:Bold',sans-serif] leading-[1.4] relative shrink-0 text-[#f2f5f7] text-[20px] tracking-[-0.6px] w-full">Photo-gallery</p>
      <p className="css-4hzbpn font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] relative shrink-0 text-[#696e70] text-[14px] tracking-[-0.42px] w-full">See yourself run</p>
    </div>
  );
}

function Frame80() {
  return (
    <div className="h-[222px] overflow-clip relative rounded-[8px] shrink-0 w-[125px]">
      <div className="absolute h-[222.001px] left-[calc(50%+0.5px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[166.501px]" data-name="image 58">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage58} />
      </div>
    </div>
  );
}

function Frame81() {
  return (
    <div className="h-[222px] overflow-clip relative rounded-[8px] shrink-0 w-[125px]">
      <div className="absolute h-[222.001px] left-[calc(50%+0.5px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[166.501px]" data-name="image 58">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage59} />
      </div>
    </div>
  );
}

function Frame82() {
  return (
    <div className="h-[222px] overflow-clip relative rounded-[8px] shrink-0 w-[125px]">
      <div className="absolute h-[222.001px] left-[calc(50%+0.5px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[166.501px]" data-name="image 58">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage60} />
      </div>
    </div>
  );
}

function Frame76() {
  return (
    <div className="h-[222px] overflow-clip relative rounded-[8px] shrink-0 w-[125px]">
      <div className="absolute h-[222.001px] left-[calc(50%+0.5px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[166.501px]" data-name="image 58">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage61} />
      </div>
    </div>
  );
}

function Frame83() {
  return (
    <div className="h-[222px] overflow-clip relative rounded-[8px] shrink-0 w-[125px]">
      <div className="absolute h-[222.001px] left-[calc(50%+0.5px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[166.501px]" data-name="image 58">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage58} />
      </div>
      <div className="absolute h-[246px] left-[-6px] top-[-12px] w-[138px]" data-name="image 59">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage62} />
      </div>
    </div>
  );
}

function Frame77() {
  return (
    <div className="h-[222px] overflow-clip relative rounded-[8px] shrink-0 w-[125px]">
      <div className="absolute h-[222.001px] left-[calc(50%+0.5px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[166.501px]" data-name="image 58">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage63} />
      </div>
    </div>
  );
}

function Frame78() {
  return (
    <div className="h-[222px] overflow-clip relative rounded-[8px] shrink-0 w-[125px]">
      <div className="absolute h-[222.001px] left-[calc(50%+0.5px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[166.501px]" data-name="image 58">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage64} />
      </div>
    </div>
  );
}

function Elements() {
  return (
    <div className="absolute inset-[7.29%]" data-name="elements">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.5 20.5">
        <g>
          <path d={svgPaths.p2451c000} fill="var(--fill-0, #44494B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Image() {
  return (
    <div className="absolute left-[calc(50%+0.5px)] size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="image-02">
      <Elements />
    </div>
  );
}

function Frame79() {
  return (
    <div className="bg-[#1f2425] h-[222px] overflow-clip relative rounded-[8px] shrink-0 w-[125px]">
      <Image />
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0 w-full">
      <Frame80 />
      <Frame81 />
      <Frame82 />
      <Frame76 />
      <Frame83 />
      <Frame77 />
      <Frame78 />
      <Frame83 />
      <Frame79 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_67_1002)" id="icon">
          <g id="vector"></g>
          <path d={svgPaths.p14caf100} fill="var(--fill-0, #060809)" id="vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_67_1002">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute content-stretch flex items-start left-[9px] top-[8px]" data-name="↪️ ✎ icon">
      <Icon />
    </div>
  );
}

function IconFrame() {
  return (
    <div className="bg-[#f2f5f7] relative rounded-[99px] shrink-0 size-[40px]" data-name="icon-frame">
      <Icon1 />
    </div>
  );
}

function MdsIconButtonOutlineIconButton() {
  return (
    <div className="absolute content-stretch flex items-center justify-center right-[16px] size-[40px] top-[calc(50%+31.5px)] translate-y-[-50%]" data-name="mds-icon-button/outline-icon-button">
      <IconFrame />
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative">
      <Frame71 />
      <Frame96 />
      <MdsIconButtonOutlineIconButton />
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex gap-[40px] items-start relative shrink-0 w-full">
      <Frame73 />
      <Frame84 />
    </div>
  );
}

function RunningTrendsComponent() {
  return (
    <div className="/ 5] bg-[#151819] col-[1 css-por8k5 relative rounded-[16px] row-[1] self-start shrink-0 span" data-name="Running trends component">
      <div className="content-stretch flex flex-col items-start p-[16px] relative w-full">
        <Frame85 />
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="max-w-[1440px] relative shrink-0 w-full">
      <div className="gap-[16px] gap-[40px] grid grid-cols-[repeat(5,_minmax(0,_1fr))] grid-rows-[repeat(1,_fit-content(100%))] max-w-[inherit] pb-[32px] px-[64px] relative w-full">
        <RunningTrendsComponent />
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic pb-[2px] relative shrink-0 w-[240px]">
      <p className="css-4hzbpn font-['Titillium_Web:Bold',sans-serif] leading-[1.4] relative shrink-0 text-[#f2f5f7] text-[20px] tracking-[-0.6px] w-full">Running trends</p>
      <p className="css-4hzbpn font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] relative shrink-0 text-[#696e70] text-[14px] tracking-[-0.42px] w-full">Pace • Distance • Elevation</p>
    </div>
  );
}

function MiddleFrame2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="middle-frame">
      <p className="css-ew64yg font-['Titillium_Web:SemiBold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#060809] text-[12px] tracking-[-0.36px]">Pace</p>
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
      <p className="css-ew64yg font-['Titillium_Web:SemiBold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#989ea0] text-[14px] tracking-[-0.42px]">Distance</p>
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
      <p className="css-ew64yg font-['Titillium_Web:SemiBold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#989ea0] text-[14px] tracking-[-0.42px]">Elevation</p>
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
      <Frame10 />
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

function Frame32() {
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

function Frame33() {
  return (
    <div className="col-1 h-[221px] ml-0 mt-0 overflow-clip relative row-1 w-[1009.6px]">
      <GridLinesInBack />
      <div className="absolute h-[176px] left-[39px] top-[24px] w-0" data-name="axis">
        <div className="absolute inset-[0_-0.5px]" style={{ "--stroke-0": "rgba(37, 42, 44, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 176">
            <path d="M0.5 0V176" id="axis" stroke="var(--stroke-0, #252A2C)" />
          </svg>
        </div>
      </div>
      <div className="absolute flex h-0 items-center justify-center left-[39px] top-[200px] w-[960px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
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
      <Frame32 />
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
      <Frame33 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <FrameWithChart />
    </div>
  );
}

function RunningTrendsComponent1() {
  return (
    <div className="/ 4] bg-[#151819] col-[2 css-por8k5 relative rounded-[16px] row-[1] self-stretch shrink-0 span" data-name="Running trends component">
      <div className="content-stretch flex flex-col items-start justify-between pb-[20px] pt-[16px] px-[16px] relative size-full">
        <Frame35 />
        <Frame34 />
      </div>
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

function Frame37() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[2px] relative shrink-0 w-full">
      <Frame11 />
      <p className="css-4hzbpn font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#696e70] text-[14px] tracking-[-0.42px] w-full">All time data</p>
    </div>
  );
}

function Frame30() {
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

function Frame23() {
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

function Frame31() {
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

function Frame22() {
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

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0">
      <Frame30 />
      <Frame23 />
      <Frame31 />
      <Frame22 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#151819] col-[1] css-por8k5 relative rounded-[16px] row-[1] self-start shrink-0">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[24px] pt-[16px] px-[16px] relative w-full">
        <Frame37 />
        <Frame36 />
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="max-w-[1440px] relative shrink-0 w-full">
      <div className="gap-[16px] gap-[40px] grid grid-cols-[repeat(5,_minmax(0,_1fr))] grid-rows-[repeat(1,_fit-content(100%))] max-w-[inherit] pb-[120px] px-[64px] relative w-full">
        <RunningTrendsComponent1 />
        <Frame13 />
      </div>
    </div>
  );
}

function StravaDashboard() {
  return (
    <div className="bg-[#060809] h-[261px] leading-[normal] overflow-clip relative shrink-0 w-[1573px]" data-name="Strava dashboard">
      <p className="absolute bg-clip-text bg-gradient-to-b bottom-[218.52px] css-ew64yg font-['Teko:SemiBold',sans-serif] font-semibold from-[#494949] from-[20.186%] left-[calc(50%-0.5px)] text-[173px] text-center to-[#060809] to-[66.935%] tracking-[-5.19px] translate-x-[-50%] translate-y-[100%]" style={{ WebkitTextFillColor: "transparent" }}>{`RUNNING IS A PRIVILEGE `}</p>
      <p className="absolute bottom-[29px] css-ew64yg font-['Titillium_Web:SemiBold',sans-serif] not-italic right-[130px] text-[#989ea0] text-[14px] text-right tracking-[-0.42px] translate-y-[100%]">Built with Cursor • Hosted on Vercel</p>
      <p className="absolute bottom-[29px] css-ew64yg font-['Titillium_Web:SemiBold',sans-serif] left-1/2 not-italic text-[#989ea0] text-[14px] text-center tracking-[-0.42px] translate-x-[-50%] translate-y-[100%]">January 2026</p>
      <p className="absolute bottom-[29px] css-ew64yg font-['Titillium_Web:SemiBold',sans-serif] left-[130px] not-italic text-[#989ea0] text-[14px] tracking-[-0.42px] translate-y-[100%]">{`Design & built by Rakshit`}</p>
    </div>
  );
}

export default function StravaDashboard1() {
  return (
    <div className="bg-[#060809] content-stretch flex flex-col items-center relative size-full" data-name="Strava dashboard">
      <Header />
      <Frame49 />
      <Frame41 />
      <Frame51 />
      <Frame50 />
      <StravaDashboard />
    </div>
  );
}