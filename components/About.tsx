'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { personalInfo, education } from '@/lib/data';
import { GraduationCap, MapPin } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
          </div>

          {/* About Content */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Bio Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Who I Am
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {personalInfo.bio}
              </p>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <MapPin className="w-5 h-5" />
                <span>{personalInfo.location}</span>
              </div>
            </motion.div>

            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Quick Info
              </h3>
              <div className="space-y-3">
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
              </div>
            </motion.div>
          </div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center">
              Education
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg card-hover"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-800 dark:text-white mb-2">
                        {edu.degree}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                        {edu.institution}
                      </p>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-purple-600 dark:text-purple-400 font-semibold">
                          {edu.duration}
                        </span>
                        <span className="text-gray-600 dark:text-gray-400">
                          {edu.cgpa ? `CGPA: ${edu.cgpa}` : edu.percentage}
                        </span>
                      </div>
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
