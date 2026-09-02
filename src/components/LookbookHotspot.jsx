export default function LookbookHotspot({ style, onToggle }) {
  return (
    <div className="absolute" style={style}>
      
      <span className="absolute -inset-2 rounded-full bg-[#f7f4ee] opacity-75 animate-ping"></span>
      <button 
        onClick={onToggle}
        className="relative w-4 h-4 rounded-full bg-[#111111] border-2 border-[#f7f4ee] flex items-center justify-center hover:scale-125 transition-transform shadow-lg"
        aria-label="View Hotspot Item">
        <span className="w-1 h-1 bg-[#f7f4ee] rounded-full"></span>
      </button>
    </div>
  )
}