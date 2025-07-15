import { useRef, useState } from 'react';

/**
 * useHover
 * Usage: const [hovered, ref] = useHover()
 */
export default function useHover() {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  const onMouseOver = () => setHovered(true);
  const onMouseOut = () => setHovered(false);

  React.useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener('mouseover', onMouseOver);
      node.addEventListener('mouseout', onMouseOut);
      return () => {
        node.removeEventListener('mouseover', onMouseOver);
        node.removeEventListener('mouseout', onMouseOut);
      };
    }
  }, [ref.current]);

  return [hovered, ref];
}
