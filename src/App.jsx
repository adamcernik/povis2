import { useState } from 'react';
import Example1 from './Example1';
import Example2 from './Example2';
import Example3 from './Example3';
import Example4 from './Example4';
import Intro4 from './Intro4';

function App() {
  const [activeExample, setActiveExample] = useState(0);

  const examples = [0, 1, 2, 3, 4];
  const labels = { 0: 'Intro', 1: 'Ex 1', 2: 'Ex 2', 3: 'Ex 3', 4: 'Ex 4' };

  return (
    <div>
      {/* Example switcher */}
      <div style={{
        position: 'fixed',
        bottom: '1rem',
        right: '1rem',
        zIndex: 9999,
        display: 'flex',
        gap: '0.3rem',
        background: '#1f2937',
        padding: '0.4rem 0.5rem',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
      }}>
        {examples.map((n) => (
          <button
            key={n}
            onClick={() => setActiveExample(n)}
            style={{
              padding: '0.35rem 0.7rem',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.75rem',
              fontFamily: 'Inter, system-ui, sans-serif',
              background: activeExample === n ? '#4a7ec7' : 'transparent',
              color: activeExample === n ? 'white' : '#9ca3af',
              transition: 'all 0.2s',
            }}
            aria-pressed={activeExample === n}
          >
            {labels[n]}
          </button>
        ))}
      </div>

      {activeExample === 0 && <Intro4 onOpenExample={() => setActiveExample(4)} />}
      {activeExample === 1 && <Example1 />}
      {activeExample === 2 && <Example2 />}
      {activeExample === 3 && <Example3 />}
      {activeExample === 4 && <Example4 />}
    </div>
  );
}

export default App;

