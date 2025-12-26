'use client';

import { useEffect, useRef, useState } from 'react';
import ButterflyDecoration from './ButterflyDecoration';
import FlowerDecoration from './FlowerDecoration';
import StarDecoration from './StarDecoration';

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Core Development",
    skills: ["JavaScript (ES6+)", "TypeScript", "Python", "REST APIs", "Webhooks"]
  },
  {
    title: "AI & Automation",
    skills: [
      "OpenAI API",
      "LLM integrations",
      "AI Agents & RAG systems",
      "LangChain",
      "Vector databases",
      "Prompt engineering",
      "n8n automation",
      "Make (Integromat)"
    ]
  },
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Responsive UI"]
  },
  {
    title: "Backend & APIs",
    skills: [
      "Node.js (Express, NestJS)",
      "FastAPI",
      "Django",
      "Authentication & Authorization",
      "Background jobs & async processing"
    ]
  }
];

const Skills = () => {
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
    <section ref={sectionRef} id="skills" className="py-20 px-4 bg-white relative overflow-hidden">
      <ButterflyDecoration className="top-32 right-20 hidden xl:block" size={100} delay={1.2} color="blue" />
      <ButterflyDecoration className="bottom-32 left-20 hidden lg:block" size={95} delay={3.5} color="purple" />
      <FlowerDecoration className="top-40 left-32 hidden 2xl:block" size={65} delay={2} />
      <FlowerDecoration className="bottom-40 right-32 hidden xl:block" size={60} delay={4.5} />
      <StarDecoration className="top-24 left-24 hidden lg:block" size={32} delay={1.8} color="yellow" />
      <StarDecoration className="bottom-24 right-24 hidden lg:block" size={28} delay={3.2} color="pink" />
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className={`text-4xl md:text-5xl font-bold mb-16 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border-2 border-blue-100 hover:border-purple-400 transition-all duration-500 hover:shadow-xl hover:shadow-purple-200/50 transform hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-blue-600">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-white border-2 border-blue-200 rounded-full text-gray-700 text-sm font-medium hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-300 transform hover:scale-110 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

