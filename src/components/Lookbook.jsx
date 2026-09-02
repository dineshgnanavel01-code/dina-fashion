import { useState } from 'react'

export default function Lookbook() {
  const [activeHotspot, setActiveHotspot] = useState(null)

  const looks = [
    {
      id: 1,
      image: "/assets/look-1.jpg",
      fallback: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800",
      title: "The Noir Ensemble",
      season: "Autumn / Winter 2026",
      hotspots: [
        {
          id: 'h1',
          x: '45%',
          y: '30%',
          product: {
            name: "Tailored Cashmere Coat",
            price: "$480",
            category: "Outerwear",
            image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=400"
          }
        },
        {
          id: 'h2',
          x: '52%',
          y: '70%',
          product: {
            name: "Pleated Wool Trouser",
            price: "$210",
            category: "Bottoms",
            image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=400"
          }
        }
      ]
    },
    {
      id: 2,
      image: "/assets/look-2.jpg",
      fallback: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800",
      title: "Silken Horizon",
      season: "Autumn / Winter 2026",
      hotspots: [
        {
          id: 'h3',
          x: '48%',
          y: '25%',
          product: {
            name: "Raw Silk Slip Dress",
            price: "$340",
            category: "Dresses",
            image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=400"
          }
        }
      ]
    }
  ]

  return (
    <section id="lookbook" className="py-32 bg-[#eee9df]/50 font-sans">
      <div className="aura-container">
        
        <div className="text-center max-w-xl mx-auto mb-20">
          <div className="flex justify-center items-center gap-3 mb-3">
            <div className="h-px w-6 bg-[#b59b62]"></div>
            <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-black">
              The Editorial View
            </span>
            <div className="h-px w-6 bg-[#b59b62]"></div>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-black tracking-tight font-semibold">
            Stories in Motion
          </h2>
          <p className="text-black text-sm mt-4 font-normal tracking-wide">
            Explore each look and select a glowing point to reveal the pieces that bring it together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {looks.map((look) => (
            <div key={look.id} className="group relative">
              
              <div className="bg-[#eee9df] relative overflow-hidden shadow-xl" style={{ height: '550px' }}>
                <img 
                  src={look.image} 
                  alt={look.title} 
                  className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105"
                  onError={(e) => { e.target.src = look.fallback; }}/>
                <div className="absolute inset-0 bg-black/40 opacity-60"></div>

                {look.hotspots.map((spot) => {
                  const isOpen = activeHotspot === spot.id
                  return (
                    <div 
                      key={spot.id} 
                      className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
                      style={{ left: spot.x, top: spot.y }}>
                      <button 
                        onClick={() => setActiveHotspot(isOpen ? null : spot.id)}
                        className="aura-hotspot w-7 h-7 rounded-full bg-white/90 text-black flex items-center justify-center shadow-lg transition-transform hover:scale-110 focus:outline-none"
                        aria-label="View product details">
                        <span className="w-2 h-2 rounded-full bg-black"></span>
                      </button>

                      {isOpen && (
                        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-64 bg-[#191919] text-white p-4 shadow-2xl z-30 animate-fade border border-[#b59b62]/40">
                          <div className="flex gap-3 items-center">
                            <img 
                              src={spot.product.image} 
                              alt={spot.product.name} 
                              className="w-16 h-20 object-cover bg-gray-800" />
                            <div className="flex-1">
                              <span className="text-[9px] uppercase tracking-widest text-[#b59b62] block mb-1 font-medium">
                                {spot.product.category}
                              </span>
                              <h4 className="text-xs font-semibold text-white mb-1 leading-tight">
                                {spot.product.name}
                              </h4>
                              <p className="text-xs font-normal text-gray-300">
                                {spot.product.price}
                              </p>
                            </div>
                          </div>
                          <button 
                            onClick={() => setActiveHotspot(null)}
                            className="mt-3 w-full py-1.5 bg-white text-black text-[9px] uppercase tracking-[0.2em] font-semibold hover:bg-[#b59b62] hover:text-white transition-colors">
                            Close Details
                          </button>
                        </div>
                      )}
                    </div>
                  )
                })}

                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end text-white pointer-events-none">
                  <div>
                    <span className="text-[10px] tracking-[0.3em] uppercase text-[#b59b62] block mb-1 font-semibold">
                      {look.season}
                    </span>
                    <h3 className="font-serif text-xl font-semibold tracking-wide">
                      {look.title}
                    </h3>
                  </div>
                  <span className="text-xs tracking-widest uppercase border-b border-white/60 pb-0.5 font-medium">
                    Look 0{look.id}
                  </span>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}