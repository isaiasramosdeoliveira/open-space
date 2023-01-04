import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './global.scss';
import Controllers from './components/Controllers/Controllers';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <Controllers/>
  </React.StrictMode>,
)
