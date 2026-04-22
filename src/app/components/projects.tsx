import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'NEURAL NETWORKS',
    category: 'AI / ML Platform',
    year: '2026',
    description: 'An experimental interface for visualizing neural network architectures in real-time',
    color: '#39FF14',
  },
  {
    title: 'QUANTUM LABS',
    category: 'Brand Identity',
    year: '2025',
    description: 'Complete visual identity system for a quantum computing research facility',
    color: '#00D9FF',
  },
  {
    title: 'SYNTH STUDIO',
    category: 'Web Experience',
    year: '2025',
    description: 'Interactive music production platform with real-time collaboration features',
    color: '#FF6B35',
  },
  {
    title: 'ECLIPSE FASHION',
    category: 'E-commerce',
    year: '2024',
    description: 'Luxury fashion marketplace with immersive 3D product visualization',
    color: '#FFD23F',
  },
];

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  return (
    <section id="work" ref={containerRef} className="relative bg-white py-32 px-8 lg:px-16">
      {/* Section header */}
      <motion.div
        className="max-w-[1440px] mx-auto mb-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="flex items-end justify-between">
          <div>
            <motion.p
              className="text-black/40 uppercase tracking-widest mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Selected Works 2024—2026
            </motion.p>
            <motion.h2
              className="text-black tracking-tight"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(60px, 10vw, 140px)',
                lineHeight: 0.9,
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              FEATURED
              <br />
              PROJECTS
            </motion.h2>
          </div>

          <motion.div
            className="flex items-center gap-3 text-black/60 group cursor-pointer"
            data-cursor-hover
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <span style={{ fontFamily: "'Space Grotesk', sans-serif" }}>View All</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </motion.div>
        </div>
      </motion.div>

      {/* Projects grid */}
      <div className="max-w-[1440px] mx-auto space-y-0">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      className="border-t border-black/10 py-12 group cursor-pointer"
      data-cursor-hover
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="grid grid-cols-12 gap-8 items-start">
        {/* Project number */}
        <motion.div
          className="col-span-1 text-black/30"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          0{index + 1}
        </motion.div>

        {/* Project title */}
        <div className="col-span-6">
          <motion.h3
            className="text-black tracking-tight mb-4"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(40px, 6vw, 80px)',
              lineHeight: 0.9,
            }}
            animate={{ x: isHovered ? 20 : 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {project.title}
          </motion.h3>
          <motion.p
            className="text-black/60 max-w-md"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
            transition={{ duration: 0.3 }}
          >
            {project.description}
          </motion.p>
        </div>

        {/* Category and year */}
        <div className="col-span-4 flex flex-col items-end gap-4">
          <motion.div
            className="text-right"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <p className="text-black/40 text-sm uppercase tracking-wider mb-1">Category</p>
            <p className="text-black">{project.category}</p>
          </motion.div>
          <motion.div
            className="text-right"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <p className="text-black/40 text-sm uppercase tracking-wider mb-1">Year</p>
            <p className="text-black">{project.year}</p>
          </motion.div>
        </div>

        {/* Arrow indicator */}
        <div className="col-span-1 flex justify-end">
          <motion.div
            animate={{
              x: isHovered ? 0 : -20,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <ArrowRight className="w-8 h-8 text-black" />
          </motion.div>
        </div>
      </div>

      {/* Hover line accent */}
      <motion.div
        className="h-[2px] mt-4"
        style={{ backgroundColor: project.color }}
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.div>
  );
}
