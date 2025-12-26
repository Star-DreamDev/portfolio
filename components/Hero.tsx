'use client';

import FairyDecoration from './FairyDecoration';
import MagicSparkles from './MagicSparkles';
import ButterflyDecoration from './ButterflyDecoration';
import FlowerDecoration from './FlowerDecoration';
import StarDecoration from './StarDecoration';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      {/* Fairy decorations */}
      <FairyDecoration className="top-20 left-20 hidden md:block" size={120} delay={0} />
      <FairyDecoration className="top-40 right-32 hidden lg:block" size={100} delay={1.5} />
      
      {/* Butterfly decorations */}
      <ButterflyDecoration className="top-32 left-1/3 hidden lg:block" size={90} delay={0.8} color="blue" />
      <ButterflyDecoration className="bottom-40 right-1/3 hidden md:block" size={85} delay={2.2} color="pink" />
      <ButterflyDecoration className="top-1/2 left-10 hidden xl:block" size={75} delay={3.5} color="purple" />
      <ButterflyDecoration className="bottom-24 right-20 hidden lg:block" size={80} delay={1.8} color="yellow" />
      
      {/* Flower decorations */}
      <FlowerDecoration className="bottom-16 left-16 hidden md:block" size={70} delay={2.5} />
      <FlowerDecoration className="top-16 right-16 hidden lg:block" size={65} delay={4} />
      
      {/* Star decorations */}
      <StarDecoration className="top-1/4 right-1/4 hidden xl:block" size={35} delay={1} color="yellow" />
      <StarDecoration className="bottom-1/3 left-1/4 hidden lg:block" size={30} delay={2.8} color="pink" />
      <StarDecoration className="top-2/3 right-1/5 hidden md:block" size={32} delay={3.8} color="blue" />
      
      {/* Magic sparkles */}
      <MagicSparkles count={30} />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8 animate-fadeInUp">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
            Daniel Joy
          </h1>
          <h2 className="text-2xl md:text-4xl text-gray-700 font-light mb-6 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            AI / Full Stack Developer
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-600 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <a 
              href="mailto:DanielJoy20251225@proton.me"
              className="hover:text-blue-600 transition-all duration-300 flex items-center gap-2 transform hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              DanielJoy20251225@proton.me
            </a>
            <span className="hidden sm:inline text-gray-400">•</span>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              New York, NY, USA
            </div>
          </div>
        </div>
        <div className="mt-12 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <div className="inline-block">
            <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-gradient"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

