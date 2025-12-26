'use client';

interface FairyDecorationProps {
  className?: string;
  size?: number;
  delay?: number;
}

const FairyDecoration = ({ className = '', size = 100, delay = 0 }: FairyDecorationProps) => {
  return (
    <div 
      className={`absolute ${className} animate-float`}
      style={{ 
        animationDelay: `${delay}s`,
        width: `${size}px`,
        height: `${size}px`
      }}
    >
      <svg viewBox="0 0 200 200" className="w-full h-full opacity-70">
        {/* Abstract Fairy - Matching the minimalist style */}
        
        {/* Heart at top (crown) */}
        <path d="M 100 30 C 100 25, 95 20, 90 20 C 85 20, 80 25, 80 30 C 80 35, 100 50, 100 50 C 100 50, 120 35, 120 30 C 120 25, 115 20, 110 20 C 105 20, 100 25, 100 30 Z" 
              fill="#FFE5B4" opacity="0.9" />
        
        {/* Top circle (yellow) */}
        <circle cx="100" cy="65" r="18" fill="#FFE5B4" opacity="0.85" />
        
        {/* Middle circle (pink) */}
        <circle cx="100" cy="95" r="16" fill="#FFB6C1" opacity="0.8" />
        
        {/* Bell/triangular base (purple) */}
        <path d="M 100 110 Q 70 140, 70 170 Q 70 180, 80 180 L 120 180 Q 130 180, 130 170 Q 130 140, 100 110 Z" 
              fill="#DDA0DD" opacity="0.75" />
        
        {/* Left wing (purple) - large oval */}
        <ellipse cx="55" cy="100" rx="30" ry="45" fill="#DDA0DD" opacity="0.6" />
        
        {/* Right wing (pink) - large oval */}
        <ellipse cx="145" cy="100" rx="30" ry="45" fill="#FFB6C1" opacity="0.6" />
        
        {/* Scattered sparkles/dots */}
        <circle cx="40" cy="40" r="3" fill="#FFE5B4" opacity="0.7">
          <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="160" cy="50" r="2.5" fill="#FFB6C1" opacity="0.7">
          <animate attributeName="opacity" values="0.3;0.9;0.3" dur="1.8s" repeatCount="indefinite" />
        </circle>
        <circle cx="35" cy="150" r="2.5" fill="#DDA0DD" opacity="0.7">
          <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.2s" repeatCount="indefinite" />
        </circle>
        <circle cx="165" cy="160" r="3" fill="#87CEEB" opacity="0.7">
          <animate attributeName="opacity" values="0.3;0.9;0.3" dur="1.6s" repeatCount="indefinite" />
        </circle>
        <circle cx="50" cy="70" r="2" fill="#FFE5B4" opacity="0.6">
          <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="150" cy="80" r="2.5" fill="#FFB6C1" opacity="0.6">
          <animate attributeName="opacity" values="0.2;0.8;0.2" dur="1.9s" repeatCount="indefinite" />
        </circle>
        <circle cx="30" cy="120" r="2" fill="#DDA0DD" opacity="0.6">
          <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2.3s" repeatCount="indefinite" />
        </circle>
        <circle cx="170" cy="130" r="2.5" fill="#87CEEB" opacity="0.6">
          <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2.1s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
};

export default FairyDecoration;

