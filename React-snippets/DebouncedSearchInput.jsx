import React, { useState, useEffect } from 'react';

/**
 * DebouncedSearchInput
 * Props:
 * - onSearch: (query: string) => void
 * - delay: number (ms)
 */
export default function DebouncedSearchInput({ onSearch, delay = 500 }) {
  const [input, setInput] = useState('');
  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch(input);
    }, delay);
    return () => clearTimeout(handler);
  }, [input, delay, onSearch]);
  return (
    <input
      type="text"
      value={input}
      onChange={e => setInput(e.target.value)}
      placeholder="Type to search..."
      style={{ padding: 8, width: 250 }}
    />
  );
}
