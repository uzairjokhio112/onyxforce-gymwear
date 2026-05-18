import { motion } from "motion/react";
import { Zap, Shield, Target, Activity } from "lucide-react";

const FEATURES = [
  {
    icon: <Zap className="text-brand-volt" size={24} />,
    title: "V-DRY TECH",
    desc: "Advanced moisture-wicking technology that keeps you dry and light."
  },
  {
    icon: <Shield className="text-brand-volt" size={24} />,
    title: "IRONWEAVE™",
    desc: "Tear-resistant fiber blends designed for heavy lifting sessions."
  },
  {
    icon: <Target className="text-brand-volt" size={24} />,
    title: "ELITE FIT",
    desc: "Athletic cut engineered to move with your body, not against it."
  },
  {
    icon: <Activity className="text-brand-volt" size={24} />,
    title: "THERMO-REG",
    desc: "Smart fabrics that adapt to your body temperature in real-time."
  }
];

export default function Features() {
  return (
    <section className="py-32 bg-brand-gray border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="space-y-6 group"
            >
              <div className="w-14 h-14 bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-brand-volt/50 transition-colors">
                {feature.icon}
              </div>
              <h3 className="font-display text-xl tracking-tight uppercase group-hover:text-brand-volt transition-colors">
                {feature.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed uppercase tracking-wider font-medium">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
