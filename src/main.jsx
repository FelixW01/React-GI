import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App 
      name="felix Willem"
      phone="(212) 123-4567"
      dob="Feb 2, 2000"
      email="felix@yahoo.com"
    />
  </StrictMode>,
)
