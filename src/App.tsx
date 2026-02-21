import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { Hero } from './components/sections/Hero';
import { Trust } from './components/sections/Trust';
import { ProductShowcase } from './components/sections/ProductShowcase';
import { Team } from './components/sections/Team';
import { Reviews } from './components/sections/Reviews';
import { Footer } from './components/sections/Footer';
import { Navbar } from './components/sections/Navbar';
import { Process } from './components/sections/Process';
import { ChatButton } from './components/ui/ChatButton';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="font-sans antialiased text-stone-900 bg-stone-50 selection:bg-emerald-200 selection:text-emerald-900">
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <ProductShowcase />
        <Process />
        <Team />
        <Reviews />
      </main>
      <Footer />
      <ChatButton />
    </div>
  );
}

export default App;
