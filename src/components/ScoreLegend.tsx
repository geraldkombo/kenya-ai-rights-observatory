export default function ScoreLegend() {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-[#A8A08F] sm:text-xs">
      <span className="flex items-center gap-1">
        <span className="inline-block h-2.5 w-2.5 rounded-sm bg-[#FFF7BC] sm:h-3 sm:w-3"></span> Low (&lt;30)
      </span>
      <span className="flex items-center gap-1">
        <span className="inline-block h-2.5 w-2.5 rounded-sm bg-[#FEC44F] sm:h-3 sm:w-3"></span> Medium (30&ndash;49)
      </span>
      <span className="flex items-center gap-1">
        <span className="inline-block h-2.5 w-2.5 rounded-sm bg-[#D95F0E] sm:h-3 sm:w-3"></span> High (50&ndash;69)
      </span>
      <span className="flex items-center gap-1">
        <span className="inline-block h-2.5 w-2.5 rounded-sm bg-[#8C2D04] sm:h-3 sm:w-3"></span> Critical (70+)
      </span>
      <span className="ml-auto text-[#A8A08F]">Digital Rights Risk Score</span>
    </div>
  );
}
