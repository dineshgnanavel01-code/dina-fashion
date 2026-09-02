import { useState } from 'react'

export default function ProductModal({ product, onClose, onAddToCart }) {
  const [selectedSize, setSelectedSize] = useState('S')
  const [quantity, setQuantity] = useState(1)

  if (!product) return null

  const handleAdd = () => {
    onAddToCart({ ...product, size: selectedSize, quantity })
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-[#f7f4ee] w-full max-w-4xl max-h-[90vh] overflow-y-auto relative grid grid-cols-1 md:grid-cols-2 shadow-2xl border border-[#b59b62]/30">
        
      
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/10 hover:bg-black/20 flex items-center justify-center text-black text-sm transition-colors">
          ✕
        </button>

       
<div className="relative h-80 md:h-full bg-[#eeeae2]">
            <img
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"/>
          {product.discount && (
            <span className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-[9px] uppercase tracking-[0.15em]">
              {product.discount}
            </span>
          )}
        </div>

        
        <div className="p-8 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#b59b62] font-medium">
                {product.category}
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 border border-emerald-200">
                In Stock
              </span>
            </div>

            <h2 className="font-serif text-2xl text-[#111111]">{product.name}</h2>

            <div className="flex items-center gap-3">
              <span className="text-lg font-semibold text-black">{product.price}</span>
              {product.originalPrice && (
                <span className="text-sm text-black/40 line-through">{product.originalPrice}</span>
              )}
              {product.discount && (
                <span className="text-xs text-[#b59b62] font-medium">Save {product.discount}</span>
              )}
            </div>

            <p className="text-xs text-[#77736c] leading-relaxed">
              Crafted from conscious luxury textiles. Designed for an effortless silhouette, ensuring durability and enduring elegance for the modern wardrobe.
            </p>

           
            <div className="space-y-2 pt-2">
              <label className="text-[10px] uppercase tracking-[0.2em] text-[#111111] font-medium block">
                Select Size
              </label>
              <div className="flex gap-2">
                {['S', 'M', 'L', 'XL'].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-10 h-10 text-xs font-medium border transition-all ${
                      selectedSize === size 
                        ? 'bg-black text-white border-black' 
                        : 'bg-transparent text-black border-black/20 hover:border-black'
                    }`} >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

      
          <div className="pt-8 mt-6 border-t border-black/10">
            <button
              onClick={handleAdd}
              className="w-full bg-[#111111] text-white py-4 text-xs uppercase tracking-[0.2em] hover:bg-[#b59b62] transition-colors duration-300 font-medium shadow-md">
              Add to Bag — {product.price}
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}