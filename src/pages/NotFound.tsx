import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#020617]" />
      <div className="relative z-10 flex flex-col items-center text-center">
        <img
          src="/assets/csi_logo.jpg"
          alt="CSI Logo"
          className="w-40 h-40 rounded-lg mb-8"
        />
        <h1 className="text-4xl font-bold text-white mb-4">404 - Page Not Found</h1>
        <p className="text-gray-200 mb-6">
          The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-block bg-gradient-to-r from-[#40E0D0] to-[#1A5AFF] text-white font-semibold px-6 py-3 rounded-lg transition-transform transform hover:scale-105"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
};
