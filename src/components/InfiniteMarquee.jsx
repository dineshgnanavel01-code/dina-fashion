export default function InfiniteMarquee() {
  return (
    <div className="py-12 bg-[#111111] text-[#f7f4ee] overflow-hidden whitespace-nowrap border-y border-[#f7f4ee]/10">
<div className="inline-flex animate-marquee items-center gap-12 uppercase tracking-[0.3em] text-xs font-light">        <span>Timeless Elegance</span>
        <span className="text-[#b59b62]">&bull;</span>
        <span>Limited Seasonal Drops</span>
        <span className="text-[#b59b62]">&bull;</span>
        <span>Private Lookbooks</span>
        <span className="text-[#b59b62]">&bull;</span>
        <span>Invitation-Only Events</span>
        <span className="text-[#b59b62]">&bull;</span>
      </div>
    </div>
  )
}