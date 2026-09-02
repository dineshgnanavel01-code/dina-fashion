import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Collection from './components/Collection'
import Lookbook from './components/Lookbook'
import About from './components/About'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Contact from './components/Contact'
import InfiniteMarquee from './components/InfiniteMarquee'

function usePageScrollAnimations(currentView) {
  useEffect(() => {
    const targets = document.querySelectorAll('main section, footer')
    if (!targets.length) return
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-visible')
        entry.target.querySelectorAll('img').forEach((image) => image.classList.add('aura-scroll-image-visible'))
        observer.unobserve(entry.target)
      })
    }, { threshold: 0.08, rootMargin: '0px 0px -60px 0px' })
    targets.forEach((target) => {
      target.classList.add('aura-section-reveal')
      observer.observe(target)
    })
    return () => observer.disconnect()
  }, [currentView])
}

export default function App() {
  const [currentView, setCurrentView] = useState('home')
  usePageScrollAnimations(currentView)

  return (
    <div className="font-sans antialiased text-[#111111] bg-[#f7f4ee] min-h-screen flex flex-col">
      <Navbar
        activePage={currentView}
        onNavigate={(page) => {
          setCurrentView(page)
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
      />
      <main className="min-h-screen flex flex-col bg-[#f7f4ee]">
        {currentView === 'contact' ? <Contact /> : (
          <div>
            <Hero />
            <Collection />
            <InfiniteMarquee />
            <Lookbook />
            <About />
            <CTA />
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
