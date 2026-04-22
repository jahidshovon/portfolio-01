import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

const clients = [
  'APPLE',
  'GOOGLE',
  'NIKE',
  'SPOTIFY',
  'ADOBE',
  'TESLA',
  'META',
  'NETFLIX',
  'AIRBNB',
  'UBER',
];

export function Experience() {
  return (
    <section className="bg-white py-32 overflow-hidden">
      {/* Clients marquee */}
      <div className="mb-32">
        <motion.div
          className="mb-12 px-8 lg:px-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p
            className="text-black/40 uppercase tracking-widest text-sm"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Trusted by industry leaders
          </p>
        </motion.div>

        <Marquee />
      </div>

      {/* Experience timeline */}
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <motion.h2
          className="text-black tracking-tight mb-16"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(50px, 8vw, 100px)',
            lineHeight: 0.9,
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          EXPERIENCE
        </motion.h2>

        <div className="space-y-16">
          {[
            {
              year: '2024—Now',
              role: 'Senior Creative Developer',
              company: 'Digital Agency Co.',
              description: 'Leading creative development for Fortune 500 clients',
            },
            {
              year: '2021—2024',
              role: 'Lead Designer & Developer',
              company: 'Tech Startup Inc.',
              description: 'Built award-winning products from 0 to 1',
            },
            {
              year: '2018—2021',
              role: 'Interactive Designer',
              company: 'Creative Studio',
              description: 'Crafted immersive digital experiences',
            },
          ].map((exp, index) => (
            <motion.div
              key={index}
              className="border-t border-black/10 pt-8 grid grid-cols-12 gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="col-span-2">
                <p
                  className="text-black/40"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {exp.year}
                </p>
              </div>
              <div className="col-span-10">
                <h3
                  className="text-black mb-2"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 'clamp(30px, 4vw, 48px)',
                    lineHeight: 1,
                  }}
                >
                  {exp.role}
                </h3>
                <p
                  className="text-black/60 mb-2"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {exp.company}
                </p>
                <p
                  className="text-black/40 max-w-2xl"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => prev - 1);
    }, 20);

    return () => clearInterval(interval);
  }, []);

  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <div className="relative overflow-hidden py-8 border-y border-black/10">
      <motion.div
        className="flex gap-16 whitespace-nowrap"
        style={{ transform: `translateX(${offset}px)` }}
      >
        {duplicatedClients.map((client, index) => (
          <span
            key={index}
            className="text-black/20 hover:text-black transition-colors cursor-pointer"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(40px, 6vw, 80px)',
              lineHeight: 1,
            }}
            data-cursor-hover
          >
            {client}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
