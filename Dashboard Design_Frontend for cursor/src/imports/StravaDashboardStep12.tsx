import svgPaths from "./svg-zcu95e3q3k";
import img2E570A100E374F7BB2Fe3Eaecea20Eec1 from "figma:asset/d6116c049933fa0895a474b6eea89e3ed70c6a62.png";

function Frame20() {
  return (
    <div className="bg-[#f2f5f7] overflow-clip relative rounded-[1598.4px] shrink-0 size-[40px]">
      <div className="absolute aspect-[2112/2016] bottom-[-5%] left-[calc(50%-0.8px)] top-[5%] translate-x-[-50%]" data-name="2e570a10-0e37-4f7b-b2fe-3eaecea20eec 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img2E570A100E374F7BB2Fe3Eaecea20Eec1} />
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]">
      <div className="flex flex-col font-['Teko:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f2f5f7] text-[24px] w-full">
        <p className="css-4hzbpn leading-none">Rakshit’s Running data</p>
      </div>
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#696e70] text-[12px] tracking-[-0.36px] w-full">{`Last updated 17 Jan, 1:03PM `}</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame20 />
      <Frame19 />
    </div>
  );
}

function MiddleFrame() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="middle-frame">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#989ea0] text-[14px] tracking-[-0.42px]">Month</p>
    </div>
  );
}

function PillContainer() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[99px] shrink-0" data-name="pill-container">
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
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#f2f5f7] text-[12px] tracking-[-0.36px]">Year</p>
    </div>
  );
}

function PillContainer1() {
  return (
    <div className="bg-[#04b488] content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[99px] shrink-0" data-name="pill-container">
      <div aria-hidden="true" className="absolute border border-[#04b488] border-solid inset-0 pointer-events-none rounded-[99px]" />
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

function Frame22() {
  return (
    <div className="bg-[#151819] content-stretch flex items-center p-[2px] relative rounded-[999px] shrink-0">
      <MdsPill />
      <MdsPill1 />
    </div>
  );
}

function MiddleFrame2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="middle-frame">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#989ea0] text-[14px] tracking-[-0.42px]">Miles</p>
    </div>
  );
}

function PillContainer2() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[99px] shrink-0" data-name="pill-container">
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

function MiddleFrame3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="middle-frame">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#f2f5f7] text-[14px] tracking-[-0.42px]">Km</p>
    </div>
  );
}

function PillContainer3() {
  return (
    <div className="bg-[#04b488] content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[99px] shrink-0" data-name="pill-container">
      <div aria-hidden="true" className="absolute border border-[#04b488] border-solid inset-0 pointer-events-none rounded-[99px]" />
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

function Frame21() {
  return (
    <div className="bg-[#151819] content-stretch flex items-center p-[2px] relative rounded-[999px] shrink-0">
      <MdsPill2 />
      <MdsPill3 />
    </div>
  );
}

function ButtonLabelFrame() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="button-label-frame">
      <p className="css-ew64yg font-['Groww_Sans_Variable:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#f2f5f7] text-[12px]">Connect Strava</p>
    </div>
  );
}

function ButtonContainer() {
  return (
    <div className="bg-[#04b488] h-[32px] relative rounded-[999px] shrink-0 w-full" data-name="button-container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[12px] relative size-full">
          <ButtonLabelFrame />
        </div>
      </div>
    </div>
  );
}

function MdsButtonPrimaryButton() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-center justify-center relative shrink-0" data-name="mds-button/primary-button">
      <ButtonContainer />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame22 />
      <Frame21 />
      <MdsButtonPrimaryButton />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame24 />
      <Frame23 />
    </div>
  );
}

function Elements() {
  return (
    <div className="absolute inset-[5.21%]" data-name="elements">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.333 14.3333">
        <g>
          <path d={svgPaths.p2e863300} fill="var(--fill-0, #F2F5F7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Timer() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="timer-01">
      <Elements />
    </div>
  );
}

function Frame1() {
  return (
    <div className="overflow-clip relative rounded-[8px] shrink-0 size-[16px]">
      <Timer />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[2px] items-baseline relative shrink-0">
      <p className="css-ew64yg font-['Teko:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#f2f5f7] text-[18px]">7:01</p>
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#696e70] text-[12px] tracking-[-0.36px]">km/min</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start relative shrink-0">
      <Frame />
    </div>
  );
}

