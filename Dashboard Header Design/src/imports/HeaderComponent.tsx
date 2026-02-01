function Avatar() {
  return (
    <div className="bg-[#04b488] overflow-clip relative rounded-[1598.4px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="absolute css-g0mm18 flex flex-col font-['Titillium_Web:Bold',sans-serif] justify-center leading-[0] left-[calc(50%-7.5px)] not-italic text-[#f2f5f7] text-[24px] top-[calc(50%-1px)] translate-y-[-50%]">
        <p className="css-ew64yg leading-none">R</p>
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

function Frame1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Avatar />
      <ContentFrame />
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

function DurationPills() {
  return (
    <div className="bg-[#151819] content-stretch flex items-center p-[2px] relative rounded-[99px] shrink-0" data-name="Duration pills">
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

function DistancePills() {
  return (
    <div className="bg-[#151819] content-stretch flex items-center p-[2px] relative rounded-[99px] shrink-0" data-name="Distance pills">
      <MdsPill2 />
      <MdsPill3 />
    </div>
  );
}

function ButtonLabelFrame() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="button-label-frame">
      <p className="css-ew64yg font-['Titillium_Web:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white">Connect Strava</p>
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

function ButtonToConnectStrava() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-center justify-center relative shrink-0" data-name="Button to connect strava">
      <ButtonContainer />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <DurationPills />
      <DistancePills />
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#696e70] text-[14px] tracking-[-0.42px]">
        <p className="css-ew64yg leading-[18px]">•</p>
      </div>
      <ButtonToConnectStrava />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame1 />
      <Frame />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-1/2 max-w-[1440px] px-[64px] py-[32px] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[1440px]" data-name="Header">
      <Frame2 />
    </div>
  );
}

export default function HeaderComponent() {
  return (
    <div className="bg-[#060809] relative size-full" data-name="Header component">
      <Header />
    </div>
  );
}