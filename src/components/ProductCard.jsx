export function ProductCard({ image, title, price, category }) {
  return (
    <div className="group cursor-pointer">
<div className="relative overflow-hidden bg-[#eae6df] mb-4" style={{ aspectRatio: '3/4' }}>        <img 
          src={image} 
          alt={title} 
          className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"/>
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="w-full py-3 bg-[#f7f4ee] text-[#111111] text-xs uppercase tracking-[0.2em] text-center font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            Quick View
          </span>
        </div>
      </div>
      
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1">
          <h3 className="text-xs uppercase tracking-[0.2em] text-[#111111] leading-relaxed font-semibold">{title}</h3>
          {category && (
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#77736c]">{category}</p>
          )}
        </div>
        <p className="font-serif text-lg tracking-wide text-[#111111] shrink-0 font-medium">{price}</p>
      </div>
    </div>
  )
}