import { SITE_DATA } from '@/constants';
import { Facebook, Instagram, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-2">
            <h2 className="font-serif text-3xl font-bold mb-6">{SITE_DATA.name}</h2>
            <p className="text-white/60 max-w-md mb-8 leading-relaxed">
              {SITE_DATA.tagline}. A welcoming environment that fosters inclusivity and creativity, inviting everyone to participate.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-red transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-red transition-colors">
                <Facebook size={20} />
              </a>
              <a href={`mailto:contact@atkinstudios.com`} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-red transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-xl mb-6">Explore</h3>
            <ul className="space-y-4 text-white/60">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Classes & Services</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Reviews</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gift Cards</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl mb-6">Contact</h3>
            <ul className="space-y-4 text-white/60">
              <li>{SITE_DATA.location.address}</li>
              <li>{SITE_DATA.location.city}, {SITE_DATA.location.state} {SITE_DATA.location.zip}</li>
              <li><a href={`tel:${SITE_DATA.contact.phoneClean}`} className="hover:text-white transition-colors">{SITE_DATA.contact.phone}</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>&copy; {new Date().getFullYear()} {SITE_DATA.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
