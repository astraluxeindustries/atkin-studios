import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm font-bold tracking-widest text-brand-primary uppercase mb-3">Our Story</h2>
              <h3 className="font-serif text-4xl md:text-5xl text-gray-900 mb-8">A Sanctuary for Connection</h3>
              
              <div className="space-y-6 text-gray-600 leading-relaxed font-light text-lg">
                <p>
                  Atkin Studios, located in downtown St. George, Utah, is more than just a home yoga studio—it's a vibrant event center fueled by the passion of Mo and Heather Atkin.
                </p>
                <p>
                  <strong className="text-gray-900 font-medium">Heather Atkin</strong>, an experienced yoga teacher certified in accessible and trauma-informed yoga, is dedicated to supporting your individual needs and healing. 
                </p>
                <p>
                  <strong className="text-gray-900 font-medium">Mo Atkin</strong>, an active photographer, brings his unique artistic vision and love for community to the space.
                </p>
                <p>
                  Together, they have created a welcoming environment that fosters inclusivity and creativity, inviting everyone to participate in yoga classes and community events. With safety and accessibility at the forefront of our mission, we aim to ensure that all individuals feel at home.
                </p>
              </div>

              <div className="mt-10 pt-10 border-t border-gray-100 grid grid-cols-2 gap-8">
                 <div>
                   <h4 className="font-serif text-xl mb-2 text-gray-800">Inclusivity</h4>
                   <p className="text-sm text-gray-500">A nurturing community designed for collaboration and connection.</p>
                 </div>
                 <div>
                   <h4 className="font-serif text-xl mb-2 text-gray-800">Accessibility</h4>
                   <p className="text-sm text-gray-500">Trauma-informed practices tailored to individual needs.</p>
                 </div>
              </div>
            </motion.div>
          </div>

          {/* Image Content */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
             <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="relative"
             >
                <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
                  <img 
                    src="https://picsum.photos/800/1000?random=1" 
                    alt="Heather and Mo Atkin" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {/* Decorative rectangle */}
                <div className="absolute -bottom-6 -left-6 w-full h-full border border-brand-primary/20 -z-10 rounded-sm"></div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;