/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Gallery } from '@/components/Gallery';
import { Reviews } from '@/components/Reviews';
import { Info } from '@/components/Info';
import { Footer } from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-brand-dark selection:bg-brand-red/20 selection:text-brand-red">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Reviews />
        <Info />
      </main>
      <Footer />
    </div>
  );
}
