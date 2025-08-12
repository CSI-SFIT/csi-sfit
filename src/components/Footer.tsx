import React from "react";
import { Linkedin, Instagram, Github } from "lucide-react";

export const Footer: React.FC = () => (
  <footer className="bg-dark-800 text-zinc-200">
    <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
      
      {/* Branding */}
      <div className="text-center md:text-left">
        <h3 className="text-lg font-semibold">CSI SFIT</h3>
        <p className="text-sm text-zinc-400">We Make It Happen</p>
      </div>

      {/* Social Links */}
      <div className="flex gap-3">
        <a
          href="https://www.linkedin.com/company/csi-sfit"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 hover:text-[#40E0D0] transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href="https://www.instagram.com/csi_sfit/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 hover:text-[#40E0D0] transition-colors"
          aria-label="Instagram"
        >
          <Instagram className="w-5 h-5" />
        </a>
        <a
          href="https://github.com/CSI-SFIT"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 hover:text-[#40E0D0] transition-colors"
          aria-label="GitHub"
        >
          <Github className="w-5 h-5" />
        </a>
      </div>
    </div>

    <div className="text-center text-xs text-zinc-400 py-3 border-t border-white/10">
      © 2025 SFIT CSI. All rights reserved.
    </div>
  </footer>
);

export default Footer;
