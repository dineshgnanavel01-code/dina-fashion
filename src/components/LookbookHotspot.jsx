export default function LookbookHotspot({ style, onToggle }) {
  return (
    <div className="absolute" style={style}>
      <span className="absolute -inset-2 rounded-full bg-[#f7f4ee] aura-hotspot-pulse pointer-events-none"></span>
      <span className="absolute -inset-3 rounded-full border border-[#f7f4ee]/50 animate-ping pointer-events-none"></span>
      <button
        onClick={onToggle}
        className="relative w-4 h-4 rounded-full bg-[#111111] border-2 border-[#f7f4ee] flex items-center justify-center hover:scale-125 transition-transform duration-300 shadow-lg"
        aria-label="View Hotspot Item"
      >
        <span className="w-1 h-1 bg-[#f7f4ee] rounded-full"></span>
      </button>
    </div>
  )
}
