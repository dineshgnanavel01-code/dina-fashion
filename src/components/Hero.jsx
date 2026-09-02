export default function Hero() {
  return (
    <section className="relative flex items-center overflow-hidden bg-[#f7f4ee] pb-14 pt-10 font-sans sm:pb-20 sm:pt-12 lg:min-h-[92vh] lg:py-0" style={{ minHeight: 'calc(100svh - 74px)' }}>
      <div className="aura-wide grid w-full grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="z-10 text-left aura-fade-up lg:col-span-6">
          <div className="mb-5 flex items-center gap-3 sm:mb-6"><div className="aura-line" /><span className="aura-label text-[#b59b62] font-semibold">Autumn / Winter 2026 — The New Season</span></div>
          <h1 className="mb-5 max-w-3xl font-serif text-[clamp(2.35rem,9vw,4.5rem)] font-semibold leading-[1.05] tracking-tight text-black sm:mb-6 sm:text-5xl lg:text-6xl">Wear the Moment. Keep the Memory.</h1>
          <p className="mb-8 max-w-lg text-[15px] leading-relaxed tracking-wide text-black sm:mb-10 sm:text-base lg:text-lg">Discover considered essentials shaped by refined tailoring, elevated textures, and a quieter kind of confidence.</p>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
            <a href="#collection" className="aura-button inline-flex min-h-14 w-full items-center justify-center bg-black px-7 py-4 text-center font-serif text-[10px] font-bold uppercase tracking-[0.22em] text-white shadow-md sm:w-auto sm:px-10 sm:text-[11px] sm:tracking-[0.3em]">Shop the Collection <span className="ml-3">→</span></a>
            <a href="#lookbook" className="aura-button inline-flex min-h-14 w-full items-center justify-center border border-black/20 px-7 py-4 text-center font-serif text-[10px] font-bold uppercase tracking-[0.22em] text-black hover:bg-black hover:text-white sm:w-auto sm:px-10 sm:text-[11px] sm:tracking-[0.3em]">Enter the Lookbook <span className="ml-3">→</span></a>
          </div>
        </div>
        <div className="relative lg:col-span-6">
          <div className="grid grid-cols-12 items-center gap-2.5 sm:gap-4">
            <div className="aura-product-image aura-float relative col-span-8 h-[360px] overflow-hidden shadow-xl min-[400px]:h-[430px] sm:h-[520px]"><img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=85" alt="Aura Fashion Main Look" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" /></div>
            <div className="aura-product-image aura-float relative col-span-4 h-[360px] overflow-hidden shadow-xl min-[400px]:h-[430px] sm:h-[520px]"><img src="https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=900&q=85" alt="Aura Fashion Detail Look" className="h-full w-full object-cover transition-transform duration-700 hover:scale-110" /><div className="absolute bottom-3 right-2 max-w-[90%] bg-[#f7f4ee]/90 px-2 py-1.5 text-right text-[7px] font-semibold uppercase tracking-[0.16em] text-black shadow-md backdrop-blur-md sm:bottom-6 sm:right-6 sm:px-3 sm:text-[9px]">Handcrafted Silk</div></div>
          </div>
          <div className="pointer-events-none absolute -right-16 -top-8 hidden h-72 w-72 rounded-full border border-[#b59b62]/20 sm:block" />
        </div>
      </div>
    </section>
  )
}
