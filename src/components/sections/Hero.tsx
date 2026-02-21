import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ArrowDown } from 'lucide-react';
import { SplitText } from '../ui/SplitText';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.hero-image', {
      scale: 1.1,
      opacity: 0,
      duration: 1.5,
      ease: 'power2.out',
      delay: 0.5
    });

    gsap.from('.hero-badge', {
      y: 20,
      opacity: 0,
      duration: 0.8,
      delay: 1,
      stagger: 0.2
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white z-10" />
        <img 
          src="https://images.unsplash.com/photo-1635335968868-b861218525c3?q=80&w=2532&auto=format&fit=crop" 
          alt="Modern Heat Pump" 
          className="hero-image w-full h-full object-cover opacity-80"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto text-center space-y-8">
        <div className="flex justify-center gap-4 mb-8">
          <span className="hero-badge px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-stone-200 text-sm font-medium text-stone-600 shadow-sm">
            MCS Accredited
          </span>
          <span className="hero-badge px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-stone-200 text-sm font-medium text-stone-600 shadow-sm">
            TrustMark Approved
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-stone-900 leading-[0.9]">
          <SplitText delay={0.2}>Heating,</SplitText>
          <br />
          <SplitText delay={0.4} className="text-emerald-700">Reinvented.</SplitText>
        </h1>

        <p className="max-w-2xl mx-auto text-xl md:text-2xl text-stone-600 font-light leading-relaxed mt-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
          Future-proof your home with whisper-quiet, ultra-efficient heat pumps. 
          Installed by engineers, not salespeople.
        </p>

        <div className="pt-12 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
          <button className="px-8 py-4 bg-emerald-700 text-white rounded-full font-medium hover:bg-emerald-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200">
            Get a Free Consultation
          </button>
          <button className="px-8 py-4 bg-white text-stone-900 border border-stone-200 rounded-full font-medium hover:bg-stone-50 transition-colors shadow-sm hover:shadow-md">
            See Our Work
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <ArrowDown className="w-6 h-6 text-stone-400" />
      </div>
    </section>
  );
};
