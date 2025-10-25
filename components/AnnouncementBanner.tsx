'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, X } from 'lucide-react';
import { isAfterJoiningDate, getDaysSinceJoining } from '@/lib/timeUtils';
import TypewriterText from './TypewriterText';

/**
 * AnnouncementBanner Component
 *
 * Displays a prominent banner announcing joining ClaySys Technologies
 * Only visible on or after October 20, 2025
 * Shows the number of days at the organization
 */
export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [shouldShowAnimation, setShouldShowAnimation] = useState(false);
  const [daysSince, setDaysSince] = useState(0);

  useEffect(() => {
    // Check if we should show the banner
    const shouldShow = isAfterJoiningDate();
    setIsVisible(shouldShow);
    setShouldShowAnimation(shouldShow);

    if (shouldShow) {
      setDaysSince(getDaysSinceJoining());
    }

    // Check localStorage for dismissed state
    const dismissed = localStorage.getItem('announcement-dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem('announcement-dismissed', 'true');
  };

  if (!isVisible || isDismissed) {
    return null;
  }

  const getMessage = () => {
    if (daysSince === 0) {
      return "Starting my journey as a Software Engineer at ClaySys Technologies!";
    } else if (daysSince === 1) {
      return "Day 1 as a Software Engineer at ClaySys Technologies!";
    } else {
      return `${daysSince} days as a Software Engineer at ClaySys Technologies`;
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 flex-1">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                className="flex-shrink-0"
              >
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
              </motion.div>

              <div className="flex-1 min-w-0">
                {shouldShowAnimation ? (
                  <TypewriterText
                    text={getMessage()}
                    speed={40}
                    delay={800}
                    className="text-white font-semibold text-sm sm:text-base md:text-lg"
                    as="p"
                  />
                ) : (
                  <p className="text-white font-semibold text-sm sm:text-base md:text-lg">
                    {getMessage()}
                  </p>
                )}
                <p className="text-white/90 text-xs sm:text-sm mt-1">
                  Excited to contribute and grow as part of the team!
                </p>
              </div>
            </div>

            <button
              onClick={handleDismiss}
              className="flex-shrink-0 p-2 hover:bg-white/20 rounded-full transition-colors duration-200"
              aria-label="Dismiss announcement"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
