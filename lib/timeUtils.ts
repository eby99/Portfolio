/**
 * Time-based utility functions for portfolio features
 */

// Target date: October 20, 2025
export const JOINING_DATE = new Date('2025-10-20T00:00:00');

/**
 * Checks if the current date is on or after October 20, 2025
 */
export function isAfterJoiningDate(): boolean {
  const now = new Date();
  return now >= JOINING_DATE;
}

/**
 * Calculates the number of days since joining ClaSys Technologies
 * Returns 0 if the joining date hasn't been reached yet
 */
export function getDaysSinceJoining(): number {
  const now = new Date();

  if (now < JOINING_DATE) {
    return 0;
  }

  const diffTime = Math.abs(now.getTime() - JOINING_DATE.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
}

/**
 * Returns a formatted message about days at ClaSys Technologies
 */
export function getJoiningDaysMessage(): string {
  const days = getDaysSinceJoining();

  if (days === 0) {
    return '';
  }

  if (days === 1) {
    return 'Day 1 at ClaSys Technologies';
  }

  return `${days} days at ClaSys Technologies`;
}
