import { motion } from "motion/react";
import { ShoppingBag, Menu, User } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-brand-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <a href="#" className="font-display text-xl tracking-tighter hover:text-brand-volt transition-colors">
              ONYX<span className="text-brand-volt">FORCE</span>
            </a>
            <div className="hidden md:flex items-center gap-6">
              {["Collections", "Men", "Women", "Accessories"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-xs uppercase tracking-widest font-medium text-white/60 hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-white/60 hover:text-brand-volt transition-colors">
              <User size={20} />
            </button>
            <button className="p-2 text-white/60 hover:text-brand-volt transition-colors relative">
              <ShoppingBag size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-brand-volt rounded-full"></span>
            </button>
            <button className="md:hidden p-2 text-white/60 hover:text-brand-volt transition-colors">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
