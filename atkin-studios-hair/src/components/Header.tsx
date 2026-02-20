import { motion } from 'framer-motion';
import { SITE_DATA } from '@/constants';
import { Button } from './ui/Button';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    { name: 'Reviews', href: '#reviews' },
    { name: 'Info', href: '#info' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="relative z-50">
          <h1 className={cn(
            "font-serif text-2xl font-bold tracking-tight transition-colors",
            isScrolled ? "text-brand-dark" : "text-brand-dark" // Always dark for now as hero might be light
          )}>
            Atkin Studios
          </h1>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-brand-dark/80 hover:text-brand-red transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <Button size="sm" className="bg-brand-red text-white hover:bg-brand-red/90">
            Book Now
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden relative z-50 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute inset-0 h-screen bg-brand-light flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-serif text-brand-dark hover:text-brand-red"
              >
                {link.name}
              </a>
            ))}
            <Button size="lg" onClick={() => setIsMobileMenuOpen(false)}>
              Book Now
            </Button>
          </motion.div>
        )}
      </div>
    </header>
  );
}
