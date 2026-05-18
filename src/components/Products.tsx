import { motion } from "motion/react";
import { Plus } from "lucide-react";

const PRODUCTS = [
  {
    id: 1,
    name: "AERO-DRY COMPRESSION TEE",
    price: "$45.00",
    image: "https://picsum.photos/seed/gym-shirt/800/1000",
    tag: "TECHNICAL"
  },
  {
    id: 2,
    name: "STEALTH JOGGER 2.0",
    price: "$85.00",
    image: "https://picsum.photos/seed/gym-joggers/800/1000",
    tag: "PERFORMANCE"
  },
  {
    id: 3,
    name: "APEX UTILITY BAG",
    price: "$120.00",
    image: "https://picsum.photos/seed/gym-bag/800/1000",
    tag: "ELITE"
  },
  {
    id: 4,
    name: "THERMO-CORE ZIP HOODIE",
    price: "$95.00",
    image: "https://picsum.photos/seed/gym-hoodie/800/1000",
    tag: "NEW DROP"
  }
];

export default function Products() {
  return (
    <section className="py-32 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="font-display text-5xl uppercase mb-4 tracking-tighter">Essential Gear</h2>
            <p className="text-white/40 max-w-sm uppercase text-xs tracking-widest font-mono">
              Designed for high-intensity training. No compromises.
            </p>
          </div>
          <a href="#" className="text-xs uppercase tracking-[0.2em] font-bold border-b border-brand-volt pb-1 hover:text-brand-volt transition-colors">
            View All Series
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {PRODUCTS.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-brand-gray border border-white/5 mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-brand-volt text-brand-black text-[10px] font-bold px-2 py-1 tracking-wider uppercase">
                    {product.tag}
                  </span>
                </div>
                <button className="absolute bottom-4 right-4 w-10 h-10 bg-white text-brand-black flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <Plus size={20} />
                </button>
              </div>
              <div className="flex justify-between items-start gap-4">
                <h3 className="font-display text-sm tracking-wide group-hover:text-brand-volt transition-colors">
                  {product.name}
                </h3>
                <span className="font-mono text-sm text-white/40">{product.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
