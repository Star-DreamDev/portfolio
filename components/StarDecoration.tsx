'use client';

interface StarDecorationProps {
  className?: string;
  size?: number;
  delay?: number;
  color?: 'yellow' | 'pink' | 'blue' | 'purple';
}

const StarDecoration = ({ 
  className = '', 
  size = 40, 
  delay = 0,
  color = 'yellow'
}: StarDecorationProps) => {
  const colorMap = {
    yellow: '#FFD700',
    pink: '#FFB6C1',
    blue: '#87CEEB',
    purple: '#DDA0DD'
  };

  const starColor = colorMap[color];

  return (
    <div 
      className={`absolute ${className}`}
      style={{ 
        animationDelay: `${delay}s`,
        width: `${size}px`,
        height: `${size}px`
      }}
    >
      <svg viewBox="0 0 200 200" className="w-full h-full opacity-70">
        <path
          d="M 100 20 L 120 80 L 180 80 L 135 120 L 155 180 L 100 145 L 45 180 L 65 120 L 20 80 L 80 80 Z"
          fill={starColor}
          opacity="0.8"
        >
          <animate
            attributeName="opacity"
            values="0.4;1;0.4"
            dur="2s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  );
};

export default StarDecoration;

