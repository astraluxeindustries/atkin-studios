import { motion } from 'framer-motion';
import { SITE_DATA } from '@/constants';
import { MapPin, Phone, Clock, CreditCard, Shield, AlertCircle } from 'lucide-react';

export function Info() {
  return (
    <section id="info" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Hours & Location */}
          <div className="lg:col-span-1 space-y-12">
            <div>
              <h3 className="font-serif text-2xl mb-6 flex items-center gap-3">
                <Clock className="text-brand-red" size={24} />
                Business Hours
              </h3>
              <div className="space-y-3">
                {SITE_DATA.hours.map((item) => (
                  <div key={item.day} className="flex justify-between text-sm py-2 border-b border-brand-dark/5 last:border-0">
                    <span className="font-medium text-brand-dark">{item.day}</span>
                    <span className={item.time === "Closed" ? "text-brand-red/70" : "text-brand-dark/70"}>
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-serif text-2xl mb-6 flex items-center gap-3">
                <MapPin className="text-brand-red" size={24} />
                Location
              </h3>
              <address className="not-italic text-brand-dark/70 leading-relaxed mb-4">
                {SITE_DATA.location.address}<br />
                {SITE_DATA.location.city}, {SITE_DATA.location.state} {SITE_DATA.location.zip}
              </address>
              <a 
                href={SITE_DATA.location.mapUrl} 
                target="_blank" 
                rel="noreferrer"
                className="text-brand-red font-medium hover:underline text-sm"
              >
                Get Directions →
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-2 h-[400px] lg:h-auto min-h-[400px] rounded-3xl overflow-hidden shadow-lg relative bg-brand-beige">
            {/* Placeholder for map since we can't embed real Google Maps without API key */}
            <div className="absolute inset-0 bg-brand-beige flex items-center justify-center">
               <iframe 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                scrolling="no" 
                marginHeight={0} 
                marginWidth={0} 
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=437%20North%20Main%20Street,%20St.%20George,%20UT%2084770+(Atkin%20Studios)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                className="filter grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Policies & Amenities Grid */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Policies */}
          <div className="bg-brand-light p-8 rounded-2xl">
            <h3 className="font-serif text-2xl mb-6 flex items-center gap-3">
              <Shield className="text-brand-red" size={24} />
              Policies
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-2 text-sm uppercase tracking-wide text-brand-dark/60">Appointment Cancellation</h4>
                <p className="text-sm text-brand-dark/70 leading-relaxed">{SITE_DATA.policies.cancellation}</p>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-sm uppercase tracking-wide text-brand-dark/60">Class Cancellation</h4>
                <p className="text-sm text-brand-dark/70 leading-relaxed">{SITE_DATA.policies.classCancellation}</p>
              </div>
            </div>
          </div>

          {/* Amenities & Payment */}
          <div className="space-y-12">
            <div>
              <h3 className="font-serif text-2xl mb-6">Amenities</h3>
              <div className="grid grid-cols-2 gap-4">
                {SITE_DATA.amenities.map((item) => (
                  <div key={item.label} className="flex items-center gap-3 text-brand-dark/80">
                    <div className="p-2 bg-brand-red/10 rounded-full text-brand-red">
                      <item.icon size={18} />
                    </div>
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-serif text-2xl mb-6 flex items-center gap-3">
                <CreditCard className="text-brand-red" size={24} />
                Payment Methods
              </h3>
              <div className="flex flex-wrap gap-2">
                {SITE_DATA.paymentMethods.map((method) => (
                  <span key={method} className="px-3 py-1 bg-white border border-brand-dark/10 rounded-full text-xs text-brand-dark/60">
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
