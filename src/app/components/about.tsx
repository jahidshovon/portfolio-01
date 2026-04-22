import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section id="about" className="bg-black text-white py-32 px-8 lg:px-16 relative overflow-hidden">
      {/* Background grain */}
      <div
        className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
        }}
      />

      <div className="max-w-[1440px] mx-auto relative">
        {/* Editorial layout */}
        <div className="grid grid-cols-12 gap-8">
          {/* Left column - Image */}
          <motion.div
            className="col-span-5 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="sticky top-24">
              <motion.div
                className="aspect-[3/4] bg-white/5 backdrop-blur-sm relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6 }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=800&q=80"
                  alt="Creative workspace"
                  className="w-full h-full object-cover mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </motion.div>

              {/* Floating label */}
              <motion.div
                className="absolute -right-12 top-1/2 -translate-y-1/2 -rotate-90 origin-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <span
                  className="text-[#39FF14] uppercase tracking-[0.3em] text-sm"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  About
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right column - Content */}
          <div className="col-span-7 space-y-16">
            {/* Main quote */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h2
                className="text-white tracking-tight leading-[1.1] mb-8"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 'clamp(50px, 8vw, 120px)',
                }}
              >
                BUILDING THE
                <br />
                <span className="text-[#39FF14]">FUTURE</span> OF
                <br />
                DIGITAL DESIGN
              </h2>
            </motion.div>

            {/* Bio text */}
            <motion.div
              className="space-y-6 max-w-2xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <p
                className="text-white/70 text-lg leading-relaxed"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                I'm a multidisciplinary creative developer specializing in crafting
                award-winning digital experiences at the intersection of design,
                technology, and human interaction.
              </p>
              <p
                className="text-white/70 text-lg leading-relaxed"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                With over 8 years of experience working with global brands and
                startups, I transform complex ideas into elegant, functional
                solutions that push the boundaries of what's possible on the web.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 pt-12 border-t border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              {[
                { number: '50+', label: 'Projects Completed' },
                { number: '15+', label: 'Awards Won' },
                { number: '8+', label: 'Years Experience' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <div
                    className="text-white mb-2"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: 'clamp(40px, 5vw, 60px)',
                      lineHeight: 1,
                    }}
                  >
                    {stat.number}
                  </div>
                  <div
                    className="text-white/50 text-sm uppercase tracking-wider"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Skills */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
            >
              <h3
                className="text-white uppercase tracking-widest text-sm mb-8"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Expertise
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'Creative Development',
                  'UI/UX Design',
                  'Motion Design',
                  'WebGL / Three.js',
                  'React / Next.js',
                  'Brand Identity',
                  'Art Direction',
                  'Prototyping',
                ].map((skill, index) => (
                  <motion.span
                    key={index}
                    className="px-6 py-3 border border-white/20 text-white/80 hover:border-[#39FF14] hover:text-[#39FF14] transition-colors cursor-pointer"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    data-cursor-hover
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 + index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
