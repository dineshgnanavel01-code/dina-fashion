export default function Hero() {
  return (
    <section
      className="relative min-h-[90vh] lg:h-[92vh] flex items-center bg-[#f7f4ee] overflow-hidden pt-12 pb-20 lg:py-0 font-sans"
      style={{ minHeight: "90vh" }}>
      <div className="aura-container w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

       
        <div className="lg:col-span-6 z-10 text-left aura-fade-up">

          <div className="flex items-center gap-3 mb-6">
            <div className="aura-line"></div>

            <span className="aura-label text-[#b59b62] font-semibold">
              Autumn / Winter 2026 — The New Season
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-black leading-[1.15] mb-6">
            Wear the Moment. Keep the Memory.
          </h1>

          <p className="text-black text-base lg:text-lg font-normal mb-10 max-w-lg leading-relaxed tracking-wide">
            Discover considered essentials shaped by refined tailoring, elevated textures, and a quieter kind of confidence.
          </p>

         
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">

            <a
              href="#collection"
              className="relative inline-flex items-center justify-center py-4 px-10 text-[11px] uppercase tracking-[0.3em] font-serif font-bold text-white bg-black overflow-hidden group shadow-md transition-all duration-500 text-center">
              <span className="absolute inset-0 w-full h-full bg-[#b59b62] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>

              <span className="relative z-10 flex items-center gap-3 group-hover:text-black transition-colors duration-500">
                Shop the Collection

                <svg
                  className="w-3.5 h-3.5 fill-none stroke-current stroke-2 transform group-hover:translate-x-1.5 transition-transform duration-300"
                  viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </a>

            <a
              href="#lookbook"
              className="relative inline-flex items-center justify-center py-4 px-10 text-[11px] uppercase tracking-[0.3em] font-serif font-bold text-white bg-black overflow-hidden group shadow-md transition-all duration-500 text-center">
              <span className="absolute inset-0 w-full h-full bg-[#b59b62] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>

              <span className="relative z-10 flex items-center gap-3 group-hover:text-black transition-colors duration-500">
                Enter the Lookbook

                <svg
                  className="w-3.5 h-3.5 fill-none stroke-current stroke-2 transform group-hover:translate-x-1.5 transition-transform duration-300"
                  viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </a>

          </div>
        </div>

      
        <div className="lg:col-span-6 relative">

          <div className="grid grid-cols-12 gap-4 items-center">

          
            <div
              className="col-span-8 aura-product-image aura-float relative rounded-none shadow-xl overflow-hidden"
              style={{ height: "520px" }}>
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=85"
                alt="Aura Fashion Main Look"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=85";
                }}/>
            </div>

        
            <div
              className="col-span-4 aura-product-image aura-float relative rounded-none shadow-xl overflow-hidden"
              style={{ height: "520px" }}>
              <img
                src="https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=900&q=85"
                alt="Aura Fashion Detail Look"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://images.unsplash.com/photo-1496217590455-aa63a8350eea?auto=format&fit=crop&w=600&q=85";
                }}/>

             
              <div className="absolute bottom-6 right-6 bg-[#f7f4ee]/90 backdrop-blur-md px-3 py-1.5 text-[9px] tracking-[0.2em] uppercase font-semibold text-black shadow-md">
                Handcrafted Silk
              </div>
            </div>

          </div>

          <div
            className="absolute -top-10 -right-10 rounded-full border border-[#b59b62]/20 pointer-events-none"
            style={{
              width: "18rem",
              height: "18rem",
            }}></div>

        </div>
      </div>
    </section>
  );
}