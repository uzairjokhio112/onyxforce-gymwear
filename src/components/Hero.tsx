import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-20 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(204,255,0,0.05)_0%,transparent_70%)] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="w-8 h-[1px] bg-brand-volt"></span>
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-brand-volt">New Drop: V-SERIES 2.0</span>
            </div>
            
            <h1 className="font-display text-7xl sm:text-8xl lg:text-9xl tracking-[ -0.04em] leading-[0.9] mb-8 uppercase">
              FORCE <br />
              <span className="text-stroke">NATURE</span>
            </h1>
            
            <p className="max-w-md text-white/50 text-lg mb-10 leading-relaxed">
              High-performance technical apparel engineered for the relentless pursuit of peak performance. 
              Zero compromises on fabric, fit, or focus.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-brand-volt text-brand-black px-8 py-4 font-bold text-sm uppercase tracking-wider flex items-center gap-2 hover:bg-white transition-colors group">
                Shop Collection
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-white/20 px-8 py-4 font-bold text-sm uppercase tracking-wider hover:bg-white/10 transition-colors">
                The Lab
              </button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] relative overflow-hidden bg-brand-gray border border-white/5">
              <img
                src="https://picsum.photos/seed/gym-extreme/1200/1500"
                alt="Elite Athlete Training"
                className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:opacity-100 transition-opacity duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent " />
              
              {/* Technical Overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div className="font-mono text-[10px] uppercase tracking-widest text-white/40 space-y-1">
                  <div>LAT_REF: 40.7128°N</div>
                  <div>LNG_REF: 74.0060°W</div>
                  <div>ALT_REF: 10M | G_FORCE_OPT</div>
                </div>
                <div className="w-12 h-12 border border-brand-volt/50 rounded-full flex items-center justify-center animate-pulse">
                   <div className="w-2 h-2 bg-brand-volt rounded-full" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Marquee Strip */}
      <div className="mt-20 border-y border-white/5 py-4 overflow-hidden select-none">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-20 items-center"
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="text-3xl font-display uppercase tracking-wider text-white/5 italic">
              ENGINEERED FOR STRENGTH • PERFORMANCE DRIVEN • ZERO DISTRACTIONS
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
