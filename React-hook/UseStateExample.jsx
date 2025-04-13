import React, { useState } from 'react';

export default function UseStateExample() {
  const [count, setCount] = useState(0); // useState creates a state variable and its setter

  return (
    <div>
      <h4>useState</h4>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  );
}

// useState is used to hold a value that changes (here, 'count')
// Clicking the button updates the count using setCount()
