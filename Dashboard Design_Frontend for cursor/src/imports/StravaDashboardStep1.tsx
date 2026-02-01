import img2E570A100E374F7BB2Fe3Eaecea20Eec1 from "figma:asset/d6116c049933fa0895a474b6eea89e3ed70c6a62.png";

function Frame() {
  return (
    <div className="bg-[#f2f5f7] overflow-clip relative rounded-[1598.4px] shrink-0 size-[32px]">
      <div className="absolute h-[32px] left-[calc(50%-0.8px)] top-[calc(50%+1.6px)] translate-x-[-50%] translate-y-[-50%] w-[33.524px]" data-name="2e570a10-0e37-4f7b-b2fe-3eaecea20eec 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img2E570A100E374F7BB2Fe3Eaecea20Eec1} />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame />
      <p className="css-ew64yg font-['Teko:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#f2f5f7] text-[20px]">Rakshit’s running dashboard</p>
    </div>
  );
}

function MiddleFrame() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="middle-frame">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#989ea0] text-[12px] tracking-[-0.36px]">Week</p>
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
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#989ea0] text-[12px] tracking-[-0.36px]">Month</p>
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
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#f2f5f7] text-[12px] tracking-[-0.36px]">Year</p>
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

function Frame2() {
  return (
    <div className="bg-[#151819] content-stretch flex items-center p-[2px] relative rounded-[999px] shrink-0">
      <MdsPill />
      <MdsPill1 />
      <MdsPill2 />
    </div>
  );
}

function MiddleFrame3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="middle-frame">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#989ea0] text-[12px] tracking-[-0.36px]">Miles</p>
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
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#f2f5f7] text-[12px] tracking-[-0.36px]">Km</p>
    </div>
  );
}

function PillContainer4() {
  return (
    <div className="bg-[#04b488] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[99px] shrink-0" data-name="pill-container">
      <div aria-hidden="true" className="absolute border border-[#04b488] border-solid inset-0 pointer-events-none rounded-[99px]" />
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

function Frame3() {
  return (
    <div className="bg-[#151819] content-stretch flex items-center p-[2px] relative rounded-[999px] shrink-0">
      <MdsPill3 />
      <MdsPill4 />
    </div>
  );
}

function ButtonLabelFrame() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="button-label-frame">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#46d5a7] text-[12px] tracking-[-0.36px]">Connect Strava</p>
    </div>
  );
}

function ButtonContainer() {
  return (
    <div className="bg-[#0f251d] h-[32px] relative rounded-[999px] shrink-0 w-full" data-name="button-container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[12px] relative size-full">
          <ButtonLabelFrame />
        </div>
      </div>
    </div>
  );
}

function MdsButtonSecondaryButton() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-center justify-center relative shrink-0" data-name="mds-button/secondary-button">
      <ButtonContainer />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame2 />
      <Frame3 />
      <MdsButtonSecondaryButton />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute bg-[#060809] content-stretch flex items-center justify-between left-[84px] px-[4px] py-[20px] top-0 w-[1032px]">
      <Frame1 />
      <Frame5 />
    </div>
  );
}

export default function StravaDashboardStep() {
  return (
    <div className="bg-[#060809] relative size-full" data-name="Strava dashboard - Step 1">
      <Frame4 />
    </div>
  );
}