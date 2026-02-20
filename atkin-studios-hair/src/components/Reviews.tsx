import { motion } from 'framer-motion';
import { SITE_DATA } from '@/constants';
import { Star, Quote } from 'lucide-react';

export function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-red font-medium tracking-widest uppercase text-sm">Testimonials</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-6">What Our Community Says</h2>
          <div className="flex items-center justify-center gap-2 text-brand-dark/60">
            <div className="flex text-brand-red">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={20} fill="currentColor" />
              ))}
            </div>
            <span className="font-medium text-brand-dark">5.0</span>
            <span>based on 16 reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SITE_DATA.reviews.slice(0, 3).map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-brand-dark/5 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex gap-1 text-brand-red">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <Quote className="text-brand-dark/10" size={32} />
              </div>
              
              <h3 className="font-serif text-xl mb-3">{review.title}</h3>
              <p className="text-brand-dark/70 mb-6 leading-relaxed">"{review.content}"</p>
              
              <div className="flex items-center gap-3 mt-auto pt-6 border-t border-brand-dark/5">
                <div className="w-10 h-10 rounded-full bg-brand-beige flex items-center justify-center font-serif text-brand-dark font-bold">
                  {review.author[0]}
                </div>
                <div>
                  <p className="font-medium text-sm">{review.author}</p>
                  <p className="text-xs text-brand-dark/40">{review.date}</p>
                </div>
                {review.verified && (
                  <span className="ml-auto text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    Verified
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
