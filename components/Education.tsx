'use client';

import { useEffect, useRef, useState } from 'react';
import ButterflyDecoration from './ButterflyDecoration';
import FlowerDecoration from './FlowerDecoration';

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="education" className="py-20 px-4 bg-gradient-to-b from-pink-50 to-blue-50 relative overflow-hidden">
      <ButterflyDecoration className="top-16 left-16 hidden lg:block" size={95} delay={1.8} color="pink" />
      <ButterflyDecoration className="bottom-16 right-16 hidden md:block" size={85} delay={3.2} color="blue" />
      <FlowerDecoration className="top-24 right-24 hidden xl:block" size={70} delay={2.5} />
      <FlowerDecoration className="bottom-24 left-24 hidden lg:block" size={65} delay={4.8} />
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className={`text-4xl md:text-5xl font-bold mb-12 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Education
          </span>
        </h2>
        <div className={`bg-white rounded-2xl p-8 md:p-12 border-2 border-blue-200 shadow-xl transition-all duration-1000 transform ${isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-10'}`} style={{ transitionDelay: '0.2s' }}>
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              University of Southern California
            </h3>
            <p className="text-xl text-gray-600 mb-2">Bachelor of Computer Science</p>
            <p className="text-lg text-blue-600 font-semibold bg-blue-50 inline-block px-6 py-2 rounded-full mt-2">2010 - 2014</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

