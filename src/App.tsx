import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { ParticleBackground } from './components/ParticleBackground';
import { FloatingElements } from './components/FloatingElements';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Events } from './pages/Events';
import { Team } from './pages/Team';
import { Contact } from './pages/Contact';
import { Gallery } from './pages/Gallery';
import { Sponsors } from './pages/Sponsors';
// import { Membership } from './pages/Membership';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-800 text-white overflow-x-hidden">
        <ParticleBackground />
        <FloatingElements />
        <Navigation />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/team" element={<Team />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/sponsors" element={<Sponsors />} />
{/*             <Route path="/membership" element={<Membership />} /> */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
