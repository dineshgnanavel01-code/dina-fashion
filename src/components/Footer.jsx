export default function Footer() {
  return (
    <footer className="bg-white text-black font-sans border-t border-black/15">
      
      <div className="py-4 border-b border-black/15 overflow-hidden bg-black text-[#f7f4ee] relative">
        <div className="flex whitespace-nowrap animate-marquee text-[10px] font-bold tracking-[0.35em] uppercase">
          <div className="flex items-center shrink-0">
            <span className="mx-6">New Season Arrivals</span>
            <span className="text-[#b59b62] mx-2">&bull;</span>
            <span className="mx-6">Autumn / Winter 2026</span>
            <span className="text-[#b59b62] mx-2">&bull;</span>
            <span className="mx-6">Quietly Distinctive</span>
            <span className="text-[#b59b62] mx-2">&bull;</span>
            <span className="mx-6">Limited Editions</span>
            <span className="text-[#b59b62] mx-2">&bull;</span>
          </div>
          <div className="flex items-center shrink-0" aria-hidden="true">
            <span className="mx-6">New Season Arrivals</span>
            <span className="text-[#b59b62] mx-2">&bull;</span>
            <span className="mx-6">Autumn / Winter 2026</span>
            <span className="text-[#b59b62] mx-2">&bull;</span>
            <span className="mx-6">Quietly Distinctive</span>
            <span className="text-[#b59b62] mx-2">&bull;</span>
            <span className="mx-6">Limited Editions</span>
            <span className="text-[#b59b62] mx-2">&bull;</span>
          </div>
        </div>
      </div>

      <div className="aura-container py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          
          
          <div className="md:col-span-1 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs shadow-sm">
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <polygon points="12,4 20,20 4,20" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl tracking-[0.25em] uppercase text-black font-bold">
                AURA
              </h3>
            </div>
            <p className="text-black/80 text-xs font-semibold leading-relaxed tracking-wider">
              Refined essentials for a wardrobe in motion. Designed with intention, made to stay with you.
            </p>
          </div>

        
          <div className="space-y-5">
            <h4 className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#b59b62]">
              Navigation
            </h4>
            <ul className="space-y-3 text-xs text-black/80 font-bold tracking-wider">
              <li><a href="#" className="hover:text-black hover:translate-x-1 inline-block transition-all">Home</a></li>
              <li><a href="#collection" className="hover:text-black hover:translate-x-1 inline-block transition-all">Collection</a></li>
              <li><a href="#lookbook" className="hover:text-black hover:translate-x-1 inline-block transition-all">Lookbook</a></li>
              <li><a href="#about" className="hover:text-black hover:translate-x-1 inline-block transition-all">About</a></li>
            </ul>
          </div>

         
          <div className="space-y-5" id="contact">
            <h4 className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#b59b62]">
              Client Care & Studio
            </h4>
            <ul className="space-y-3 text-xs text-black/80 font-bold tracking-wider">
              <li><a href="mailto:concierge@aurafashion.com" className="hover:text-black transition-colors">concierge@aurafashion.com</a></li>
              <li><span className="text-black font-extrabold">+91 63697 09863</span></li>
              <li><span className="text-black/60 font-medium">Mon &ndash; Fri: 9am &ndash; 6pm IST</span></li>
              <li className="pt-1 text-black/80 leading-relaxed font-semibold">
                AURA Fashion Studio<br />
                Salem, Tamil Nadu, India
              </li>
            </ul>
          </div>

        
          <div className="space-y-5">
            <h4 className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#b59b62]">
              Connect
            </h4>
            <div className="flex flex-col space-y-3.5 text-xs text-black/80 font-bold tracking-wider">
              
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors flex items-center gap-3 group">
                <span className="w-7 h-7 rounded-full border border-black/20 flex items-center justify-center group-hover:border-black group-hover:bg-black group-hover:text-white transition-all">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </span>
                Instagram
              </a>

              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors flex items-center gap-3 group">
                <span className="w-7 h-7 rounded-full border border-black/20 flex items-center justify-center group-hover:border-black group-hover:bg-black group-hover:text-white transition-all">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.399.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.223 7.462-1.214 0-2.35-.631-2.741-1.379l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                  </svg>
                </span>
                Pinterest
              </a>

              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors flex items-center gap-3 group">
                <span className="w-7 h-7 rounded-full border border-black/20 flex items-center justify-center group-hover:border-black group-hover:bg-black group-hover:text-white transition-all">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </span>
                Twitter / X
              </a>

              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors flex items-center gap-3 group">
                <span className="w-7 h-7 rounded-full border border-black/20 flex items-center justify-center group-hover:border-black group-hover:bg-black group-hover:text-white transition-all">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </span>
                LinkedIn
              </a>

            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-black/15 flex flex-col sm:flex-row justify-between items-center text-[11px] text-black/70 font-bold tracking-widest">
          <p>&copy; {new Date().getFullYear()} AURA Fashion Studio. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 sm:mt-0">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </footer>
  )
}