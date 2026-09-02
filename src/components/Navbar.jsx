import { useEffect, useState } from 'react'

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'Collection', href: '#collection' },
  { label: 'Lookbook', href: '#lookbook' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

function BagIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="h-[18px] w-[18px] stroke-current stroke-[1.7]"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.5 8.5h11l1.05 11.05a1.5 1.5 0 0 1-1.49 1.64H6.94a1.5 1.5 0 0 1-1.49-1.64L6.5 8.5Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 9V6.75a3 3 0 0 1 6 0V9"
      />
    </svg>
  )
}

export default function Navbar({ cartCount = 0, onOpenCart }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24)
      if (window.scrollY > 24) setIsOpen(false)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false)
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  return (
    <header
      className={`sticky top-0 z-50 w-full overflow-x-clip font-sans transition-all duration-500 ${
        scrolled
          ? 'border-b border-black/10 bg-[#f7f4ee]/95 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-xl'
          : 'border-b border-black/10 bg-[#f7f4ee]'
      }`}
    >
      <div
        className={`mx-auto grid w-full max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center px-4 sm:px-6 lg:px-10 xl:px-12 ${
          scrolled ? 'h-[68px] sm:h-[72px]' : 'h-[74px] sm:h-[76px]'
        }`}
      >
        <div className="flex min-w-0 items-center justify-start">
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/15 transition-all duration-300 hover:border-black/40 hover:bg-black/[0.04] active:scale-90 lg:hidden"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="aura-mobile-menu"
          >
            <span className="relative block h-4 w-5" aria-hidden="true">
              <span
                className={`absolute left-0 top-0 h-[1.5px] w-5 origin-center bg-black transition-all duration-300 ${
                  isOpen ? 'top-[7px] rotate-45' : ''
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-[1.5px] w-5 bg-black transition-opacity duration-200 ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-[1.5px] w-5 origin-center bg-black transition-all duration-300 ${
                  isOpen ? 'top-[7px] -rotate-45' : ''
                }`}
              />
            </span>
          </button>

          <button
            type="button"
            onClick={onOpenCart}
            className="group hidden items-center gap-2 rounded-full border border-black/15 px-3.5 py-2 transition-all duration-300 hover:border-black hover:bg-black/[0.04] active:scale-95 lg:flex"
            aria-label={`Shopping bag, ${cartCount} items`}
          >
            <BagIcon />
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">Bag</span>
            <span className="text-[10px] font-semibold tabular-nums text-[#a58952]">({cartCount})</span>
          </button>
        </div>

        <a
          href="#"
          onClick={closeMenu}
          className="group flex min-w-0 items-center justify-center gap-2.5 justify-self-center whitespace-nowrap"
          aria-label="AURA home"
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#111] text-[#f7f4ee] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#a58952] sm:h-9 sm:w-9">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="h-4 w-4 stroke-current stroke-[1.6] sm:h-[18px] sm:w-[18px]"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m12 4 7.5 16h-15L12 4Z" />
            </svg>
          </span>
          <span className="font-serif text-[21px] font-bold leading-none tracking-[0.16em] text-black transition-opacity duration-300 group-hover:opacity-70 sm:text-[25px] md:text-[27px]">
            AURA
          </span>
        </a>

        <div className="flex min-w-0 items-center justify-end">
          <nav
            aria-label="Main navigation"
            className="hidden items-center justify-end gap-4 lg:flex xl:gap-7"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative whitespace-nowrap py-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-black transition-colors duration-300 hover:text-[#a58952] xl:text-[11px] xl:tracking-[0.18em]"
              >
                {item.label}
                <span className="absolute bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-[#a58952] transition-all duration-300 group-hover:w-1/2" />
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={onOpenCart}
            className="flex h-10 shrink-0 items-center gap-1.5 rounded-full border border-black/15 px-3 transition-all duration-300 hover:border-black hover:bg-black/[0.04] active:scale-95 lg:hidden"
            aria-label={`Shopping bag, ${cartCount} items`}
          >
            <BagIcon />
            <span className="text-[10px] font-semibold tabular-nums text-[#a58952]">{cartCount}</span>
          </button>
        </div>
      </div>

      <div
        id="aura-mobile-menu"
        aria-hidden={!isOpen}
        className={`absolute left-0 top-full w-full overflow-hidden border-b border-black/10 bg-[#f7f4ee]/98 shadow-2xl backdrop-blur-xl transition-[max-height,opacity,transform] duration-500 ease-out lg:hidden ${
          isOpen
            ? 'pointer-events-auto max-h-[360px] translate-y-0 opacity-100'
            : 'pointer-events-none max-h-0 -translate-y-2 opacity-0'
        }`}
      >
        <nav aria-label="Mobile navigation" className="mx-auto w-full max-w-[1440px] px-5 pb-5 pt-2 sm:px-8">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={closeMenu}
              tabIndex={isOpen ? 0 : -1}
              className="group flex min-h-[48px] items-center justify-between border-b border-black/10 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-black transition-all duration-300 hover:pl-2 hover:text-[#a58952]"
              style={{ transitionDelay: isOpen ? `${index * 35}ms` : '0ms' }}
            >
              <span>{item.label}</span>
              <span className="translate-x-0 text-[#a58952] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                ↗
              </span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
