import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
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
import { Membership } from './pages/Membership';
import { NotFound } from './pages/NotFound';
import ShiningStars from './components/ShiningStars';
import { Footer } from './components/Footer';

function HashScroller({ children }: { children: React.ReactNode }) {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return;
    requestAnimationFrame(() => {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, [hash, pathname]);

  return <>{children}</>;
}

function AppShell() {
  const location = useLocation();

  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="relative min-h-screen bg-dark-800 text-white overflow-x-hidden">
        <ShiningStars count={50} />
        <Navigation />

        <AnimatePresence
          mode="wait"
          onExitComplete={() => {
            if (!location.hash) {
              window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
              document.documentElement.scrollTop = 0;
              document.body.scrollTop = 0;
            }
          }}
        >
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/team" element={<Team />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>

        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              key="scroll-top"
              aria-label="Scroll to top"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              initial={{ opacity: 0, y: 16, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="
                fixed bottom-6 right-6 z-50
                inline-flex items-center gap-2
                rounded-2xl px-4 py-3
                bg-white/10 backdrop-blur-md border border-white/15
                text-white shadow-lg
                hover:bg-white/15 active:scale-95
                focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70
              "
            >
              <ArrowUp className="w-5 h-5" />
              <span className="hidden sm:inline text-sm font-medium">Top</span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <HashScroller>
        <AppShell />
      </HashScroller>
    </Router>
  );
}
