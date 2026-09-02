export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onClearCart }) {
  const subtotal = cartItems.reduce((sum, item) => {
    const cleanPrice = parseFloat(item.price.toString().replace(/[^\d.]/g, ''))
    return sum + (isNaN(cleanPrice) ? 0 : cleanPrice) * (item.quantity || 1)
  }, 0)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      
      <div 
        className="absolute inset-0 bg-[#111111]/40 backdrop-blur-sm transition-opacity" 
        onClick={onClose} />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#f7f4ee] shadow-2xl flex flex-col justify-between border-l border-[#111111]/10">
          
         <div className="p-6 border-b border-[#111111]/10 flex items-center justify-between">
            <h2 className="font-serif text-lg tracking-[0.2em] uppercase text-[#111111]">Your Bag ({cartItems.length})</h2>
            <button onClick={onClose} className="text-xs uppercase tracking-widest text-[#77736c] hover:text-[#111111]">
              Close
            </button>
          </div>

         <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-20 space-y-3">
                <p className="text-xs uppercase tracking-[0.2em] text-[#77736c]">Your bag is currently empty.</p>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={`${item.id}-${item.size || 'default'}`} className="flex gap-4 pb-6 border-b border-[#111111]/10 items-center">
                  
                 
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-20 h-24 object-cover bg-[#eee9e0] rounded-sm border border-[#111111]/10" 
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85";
                    }} />
                  
                  <div className="flex-1 space-y-1">
                    <h3 className="font-medium text-xs uppercase tracking-wider text-[#111111]">{item.name}</h3>
                    
                    {item.size && (
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[#77736c]">
                        Size: <span className="text-[#111111] font-medium">{item.size}</span>
                      </p>
                    )}

                    <p className="text-xs text-[#111111] font-medium">{item.price}</p>

                    <div className="flex items-center gap-3 pt-2">
                      <div className="flex items-center border border-[#111111]/20">
                        <button 
                          onClick={() => onUpdateQuantity(item.id, (item.quantity || 1) - 1)}
                          className="px-2.5 py-1 text-xs text-[#77736c] hover:text-[#111111]"> -
                        </button>
                        <span className="px-2 text-xs font-medium">{item.quantity || 1}</span>
                        <button 
                          onClick={() => onUpdateQuantity(item.id, (item.quantity || 1) + 1)}
                          className="px-2.5 py-1 text-xs text-[#77736c] hover:text-[#111111]" >
                          +
                        </button>
                      </div>

                      <button 
                        onClick={() => onRemoveItem(item.id)}
                        className="text-[10px] uppercase tracking-widest text-[#77736c] hover:text-[#111111] underline underline-offset-2">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="p-6 border-t border-[#111111]/10 space-y-4 bg-white/40">
              <div className="flex justify-between text-xs tracking-wider uppercase font-medium">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
              </div>
              <p className="text-[10px] text-[#77736c] tracking-wider">Shipping &amp; taxes calculated at checkout.</p>
              
              <button 
                onClick={() => alert('Proceeding to secure checkout.')}
                className="w-full bg-[#111111] text-[#f7f4ee] py-4 text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#b59b62] transition-colors">
                Checkout
              </button>

              <button 
                onClick={onClearCart}
                className="w-full text-center text-[10px] uppercase tracking-[0.2em] text-[#77736c] hover:text-[#111111] pt-1">
                Clear Bag
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}