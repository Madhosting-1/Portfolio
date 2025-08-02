
import React from 'react';

const Logo = ({ className = "w-10 h-10" }: { className?: string }) => {
  return (
    <div className={`${className} relative`}>
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Outer circle with gradient */}
        <circle
          cx="20"
          cy="20"
          r="18"
          fill="url(#logoGradient)"
          stroke="#4361ee"
          strokeWidth="2"
        />
        
        {/* Inner design - M letter stylized */}
        <path
          d="M12 28V12L16 20L20 12L24 20L28 12V28"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* Small accent dots */}
        <circle cx="20" cy="30" r="1.5" fill="white" />
        <circle cx="16" cy="32" r="1" fill="white" opacity="0.7" />
        <circle cx="24" cy="32" r="1" fill="white" opacity="0.7" />
        
        {/* Gradient definition */}
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#4361ee', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#667eea', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Logo;
