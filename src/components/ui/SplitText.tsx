import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SplitTextProps {
  children: string;
  className?: string;
  delay?: number;
  stagger?: number;
}

export const SplitText: React.FC<SplitTextProps> = ({ 
  children, 
  className = '', 
  delay = 0,
  stagger = 0.02
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const words = children.split(' ');

  useGSAP(() => {
    if (!containerRef.current) return;

    const chars = containerRef.current.querySelectorAll('.char');
    
    gsap.fromTo(chars, 
      { 
        opacity: 0, 
        y: 20 
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: stagger,
        ease: "power3.out",
        delay: delay,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={`inline-block ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block mr-[0.25em] whitespace-nowrap">
          {word.split('').map((char, j) => (
            <span key={j} className="char inline-block opacity-0 translate-y-4">
              {char}
            </span>
          ))}
        </span>
      ))}
    </div>
  );
};
