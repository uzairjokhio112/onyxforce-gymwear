import { Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-black pt-32 pb-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <a href="#" className="font-display text-2xl tracking-tighter block mb-6">
              ONYX<span className="text-brand-volt">FORCE</span>
            </a>
            <p className="text-white/40 text-sm mb-8 leading-relaxed">
              We engineer technical apparel for those who live in the gym. 
              The relentless. The driven. The elite.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-brand-volt hover:text-brand-volt transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-white mb-8">Navigation</h4>
            <ul className="space-y-4">
              {["New Arrivals", "Best Sellers", "Sale", "The Archive"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/40 hover:text-brand-volt transition-colors uppercase tracking-widest">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-white mb-8">Support</h4>
            <ul className="space-y-4">
              {["Shipping", "Returns", "Size Guide", "Contact Us"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/40 hover:text-brand-volt transition-colors uppercase tracking-widest">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-white mb-8">The Insider</h4>
            <p className="text-sm text-white/40 mb-6 uppercase tracking-wider">Join for exclusive drop access.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="EMAIL@ADDRESS.TS"
                className="w-full bg-brand-gray border border-white/10 px-4 py-3 text-xs font-mono focus:outline-none focus:border-brand-volt transition-colors"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-brand-volt text-xs font-bold uppercase tracking-widest">
                Join
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between gap-6 text-[10px] font-mono uppercase tracking-[0.3em] text-white/20">
          <div>© 2026 ONYX FORCE APPAREL LTD.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
