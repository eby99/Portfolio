'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Download, ChevronDown } from 'lucide-react';
import { personalInfo } from '@/lib/data';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/10 dark:to-pink-900/10">
      {/* Animated Background Blobs - More Vibrant */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 dark:from-purple-700 dark:to-pink-700 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-yellow-400 to-orange-400 dark:from-yellow-700 dark:to-orange-700 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-gradient-to-r from-pink-400 to-red-400 dark:from-pink-700 dark:to-red-700 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-400 dark:from-blue-700 dark:to-cyan-700 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-20 animate-blob animation-delay-6000"></div>
      </div>

      {/* Particle Effect */}
      <div className="absolute inset-0 -z-5">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-500 rounded-full animate-ping animation-delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-pink-500 rounded-full animate-ping animation-delay-3000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-yellow-500 rounded-full animate-ping animation-delay-5000"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center"
      >
        {/* Profile Image Placeholder */}
        <motion.div
          variants={itemVariants}
          className="mb-8 flex justify-center"
        >
          <motion.div
            className="relative"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 flex items-center justify-center text-white text-5xl font-bold shadow-2xl ring-4 ring-purple-200 dark:ring-purple-800 hover:ring-8 transition-all">
              EM
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 blur-xl opacity-50 animate-pulse"></div>
          </motion.div>
        </motion.div>

        {/* Greeting */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-4"
        >
          Hello, I&apos;m
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
        >
          {personalInfo.name}
        </motion.h1>

        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-8"
        >
          {personalInfo.title}
        </motion.h2>

        {/* Bio */}
        <motion.p
          variants={itemVariants}
          className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400 mb-12 leading-relaxed"
        >
          {personalInfo.bio}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Get In Touch
          </motion.a>
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white border-2 border-purple-600 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6"
        >
          <motion.a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-purple-600 hover:text-white transition-all"
          >
            <Github className="w-6 h-6" />
          </motion.a>
          <motion.a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-all"
          >
            <Linkedin className="w-6 h-6" />
          </motion.a>
          <motion.a
            href={`mailto:${personalInfo.email}`}
            whileHover={{ scale: 1.2, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-red-600 hover:text-white transition-all"
          >
            <Mail className="w-6 h-6" />
          </motion.a>
          <motion.a
            href={`tel:${personalInfo.phone.split('/')[0]}`}
            whileHover={{ scale: 1.2, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-green-600 hover:text-white transition-all"
          >
            <Phone className="w-6 h-6" />
          </motion.a>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-gray-600 dark:text-gray-400"
          >
            <ChevronDown className="w-8 h-8" />
          </motion.a>
        </motion.div>
      </motion.div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-5000 {
          animation-delay: 5s;
        }
        .animation-delay-6000 {
          animation-delay: 6s;
        }
      `}</style>
    </section>
  );
}
