import { AnimatePresence } from "framer-motion";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { FloatingElements } from "./components/FloatingElements";
import { Navigation } from "./components/Navigation";
import { ParticleBackground } from "./components/ParticleBackground";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Events } from "./pages/Events";
import { Gallery } from "./pages/Gallery";
import { Home } from "./pages/Home";
import { Membership } from "./pages/Membership";
import { Sponsors } from "./pages/Sponsors";
import { Team } from "./pages/Team";

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
            <Route path="/join" element={<Membership />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
