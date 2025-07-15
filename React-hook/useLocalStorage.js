import { useState } from 'react';

/**
 * useLocalStorage
 * Usage: const [value, setValue] = useLocalStorage(key, initialValue)
 */
export default function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = value => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      // Ignore write errors
    }
  };

  return [storedValue, setValue];
}
