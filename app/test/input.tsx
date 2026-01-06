"use client"
import React, { useState } from 'react';

// --- AI-Inspired SVG Icons (Lucide Icons used for modernity) ---

// 1. Icon for when the password IS visible (The 'Eye' icon)
const EyeIcon = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="h-6 w-6" 
    {...props}
  >
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

// 2. Icon for when the password IS NOT visible (The 'Eye Off' icon)
const EyeOffIcon = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="h-6 w-6" 
    {...props}
  >
    <path d="M9.88 9.88c.18.32.28.69.28 1.12a3 3 0 0 1-3 3c-.43 0-.8-.11-1.12-.28" />
    <path d="M2.08 11.23a10 10 0 0 0 6.61 5.91L9 17l.95.14" />
    <path d="M11.2 21.08a10 10 0 0 0 5.91-6.61L17 15l.14-.95" />
    <path d="M12.44 6.13c-.22-.32-.4-.69-.44-1.13a7 7 0 0 0-4.63-2.88" />
    <path d="M21.92 12.77a10 10 0 0 0-6.6-5.9c-.3-.14-.62-.27-.95-.36" />
    <path d="m6 18 12-12" />
  </svg>
);

/**
 * A modern, custom Next.js (React) input component for passwords.
 * Features a hide/show toggle using SVG icons for superior UI/UX.
 */
const PasswordInput = ({ label = "Password", ...props }) => {
  // State to track whether the password should be visible (text) or hidden (password)
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle the visibility state
  const toggleVisibility = () => {
    setIsVisible(prev => !prev);
  };

  // Determine the input type and the icon to display
  const inputType = isVisible ? 'text' : 'password';
  const ToggleIcon = isVisible ? EyeIcon : EyeOffIcon;

  return (
    <div className="relative w-full mb-4">
      {/* Optional Label for A11y and UX */}
      <label 
        htmlFor="password-field" 
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>

      <div className="relative w-3xl">
        {/* Input Field (Tailwind for a clean, modern look) */}
        <input
          id="password-field"
          type={inputType}
          placeholder="Enter your secret key..."
          className="w-full py-3 pl-4 pr-12 border border-gray-300 rounded-lg shadow-sm 
                     focus:ring-indigo-500 focus:border-indigo-500 transition 
                     duration-150 ease-in-out text-gray-800 placeholder-gray-400"
          aria-label={label}
          {...props} // Allows passing other props like 'name', 'value', 'onChange'
        />

        {/* The Modern UI/UX Toggle Icon Area */}
        <div
          onClick={toggleVisibility}
          className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer 
                     text-gray-500 hover:text-indigo-600 transition duration-150 
                     focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg"
          aria-label={isVisible ? "Hide password" : "Show password"}
          role="button" // Indicates this div acts like a button
          tabIndex={0} // Makes it keyboard focusable
          onKeyDown={(e) => { // Handles keyboard accessibility (Enter/Space)
            if (e.key === 'Enter' || e.key === ' ') {
              toggleVisibility();
            }
          }}
        >
          {/* Render the appropriate SVG icon */}
          <ToggleIcon />
        </div>
      </div>
    </div>
  );
};

export default PasswordInput;

// --- Example Usage in a Next.js Page Component ---
/*
// File: pages/index.js
import PasswordInput from '../components/PasswordInput';

export default function LoginPage() {
  const [password, setPassword] = useState('');

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-4 bg-white shadow-xl rounded-xl">
        <h2 className="text-2xl font-bold text-center text-gray-900">
          AI Login Interface
        </h2>
        <PasswordInput 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Secure Access Key" // Custom label
          required
        />
        <button 
          className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
        >
          Authenticate
        </button>
      </div>
    </div>
  );
}
*/