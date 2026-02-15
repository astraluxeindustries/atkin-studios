import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Classes', href: '#classes' },
    { name: 'Staff', href: '#staff' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Info', href: '#info' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo Text */}
          <a href="#" className={`text-2xl font-serif tracking-widest uppercase font-bold transition-colors ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`}>
            Atkin Studios
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium tracking-wide uppercase hover:text-brand-primary transition-colors ${
                  isScrolled ? 'text-gray-600' : 'text-gray-800'
                }`}
              >
                {link.name}
              </a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-primary text-white px-6 py-2.5 text-sm font-medium uppercase tracking-wider rounded-sm shadow-lg hover:bg-red-700 transition-colors"
            >
              Book Now
            </motion.button>
          </div>

          {/* Mobile Menu Toggle (Text based to avoid symbols) */}
          <button
            className="md:hidden text-xs font-bold uppercase tracking-widest border border-gray-800 px-3 py-1 rounded-sm"
            onClick={() => setMobileMenuOpen(true)}
          >
            Menu
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 bg-white z-[60] flex flex-col items-center justify-center space-y-8"
          >
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-sm font-bold uppercase tracking-widest text-gray-500"
            >
              Close
            </button>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-serif text-gray-900 hover:text-brand-primary"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-brand-primary text-white px-10 py-3 text-lg font-medium uppercase tracking-wider rounded-sm shadow-xl">
              Book Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;