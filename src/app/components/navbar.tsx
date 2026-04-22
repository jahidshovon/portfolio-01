import { motion } from 'motion/react';

export function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center mix-blend-difference"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="text-white tracking-wide uppercase"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        whileHover={{ scale: 1.05 }}
      >
        Portfolio
      </motion.div>

      <div className="flex gap-12 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        <motion.a
          href="#work"
          className="text-sm uppercase tracking-wider hover:text-[#39FF14] transition-colors"
          data-cursor-hover
          whileHover={{ y: -2 }}
        >
          Work
        </motion.a>
        <motion.a
          href="#about"
          className="text-sm uppercase tracking-wider hover:text-[#39FF14] transition-colors"
          data-cursor-hover
          whileHover={{ y: -2 }}
        >
          About
        </motion.a>
        <motion.a
          href="#contact"
          className="text-sm uppercase tracking-wider hover:text-[#39FF14] transition-colors"
          data-cursor-hover
          whileHover={{ y: -2 }}
        >
          Contact
        </motion.a>
      </div>
    </motion.nav>
  );
}
