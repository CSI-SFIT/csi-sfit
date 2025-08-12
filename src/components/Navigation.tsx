import { AnimatePresence, motion } from "framer-motion";
import {
  Award,
  Calendar,
  Camera,
  Code,
  Mail,
  Menu,
  Users,
  X,
} from "lucide-react";

import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../logo.png"; // Assuming logo.png is in src/assets

interface NavigationProps {
  isHome?: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({ isHome }) => {
  const [isOpen, setIsOpen] = useState(false);
  // `showNavbar` is now controlled by the scroll direction
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // We use a ref to store the previous scroll position without causing re-renders
  const lastScrollY = useRef(0);

  useEffect(() => {
    // Inside your useEffect
    // Inside your useEffect
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);

      // If scrolling down AND past the top of the page, hide the navbar
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setShowNavbar(false);
      }
      // If scrolling up OR at the very top of the page, show the navbar
      else {
        setShowNavbar(true);
      }

      // Update the ref
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  const navItems = [
    { path: "/", label: "Home", icon: Code },
    { path: "/about", label: "About", icon: Users },
    { path: "/events", label: "Events", icon: Calendar },
    { path: "/team", label: "Team", icon: Users },
    { path: "/gallery", label: "Gallery", icon: Camera },
    { path: "/sponsors", label: "Sponsors", icon: Award },
    { path: "/contact", label: "Contact", icon: Mail },
  ];

  return (
    <AnimatePresence>
      {showNavbar && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`sticky top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
            scrolled
              ? "bg-[#0f0f0f]/80 backdrop-blur-lg border-white/10"
              : "bg-transparent"
          }`}
        >
          {/* ... Your JSX for the navigation bar remains the same ... */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-3 group">
                <motion.img
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  src={logo}
                  alt="CSI SFIT Logo"
                  className={`w-10 h-10 object-contain rounded-md transition-opacity duration-500 ${
                    isHome && !scrolled ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span className="text-xl font-bold bg-gradient-to-r from-[#1A5AFF] to-[#00FFF0] bg-clip-text text-transparent">
                  CSI SFIT
                </span>
              </Link>
              {/* Desktop Nav */}
              <div className="hidden md:flex items-center space-x-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;

                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 group ${
                        isActive
                          ? "text-[#00FFF0]"
                          : "text-gray-300 hover:text-[#00FFF0]"
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <Icon className="w-4 h-4" />
                        <span>{item.label}</span>
                      </div>
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-[#1A5AFF]/10 border border-[#1A5AFF]/20 rounded-lg"
                          transition={{ duration: 0.2 }}
                        />
                      )}
                      <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </Link>
                  );
                })}
              </div>
              {/* Mobile Toggle */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </motion.button>
            </div>
          </div>
          {/* Mobile Nav */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-[#0f0f0f]/95 backdrop-blur-lg border-t border-white/10"
              >
                <div className="px-4 py-4 space-y-2">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.path;

                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                          isActive
                            ? "bg-[#1A5AFF]/10 text-[#00FFF0] border border-[#1A5AFF]/20"
                            : "text-gray-300 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};
