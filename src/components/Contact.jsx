import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="min-h-screen py-24 bg-[#f7f4ee] font-sans flex items-center justify-center">
      <div className="aura-container w-full flex items-center justify-center">
        <div className="w-full max-w-md bg-white/70 backdrop-blur-md p-8 md:p-10 border border-black/15 shadow-md relative">
          
          <div className="text-center mb-8">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-black block mb-2">
              Support & Inquiries
            </span>
            <h1 className="font-serif text-2xl tracking-[0.2em] uppercase text-black font-bold">
              Client Care
            </h1>
            <p className="text-black text-xs font-normal mt-2 tracking-wide">
              Please provide your details below to connect with our concierge.
            </p>
          </div>

          {isSubmitted ? (
            <div className="text-center py-10 space-y-4">
              <span className="w-8 h-8 rounded-full bg-[#b59b62] text-white flex items-center justify-center mx-auto text-sm font-bold">
                &#10003;
              </span>
              <h3 className="font-serif text-lg uppercase tracking-wider text-black font-bold">
                Message Received
              </h3>
              <p className="text-black text-xs font-normal leading-relaxed tracking-wide">
                Thank you. A client advisor will reach out to your email or phone number shortly.
              </p>
              <button 
                onClick={() => { setIsSubmitted(false); setFormData({ email: '', phone: '', message: '' }) }} 
                className="mt-6 text-xs uppercase tracking-[0.2em] text-black font-bold underline underline-offset-4 hover:text-[#b59b62]">
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="space-y-2">
                <label className="block text-[10px] uppercase tracking-[0.2em] text-black font-bold">
                  Email Address
                </label>
                <input 
                  type="email" 
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-transparent border border-black/20 p-3.5 text-xs text-black placeholder:text-black/40 focus:outline-none focus:border-black font-medium transition-colors"/>
              </div>

              <div className="space-y-2">
                <label className="block text-[10px] uppercase tracking-[0.2em] text-black font-bold">
                  Phone Number
                </label>
                <input 
                  type="tel" 
                  required
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-transparent border border-black/20 p-3.5 text-xs text-black placeholder:text-black/40 focus:outline-none focus:border-black font-medium transition-colors"/>
              </div>

              <div className="space-y-2">
                <label className="block text-[10px] uppercase tracking-[0.2em] text-black font-bold">
                  Message / Inquiry
                </label>
                <textarea 
                  required
                  rows={4}
                  placeholder="How may we assist your wardrobe inquiry?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent border border-black/20 p-3.5 text-xs text-black placeholder:text-black/40 focus:outline-none focus:border-black font-medium transition-colors resize-none" />
              </div>

              <button 
                type="submit" 
                className="w-full bg-black text-[#f7f4ee] py-4 text-xs uppercase tracking-[0.25em] font-bold hover:bg-[#b59b62] transition-colors shadow-sm">
                Submit Inquiry
              </button>
            </form>
          )}

        </div>
      </div>
    </section>
  )
}