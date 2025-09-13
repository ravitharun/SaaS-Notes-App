import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Components/LoginPages/Login.jsx';
import Register from './Components/LoginPages/Register.jsx';

createRoot(document.getElementById('root')).render(
  <Router>
      
      <div className="sticky">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/" element={<App />} />
        </Routes>
      </div>
    </Router>
)
