import { useState } from 'react';

/**
 * useCopyToClipboard
 * Usage: const [copied, copy] = useCopyToClipboard()
 */
export default function useCopyToClipboard() {
  const [copied, setCopied] = useState(false);

  const copy = async text => {
    if (!navigator?.clipboard) return false;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
      return true;
    } catch {
      setCopied(false);
      return false;
    }
  };

  return [copied, copy];
}
