import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "John & Sarah",
    text: "The team was incredibly polite. They even wore shoe covers every time they entered the house.",
    location: "Oxford"
  },
  {
    name: "Michael P.",
    text: "My heating bills dropped by 40%. The installation was seamless and finished on time.",
    location: "Cambridge"
  },
  {
    name: "Emma W.",
    text: "Finally, a company that explains things clearly without the sales jargon. Highly recommend.",
    location: "London"
  },
  {
    name: "David L.",
    text: "Professional from start to finish. The heat pump is silent and the house is always warm.",
    location: "Bristol"
  },
  {
    name: "Sophie T.",
    text: "Clean, tidy, and respectful. They left the place spotless. A breath of fresh air.",
    location: "Manchester"
  }
];

export const Reviews: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const track = trackRef.current;
    if (!track) return;

    const totalWidth = track.scrollWidth;
    const clone = track.innerHTML;
    track.innerHTML += clone; // Duplicate for seamless loop

    gsap.to(track, {
      x: -totalWidth / 2,
      duration: 40,
      ease: "none",
      repeat: -1
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-stone-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
          Trusted by Homeowners
        </h2>
        <div className="flex items-center justify-center gap-2 text-emerald-700 font-medium">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
          <span>4.9/5 Average Rating</span>
        </div>
      </div>

      <div className="relative w-full">
        <div ref={trackRef} className="flex gap-8 w-max px-4">
          {reviews.map((review, index) => (
            <div key={index} className="w-[350px] md:w-[450px] bg-white p-8 rounded-2xl shadow-sm border border-stone-200 flex-shrink-0">
              <div className="flex gap-1 text-orange-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-lg text-stone-700 italic mb-6 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center justify-between border-t border-stone-100 pt-4">
                <span className="font-bold text-stone-900">{review.name}</span>
                <span className="text-sm text-stone-500">{review.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
