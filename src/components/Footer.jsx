export default function Footer() {
  const marqueeItems = ['NEW ARRIVALS', 'NEW ARRIVALS', 'NEW ARRIVALS', 'NEW ARRIVALS']

  const MarqueeGroup = ({ hidden = false }) => (
    <div className="flex shrink-0 items-center gap-8 pr-8" aria-hidden={hidden}>
      {marqueeItems.map((item, index) => (
        <span key={`${item}-${index}`} className="inline-flex items-center gap-8">
          <span>{item}</span>
          <span className="text-[#b59b62]" aria-hidden="true">&bull;</span>
        </span>
      ))}
    </div>
  )

  return (
    <footer className="bg-white text-black font-sans border-t border-black/15">
      <div className="py-4 border-b border-black/15 overflow-hidden bg-black text-[#f7f4ee] relative">
        <div className="flex w-max animate-marquee text-[10px] font-bold tracking-[0.35em] uppercase" aria-label="New arrivals marquee">
          <MarqueeGroup />
          <MarqueeGroup hidden />
        </div>
      </div>

      <div className="aura-container py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
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
              <li><a href="mailto:concierge@aurafashion.com" className="aura-link-hover hover:text-black transition-colors">concierge@aurafashion.com</a></li>
              <li><span className="text-black font-extrabold">+91 63697 09863</span></li>
              <li><span className="text-black/60 font-medium">Mon &ndash; Fri: 9am &ndash; 6pm IST</span></li>
              <li className="pt-1 text-black/80 leading-relaxed font-semibold">AURA Fashion Studio<br />Salem, Tamil Nadu, India</li>
            </ul>
          </div>

          <div className="space-y-5">
            <h4 className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#b59b62]">Connect</h4>
            <div className="flex flex-col space-y-3.5 text-xs text-black/80 font-bold tracking-wider">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="aura-link-hover hover:text-black transition-colors flex items-center gap-3 group">
                <span className="w-7 h-7 rounded-full border border-black/20 flex items-center justify-center group-hover:border-black group-hover:bg-black group-hover:text-white transition-all">Instagram</span>
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="aura-link-hover hover:text-black transition-colors flex items-center gap-3 group">
                <span className="w-7 h-7 rounded-full border border-black/20 flex items-center justify-center group-hover:border-black group-hover:bg-black group-hover:text-white transition-all">P</span>
                Pinterest
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="aura-link-hover hover:text-black transition-colors flex items-center gap-3 group">
                <span className="w-7 h-7 rounded-full border border-black/20 flex items-center justify-center group-hover:border-black group-hover:bg-black group-hover:text-white transition-all">X</span>
                Twitter / X
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="aura-link-hover hover:text-black transition-colors flex items-center gap-3 group">
                <span className="w-7 h-7 rounded-full border border-black/20 flex items-center justify-center group-hover:border-black group-hover:bg-black group-hover:text-white transition-all">in</span>
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-black/15 flex flex-col sm:flex-row justify-between items-center text-[11px] text-black/70 font-bold tracking-widest">
          <p>&copy; {new Date().getFullYear()} AURA Fashion Studio. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 sm:mt-0">
            <a href="#" className="aura-link-hover hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="aura-link-hover hover:text-black transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
