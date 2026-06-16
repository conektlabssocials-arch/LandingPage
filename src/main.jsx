import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/conekt.css'

function ThemeBoot() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'punch')
  }, [])
  return null
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeBoot />
      <App />
    </BrowserRouter>
  </StrictMode>
)
