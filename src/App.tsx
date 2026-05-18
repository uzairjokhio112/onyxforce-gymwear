/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Features from "./components/Features";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-black selection:bg-brand-volt selection:text-brand-black">
      {/* Decorative Noise / Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] mix-blend-overlay">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      <Navbar />
      
      <main>
        <Hero />
        
        {/* Collection Teaser Section */}
        <section className="py-24 border-b border-white/5 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="order-2 lg:order-1 relative">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="aspect-square bg-brand-gray relative overflow-hidden"
                >
                  <img 
                    src="https://picsum.photos/seed/onyx-model-1/1000/1000" 
                    alt="Fabric Detail" 
                    className="w-full h-full object-cover grayscale opacity-50 hover:opacity-100 transition-opacity duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 border-[20px] border-brand-black/20" />
                </motion.div>
                {/* Floating Meta Tag */}
                <div className="absolute -bottom-6 -right-6 glass p-6 max-w-[200px] hidden md:block">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-brand-volt mb-2">FABRIC_OS: CORE_MESH</div>
                  <div className="text-[10px] text-white/50 leading-relaxed uppercase">
                    4-way stretch system with integrated thermal pathways for maximum airflow.
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <span className="text-xs font-mono text-brand-volt uppercase tracking-[0.4em] mb-6 block">Our Philosophy</span>
                <h2 className="font-display text-5xl sm:text-6xl uppercase tracking-tighter leading-tight mb-8">
                  ENGINEERED <br />FOR THE <br />UNSTOPPABLE
                </h2>
                <div className="space-y-6 text-white/50 text-lg max-w-lg">
                  <p>
                    Onyx Force isn't just about what you wear. It's about the mindset of the person wearing it. 
                    We build gear that disappears so your focus can remain absolute.
                  </p>
                  <p>
                    Every stitch is stress-tested in the most brutal environments to ensure that when you reach your limit, your gear doesn't.
                  </p>
                </div>
                <button className="mt-10 text-brand-volt font-mono text-xs uppercase tracking-[0.3em] flex items-center gap-4 group">
                  <span className="w-12 h-[1px] bg-brand-volt/30 group-hover:w-20 transition-all duration-500"></span>
                  Read the manifesto
                </button>
              </div>
            </div>
          </div>
        </section>

        <Features />
        
        <Products />

        {/* Brand Statement / CTA */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-brand-volt transform skew-y-3 translate-y-32 -z-10" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-6xl sm:text-8xl lg:text-[10rem] uppercase tracking-tighter leading-none mb-12 mix-blend-difference">
              STAY <br />DRIVEN
            </h2>
            <div className="flex justify-center">
              <button className="bg-brand-black text-white px-12 py-6 font-bold uppercase tracking-[0.2em] text-sm hover:bg-brand-gray transition-colors">
                Join the Elite
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

