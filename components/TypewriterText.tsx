'use client';

import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  as?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div';
}

/**
 * TypewriterText Component
 *
 * Renders text with a letter-by-letter typing animation effect
 *
 * @param text - The text to animate
 * @param speed - Speed of typing in milliseconds per character (default: 30)
 * @param delay - Delay before starting animation in milliseconds (default: 0)
 * @param className - Additional CSS classes
 * @param as - HTML element to render as (default: 'span')
 */
export default function TypewriterText({
  text,
  speed = 30,
  delay = 0,
  className = '',
  as = 'span',
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    // Handle initial delay
    if (!hasStarted && delay > 0) {
      const delayTimer = setTimeout(() => {
        setHasStarted(true);
      }, delay);

      return () => clearTimeout(delayTimer);
    }

    if (!hasStarted && delay === 0) {
      setHasStarted(true);
    }
  }, [delay, hasStarted]);

  useEffect(() => {
    if (!hasStarted || currentIndex >= text.length) {
      return;
    }

    const timer = setTimeout(() => {
      setDisplayedText((prev) => prev + text[currentIndex]);
      setCurrentIndex((prev) => prev + 1);
    }, speed);

    return () => clearTimeout(timer);
  }, [currentIndex, text, speed, hasStarted]);

  const content = (
    <>
      {displayedText}
      {currentIndex < text.length && (
        <span className="animate-pulse inline-block w-[2px] h-[1em] bg-current ml-[2px] align-middle" />
      )}
    </>
  );

  if (as === 'p') return <p className={className}>{content}</p>;
  if (as === 'h1') return <h1 className={className}>{content}</h1>;
  if (as === 'h2') return <h2 className={className}>{content}</h2>;
  if (as === 'h3') return <h3 className={className}>{content}</h3>;
  if (as === 'h4') return <h4 className={className}>{content}</h4>;
  if (as === 'h5') return <h5 className={className}>{content}</h5>;
  if (as === 'h6') return <h6 className={className}>{content}</h6>;
  if (as === 'div') return <div className={className}>{content}</div>;
  return <span className={className}>{content}</span>;
}
