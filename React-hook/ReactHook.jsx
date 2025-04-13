import React, { useState, useEffect, useRef, useCallback, useMemo, useReducer } from 'react';

// Custom Hook
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}

// Reducer for Counter
function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT': return { count: state.count + 1 };
    case 'DECREMENT': return { count: state.count - 1 };
    default: return state;
  }
}

function App() {
  // useState
  const [name, setName] = useState('');

  // useRef
  const inputRef = useRef(null);

  // useReducer
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  // useCallback
  const focusInput = useCallback(() => {
    inputRef.current.focus();
  }, []);

  // useMemo
  const expensiveValue = useMemo(() => {
    console.log('Calculating expensive value...');
    return state.count * 100;
  }, [state.count]);

  // Custom Hook
  const windowWidth = useWindowWidth();

  // useEffect
  useEffect(() => {
    document.title = `Count: ${state.count}`;
  }, [state.count]);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>React Hooks Demo</h1>
      
      <h2>useState + useRef</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={focusInput}>Focus Input</button>
      <p>Hello, {name || "stranger"} 👋</p>

      <hr />

      <h2>useReducer + useMemo</h2>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>➕</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>➖</button>
      <p>Expensive Value: {expensiveValue}</p>

      <hr />

      <h2>Custom Hook (useWindowWidth)</h2>
      <p>Window width: {windowWidth}px</p>
    </div>
  );
}

export default App;
