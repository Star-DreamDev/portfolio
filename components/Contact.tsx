'use client';

import { useEffect, useRef, useState } from 'react';
import ButterflyDecoration from './ButterflyDecoration';
import FlowerDecoration from './FlowerDecoration';
import StarDecoration from './StarDecoration';
import MagicSparkles from './MagicSparkles';

const Contact = () => {
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
    <section ref={sectionRef} id="contact" className="py-20 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      <ButterflyDecoration className="top-24 left-24 hidden xl:block" size={110} delay={0.8} color="blue" />
      <ButterflyDecoration className="bottom-24 right-24 hidden lg:block" size={100} delay={2.2} color="pink" />
      <ButterflyDecoration className="top-1/2 left-10 hidden 2xl:block" size={90} delay={4} color="purple" />
      <ButterflyDecoration className="bottom-1/3 right-10 hidden xl:block" size={85} delay={5.5} color="yellow" />
      <FlowerDecoration className="top-32 right-32 hidden 2xl:block" size={75} delay={1.5} />
      <FlowerDecoration className="bottom-32 left-32 hidden xl:block" size={70} delay={3.8} />
      <StarDecoration className="top-1/4 left-1/4 hidden lg:block" size={35} delay={2.5} color="yellow" />
      <StarDecoration className="bottom-1/4 right-1/4 hidden lg:block" size={32} delay={4.5} color="purple" />
      <MagicSparkles count={25} />
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className={`text-4xl md:text-5xl font-bold mb-12 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>
        <div className={`bg-white rounded-2xl p-8 md:p-12 border-2 border-purple-200 shadow-xl text-center transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-10'}`} style={{ transitionDelay: '0.2s' }}>
          <p className="text-xl text-gray-700 mb-8">
            Interested in working together? Let's connect and discuss how we can build something amazing.
          </p>
          <a
            href="mailto:DanielJoy20251225@proton.me"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl hover:shadow-purple-400/50"
          >
            Send Email
          </a>
          <div className="mt-8 flex flex-col items-center gap-4 text-gray-600">
            <div className="flex items-center gap-2 hover:text-blue-600 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>DanielJoy20251225@proton.me</span>
            </div>
            <div className="flex items-center gap-2 hover:text-blue-600 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>New York, NY, USA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

