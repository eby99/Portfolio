'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { bootcamps, achievements, responsibilities, industrialVisits } from '@/lib/data';
import { BookOpen, Trophy, Briefcase, Building } from 'lucide-react';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Experience & Achievements</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
          </div>

          {/* Bootcamps */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 flex items-center gap-3">
              <BookOpen className="w-7 h-7 text-purple-600" />
              Bootcamps Attended
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {bootcamps.map((bootcamp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-lg border-l-4 border-purple-600"
                >
                  <h4 className="font-bold text-gray-800 dark:text-white mb-2">
                    {bootcamp.name}
                  </h4>
                  <p className="text-purple-600 dark:text-purple-400 text-sm">
                    {bootcamp.duration}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 flex items-center gap-3">
              <Trophy className="w-7 h-7 text-yellow-500" />
              Honors & Achievements
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-lg shadow-lg card-hover"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
                      <Trophy className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-800 dark:text-white mb-1">
                        {achievement.title}
                      </h4>
                      {achievement.organization && (
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                          {achievement.organization}
                        </p>
                      )}
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                        {achievement.description}
                      </p>
                      <p className="text-purple-600 dark:text-purple-400 text-sm font-semibold">
                        {achievement.date}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Positions of Responsibility */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 flex items-center gap-3">
              <Briefcase className="w-7 h-7 text-purple-600" />
              Positions of Responsibility
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {responsibilities.map((responsibility, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-lg"
                >
                  <h4 className="font-bold text-gray-800 dark:text-white mb-2">
                    {responsibility.title}
                  </h4>
                  <p className="text-purple-600 dark:text-purple-400 text-sm">
                    {responsibility.date}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Industrial Visits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 flex items-center gap-3">
              <Building className="w-7 h-7 text-blue-600" />
              Industrial Visits
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {industrialVisits.map((visit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg shadow-lg card-hover"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                      <Building className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-800 dark:text-white mb-1">
                        {visit.company}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                        {visit.location}
                      </p>
                      <p className="text-purple-600 dark:text-purple-400 text-sm font-semibold">
                        {visit.date}
                      </p>
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
