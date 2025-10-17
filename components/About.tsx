'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { personalInfo, education } from '@/lib/data';
import { GraduationCap, MapPin } from 'lucide-react';
import ConditionalTypewriter from './ConditionalTypewriter';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/10 dark:to-pink-900/10" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-4 gradient-text"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              About Me
            </motion.h2>
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: 80 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            ></motion.div>
          </div>

          {/* About Content */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Bio Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ 
                y: -10,
                rotateX: 5,
                rotateY: 5,
              }}
              className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 perspective-container"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.h3
                className="text-2xl font-bold text-gray-800 dark:text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4 }}
              >
                <ConditionalTypewriter text="Who I Am" delay={0} speed={50} as="span" />
              </motion.h3>
              <motion.p
                className="text-gray-600 dark:text-gray-400 leading-relaxed text-justify"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.5 }}
              >
                <ConditionalTypewriter text={personalInfo.aboutBio} delay={400} speed={15} as="span" />
              </motion.p>
              <motion.div 
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6 }}
              >
                <MapPin className="w-5 h-5" />
                <span>{personalInfo.location}</span>
              </motion.div>
            </motion.div>

            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ 
                y: -10,
                rotateX: -5,
                rotateY: -5,
              }}
              className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 perspective-container"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.h3 
                className="text-2xl font-bold text-gray-800 dark:text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.5 }}
              >
                Quick Info
              </motion.h3>
              <motion.div 
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-semibold text-gray-700 dark:text-gray-300">Name:</span>
                  <span className="text-gray-600 dark:text-gray-400">{personalInfo.name}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-semibold text-gray-700 dark:text-gray-300">Email:</span>
                  <span className="text-gray-600 dark:text-gray-400">{personalInfo.email}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-semibold text-gray-700 dark:text-gray-300">Phone:</span>
                  <span className="text-gray-600 dark:text-gray-400">{personalInfo.phone.split('/')[0]}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-semibold text-gray-700 dark:text-gray-300">Location:</span>
                  <span className="text-gray-600 dark:text-gray-400">{personalInfo.location}</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.h3 
              className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5 }}
            >
              Education
            </motion.h3>
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, rotateX: 30 }}
                  animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 30, rotateX: 30 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ 
                    y: -10,
                    rotateX: 10,
                    rotateY: 5,
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                  }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 perspective-container"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="flex items-start gap-4">
                    <motion.div 
                      className="p-3 bg-purple-100 dark:bg-purple-900 rounded-xl"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <GraduationCap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </motion.div>
                    <div className="flex-1">
                      <motion.h4 
                        className="font-bold text-gray-800 dark:text-white mb-2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                      >
                        {edu.degree}
                      </motion.h4>
                      <motion.p 
                        className="text-gray-600 dark:text-gray-400 text-sm mb-2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                        transition={{ delay: 0.9 + index * 0.1 }}
                      >
                        {edu.institution}
                      </motion.p>
                      <motion.div 
                        className="flex justify-between items-center text-sm"
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                        transition={{ delay: 1.0 + index * 0.1 }}
                      >
                        <span className="text-purple-600 dark:text-purple-400 font-semibold">
                          {edu.duration}
                        </span>
                        <span className="text-gray-600 dark:text-gray-400">
                          {edu.cgpa ? `CGPA: ${edu.cgpa}` : edu.percentage}
                        </span>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}