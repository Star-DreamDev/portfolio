'use client';

import { useEffect, useRef, useState } from 'react';
import ButterflyDecoration from './ButterflyDecoration';
import StarDecoration from './StarDecoration';

interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    company: "NovaMind Technologies",
    position: "AI Solutions Engineer",
    period: "01/2022 - 09/2024",
    description: "Built AI-powered chatbots and automation tools to help businesses save time and operate more efficiently. Worked with teams to turn manual processes into simple, automated workflows that were easy to manage. Integrated AI features into existing systems used by staff and customers. Focused on reliability, ease of use, and long-term scalability. These solutions reduced workload, improved response quality, and supported business growth."
  },
  {
    company: "ChatLogic Systems",
    position: "Senior Full-Stack Engineer",
    period: "05/2017 - 12/2021",
    description: "Developed and maintained web applications used for customer support and internal operations. Helped businesses improve how they communicate with users through automated chat and messaging systems. Worked closely with product teams to deliver stable and easy-to-use features. Improved system performance and reduced delays in customer responses. Also supported junior developers and helped keep projects organized and maintainable."
  },
  {
    company: "BrightCode Labs",
    position: "Software Engineer",
    period: "12/2014 - 03/2017",
    description: "Worked on building the core systems behind the company's early automation and chatbot products. Helped connect different tools and services so everything worked smoothly for clients. Focused on making the software reliable, easy to maintain, and ready for real-world use. Supported multiple client projects from early development through launch. Contributed to improving product quality and long-term stability."
  }
];

const Experience = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems((prev) => {
              const next = new Set(prev);
              next.add(index);
              return next;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('[data-index]');
    cards?.forEach((card) => observer.observe(card));

    return () => {
      cards?.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="py-20 px-4 bg-gradient-to-b from-purple-50 to-pink-50 relative overflow-hidden">
      <ButterflyDecoration className="top-20 left-5 hidden xl:block" size={90} delay={1} color="purple" />
      <ButterflyDecoration className="bottom-20 right-5 hidden lg:block" size={85} delay={2.5} color="pink" />
      <ButterflyDecoration className="top-1/2 left-10 hidden 2xl:block" size={70} delay={3.8} color="blue" />
      <StarDecoration className="top-32 right-32 hidden xl:block" size={28} delay={1.5} color="purple" />
      <StarDecoration className="bottom-32 left-32 hidden lg:block" size={30} delay={4.2} color="pink" />
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center animate-fadeInUp">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Professional Experience
          </span>
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              data-index={index}
              className={`group bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-blue-400 transition-all duration-500 hover:shadow-xl hover:shadow-blue-200/50 transform hover:-translate-y-2 ${
                visibleItems.has(index) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {exp.company}
                  </h3>
                  <p className="text-xl text-gray-600 mb-2">{exp.position}</p>
                </div>
                <div className="text-blue-600 font-semibold mt-2 md:mt-0 bg-blue-50 px-4 py-2 rounded-full">
                  {exp.period}
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

