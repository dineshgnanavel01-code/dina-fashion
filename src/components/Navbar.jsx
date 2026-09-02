import { useState, useEffect } from 'react'

export default function Navbar({ cartCount = 0, onOpenCart }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 font-sans ${scrolled ? 'bg-[#f7f4ee]/90 backdrop-blur-md shadow-md border-b border-black/20' : 'bg-[#f7f4ee] border-b border-black/15'}`}>
      <div className="aura-container h-24 flex items-center justify-between">
        
        
        <div className="flex items-center gap-6">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8 z-50 focus:outline-none transition-transform active:scale-90"
            aria-label="Toggle Menu">
            <span className={`h-0.5 w-6 bg-black transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`h-0.5 w-6 bg-black transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-6 bg-black transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>

          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full bg-black text-[#f7f4ee] flex items-center justify-center group-hover:bg-[#b59b62] transition-colors duration-300 shadow-sm">
              <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <polygon points="12,4 20,20 4,20" />
              </svg>
            </div>
            <span className="font-serif text-3xl tracking-[0.2em] text-black font-bold group-hover:opacity-75 transition-opacity">
              AURA
            </span>
          </a>
        </div>

        
        <nav className="hidden md:flex items-center space-x-12 text-[11px] font-bold tracking-[0.25em] uppercase text-black">
          {['Home', 'Collection', 'Lookbook', 'About', 'Contact'].map((item) => {
            const href = item === 'Home' ? '#' : `#${item.toLowerCase()}`;
            return (
              <a 
                key={item} 
                href={href} 
                className="hover:text-[#b59b62] transition-colors relative py-2 after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-[#b59b62] hover:after:w-1/2 after:transition-all after:duration-300">
                {item}
              </a>
            );
          })}
        </nav>

       
        <div className="flex items-center space-x-4">
          <button 
            onClick={onOpenCart}
            className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-black/20 hover:border-black bg-black/5 hover:bg-black/10 transition-all group active:scale-95"
            aria-label="Shopping Bag">
            <svg className="w-4 h-4 stroke-black stroke-2 transition-transform group-hover:scale-110" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
            </svg>
            <span className="text-[11px] font-bold tracking-widest uppercase text-black">Bag</span> 
            <span className="text-[11px] font-bold text-[#b59b62]">({cartCount})</span>
          </button>
        </div>
      </div>

      
      <div className={`md:hidden absolute top-full left-0 w-full bg-[#f7f4ee] border-b border-black/20 shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-150 py-8' : 'max-h-0 opacity-0 py-0'}`}>
        <nav className="flex flex-col items-center space-y-6 text-xs font-bold tracking-[0.25em] uppercase text-black">
          {['Home', 'Collection', 'Lookbook', 'About', 'Contact'].map((item) => {
            const href = item === 'Home' ? '#' : `#${item.toLowerCase()}`;
            return (
              <a 
                key={item} 
                href={href} 
                onClick={() => setIsOpen(false)}
                className="hover:text-[#b59b62] transition-colors py-1">
                {item}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  )
}