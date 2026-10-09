import React from 'react';

export const FloralBranch = ({ className = "w-24 h-24 text-rose-300" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M15 85C25 70 40 50 65 30C75 22 88 15 95 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M35 60C38 52 46 50 48 55C49 61 42 66 35 60Z" fill="currentColor" fillOpacity="0.4" stroke="currentColor" strokeWidth="1" />
    <path d="M50 45C52 38 60 36 62 41C63 47 57 51 50 45Z" fill="currentColor" fillOpacity="0.4" stroke="currentColor" strokeWidth="1" />
    <path d="M22 75C20 68 28 64 30 70C31 75 26 79 22 75Z" fill="currentColor" fillOpacity="0.4" stroke="currentColor" strokeWidth="1" />
    {/* Flower Bud */}
    <circle cx="95" cy="10" r="5" fill="#fda4af" />
    <circle cx="98" cy="8" r="3" fill="#f43f5e" />
  </svg>
);

export const FloralCorner = ({ className = "w-32 h-32 text-rose-200" }) => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M5 5C5 45 25 80 60 100C85 112 110 115 115 115" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M5 5C45 5 80 25 100 60C112 85 115 110 115 115" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    
    {/* Petal groups */}
    <path d="M25 35C22 25 32 20 37 25C42 30 35 40 25 35Z" fill="currentColor" fillOpacity="0.4" />
    <path d="M35 25C25 22 20 32 25 37C30 42 40 35 35 25Z" fill="currentColor" fillOpacity="0.4" />
    <circle cx="30" cy="30" r="4" fill="#fb7185" />

    <path d="M55 60C50 52 60 48 64 52C68 56 62 65 55 60Z" fill="currentColor" fillOpacity="0.3" />
    <path d="M60 55C52 50 48 60 52 64C56 68 65 62 60 55Z" fill="currentColor" fillOpacity="0.3" />
    <circle cx="58" cy="58" r="3.5" fill="#fda4af" />
  </svg>
);

export const FloatingPetal = ({ style, delay = 0, size = "w-4 h-4" }) => (
  <div
    style={style}
    className={`absolute pointer-events-none opacity-40 animate-float-slow ${size}`}
  >
    <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15 2C18 9 27 12 28 18C29 24 23 29 17 28C10 27 3 22 2 15C1 8 9 3 15 2Z"
        fill="url(#petalGradient)"
      />
      <defs>
        <linearGradient id="petalGradient" x1="2" y1="2" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fecdd3" />
          <stop offset="1" stopColor="#fb7185" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);
