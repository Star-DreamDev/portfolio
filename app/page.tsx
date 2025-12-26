import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      <footer className="py-8 px-4 bg-white border-t border-gray-200 text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} Daniel Joy. All rights reserved.</p>
      </footer>
    </main>
  );
}

