import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Gov Design System Core Styles
import '@gov-design-system-ce/components/dist/core/core.css';

// Gov Design System Web Components Loader
import { defineCustomElements } from '@gov-design-system-ce/components/loader';
defineCustomElements();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
