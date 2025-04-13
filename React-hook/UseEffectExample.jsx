import React, { useEffect, useState } from 'react';

export default function UseEffectExample() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval); // Cleanup
  }, []); // Empty dependency array means run only once

  return (
    <div>
      <h4>useEffect</h4>
      <p>{time.toLocaleTimeString()}</p>
    </div>
  );
}

// useEffect runs side effects like timers, API calls, subscriptions, etc.
// Here, it's used to update the clock every second.
