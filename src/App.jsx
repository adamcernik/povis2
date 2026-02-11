import { useState } from 'react';
import Example1 from './Example1';
import Example2 from './Example2';

function App() {
  const [activeExample, setActiveExample] = useState(2);

  return (
    <div>
      {/* Example switcher */}
      <div style={{
        position: 'fixed',
        bottom: '1rem',
        right: '1rem',
        zIndex: 9999,
        display: 'flex',
        gap: '0.5rem',
        background: '#1f2937',
        padding: '0.5rem 0.75rem',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
      }}>
        <button
          onClick={() => setActiveExample(1)}
          style={{
            padding: '0.4rem 1rem',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 600,
            fontSize: '0.8rem',
            fontFamily: 'Inter, system-ui, sans-serif',
            background: activeExample === 1 ? '#2362a2' : 'transparent',
            color: activeExample === 1 ? 'white' : '#9ca3af',
            transition: 'all 0.15s',
          }}
          aria-pressed={activeExample === 1}
        >
          Example 1
        </button>
        <button
          onClick={() => setActiveExample(2)}
          style={{
            padding: '0.4rem 1rem',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 600,
            fontSize: '0.8rem',
            fontFamily: 'Inter, system-ui, sans-serif',
            background: activeExample === 2 ? '#2362a2' : 'transparent',
            color: activeExample === 2 ? 'white' : '#9ca3af',
            transition: 'all 0.15s',
          }}
          aria-pressed={activeExample === 2}
        >
          Example 2
        </button>
      </div>

      {activeExample === 1 ? <Example1 /> : <Example2 />}
    </div>
  );
}

export default App;
