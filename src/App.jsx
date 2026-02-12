import { useState } from 'react';
import Example1 from './Example1';
import Example2 from './Example2';
import Example3 from './Example3';

function App() {
  const [activeExample, setActiveExample] = useState(3);

  const examples = [1, 2, 3];

  return (
    <div>
      {/* Example switcher */}
      <div style={{
        position: 'fixed',
        bottom: '1rem',
        right: '1rem',
        zIndex: 9999,
        display: 'flex',
        gap: '0.35rem',
        background: '#1f2937',
        padding: '0.4rem 0.6rem',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
      }}>
        {examples.map((n) => (
          <button
            key={n}
            onClick={() => setActiveExample(n)}
            style={{
              padding: '0.4rem 0.85rem',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.78rem',
              fontFamily: 'Inter, system-ui, sans-serif',
              background: activeExample === n ? '#4a7ec7' : 'transparent',
              color: activeExample === n ? 'white' : '#9ca3af',
              transition: 'all 0.2s',
            }}
            aria-pressed={activeExample === n}
          >
            Ex {n}
          </button>
        ))}
      </div>

      {activeExample === 1 && <Example1 />}
      {activeExample === 2 && <Example2 />}
      {activeExample === 3 && <Example3 />}
    </div>
  );
}

export default App;
