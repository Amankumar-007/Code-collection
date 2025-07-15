import { useState, useCallback } from 'react';

/**
 * useToggle
 * Usage: const [value, toggle] = useToggle(initialValue)
 */
export default function useToggle(initialValue = false) {
  const [state, setState] = useState(initialValue);
  const toggle = useCallback(() => setState(v => !v), []);
  return [state, toggle];
}
