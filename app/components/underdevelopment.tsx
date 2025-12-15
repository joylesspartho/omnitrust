'use client';

import React from 'react';

export default function UnderDevelopment() {
  return (
    <div className=" flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg p-3 text-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <svg
            className="w-16 h-16 text-yellow-500 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z"
            />
          </svg>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold mb-2 text-gray-800">
          Under Development
        </h2>

        {/* Description */}
        <p className="text-gray-600 mb-6">
          This section is currently under development. We are working hard to bring you amazing content. Stay tuned!
        </p>

        {/* Button */}
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-6 rounded-full transition-colors duration-300">
          Notify Me
        </button>
      </div>
    </div>
  );
}
