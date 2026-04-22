import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-black text-white py-24 px-8 lg:px-16 relative overflow-hidden">
      {/* Background grain */}
      <div
        className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
        }}
      />

      <div className="max-w-[1440px] mx-auto relative">
        {/* CTA */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-white tracking-tight mb-8"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(60px, 12vw, 180px)',
              lineHeight: 0.9,
            }}
          >
            LET'S CREATE
            <br />
            <span className="text-[#39FF14]">SOMETHING</span>
            <br />
            EXTRAORDINARY
          </h2>

          <motion.a
            href="mailto:hello@portfolio.com"
            className="inline-flex items-center gap-4 text-white/80 hover:text-[#39FF14] transition-colors group text-xl"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            data-cursor-hover
            whileHover={{ x: 10 }}
          >
            hello@portfolio.com
            <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.a>
        </motion.div>

        {/* Footer grid */}
        <div className="grid grid-cols-12 gap-8 border-t border-white/10 pt-12">
          {/* Left - Social links */}
          <div className="col-span-6">
            <p
              className="text-white/40 uppercase tracking-widest text-sm mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Connect
            </p>
            <div className="space-y-3">
              {[
                { name: 'Instagram', url: '#' },
                { name: 'Twitter', url: '#' },
                { name: 'LinkedIn', url: '#' },
                { name: 'Dribbble', url: '#' },
              ].map((social, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a
                    href={social.url}
                    className="text-white/60 hover:text-[#39FF14] transition-colors inline-flex items-center gap-2 group"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    data-cursor-hover
                  >
                    {social.name}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right - Info */}
          <div className="col-span-6 flex justify-end">
            <div>
              <p
                className="text-white/40 uppercase tracking-widest text-sm mb-6"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Currently
              </p>
              <p
                className="text-white/80 mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Available for freelance work
                <br />
                Based in San Francisco, CA
              </p>
              <p
                className="text-white/40 text-sm"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                © 2026 All rights reserved
              </p>
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p
            className="text-white/20 text-sm tracking-wider"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Designed & Developed with precision
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
