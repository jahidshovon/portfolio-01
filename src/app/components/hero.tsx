import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textLines = [
    { text: 'CREATIVE', offset: 0 },
    { text: 'DEVELOPER &', offset: 120 },
    { text: 'DESIGNER', offset: '50%' },
  ];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(circle at 50% 50%, #39FF14 0%, transparent 50%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Main typography */}
      <div className="relative z-10 w-full max-w-[1440px] px-8 lg:px-16">
        {textLines.map((line, index) => (
          <motion.div
            key={index}
            className="overflow-visible mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            <motion.h1
              className="text-white"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(60px, 12vw, 180px)',
                lineHeight: '1',
                letterSpacing: '-0.02em',
                marginLeft: typeof line.offset === 'number' ? `${line.offset}px` : line.offset,
                transform: `translateY(${scrollY * 0.3}px)`,
              }}
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {line.text}
            </motion.h1>
          </motion.div>
        ))}

        {/* Subtitle */}
        <motion.div
          className="mt-16 ml-auto max-w-md"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <p
            className="text-white/70 text-lg tracking-wide"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Crafting digital experiences that blend art, technology, and innovation. Based in the intersection of design and code.
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span
          className="text-white/50 text-xs uppercase tracking-widest"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Scroll
        </span>
        <motion.div
          className="w-[1px] h-16 bg-white/30"
          animate={{ scaleY: [1, 1.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
