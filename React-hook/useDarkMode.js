import { useEffect } from 'react';

/**
 * useDarkMode
 * Usage: useDarkMode()
 * Automatically toggles dark mode class on <body>
 */
export default function useDarkMode() {
  useEffect(() => {
    const className = 'dark-mode';
    document.body.classList.add(className);
    return () => document.body.classList.remove(className);
  }, []);
}
