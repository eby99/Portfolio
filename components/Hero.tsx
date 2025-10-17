'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Download, ChevronDown, User } from 'lucide-react';
import { personalInfo } from '@/lib/data';
import TypewriterText from './TypewriterText';
import { useState, useEffect } from 'react';
import { isAfterJoiningDate } from '@/lib/timeUtils';

export default function Hero() {
  const [title, setTitle] = useState(personalInfo.titleBeforeJoining);
  const [bio, setBio] = useState(personalInfo.bioBeforeJoining);

  useEffect(() => {
    if (isAfterJoiningDate()) {
      setTitle(personalInfo.titleAfterJoining);
      setBio(personalInfo.bioAfterJoining);
    }
  }, []);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  // Add smooth scrolling for buttons
  const handleScrollToSection = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Predefined positions for particles to avoid hydration errors
  const particlePositions = [
    { top: 15, left: 73 },
    { top: 80, left: 61 },
    { top: 13, left: 56 },
    { top: 39, left: 93 },
    { top: 95, left: 90 },
    { top: 86, left: 93 },
    { top: 36, left: 23 },
    { top: 37, left: 38 },
    { top: 91, left: 65 },
    { top: 59, left: 22 },
    { top: 12, left: 18 },
    { top: 31, left: 45 },
    { top: 60, left: 66 },
    { top: 8, left: 78 },
    { top: 1, left: 30 },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/10 dark:to-pink-900/10">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 dark:from-purple-700 dark:to-pink-700 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-yellow-400 to-orange-400 dark:from-yellow-700 dark:to-orange-700 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-gradient-to-r from-pink-400 to-red-400 dark:from-pink-700 dark:to-red-700 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-30 animate-pulse animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-400 dark:from-blue-700 dark:to-cyan-700 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-20 animate-pulse animation-delay-6000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 -z-5">
        {particlePositions.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-500 rounded-full opacity-20"
            style={{
              top: `${pos.top}%`,
              left: `${pos.left}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, (i % 2 === 0 ? 10 : -10), 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + (i * 0.2),
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-0"
      >
        {/* Profile Image with User Icon */}
        <motion.div
          variants={itemVariants}
          className="mb-8 flex justify-center"
          transition={{ delay: 0.1 }}
        >
          <motion.div
            className="relative"
            animate={{ 
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 flex items-center justify-center shadow-2xl ring-4 ring-white dark:ring-gray-800 backdrop-blur-sm">
              <User className="w-24 h-24 text-white drop-shadow-lg" strokeWidth={1.2} />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 blur-xl opacity-50 animate-pulse"></div>
            {/* 3D Effect Ring */}
            <div className="absolute inset-0 rounded-full border-4 border-white dark:border-gray-800 shadow-[0_0_40px_rgba(168,85,247,0.5)]"></div>
          </motion.div>
        </motion.div>

        {/* Greeting */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-4"
          transition={{ delay: 0.2 }}
        >
          <TypewriterText text="Hello, I'm" delay={0} speed={50} />
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
          transition={{ delay: 0.3 }}
        >
          <TypewriterText text={personalInfo.name} delay={200} speed={80} as="span" />
        </motion.h1>

        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-8"
          transition={{ delay: 0.4 }}
        >
          <TypewriterText text={title} delay={1000} speed={60} as="span" />
        </motion.h2>

        {/* Bio */}
        <motion.p
          variants={itemVariants}
          className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400 mb-12 leading-relaxed text-justify"
          transition={{ delay: 0.5 }}
        >
          <TypewriterText text={bio} delay={1800} speed={20} as="span" />
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-12 relative z-0"
          transition={{ delay: 0.6 }}
        >
          <motion.button
            onClick={() => handleScrollToSection('contact')}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold shadow-lg transition-all duration-300 flex items-center gap-2"
          >
            Get In Touch
          </motion.button>
          <motion.a
            href="/resume.pdf"
            download="Eby_Mathew_Resume.pdf"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white border-2 border-purple-600 rounded-full font-semibold shadow-lg transition-all duration-300 flex items-center gap-2 cursor-pointer"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6 relative z-0"
          transition={{ delay: 0.7 }}
        >
          <motion.a
            href={personalInfo.github}
            target="_blank"
            whileHover={{
              scale: 1.2,
              y: -5
            }}
            className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-gray-800 transition-all duration-300 shadow-md cursor-pointer"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </motion.a>
          <motion.a
            href={personalInfo.linkedin}
            target="_blank"
            whileHover={{
              scale: 1.2,
              y: -5
            }}
            className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md cursor-pointer"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </motion.a>
          <motion.a
            href={`mailto:${personalInfo.email}`}
            whileHover={{
              scale: 1.2,
              y: -5
            }}
            className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-red-600 hover:text-white transition-all duration-300 shadow-md cursor-pointer"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </motion.a>
          <motion.a
            href={`tel:${personalInfo.phone.split('/')[0].trim()}`}
            whileHover={{
              scale: 1.2,
              y: -5
            }}
            className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-green-600 hover:text-white transition-all duration-300 shadow-md cursor-pointer"
            aria-label="Phone"
          >
            <Phone className="w-6 h-6" />
          </motion.a>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={() => handleScrollToSection('about')}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            whileHover={{ scale: 1.1 }}
            aria-label="Scroll to About section"
          >
            <ChevronDown className="w-8 h-8" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}