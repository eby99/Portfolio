'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { skills, certifications } from '@/lib/data';
import { Code, Database, Globe, Smartphone, Wrench, Cloud, Award, FlaskConical, LucideIcon, Palette, Server, Brain, Rocket, Box, Sparkles } from 'lucide-react';

const skillIcons: { [key: string]: LucideIcon } = {
  'Programming Languages': Code,
  'Frontend Development': Palette,
  'Backend Development': Server,
  'Mobile Development': Smartphone,
  'Database Management': Database,
  'AI/ML Technologies': Brain,
  'DevOps & Tools': Wrench,
  'Testing & Automation': FlaskConical,
  'Cloud & Deployment': Rocket,
  '3D & Animation': Box,
  'UI/UX & Design': Sparkles,
  'Other Tools': Award,
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Skills & Expertise</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
          </div>

          {/* Skills Grid - 4 columns for uniform layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {Object.entries(skills).map(([category, skillList], index) => {
              const Icon = skillIcons[category] || Code;
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20, rotateX: -15 }}
                  animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 20, rotateX: -15 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.03, rotateY: 5, rotateX: 5 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl card-hover border border-gray-200 dark:border-gray-700 h-full min-h-[300px] flex flex-col"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="flex items-center gap-3 mb-4 flex-shrink-0">
                    <motion.div
                      className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shadow-lg"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                      {category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2 flex-grow content-start">
                    {skillList.map((skill, idx) => (
                      <motion.span
                        key={idx}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-sm font-medium rounded-full border border-gray-200 dark:border-gray-600 hover:border-purple-500 dark:hover:border-purple-400 transition-all cursor-pointer"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">
              Certifications
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
                  animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : { opacity: 0, scale: 0.5, rotateY: -180 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.15, type: "spring" }}
                  whileHover={{ scale: 1.15, rotateY: 10, rotateX: 10, z: 50 }}
                  className="bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 p-8 rounded-2xl shadow-2xl text-white perspective-container"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Award className="w-12 h-12 mb-4 mx-auto drop-shadow-lg" />
                  </motion.div>
                  <p className="font-bold text-lg">{cert}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}