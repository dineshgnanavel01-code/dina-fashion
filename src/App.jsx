import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Collection from './components/Collection'
import Lookbook from './components/Lookbook'
import About from './components/About'
import CTA from './components/CTA'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import Contact from './components/Contact'
import InfiniteMarquee from './components/InfiniteMarquee'

function usePageScrollAnimations(currentView) {
  useEffect(() => {
    const targets = document.querySelectorAll('main section, footer')
    if (!targets.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          entry.target.classList.add('is-visible')
          entry.target.querySelectorAll('img').forEach((image) => {
            image.classList.add('aura-scroll-image-visible')
          })
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
    )

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

  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [toastMessage, setToastMessage] = useState(null)

  const cartCount = cartItems.reduce((total, item) => total + (item.quantity || 1), 0)

  const handleAddToCart = (product) => {
    setCartItems(prevItems => {
      const existingIndex = prevItems.findIndex(item => item.id === product.id && item.size === product.size)
      if (existingIndex > -1) {
        const updated = [...prevItems]
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: (updated[existingIndex].quantity || 1) + (product.quantity || 1)
        }
        return updated
      }
      return [...prevItems, { ...product, quantity: product.quantity || 1 }]
    })

    setToastMessage(`Added ${product.name} ${product.size ? `(${product.size})` : ''} to your bag.`)
    setTimeout(() => setToastMessage(null), 3000)
  }

  const handleUpdateQuantity = (uniqueKey, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(uniqueKey)
      return
    }
    setCartItems(prev =>
      prev.map(item => {
        const key = `${item.id}-${item.size || 'default'}`
        return key === uniqueKey ? { ...item, quantity: newQuantity } : item
      })
    )
  }

  const handleRemoveItem = (uniqueKey) => {
    setCartItems(prev => prev.filter(item => `${item.id}-${item.size || 'default'}` !== uniqueKey))
  }

  const handleClearCart = () => setCartItems([])

  return (
    <div className="font-sans antialiased text-[#111111] bg-[#f7f4ee] min-h-screen flex flex-col justify-between">
      {toastMessage && (
        <div className="fixed bottom-8 right-8 bg-[#111111] text-white px-6 py-4 z-50 shadow-2xl flex items-center gap-4 border border-[#b59b62]/40">
          <span className="w-2 h-2 rounded-full bg-[#b59b62]"></span>
          <p className="text-xs uppercase tracking-[0.2em]">{toastMessage}</p>
        </div>
      )}

      <Navbar
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
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
            <Collection onAddToCart={handleAddToCart} />
            <InfiniteMarquee />
            <Lookbook />
            <About />
            <CTA />
          </div>
        )}
      </main>

      <Footer />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  )
}
