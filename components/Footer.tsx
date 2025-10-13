'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { personalInfo } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 md:mb-0"
          >
            <p className="text-gray-400 flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> by {personalInfo.name}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400"
          >
            <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
