import React from 'react';
import { motion } from 'framer-motion';
import { REVIEWS } from '../constants';

const StarIcon = () => (
  <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
           <div className="max-w-2xl">
             <h2 className="text-sm font-bold tracking-widest text-brand-primary uppercase mb-3">Testimonials</h2>
             <h3 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">Community Love</h3>
             <div className="flex items-center gap-4">
               <span className="text-6xl font-serif font-bold text-gray-900">5.0</span>
               <div className="flex flex-col">
                 <div className="flex gap-1 mb-1">
                   {[1, 2, 3, 4, 5].map(i => <StarIcon key={i} />)}
                 </div>
                 <span className="text-sm text-gray-500 uppercase tracking-wide">Based on 16 Reviews</span>
               </div>
             </div>
           </div>
           <button className="hidden md:block border border-gray-300 px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-gray-900 hover:text-white transition-colors mt-6 md:mt-0">
             Read All Reviews
           </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-gray-50 p-8 rounded-sm hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100"
            >
              <div className="flex justify-between items-start mb-6">
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-serif font-bold">
                     {review.author.charAt(0)}
                   </div>
                   <div>
                     <h5 className="font-bold text-gray-900 text-sm">{review.author}</h5>
                     <span className="text-xs text-gray-400 block">{review.date}</span>
                   </div>
                 </div>
                 {review.verified && (
                   <span className="bg-green-100 text-green-800 text-[10px] uppercase font-bold px-2 py-1 rounded-sm">Verified</span>
                 )}
              </div>
              
              <div className="flex gap-0.5 mb-4">
                {[...Array(review.rating)].map((_, i) => <StarIcon key={i} />)}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed italic">
                "{review.text}"
              </p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <button className="border border-gray-300 px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-gray-900 hover:text-white transition-colors">
             Read All Reviews
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;