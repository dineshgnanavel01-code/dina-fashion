import { useEffect, useRef, useState } from 'react'
import { products } from '../data/products'
import ProductModal from './ProductModal'

export default function Collection({ onAddToCart }) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  const categories = ['All', 'Men', 'Women', 'Kids', 'Footwear', 'Accessories']
  const filteredProducts = activeCategory === 'All' ? products : products.filter(p => p.category === activeCategory)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.disconnect()
      }
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="collection" ref={sectionRef} className="aura-container py-24 scroll-mt-24">
      <div className={`text-center max-w-xl mx-auto mb-16 space-y-4 aura-reveal ${isVisible ? 'is-visible' : ''}`}>
        <span className="text-xs font-medium tracking-[0.3em] uppercase text-[#77736c]">The AURA Edit</span>
        <h2 className="font-serif text-3xl md:text-4xl uppercase tracking-wide text-[#111111]">Considered Pieces for Every Day</h2>
        <div className="flex flex-wrap justify-center gap-4 pt-6 text-xs uppercase tracking-[0.2em]">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActiveCategory(cat)} className={`pb-1 transition-all duration-300 relative ${activeCategory === cat ? 'text-[#111111] font-medium border-b border-[#111111]' : 'text-[#77736c] hover:text-[#111111]'}`}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product, index) => (
          <div
            key={product.id}
            onClick={() => setSelectedProduct(product)}
            className={`group cursor-pointer space-y-3 aura-reveal ${isVisible ? 'is-visible' : ''}`}
            style={{ transitionDelay: isVisible ? `${Math.min(index * 70, 420)}ms` : '0ms' }}
          >
            <div className="relative overflow-hidden bg-[#eee9e0] shadow-sm transition-all duration-500 group-hover:shadow-xl" style={{ aspectRatio: '3/4' }}>
              <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
              <div className="absolute inset-x-0 bottom-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                <span className="block bg-[#f7f4ee]/95 text-[#111111] text-xs uppercase tracking-[0.25em] py-3 text-center font-medium backdrop-blur-md shadow-lg border border-[#111111]/10 hover:bg-[#111111] hover:text-[#f7f4ee] transition-colors duration-300">
                  View the Piece
                </span>
              </div>
            </div>
            <div className="flex justify-between items-start text-xs tracking-wider pt-1">
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#b59b62] block font-medium">{product.category}</span>
                <h3 className="font-serif text-sm text-[#111111] tracking-wide group-hover:text-[#b59b62] transition-colors duration-300">{product.name}</h3>
              </div>
              <span className="font-serif text-sm font-medium text-[#111111]">{product.price}</span>
            </div>
          </div>
        ))}
      </div>

      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} onAddToCart={onAddToCart} />
    </section>
  )
}
