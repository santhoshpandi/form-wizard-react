import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PageProvider } from './contexts/Pages.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PageProvider>
      <App />
    </PageProvider>
  </StrictMode>,
)
