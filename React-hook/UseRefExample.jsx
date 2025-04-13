import React, { useRef } from 'react';

export default function UseRefExample() {
  const inputRef = useRef(); // Creates a mutable reference

  const handleFocus = () => {
    inputRef.current.focus(); // Access the DOM element
  };

  return (
    <div>
      <h4>useRef</h4>
      <input ref={inputRef} placeholder="Click button to focus" />
      <button onClick={handleFocus}>Focus</button>
    </div>
  );
}

// useRef is used to reference DOM elements or persist values between renders
// In this example, it focuses the input when the button is clicked.
