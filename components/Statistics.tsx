'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Code, Award, Briefcase, GraduationCap } from 'lucide-react';

const stats = [
  {
    icon: Code,
    value: 15,
    label: 'Projects Completed',
    suffix: '+',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Award,
    value: 4,
    label: 'Certifications',
    suffix: '+',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Briefcase,
    value: 3,
    label: 'Bootcamps',
    suffix: '',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: GraduationCap,
    value: 7,
    label: 'CGPA (MCA)',
    suffix: '.65',
    color: 'from-orange-500 to-red-500',
  },
];

function CountUp({ end, duration = 2, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);

  return (
    <span ref={ref} className="text-5xl md:text-6xl font-bold">
      {count}{suffix}
    </span>
  );
}

export default function Statistics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            By The Numbers
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
              animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : { opacity: 0, scale: 0.5, rotateY: -180 }}
              transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative group"
            >
              <div className={`bg-gradient-to-br ${stat.color} p-8 rounded-2xl shadow-2xl text-white text-center transform transition-all duration-300 hover:shadow-3xl`}>
                <motion.div
                  className="inline-block mb-4"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="w-12 h-12 mx-auto" />
                </motion.div>
                <div className="mb-2">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-lg font-semibold opacity-90">{stat.label}</p>

                {/* Animated background glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-300 dark:bg-purple-700 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-300 dark:bg-pink-700 rounded-full opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  );
}
