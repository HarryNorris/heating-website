import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const engineers = [
  {
    name: "Sarah Jenkins",
    role: "Lead Engineer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop",
    quote: "I treat every home as if it were my own. No shortcuts."
  },
  {
    name: "David Chen",
    role: "Heat Pump Specialist",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop",
    quote: "Efficiency isn't just about the machine, it's about the installation."
  },
  {
    name: "Marcus Thompson",
    role: "System Designer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2574&auto=format&fit=crop",
    quote: "We design systems that last for decades, not years."
  }
];

export const Team: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.team-card', {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
        toggleActions: 'play none none reverse'
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
            Meet Your Installers
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            No subcontractors. No random vans. Just our dedicated, full-time team of accredited engineers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {engineers.map((engineer, index) => (
            <div key={index} className="team-card group">
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-6 shadow-lg">
                <img 
                  src={engineer.image} 
                  alt={engineer.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-medium italic">"{engineer.quote}"</p>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-stone-900">{engineer.name}</h3>
              <p className="text-emerald-700 font-medium">{engineer.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
