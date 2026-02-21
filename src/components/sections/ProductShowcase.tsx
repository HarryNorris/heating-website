import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Zap, Volume2, Smartphone, Leaf } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const ProductShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    // Sticky image effect
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: 'bottom bottom',
      pin: imageRef.current,
      scrub: 1,
    });

    // Feature text animations
    gsap.utils.toArray('.feature-text').forEach((text: any) => {
      gsap.from(text, {
        opacity: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: text,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
          toggleActions: 'play reverse play reverse'
        }
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative bg-stone-900 text-white py-24 min-h-[300vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900 via-transparent to-stone-900 z-10" />
        <img 
          ref={imageRef}
          src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2532&auto=format&fit=crop" 
          alt="Heat Pump Unit" 
          className="w-full h-full object-cover opacity-60 scale-110"
        />
      </div>

      <div className="relative z-20 max-w-4xl mx-auto px-6 space-y-[80vh] pt-[50vh] pb-[50vh]">
        <div className="feature-text text-center space-y-6 backdrop-blur-md bg-stone-900/40 p-12 rounded-3xl border border-white/10">
          <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto text-emerald-400 mb-6">
            <Zap className="w-8 h-8" />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight">400% Efficiency</h2>
          <p className="text-xl md:text-2xl text-stone-300 font-light leading-relaxed">
            For every 1kW of electricity used, get 4kW of heat. That's 4x more efficient than your gas boiler.
          </p>
        </div>

        <div className="feature-text text-center space-y-6 backdrop-blur-md bg-stone-900/40 p-12 rounded-3xl border border-white/10">
          <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto text-blue-400 mb-6">
            <Volume2 className="w-8 h-8" />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight">Whisper Quiet</h2>
          <p className="text-xl md:text-2xl text-stone-300 font-light leading-relaxed">
            Engineered for silence. Operates at just 35dB - quieter than a library.
          </p>
        </div>

        <div className="feature-text text-center space-y-6 backdrop-blur-md bg-stone-900/40 p-12 rounded-3xl border border-white/10">
          <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto text-orange-400 mb-6">
            <Smartphone className="w-8 h-8" />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight">Smart Control</h2>
          <p className="text-xl md:text-2xl text-stone-300 font-light leading-relaxed">
            Control your home's climate from anywhere. AI-driven optimization learns your schedule.
          </p>
        </div>

        <div className="feature-text text-center space-y-6 backdrop-blur-md bg-stone-900/40 p-12 rounded-3xl border border-white/10">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto text-green-400 mb-6">
            <Leaf className="w-8 h-8" />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight">Zero Carbon On-Site</h2>
          <p className="text-xl md:text-2xl text-stone-300 font-light leading-relaxed">
            Eliminate gas combustion from your home. Future-proof your property value.
          </p>
        </div>
      </div>
    </section>
  );
};
