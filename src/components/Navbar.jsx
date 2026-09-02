import { useState, useEffect } from 'react'

const navItems = ['Home', 'Collection', 'Lookbook', 'About', 'Contact']

export default function Navbar({ cartCount = 0, onOpenCart }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const hasScrolled = window.scrollY > 30
      setScrolled(hasScrolled)
      if (hasScrolled) setIsOpen(false)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getHref = (item) => item === 'Home' ? '#' : `#${item.toLowerCase()}`

  return (
    <header className={`sticky top-0 z-50 font-sans transition-all duration-500 ${
      scrolled
        ? 'bg-[#f7f4ee]/95 backdrop-blur-md shadow-md border-b border-black/20'
        : 'bg-[#f7f4ee] border-b border-black/15'
    }`}>
      <div className={`aura-container grid grid-cols-3 items-center transition-all duration-500 ${scrolled ? 'h-20 md:h-20' : 'h-20 md:h-24'}`}>
        {/* Mobile menu button */}
        <div className="flex items-center justify-start">
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="md:hidden relative flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-black/15 bg-black/[0.03] transition-all duration-300 hover:border-black/40 active:scale-90"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
          >
            <span className={`h-0.5 w-5 bg-black transition-transform duration-300 ${isOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`h-0.5 w-5 bg-black transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`h-0.5 w-5 bg-black transition-transform duration-300 ${isOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>

        {/* Brand */}
        <a href="#" className="group flex items-center justify-center gap-2.5 justify-self-center" aria-label="AURA home">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-[#f7f4ee] shadow-sm transition-all duration-300 group-hover:bg-[#b59b62] group-hover:scale-105">
            <svg className="h-4 w-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" aria-hidden="true">
              <polygon points="12,4 20,20 4,20" />
            </svg>
          </div>
          <span className="font-serif text-2xl sm:text-3xl tracking-[0.16em] sm:tracking-[0.2em] text-black font-bold transition-opacity duration-300 group-hover:opacity-75">
            AURA
          </span>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden md:flex col-span-1 items-center justify-self-center space-x-7 lg:space-x-10 text-[11px] font-bold tracking-[0.2em] uppercase text-black">
          {navItems.map((item) => (
            <a
              key={item}
              href={getHref(item)}
              className="relative whitespace-nowrap py-2 transition-colors hover:text-[#b59b62] after:absolute after:bottom-1 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:bg-[#b59b62] after:transition-all after:duration-300 hover:after:w-1/2"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Shopping bag */}
        <div className="flex items-center justify-end">
          <button
            type="button"
            onClick={onOpenCart}
            className="group flex items-center gap-2 rounded-full border border-black/20 bg-black/5 px-3 py-2 sm:px-4 transition-all duration-300 hover:border-black hover:bg-black/10 active:scale-95"
            aria-label={`Shopping Bag, ${cartCount} items`}
          >
            <svg className="h-4 w-4 stroke-black stroke-2 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
            </svg>
            <span className="hidden sm:inline text-[11px] font-bold tracking-widest uppercase text-black">Bag</span>
            <span className="text-[11px] font-bold text-[#b59b62]">({cartCount})</span>
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        className={`md:hidden absolute left-0 top-full w-full overflow-hidden border-b border-black/20 bg-[#f7f4ee]/98 shadow-xl backdrop-blur-md transition-all duration-400 ease-out ${
          isOpen ? 'max-h-[420px] translate-y-0 opacity-100' : 'pointer-events-none max-h-0 -translate-y-2 opacity-0'
        }`}
      >
        <nav className="flex flex-col px-6 py-6 text-center text-xs font-bold tracking-[0.25em] uppercase text-black">
          {navItems.map((item, index) => (
            <a
              key={item}
              href={getHref(item)}
              onClick={() => setIsOpen(false)}
              className="border-b border-black/10 py-4 transition-all duration-300 hover:bg-black/[0.03] hover:text-[#b59b62] active:scale-[0.98]"
              style={{ transitionDelay: isOpen ? `${index * 35}ms` : '0ms' }}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
