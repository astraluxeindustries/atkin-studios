import React from 'react';
import { motion } from 'framer-motion';
import { AMENITIES } from '../constants';

const Services: React.FC = () => {
  const offerings = [
    {
      title: 'Yoga Classes',
      description: 'Accessible and trauma-informed yoga supporting individual needs and healing.',
      image: 'https://picsum.photos/600/400?random=2'
    },
    {
      title: 'Event Center',
      description: 'A vibrant space for community events, workshops, and creative collaboration.',
      image: 'https://picsum.photos/600/400?random=3'
    },
    {
      title: 'Fine Art Photography',
      description: 'Professional photography services by Mo Atkin capturing unique artistic visions.',
      image: 'https://picsum.photos/600/400?random=4'
    }
  ];

  return (
    <section id="services" className="py-24 bg-brand-beige">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold tracking-widest text-brand-primary uppercase mb-3">What We Offer</h2>
          <h3 className="font-serif text-4xl md:text-5xl text-gray-900">Experience Atkin Studios</h3>
        </div>

        {/* Offerings Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {offerings.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white group hover:shadow-xl transition-shadow duration-300 rounded-sm overflow-hidden"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={offer.image} 
                  alt={offer.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <h4 className="font-serif text-2xl mb-4 text-gray-900">{offer.title}</h4>
                <p className="text-gray-600 font-light mb-6">{offer.description}</p>
                <button className="text-brand-primary text-xs font-bold uppercase tracking-widest border-b border-brand-primary pb-1 hover:text-gray-900 hover:border-gray-900 transition-colors">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Amenities Section */}
        <div className="bg-white p-12 shadow-sm rounded-sm max-w-4xl mx-auto">
          <h4 className="font-serif text-3xl text-center mb-10 text-gray-900">Studio Amenities</h4>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {AMENITIES.map((amenity, idx) => (
              <motion.span 
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-gray-50 border border-gray-100 rounded-full text-sm font-medium text-gray-600 uppercase tracking-wide"
              >
                {amenity.label}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;