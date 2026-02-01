import imgScreenshot20260114At42951Pm3 from "figma:asset/8f2d3b7405a75b378cd3c608b63ab99c103da347.png";

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic pb-[2px] relative shrink-0 w-[240px]">
      <p className="font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] min-w-full relative shrink-0 text-[#696e70] text-[14px] tracking-[-0.42px] w-[min-content] whitespace-pre-wrap">Map</p>
      <p className="font-['Titillium_Web:Bold',sans-serif] leading-[1.4] relative shrink-0 text-[#f2f5f7] text-[24px] tracking-[-0.72px]">Running routes</p>
    </div>
  );
}

function Frame() {
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
    <div className="content-stretch flex flex-col gap-[24px] h-[480px] items-start relative rounded-[8px] shrink-0 w-full" data-name="Map component">
      <Frame1 />
      <Frame />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-0 px-[64px] py-[32px] top-0 w-[1200px]">
      <MapComponent />
    </div>
  );
}

export default function StravaDashboardXRouteMap() {
  return (
    <div className="bg-[#060809] relative size-full" data-name="Strava dashboard x route map">
      <Frame2 />
    </div>
  );
}