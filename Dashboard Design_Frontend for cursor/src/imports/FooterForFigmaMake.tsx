function StravaDashboard() {
  return (
    <div className="absolute bg-[#060809] h-[261px] leading-[normal] left-[calc(50%+0.5px)] overflow-clip top-[calc(50%-41px)] translate-x-[-50%] translate-y-[-50%] w-[1573px]" data-name="Strava dashboard">
      <p className="absolute bg-clip-text bg-gradient-to-b bottom-[218.52px] css-ew64yg font-['Teko:SemiBold',sans-serif] font-semibold from-[#494949] from-[20.186%] left-[calc(50%-0.5px)] text-[173px] text-center to-[#060809] to-[66.935%] tracking-[-5.19px] translate-x-[-50%] translate-y-[100%]" style={{ WebkitTextFillColor: "transparent" }}>{`RUNNING IS A PRIVILEGE `}</p>
      <p className="absolute bottom-[29px] css-ew64yg font-['Titillium_Web:SemiBold',sans-serif] not-italic right-[130px] text-[#989ea0] text-[14px] text-right tracking-[-0.42px] translate-y-[100%]">Built with Cursor • Hosted on Vercel</p>
      <p className="absolute bottom-[29px] css-ew64yg font-['Titillium_Web:SemiBold',sans-serif] left-[calc(50%+0.5px)] not-italic text-[#989ea0] text-[14px] text-center tracking-[-0.42px] translate-x-[-50%] translate-y-[100%]">www.rakshit.design</p>
      <p className="absolute bottom-[29px] css-ew64yg font-['Titillium_Web:SemiBold',sans-serif] left-[130px] not-italic text-[#989ea0] text-[14px] tracking-[-0.42px] translate-y-[100%]">{`Design & built by Rakshit`}</p>
    </div>
  );
}

export default function FooterForFigmaMake() {
  return (
    <div className="bg-[#060809] relative size-full" data-name="Footer for Figma make">
      <StravaDashboard />
    </div>
  );
}