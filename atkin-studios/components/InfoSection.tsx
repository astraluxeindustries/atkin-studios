import React from 'react';
import { HOURS, POLICIES, CONTACT_INFO } from '../constants';

const InfoSection: React.FC = () => {
  return (
    <section id="info" className="py-24 bg-brand-dark text-white relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left Column: Hours & Location */}
          <div>
            <h3 className="font-serif text-3xl mb-8 border-b border-gray-700 pb-4 inline-block">Visit Us</h3>
            
            <div className="mb-12">
              <h4 className="text-brand-primary text-sm font-bold uppercase tracking-widest mb-4">Location</h4>
              <p className="text-xl font-light mb-2">{CONTACT_INFO.address}</p>
              <p className="text-gray-400 font-serif italic text-lg">Downtown St. George (Enter from left side gate)</p>
              <div className="mt-6">
                <a href={`https://maps.google.com/?q=${CONTACT_INFO.address}`} target="_blank" rel="noreferrer" className="text-sm underline hover:text-brand-primary transition-colors">
                  Get Directions
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-brand-primary text-sm font-bold uppercase tracking-widest mb-6">Business Hours</h4>
              <ul className="space-y-3">
                {HOURS.map((item, idx) => (
                  <li key={idx} className="flex justify-between text-sm md:text-base border-b border-gray-700 pb-2 border-dashed">
                    <span className="text-gray-300">{item.day}</span>
                    <span className="font-medium">{item.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Policies & Contact */}
          <div className="lg:pl-12 lg:border-l border-gray-700">
             <h3 className="font-serif text-3xl mb-8 border-b border-gray-700 pb-4 inline-block">Studio Policies</h3>
             
             <div className="space-y-10">
               <div>
                 <h4 className="text-brand-primary text-sm font-bold uppercase tracking-widest mb-3">Appointment Cancellations</h4>
                 <p className="text-gray-400 font-light leading-relaxed text-sm">
                   {POLICIES.cancellation}
                 </p>
               </div>
               
               <div>
                 <h4 className="text-brand-primary text-sm font-bold uppercase tracking-widest mb-3">Class Cancellations</h4>
                 <p className="text-gray-400 font-light leading-relaxed text-sm">
                   {POLICIES.classCancellation}
                 </p>
               </div>

               <div className="pt-8 mt-8 border-t border-gray-700">
                 <h4 className="text-brand-primary text-sm font-bold uppercase tracking-widest mb-3">Contact</h4>
                 <p className="text-2xl font-serif mb-2">{CONTACT_INFO.phone}</p>
                 <p className="text-gray-400 mb-6">Call us for inquiries or booking assistance.</p>
                 <button className="bg-white text-brand-dark px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-brand-primary hover:text-white transition-colors">
                   Send a Message
                 </button>
               </div>
             </div>
          </div>
        </div>
      </div>
      
      {/* Map Placeholder Graphic */}
      <div className="absolute right-0 bottom-0 opacity-5 w-1/3 h-full pointer-events-none overflow-hidden">
        <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M0 0 L100 0 L100 100 L0 100 Z" fill="currentColor" />
            <path d="M20 0 L30 100" stroke="white" strokeWidth="0.5" />
            <path d="M50 0 L40 100" stroke="white" strokeWidth="0.5" />
            <path d="M0 40 L100 30" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>
    </section>
  );
};

export default InfoSection;