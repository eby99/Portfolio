'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { workExperience, bootcamps, achievements, responsibilities, industrialVisits } from '@/lib/data';
import { BookOpen, Trophy, Briefcase, Building, Calendar } from 'lucide-react';
import { isAfterJoiningDate, getDaysSinceJoining } from '@/lib/timeUtils';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showWorkExperience, setShowWorkExperience] = useState(false);
  const [daysSince, setDaysSince] = useState(0);

  useEffect(() => {
    setShowWorkExperience(isAfterJoiningDate());
    if (isAfterJoiningDate()) {
      setDaysSince(getDaysSinceJoining());
    }
  }, []);

  const formatDuration = (startDate: string) => {
    const start = new Date(startDate);
    const days = getDaysSinceJoining();

    if (days === 0) return "Starting Soon";
    if (days === 1) return "Day 1";
    if (days < 30) return `${days} days`;
    if (days < 365) {
      const months = Math.floor(days / 30);
      return months === 1 ? "1 month" : `${months} months`;
    }
    const years = Math.floor(days / 365);
    const remainingMonths = Math.floor((days % 365) / 30);
    if (remainingMonths === 0) return years === 1 ? "1 year" : `${years} years`;
    return `${years} ${years === 1 ? 'year' : 'years'} ${remainingMonths} ${remainingMonths === 1 ? 'month' : 'months'}`;
  };

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

          {/* Work Experience - Only shows after October 20, 2025 */}
          {showWorkExperience && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-16"
            >
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 flex items-center gap-3">
                <Briefcase className="w-7 h-7 text-green-600" />
                Work Experience
              </h3>
              <div className="grid md:grid-cols-1 gap-6">
                {workExperience.map((work, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-xl shadow-xl border-2 border-green-500 dark:border-green-600 card-hover"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-4 bg-green-100 dark:bg-green-900 rounded-lg">
                        <Briefcase className="w-8 h-8 text-green-600 dark:text-green-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                          {work.position}
                        </h4>
                        <p className="text-xl text-green-600 dark:text-green-400 font-semibold mb-3">
                          {work.company}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                          {work.description}
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                            <span className="text-purple-600 dark:text-purple-400 font-semibold">
                              {formatDuration(work.startDate)}
                            </span>
                          </div>
                          <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-xs font-semibold">
                            {work.type}
                          </span>
                          <span className="text-gray-600 dark:text-gray-400">
                            📍 {work.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

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
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-purple-600"
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
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg card-hover border border-gray-200 dark:border-gray-700"
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
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
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
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg card-hover border border-gray-200 dark:border-gray-700"
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