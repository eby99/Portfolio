'use client';

import { useState, useEffect } from 'react';
import { isAfterJoiningDate } from '@/lib/timeUtils';
import TypewriterText from './TypewriterText';

interface ConditionalTypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  as?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div';
}

/**
 * ConditionalTypewriter Component
 *
 * Wrapper that conditionally applies typewriter animation based on date
 * - Before Oct 20, 2025: Shows text normally
 * - On/after Oct 20, 2025: Shows text with typewriter animation
 *
 * @param text - The text to display
 * @param speed - Speed of typing animation (default: 30ms)
 * @param delay - Delay before animation starts (default: 0ms)
 * @param className - CSS classes to apply
 * @param as - HTML element to render (default: 'span')
 */
export default function ConditionalTypewriter({
  text,
  speed = 30,
  delay = 0,
  className = '',
  as = 'span',
}: ConditionalTypewriterProps) {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setShouldAnimate(isAfterJoiningDate());
  }, []);

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    if (as === 'p') return <p className={className}>{text}</p>;
    if (as === 'h1') return <h1 className={className}>{text}</h1>;
    if (as === 'h2') return <h2 className={className}>{text}</h2>;
    if (as === 'h3') return <h3 className={className}>{text}</h3>;
    if (as === 'h4') return <h4 className={className}>{text}</h4>;
    if (as === 'h5') return <h5 className={className}>{text}</h5>;
    if (as === 'h6') return <h6 className={className}>{text}</h6>;
    if (as === 'div') return <div className={className}>{text}</div>;
    return <span className={className}>{text}</span>;
  }

  if (shouldAnimate) {
    return (
      <TypewriterText
        text={text}
        speed={speed}
        delay={delay}
        className={className}
        as={as}
      />
    );
  }

  if (as === 'p') return <p className={className}>{text}</p>;
  if (as === 'h1') return <h1 className={className}>{text}</h1>;
  if (as === 'h2') return <h2 className={className}>{text}</h2>;
  if (as === 'h3') return <h3 className={className}>{text}</h3>;
  if (as === 'h4') return <h4 className={className}>{text}</h4>;
  if (as === 'h5') return <h5 className={className}>{text}</h5>;
  if (as === 'h6') return <h6 className={className}>{text}</h6>;
  if (as === 'div') return <div className={className}>{text}</div>;
  return <span className={className}>{text}</span>;
}
