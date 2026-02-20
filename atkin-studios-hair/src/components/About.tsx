import { motion } from 'framer-motion';
import { SITE_DATA } from '@/constants';

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1599447421405-0c1741427447?q=80&w=1974&auto=format&fit=crop" 
                alt="Yoga Instructor" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-brand-beige rounded-full -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl text-brand-dark mb-8 leading-tight">
              More than just a <br/>
              <span className="text-brand-red italic">home yoga studio.</span>
            </h2>
            
            <div className="space-y-6 text-brand-dark/70 leading-relaxed text-lg">
              <p>
                Atkin Studios, located in downtown St. George, Utah, is a vibrant event center fueled by the passion of Mo and Heather Atkin.
              </p>
              <p>
                Heather, an experienced yoga teacher certified in accessible and trauma-informed yoga, is dedicated to supporting your individual needs and healing. Mo, an active photographer, brings his unique artistic vision and love for community to the space.
              </p>
              <p>
                Together, they have created a welcoming environment that fosters inclusivity and creativity, inviting everyone to participate in yoga classes and community events.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <h3 className="font-serif text-2xl mb-2">Inclusivity</h3>
                <p className="text-sm text-brand-dark/60">A welcoming environment for everyone to participate and connect.</p>
              </div>
              <div>
                <h3 className="font-serif text-2xl mb-2">Creativity</h3>
                <p className="text-sm text-brand-dark/60">Fostering artistic vision through photography and movement.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
