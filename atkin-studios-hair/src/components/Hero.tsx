import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { SITE_DATA } from '@/constants';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-beige">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070&auto=format&fit=crop" 
          alt="Yoga Studio Ambience" 
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/10 to-brand-beige" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 border border-brand-dark/30 rounded-full text-xs font-semibold tracking-[0.2em] uppercase mb-6 text-brand-dark/70 backdrop-blur-sm">
            Est. St. George, UT
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-brand-dark mb-6 leading-[1.1]">
            {SITE_DATA.name}
          </h1>
          <p className="font-sans text-lg md:text-xl text-brand-dark/80 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            {SITE_DATA.tagline}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="min-w-[200px] shadow-lg shadow-brand-red/20">
              Book a Class
            </Button>
            <Button variant="outline" size="lg" className="min-w-[200px] bg-white/50 backdrop-blur-sm border-brand-dark/20 hover:bg-white">
              View Schedule
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
