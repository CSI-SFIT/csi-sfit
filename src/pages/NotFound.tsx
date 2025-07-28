import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-dark-900 text-white px-4">
      <img
        src="/assets/csi_logo.jpg"
        alt="CSI Logo"
        className="w-40 h-40 rounded-lg mb-8"
      />
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-gray-400 mb-6">The page you're looking for doesn’t exist.</p>
      <Link
        to="/"
        className="bg-primary-500 hover:bg-primary-600 text-black font-semibold px-6 py-3 rounded-lg transition"
      >
        Return to Homepage
      </Link>
    </div>
  );
};
