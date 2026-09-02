import { useEffect, useRef } from 'react'

const marqueeItems = ['NEW ARRIVALS', 'NEW ARRIVALS', 'NEW ARRIVALS', 'NEW ARRIVALS']

function MarqueeGroup({ groupRef, hidden = false }) {
  return (
    <div ref={groupRef} className="footer-marquee-group gap-8 pr-8" aria-hidden={hidden}>
      {marqueeItems.map((item, index) => (
        <span key={`${item}-${index}`} className="inline-flex items-center gap-8 whitespace-nowrap">
          <span>{item}</span>
          <span className="text-[#b59b62]" aria-hidden="true">&bull;</span>
        </span>
      ))}
    </div>
  )
}

function InfiniteFooterMarquee() {
  const trackRef = useRef(null)
  const firstGroupRef = useRef(null)
  const animationFrameRef = useRef(null)
  const positionRef = useRef(0)
  const pausedRef = useRef(false)
  const lastTimeRef = useRef(null)
  const currentSpeedRef = useRef(42)
  const targetSpeedRef = useRef(42)
  const lastScrollYRef = useRef(0)
  const lastScrollTimeRef = useRef(0)

  useEffect(() => {
    const track = trackRef.current
    const firstGroup = firstGroupRef.current
    if (!track || !firstGroup) return undefined

    const baseSpeed = 42

    const handleScroll = () => {
      const now = performance.now()
      const scrollY = window.scrollY
      const elapsed = Math.max(now - lastScrollTimeRef.current, 16)
      const distance = Math.abs(scrollY - lastScrollYRef.current)
      const velocity = distance / elapsed

      // Page scrolling temporarily accelerates the ticker for a more tactile effect.
      targetSpeedRef.current = Math.min(baseSpeed + velocity * 170, 150)
      lastScrollYRef.current = scrollY
      lastScrollTimeRef.current = now
    }

    const animate = (time) => {
      if (lastTimeRef.current === null) lastTimeRef.current = time
      const delta = Math.min(time - lastTimeRef.current, 32)
      lastTimeRef.current = time

      // Ease the speed back toward the normal marquee speed after scrolling stops.
      targetSpeedRef.current += (baseSpeed - targetSpeedRef.current) * 0.035
      currentSpeedRef.current += (targetSpeedRef.current - currentSpeedRef.current) * 0.12

      if (!pausedRef.current) {
        positionRef.current -= (currentSpeedRef.current * delta) / 1000
        const loopWidth = firstGroup.offsetWidth
        if (loopWidth > 0 && Math.abs(positionRef.current) >= loopWidth) {
          positionRef.current += loopWidth
        }
        track.style.transform = `translate3d(${positionRef.current}px, 0, 0)`
      }

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    const handleResize = () => {
      const loopWidth = firstGroup.offsetWidth
      if (loopWidth > 0 && Math.abs(positionRef.current) >= loopWidth) {
        positionRef.current %= loopWidth
      }
    }

    lastScrollYRef.current = window.scrollY
    lastScrollTimeRef.current = performance.now()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize)
    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current)
    }
  }, [])

  return (
    <div
      className="overflow-hidden py-4 border-b border-black/15 bg-black text-[#f7f4ee] relative"
      onMouseEnter={() => { pausedRef.current = true }}
      onMouseLeave={() => {
        pausedRef.current = false
        lastTimeRef.current = null
      }}
    >
      <div
        ref={trackRef}
        className="flex w-max min-w-max text-[10px] font-bold tracking-[0.35em] uppercase"
        aria-label="New arrivals marquee"
      >
        <MarqueeGroup groupRef={firstGroupRef} />
        <MarqueeGroup hidden />
      </div>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-white text-black font-sans border-t border-black/15">
      <InfiniteFooterMarquee />

      <div className="aura-container py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 gap-12 sm:gap-14 md:grid-cols-4 md:gap-16 mb-16 sm:mb-20">
          <div className="md:col-span-1 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs shadow-sm">
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24"><polygon points="12,4 20,20 4,20" /></svg>
              </div>
              <h3 className="font-serif text-2xl tracking-[0.25em] uppercase text-black font-bold">AURA</h3>
            </div>
            <p className="text-black/80 text-xs font-semibold leading-relaxed tracking-wider">Refined essentials for a wardrobe in motion. Designed with intention, made to stay with you.</p>
          </div>

          <div className="space-y-5">
            <h4 className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#b59b62]">Navigation</h4>
            <ul className="space-y-3 text-xs text-black/80 font-bold tracking-wider">
              <li><a href="#" className="aura-link-hover hover:text-black hover:translate-x-1 inline-block transition-all">Home</a></li>
              <li><a href="#collection" className="aura-link-hover hover:text-black hover:translate-x-1 inline-block transition-all">Collection</a></li>
              <li><a href="#lookbook" className="aura-link-hover hover:text-black hover:translate-x-1 inline-block transition-all">Lookbook</a></li>
              <li><a href="#about" className="aura-link-hover hover:text-black hover:translate-x-1 inline-block transition-all">About</a></li>
            </ul>
          </div>

          <div className="space-y-5" id="contact">
            <h4 className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#b59b62]">Client Care & Studio</h4>
            <ul className="space-y-3 text-xs text-black/80 font-bold tracking-wider">
              <li><a href="mailto:concierge@aurafashion.com" className="aura-link-hover hover:text-black transition-colors break-all">concierge@aurafashion.com</a></li>
              <li><span className="text-black font-extrabold">+91 63697 09863</span></li>
              <li><span className="text-black/60 font-medium">Mon &ndash; Fri: 9am &ndash; 6pm IST</span></li>
              <li className="pt-1 text-black/80 leading-relaxed font-semibold">AURA Fashion Studio<br />Salem, Tamil Nadu, India</li>
            </ul>
          </div>

          <div className="space-y-5">
            <h4 className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#b59b62]">Connect</h4>
            <div className="flex flex-col space-y-3.5 text-xs text-black/80 font-bold tracking-wider">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="aura-link-hover hover:text-black transition-colors flex items-center gap-3 group">
                <span className="w-9 h-9 shrink-0 rounded-full border border-black/20 flex items-center justify-center text-[10px] font-bold group-hover:border-black group-hover:bg-black group-hover:text-white transition-all">IG</span>
                <span>Instagram</span>
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="aura-link-hover hover:text-black transition-colors flex items-center gap-3 group">
                <span className="w-9 h-9 shrink-0 rounded-full border border-black/20 flex items-center justify-center group-hover:border-black group-hover:bg-black group-hover:text-white transition-all">P</span>
                <span>Pinterest</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="aura-link-hover hover:text-black transition-colors flex items-center gap-3 group">
                <span className="w-9 h-9 shrink-0 rounded-full border border-black/20 flex items-center justify-center group-hover:border-black group-hover:bg-black group-hover:text-white transition-all">X</span>
                <span>Twitter / X</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="aura-link-hover hover:text-black transition-colors flex items-center gap-3 group">
                <span className="w-9 h-9 shrink-0 rounded-full border border-black/20 flex items-center justify-center group-hover:border-black group-hover:bg-black group-hover:text-white transition-all">in</span>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-black/15 flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center text-[11px] text-black/70 font-bold tracking-widest">
          <p>&copy; {new Date().getFullYear()} AURA Fashion Studio. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 sm:justify-end">
            <a href="#" className="aura-link-hover hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="aura-link-hover hover:text-black transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
