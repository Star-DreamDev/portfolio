'use client';

import { useEffect, useRef, useState } from 'react';
import ButterflyDecoration from './ButterflyDecoration';
import FlowerDecoration from './FlowerDecoration';

const About = () => {
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
    <section ref={sectionRef} id="about" className="py-20 px-4 bg-white relative overflow-hidden">
      <ButterflyDecoration className="top-10 right-10 hidden lg:block" size={80} delay={0.5} color="blue" />
      <ButterflyDecoration className="bottom-10 left-10 hidden md:block" size={75} delay={2} color="pink" />
      <FlowerDecoration className="top-20 left-20 hidden xl:block" size={60} delay={1.2} />
      <FlowerDecoration className="bottom-20 right-20 hidden lg:block" size={55} delay={3} />
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className={`text-4xl md:text-5xl font-bold mb-12 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        <div className={`bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 border-2 border-blue-100 shadow-lg transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.2s' }}>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
            Hi, I'm Daniel - a full-stack developer focused on AI and automation. I build practical AI systems and web apps using React, Node.js, and Python to reduce manual work and help products scale. I've worked with startups from idea to production, handling APIs, databases, and deployment with clear communication and fast iteration. If you want AI that delivers real results, not buzzwords, let's build something smart.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

