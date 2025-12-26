'use client';

interface FlowerDecorationProps {
  className?: string;
  size?: number;
  delay?: number;
}

const FlowerDecoration = ({ className = '', size = 60, delay = 0 }: FlowerDecorationProps) => {
  return (
    <div 
      className={`absolute ${className} animate-float`}
      style={{ 
        animationDelay: `${delay}s`,
        width: `${size}px`,
        height: `${size}px`
      }}
    >
      <svg viewBox="0 0 200 200" className="w-full h-full opacity-60">
        {/* Petals */}
        <circle cx="100" cy="80" r="25" fill="#FFB6C1" opacity="0.7" />
        <circle cx="100" cy="120" r="25" fill="#FFB6C1" opacity="0.7" />
        <circle cx="80" cy="100" r="25" fill="#FFB6C1" opacity="0.7" />
        <circle cx="120" cy="100" r="25" fill="#FFB6C1" opacity="0.7" />
        <circle cx="90" cy="85" r="25" fill="#FFB6C1" opacity="0.6" />
        <circle cx="110" cy="85" r="25" fill="#FFB6C1" opacity="0.6" />
        <circle cx="90" cy="115" r="25" fill="#FFB6C1" opacity="0.6" />
        <circle cx="110" cy="115" r="25" fill="#FFB6C1" opacity="0.6" />
        
        {/* Center */}
        <circle cx="100" cy="100" r="15" fill="#FFD700" opacity="0.8" />
        <circle cx="100" cy="100" r="10" fill="#FFA500" opacity="0.9" />
        
        {/* Leaves */}
        <ellipse cx="70" cy="130" rx="12" ry="20" fill="#90EE90" opacity="0.6" transform="rotate(-30 70 130)" />
        <ellipse cx="130" cy="130" rx="12" ry="20" fill="#90EE90" opacity="0.6" transform="rotate(30 130 130)" />
      </svg>
    </div>
  );
};

export default FlowerDecoration;

