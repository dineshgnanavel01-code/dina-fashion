export default function InfiniteMarquee() {
  return (
    <div className="py-12 bg-[#111111] text-[#f7f4ee] overflow-hidden whitespace-nowrap border-y border-[#f7f4ee]/10">
<div className="inline-flex animate-marquee items-center gap-12 uppercase tracking-[0.3em] text-xs font-light">        <span>New Season Arrivals</span>
        <span className="text-[#b59b62]">&bull;</span>
        <span>Thoughtful Essentials</span>
        <span className="text-[#b59b62]">&bull;</span>
        <span>Quietly Distinctive</span>
        <span className="text-[#b59b62]">&bull;</span>
        <span>Limited Editions</span>
        <span className="text-[#b59b62]">&bull;</span>
      </div>
    </div>
  )
}