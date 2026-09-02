import { useEffect, useRef, useState } from 'react'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect() 
        }
      },
      { threshold: 0.2 } 
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) observer.disconnect()
    }
  }, [])

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-32 md:py-48 px-6 bg-[#f7f4ee] overflow-hidden font-sans">
      <div 
        className={`max-w-3xl mx-auto text-center transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`} >
        
        <div className="flex justify-center items-center gap-4 mb-8">
          <div className="h-px w-8 bg-[#b59b62]"></div>
          <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-black">
            The Brand
          </span>
          <div className="h-px w-8 bg-[#b59b62]"></div>
        </div>

    
        <h2 className="font-serif text-3xl md:text-5xl leading-[1.3] text-black mb-8 font-semibold">
          Redefining Modern Elegance Through Timeless Design.
        </h2>

        
        <p className="text-black text-sm md:text-base leading-relaxed font-normal mb-12 max-w-2xl mx-auto tracking-wide">
          AURA was born from a singular vision: to create thoughtful, meticulously crafted garments that transcend fleeting seasonal trends. We harmonize exceptional materials with enduring silhouettes, offering a curated wardrobe that empowers the modern individual with quiet confidence.
        </p>

        <div className="flex flex-col items-center gap-2">
          <p className="text-xs tracking-[0.25em] uppercase font-semibold text-black">
            Aura Studio
          </p>
          <span className="text-[10px] tracking-[0.2em] text-[#b59b62] uppercase font-semibold">
            Est. 2026
          </span>
        </div>
      </div>
    </section>
  )
}