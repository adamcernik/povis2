import { useState } from 'react';
import Example6 from './Example6';
import Example7 from './Example7';
import Example8 from './Example8';
import Example9 from './Example9';

function App() {
  const [variant, setVariant] = useState('blue');

  return (
    <>
      {variant === 'blue' && <Example6 />}
      {variant === 'green' && <Example7 />}
      {variant === 'ds' && <Example8 />}
      {variant === 'components' && <Example9 />}

      <div style={{
        position: 'fixed',
        bottom: '1.5rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        background: 'rgba(30, 30, 30, 0.9)',
        backdropFilter: 'blur(10px)',
        padding: '0.5rem 1rem',
        borderRadius: '999px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
        zIndex: 99999,
        fontFamily: 'system-ui, sans-serif',
        fontSize: '0.8rem',
        color: '#fff',
      }}>
        <button
          onClick={() => setVariant('blue')}
          style={{
            padding: '0.4rem 1rem',
            border: 'none',
            borderRadius: '999px',
            cursor: 'pointer',
            fontWeight: 600,
            fontSize: '0.8rem',
            transition: 'all 0.2s',
            background: variant === 'blue' ? '#2563eb' : 'transparent',
            color: variant === 'blue' ? '#fff' : '#94a3b8',
          }}
        >
          Modrá
        </button>
        <button
          onClick={() => setVariant('green')}
          style={{
            padding: '0.4rem 1rem',
            border: 'none',
            borderRadius: '999px',
            cursor: 'pointer',
            fontWeight: 600,
            fontSize: '0.8rem',
            transition: 'all 0.2s',
            background: variant === 'green' ? '#16a34a' : 'transparent',
            color: variant === 'green' ? '#fff' : '#94a3b8',
          }}
        >
          Zelená
        </button>
        <button
          onClick={() => setVariant('ds')}
          style={{
            padding: '0.4rem 1rem',
            border: 'none',
            borderRadius: '999px',
            cursor: 'pointer',
            fontWeight: 600,
            fontSize: '0.8rem',
            transition: 'all 0.2s',
            background: variant === 'ds' ? '#2362a2' : 'transparent',
            color: variant === 'ds' ? '#fff' : '#94a3b8',
          }}
        >
          DS gov.cz
        </button>
        <button
          onClick={() => setVariant('components')}
          style={{
            padding: '0.4rem 1rem',
            border: 'none',
            borderRadius: '999px',
            cursor: 'pointer',
            fontWeight: 600,
            fontSize: '0.8rem',
            transition: 'all 0.2s',
            background: variant === 'components' ? '#fab413' : 'transparent',
            color: variant === 'components' ? '#000' : '#94a3b8',
          }}
        >
          DS komponenty
        </button>
      </div>
    </>
  );
}

export default App;
