import React from 'react';
import ReactDOM from 'react-dom/client';
import { SpeedInsights } from '@vercel/speed-insights/react';

const App = () => (
  <div style={{ padding: '20px', textAlign: 'center' }}>
    <h1>GIO_AP Lista</h1>
    <p>La IA de Yio está funcionando.</p>
    <SpeedInsights />
  </div>
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
