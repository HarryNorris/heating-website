import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, UserCheck, Star, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const Trust: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.trust-card', {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
            Engineers, Not Salespeople.
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            We guarantee respectful on-site behavior, transparent pricing, and industry-leading expertise. No jargon, just honest advice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="trust-card bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 text-emerald-700">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-stone-900">MCS Accredited</h3>
            <p className="text-stone-600">
              Fully certified installations eligible for the Boiler Upgrade Scheme grant.
            </p>
          </div>

          <div className="trust-card bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6 text-orange-600">
              <UserCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-stone-900">Respectful Teams</h3>
            <p className="text-stone-600">
              Our engineers treat your home with care. Clean boots, tidy work, polite service.
            </p>
          </div>

          <div className="trust-card bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600">
              <Star className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-stone-900">5.0 Star Reviews</h3>
            <p className="text-stone-600">
              Don't take our word for it. See what our customers say on Google.
            </p>
          </div>

          <div className="trust-card bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6 text-purple-600">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-stone-900">HIES Guarantee</h3>
            <p className="text-stone-600">
              Consumer protection and insurance-backed guarantees for your peace of mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
