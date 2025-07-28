import React from 'react';
import {
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandGithub,
} from '@tabler/icons-react';

export const Footer: React.FC = () => (
  <footer className="bg-dark-800 text-zinc-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Branding */}
        <div className="text-center md:text-left space-y-2">
          <h3 className="text-lg font-semibold">CSI SFIT</h3>
          <p className="text-sm text-zinc-200/80">
            We Make It Happen
          </p>
        </div>

        {/* Social Links */}
        <div className="text-center md:text-left space-y-2">
          <h3 className="text-sm font-semibold">Connect With Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="https://www.linkedin.com/company/csi-sfit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-200/80 hover:text-[#40E0D0] transition-colors p-2 rounded-lg"
              aria-label="LinkedIn"
            >
              <IconBrandLinkedin className="h-5 w-5" />
            </a>

            <a
              href="https://www.instagram.com/csi_sfit/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-200/80 hover:text-[#40E0D0] transition-colors p-2 rounded-lg"
              aria-label="Instagram"
            >
              <IconBrandInstagram className="h-5 w-5" />
            </a>

            <a
              href="https://github.com/CSI-SFIT"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-200/80 hover:text-[#40E0D0] transition-colors p-2 rounded-lg"
              aria-label="GitHub"
            >
              <IconBrandGithub className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 mt-6 pt-6">
        <div className="text-center text-sm text-zinc-200/60">
          © 2025 SFIT CSI. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
