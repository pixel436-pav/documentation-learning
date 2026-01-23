// Root Componrnt File  

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// importing another function from the same file
import { Description } from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    <Description/>
  </StrictMode>,
)
