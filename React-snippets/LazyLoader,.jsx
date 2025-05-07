import React, { Suspense, lazy } from 'react';

const HeavyComponent = lazy(() =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        default: () => (
          <div className="p-4 bg-blue-100 rounded">
            <h2 className="text-xl font-bold">Heavy Component Loaded!</h2>
            <p>This component was lazily loaded after a delay.</p>
          </div>
        ),
      });
    }, 2000);
  })
);

const App = () => (
  <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
    <h1 className="text-3xl font-bold text-gray-800">Lazy Loading Example</h1>
    <Suspense fallback={<p className="mt-4 text-lg">Loading...</p>}>
      <HeavyComponent />
    </Suspense>
  </div>
);

export default App;


// use tailwindcss to style the component
// also config index.js 
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import './index.css'; // Tailwind CSS included

// ReactDOM.createRoot(document.getElementById('root')).render(<App />);


