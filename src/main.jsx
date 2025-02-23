import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import AuthProvider from './context/AuthProvider.jsx';




createRoot(document.getElementById('root')).render(
  <StrictMode>

    
       <AuthProvider>
        <App />
       </AuthProvider>
   
    
  </StrictMode>,
)
