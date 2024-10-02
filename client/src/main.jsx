import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Toaster } from 'react-hot-toast'
import ContextApp from './ContextProvider/ContextApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextApp>
    <Toaster/>
      <App />
      </ContextApp>
  </React.StrictMode>
)
