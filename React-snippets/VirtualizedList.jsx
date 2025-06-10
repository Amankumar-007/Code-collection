import React, { useRef, useState, useEffect, useCallback } from 'react';

/**
 * VirtualizedList
 * Props:
 * - items: array of data
 * - itemHeight: number (px)
 * - height: number (px)
 * - renderItem: (item, index) => ReactNode
 */
export default function VirtualizedList({ items, itemHeight, height, renderItem }) {
  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef(null);
  const totalHeight = items.length * itemHeight;
  const visibleCount = Math.ceil(height / itemHeight);
  const startIdx = Math.floor(scrollTop / itemHeight);
  const endIdx = Math.min(items.length, startIdx + visibleCount + 1);
  const offsetY = startIdx * itemHeight;

  const onScroll = useCallback(e => {
    setScrollTop(e.currentTarget.scrollTop);
  }, []);

  useEffect(() => {
    const ref = containerRef.current;
    if (ref) ref.addEventListener('scroll', onScroll);
    return () => ref && ref.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  return (
    <div
      ref={containerRef}
      style={{ overflowY: 'auto', height, border: '1px solid #ccc', position: 'relative' }}
    >
      <div style={{ height: totalHeight, position: 'relative' }}>
        <div style={{ position: 'absolute', top: offsetY, left: 0, right: 0 }}>
          {items.slice(startIdx, endIdx).map((item, idx) => renderItem(item, startIdx + idx))}
        </div>
      </div>
    </div>
  );
}
