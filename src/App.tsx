// Kigumi Group website
// Author: Manav Hirani
import './App.css'

import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar.tsx'
import Home from './pages/Home.tsx'
import BrowseTrainings from './pages/BrowseTrainings.tsx'
import About from './pages/About.tsx'
import SignIn from './pages/SignIn.tsx'

function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trainings" element={<BrowseTrainings />} />
            <Route path="/about" element={< About />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
