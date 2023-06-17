// dependencies
import React, { useState, useEffect }from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom"
import './index.css'

// pages
// import Landing from './pages/Landing'
// import Register from './pages/Register'
// import Login from './pages/Login'
import Create from './pages/Create'
import Index from './pages/Index'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className={`App ${isLoaded ? 'fade-in' : ''}`}>
        <Routes>
          {/* <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} /> */}
          <Route path="/" element={<Create />} />
          <Route path="/mixes" element={<Index />} />
        </Routes>
    </div>
  );
}

export default App;