import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.jsx'
import AppClass from "./components/AppClass.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppClass />
  </StrictMode>,
)
