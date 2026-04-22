import { CustomCursor } from './components/custom-cursor';
import { Navbar } from './components/navbar';
import { Hero } from './components/hero';
import { Projects } from './components/projects';
import { About } from './components/about';
import { Experience } from './components/experience';
import { Footer } from './components/footer';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden cursor-none" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      <CustomCursor />
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Experience />
      <Footer />
    </div>
  );
}