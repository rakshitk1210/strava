import svgPaths from "./svg-l3p4aa0wgu";
import img2E570A100E374F7BB2Fe3Eaecea20Eec1 from "figma:asset/d6116c049933fa0895a474b6eea89e3ed70c6a62.png";

function Frame22() {
  return (
    <div className="bg-[#f2f5f7] overflow-clip relative rounded-[1598.4px] shrink-0 size-[40px]">
      <div className="absolute aspect-[2112/2016] bottom-[-5%] left-[calc(50%-0.8px)] top-[5%] translate-x-[-50%]" data-name="2e570a10-0e37-4f7b-b2fe-3eaecea20eec 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img2E570A100E374F7BB2Fe3Eaecea20Eec1} />
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]">
      <div className="flex flex-col font-['Teko:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f2f5f7] text-[24px] w-full">
        <p className="css-4hzbpn leading-none">Rakshit’s Running data</p>
      </div>
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#696e70] text-[12px] tracking-[-0.36px] w-full">{`Last updated 17 Jan, 1:03PM `}</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame22 />
      <Frame21 />
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

function Frame24() {
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

function Frame23() {
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

function Frame25() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame24 />
      <Frame23 />
      <MdsButtonPrimaryButton />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame26 />
      <Frame25 />
    </div>
  );
}

function Elements() {
  return (
    <div className="absolute inset-[5.21%]" data-name="elements">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5 21.4994">
        <g>
          <path d={svgPaths.p3222ec00} fill="var(--fill-0, #F2F5F7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Timer() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="timer-01">
      <Elements />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#0e1111] overflow-clip relative rounded-[12px] shrink-0 size-[48px]">
      <Timer />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[2px] items-baseline relative shrink-0">
      <p className="css-ew64yg font-['Teko:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#f2f5f7] text-[24px]">7:01</p>
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#696e70] text-[12px] tracking-[-0.36px]">km/min</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.5] min-w-full not-italic relative shrink-0 text-[#696e70] text-[12px] tracking-[-0.36px] w-[min-content]">Avg pace</p>
      <Frame />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#151819] col-[3] css-por8k5 relative rounded-[20px] row-[1] self-start shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] pr-[16px] py-[12px] relative w-full">
          <Frame1 />
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Elements1() {
  return (
    <div className="absolute inset-[9.72%_5.21%]" data-name="elements">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5 19.3354">
        <g>
          <path clipRule="evenodd" d={svgPaths.p2bd95870} fill="var(--fill-0, #F2F5F7)" fillRule="evenodd" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Maps() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="maps">
      <Elements1 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#0e1111] overflow-clip relative rounded-[12px] shrink-0 size-[48px]">
      <Maps />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[4px] items-baseline relative shrink-0 w-[64px]">
      <p className="css-ew64yg font-['Teko:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#f2f5f7] text-[24px]">1,240</p>
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#696e70] text-[12px] tracking-[-0.36px]">km</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-[80px]">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.5] min-w-full not-italic relative shrink-0 text-[#696e70] text-[12px] tracking-[-0.36px] w-[min-content]">Distance</p>
      <Frame9 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#151819] col-[1] css-por8k5 relative rounded-[20px] row-[1] self-start shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] pr-[16px] py-[12px] relative w-full">
          <Frame8 />
          <Frame10 />
        </div>
      </div>
    </div>
  );
}

function Elements2() {
  return (
    <div className="absolute inset-[4.17%_12.5%]" data-name="elements">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 22">
        <g>
          <path d={svgPaths.p3a8d8580} fill="var(--fill-0, #F2F5F7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Hourglass() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="hourglass">
      <Elements2 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[#0e1111] overflow-clip relative rounded-[12px] shrink-0 size-[48px]">
      <Hourglass />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[4px] items-baseline relative shrink-0 w-[64px]">
      <p className="css-ew64yg font-['Teko:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#f2f5f7] text-[24px]">55:01</p>
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#696e70] text-[12px] tracking-[-0.36px]">hrs</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-[80px]">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.5] min-w-full not-italic relative shrink-0 text-[#696e70] text-[12px] tracking-[-0.36px] w-[min-content]">Workout time</p>
      <Frame12 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#151819] col-[2] css-por8k5 relative rounded-[20px] row-[1] self-start shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] pr-[16px] py-[12px] relative w-full">
          <Frame11 />
          <Frame13 />
        </div>
      </div>
    </div>
  );
}

function Elements3() {
  return (
    <div className="relative size-full" data-name="elements">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0003 19.7527">
        <g>
          <path d={svgPaths.p23d50a00} fill="var(--fill-0, #F2F5F7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function WorkoutRun() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="workout-run">
      <div className="absolute flex inset-[9.37%_12.5%_8.32%_12.5%] items-center justify-center">
        <div className="flex-none h-[19.753px] rotate-[180deg] scale-y-[-100%] w-[18px]">
          <Elements3 />
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[#0e1111] overflow-clip relative rounded-[12px] shrink-0 size-[48px]">
      <WorkoutRun />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0">
      <p className="css-ew64yg font-['Teko:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#f2f5f7] text-[24px]">88</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#696e70] text-[12px] tracking-[-0.36px]">Total runs</p>
      <Frame16 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#151819] col-[4] css-por8k5 relative rounded-[20px] row-[1] self-start shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] pr-[16px] py-[12px] relative w-full">
          <Frame15 />
          <Frame17 />
        </div>
      </div>
    </div>
  );
}

function Elements4() {
  return (
    <div className="absolute inset-[13.54%_5.21%]" data-name="elements">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5 17.5">
        <g>
          <path d={svgPaths.p145cd600} fill="var(--fill-0, #F2F5F7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Mountain() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="mountain">
      <Elements4 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-[#0e1111] overflow-clip relative rounded-[12px] shrink-0 size-[48px]">
      <Mountain />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[4px] items-baseline relative shrink-0">
      <p className="css-ew64yg font-['Teko:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#f2f5f7] text-[24px]">23</p>
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#696e70] text-[12px] tracking-[-0.36px]">meters</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#696e70] text-[12px] tracking-[-0.36px]">Elevation</p>
      <Frame19 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#151819] col-[5] css-por8k5 relative rounded-[20px] row-[1] self-start shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] pr-[16px] py-[12px] relative w-full">
          <Frame18 />
          <Frame20 />
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="gap-[16px] gap-[24px] grid grid-cols-[repeat(5,_minmax(0,_1fr))] grid-rows-[repeat(1,_fit-content(100%))] relative shrink-0 w-full">
      <Frame4 />
      <Frame3 />
      <Frame7 />
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[16px] pt-[32px] px-[48px] relative w-full">
        <Frame27 />
        <Frame14 />
      </div>
    </div>
  );
}

export default function StravaDashboardStep() {
  return (
    <div className="bg-[#060809] content-stretch flex flex-col items-center pb-[240px] pt-0 px-0 relative size-full" data-name="Strava dashboard - Step 11">
      <Frame28 />
    </div>
  );
}