import { useState } from 'react'

export default function CTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  return (
    <section className="bg-[#111111] text-[#f7f4ee] py-28 px-6 relative overflow-hidden">
      
    
<div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#b59b62_1px,transparent_1px)]" style={{ backgroundSize: '16px 16px' }}></div>
      <div className="aura-container max-w-2xl mx-auto text-center relative z-10">
        
     
        <div className="flex justify-center items-center gap-3 mb-6">
          <div className="h-px w-6 bg-[#b59b62]"></div>
          <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#b59b62]">
            Private Access
          </span>
          <div className="h-px w-6 bg-[#b59b62]"></div>
        </div>

       
        <h2 className="font-serif text-3xl md:text-5xl font-light tracking-tight mb-6">
          Join the Aura Circle
        </h2>

        <p className="text-[#99958e] text-sm md:text-base font-light mb-10 max-w-lg mx-auto leading-relaxed">
          Subscribe to receive early notifications on limited seasonal drops, private lookbooks, and invitation-only fashion events.
        </p>

        {submitted ? (
          <div className="py-4 px-6 bg-[#191919] border border-[#b59b62]/40 text-xs uppercase tracking-[0.2em] text-[#b59b62] animate-fade">
            Welcome to the circle. Check your inbox soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-md mx-auto">
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address" 
              className="px-5 py-4 bg-[#191919] border border-white/10 text-xs tracking-wider focus:outline-none focus:border-[#b59b62] w-full sm:flex-1 text-white placeholder-[#99958e] transition-colors" />
            <button 
              type="submit" 
              className="w-full sm:w-auto shrink-0 py-4 px-8 bg-[#f7f4ee] text-[#111111] hover:bg-[#b59b62] hover:text-white transition-all duration-300 text-xs uppercase tracking-[0.2em] font-medium">
              <span>Subscribe</span>
            </button>
          </form>
        )}

      
        <div className="mt-12">
          <a 
            href="#collection" 
            className="inline-block text-[10px] uppercase tracking-[0.25em] text-[#99958e] hover:text-[#f7f4ee] transition-colors border-b border-transparent hover:border-[#f7f4ee] pb-0.5">
            Or explore current collection &rarr;
          </a>
        </div>

      </div>
    </section>
  )
}