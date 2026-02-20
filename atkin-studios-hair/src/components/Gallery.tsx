import { motion } from 'framer-motion';

const images = [
  {
    src: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop",
    alt: "Group Yoga Class",
    span: "col-span-1 md:col-span-2 row-span-2"
  },
  {
    src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop",
    alt: "Event Space Setup",
    span: "col-span-1"
  },
  {
    src: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1931&auto=format&fit=crop",
    alt: "Meditation Moment",
    span: "col-span-1"
  },
  {
    src: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=3000&auto=format&fit=crop",
    alt: "Studio Details",
    span: "col-span-1 md:col-span-2"
  }
];

export function Gallery() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-red font-medium tracking-widest uppercase text-sm">Our Space</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-6">Experience the Studio</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[800px] md:h-[600px]">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-2xl group ${image.span}`}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-medium text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {image.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
