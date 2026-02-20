import { motion } from 'framer-motion';
import { Camera, Calendar, Activity, Gift, Package } from 'lucide-react';
import { Button } from './ui/Button';

const services = [
  {
    title: "Yoga Classes",
    description: "Accessible and trauma-informed yoga classes designed to support your individual needs and healing. Join our supportive community.",
    icon: Activity,
    link: "#schedule"
  },
  {
    title: "Event Center",
    description: "A vibrant space in downtown St. George for your workshops, gatherings, and community events. Foster connection in our welcoming venue.",
    icon: Calendar,
    link: "#events"
  },
  {
    title: "Fine Art Photography",
    description: "Mo Atkin's unique artistic vision captures the essence of our community. Professional photography services available.",
    icon: Camera,
    link: "#photography"
  },
  {
    title: "Gift Cards",
    description: "Give the gift of wellness and community. Perfect for friends and family looking to start their yoga journey.",
    icon: Gift,
    link: "#gift-cards"
  },
  {
    title: "Packages",
    description: "Save on classes with our class packs and membership options. Designed for consistent practice.",
    icon: Package,
    link: "#packages"
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-brand-beige">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-red font-medium tracking-widest uppercase text-sm">What We Offer</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-6">Our Services</h2>
          <p className="text-brand-dark/70 max-w-2xl mx-auto text-lg">
            Discover the variety of ways we support your wellness and creativity at Atkin Studios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-brand-red/5 rounded-xl flex items-center justify-center text-brand-red mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                <service.icon size={28} />
              </div>
              
              <h3 className="font-serif text-2xl mb-4 group-hover:text-brand-red transition-colors">{service.title}</h3>
              <p className="text-brand-dark/70 mb-8 leading-relaxed">
                {service.description}
              </p>
              
              <Button variant="outline" size="sm" className="w-full group-hover:bg-brand-red group-hover:border-brand-red group-hover:text-white">
                Learn More
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