function Frame4() {
  return (
    <div className="col-[3] content-stretch css-vsca90 flex gap-[8px] items-center justify-center relative rounded-[20px] row-[1] self-start shrink-0">
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Elements1() {
  return (
    <div className="absolute inset-[9.72%_5.21%]" data-name="elements">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3333 12.8903">
        <g>
          <path clipRule="evenodd" d={svgPaths.p11e0a500} fill="var(--fill-0, #F2F5F7)" fillRule="evenodd" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Maps() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="maps">
      <Elements1 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[4px] items-baseline relative shrink-0 w-[64px]">
      <p className="css-ew64yg font-['Teko:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#f2f5f7] text-[18px]">1,240</p>
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#696e70] text-[12px] tracking-[-0.36px]">km</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start relative shrink-0 w-[80px]">
      <Frame8 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="col-[1] content-stretch css-vsca90 flex gap-[8px] items-center relative rounded-[20px] row-[1] self-start shrink-0">
      <Maps />
      <Frame9 />
    </div>
  );
}

function Elements2() {
  return (
    <div className="absolute inset-[4.17%_12.5%_4.16%_12.5%]" data-name="elements">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14.667">
        <g>
          <path d={svgPaths.p939ddf0} fill="var(--fill-0, #F2F5F7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Hourglass() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="hourglass">
      <Elements2 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[4px] items-baseline relative shrink-0 w-[64px]">
      <p className="css-ew64yg font-['Teko:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#f2f5f7] text-[18px]">55:01</p>
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#696e70] text-[12px] tracking-[-0.36px]">hrs</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start relative shrink-0 w-[80px]">
      <Frame10 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="col-[2] content-stretch css-vsca90 flex gap-[8px] items-center justify-center relative rounded-[20px] row-[1] self-start shrink-0">
      <Hourglass />
      <Frame11 />
    </div>
  );
}

function Elements3() {
  return (
    <div className="relative size-full" data-name="elements">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0002 13.169">
        <g>
          <path d={svgPaths.p2ebd6700} fill="var(--fill-0, #F2F5F7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function WorkoutRun() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="workout-run">
      <div className="absolute flex inset-[9.37%_12.5%_8.32%_12.5%] items-center justify-center">
        <div className="flex-none h-[13.169px] rotate-[180deg] scale-y-[-100%] w-[12px]">
          <Elements3 />
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="overflow-clip relative rounded-[8px] shrink-0 size-[16px]">
      <WorkoutRun />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0">
      <p className="css-ew64yg font-['Teko:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#f2f5f7] text-[18px]">88</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start relative shrink-0">
      <Frame13 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="col-[4] content-stretch css-vsca90 flex gap-[8px] items-center justify-center relative rounded-[20px] row-[1] self-start shrink-0">
      <Frame12 />
      <Frame15 />
    </div>
  );
}

function Elements4() {
  return (
    <div className="absolute inset-[13.54%_5.21%]" data-name="elements">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3336 11.667">
        <g>
          <path d={svgPaths.p6a65b00} fill="var(--fill-0, #F2F5F7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Mountain() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="mountain">
      <Elements4 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="overflow-clip relative rounded-[8px] shrink-0 size-[16px]">
      <Mountain />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[4px] items-baseline relative shrink-0">
      <p className="css-ew64yg font-['Teko:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#f2f5f7] text-[18px]">23</p>
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#696e70] text-[12px] tracking-[-0.36px]">meters</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start relative shrink-0">
      <Frame17 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="col-[5] content-stretch css-vsca90 flex gap-[8px] items-center justify-end relative rounded-[20px] row-[1] self-start shrink-0">
      <Frame16 />
      <Frame18 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="gap-[24px] grid grid-cols-[repeat(5,_minmax(0,_1fr))] grid-rows-[repeat(1,_fit-content(100%))] relative shrink-0 w-full">
      <Frame4 />
      <Frame3 />
      <Frame7 />
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#252a2c] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[16px] pt-[32px] px-[48px] relative w-full">
        <Frame25 />
        <Frame14 />
      </div>
    </div>
  );
}

export default function StravaDashboardStep() {
  return (
    <div className="bg-[#060809] content-stretch flex flex-col items-center pb-[240px] pt-0 px-0 relative size-full" data-name="Strava dashboard - Step 12">
      <Frame26 />
    </div>
  );
}