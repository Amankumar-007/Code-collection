import { useRef, useEffect } from 'react';

/**
 * usePrevious
 * Usage: const prevValue = usePrevious(value)
 */
export default function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
