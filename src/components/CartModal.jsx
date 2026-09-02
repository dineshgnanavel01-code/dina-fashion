export default function CartModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div 
        className="absolute inset-0 bg-[#111111]/60 backdrop-blur-sm transition-opacity animate-fade"
        onClick={onClose}/>
   
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#f7f4ee] p-8 shadow-2xl flex flex-col justify-between transform transition-transform duration-500 ease-in-out animate-in slide-in-from-right">
          <div>
            <div className="flex justify-between items-center pb-6 border-b border-[#111111]/10">
              <h2 className="font-serif text-xl tracking-widest uppercase">Your Bag</h2>
              <button onClick={onClose} className="text-xs uppercase tracking-widest text-[#77736c] hover:text-[#111111]">Close</button>
            </div>
            
          </div>
          <button className="w-full py-4 bg-[#111111] text-[#f7f4ee] text-xs uppercase tracking-[0.2em] hover:bg-[#b59b62] transition-colors">
            Checkout
          </button>
        </div>
      </div>
    </div>
  )
}