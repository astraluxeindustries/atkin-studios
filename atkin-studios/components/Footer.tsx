import React from 'react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 py-12 border-t border-gray-200 text-center md:text-left">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h5 className="font-serif text-2xl text-gray-900 font-bold mb-1">Atkin Studios</h5>
          <p className="text-xs text-gray-500 uppercase tracking-wider">Yoga • Events • Photography</p>
        </div>

        <div className="flex gap-8">
           <a href="#" className="text-xs font-bold text-gray-500 hover:text-brand-primary uppercase tracking-widest transition-colors">Instagram</a>
           <a href="#" className="text-xs font-bold text-gray-500 hover:text-brand-primary uppercase tracking-widest transition-colors">Facebook</a>
        </div>

        <div className="text-xs text-gray-400">
          &copy; {year} Atkin Studios. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;