'use client';

interface ButterflyDecorationProps {
  className?: string;
  size?: number;
  delay?: number;
  color?: 'blue' | 'pink' | 'purple' | 'yellow';
}

const ButterflyDecoration = ({ 
  className = '', 
  size = 80, 
  delay = 0,
  color = 'blue'
}: ButterflyDecorationProps) => {
  const colorMap = {
    blue: { top: '#60A5FA', bottom: '#3B82F6', body: '#2563EB' },
    pink: { top: '#F472B6', bottom: '#EC4899', body: '#DB2777' },
    purple: { top: '#A78BFA', bottom: '#8B5CF6', body: '#7C3AED' },
    yellow: { top: '#FCD34D', bottom: '#FBBF24', body: '#F59E0B' }
  };

  const colors = colorMap[color];

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
        {/* Top left wing */}
        <ellipse cx="60" cy="70" rx="35" ry="50" fill={colors.top} opacity="0.7" transform="rotate(-20 60 70)" />
        <ellipse cx="60" cy="70" rx="25" ry="35" fill={colors.bottom} opacity="0.5" transform="rotate(-20 60 70)" />
        
        {/* Top right wing */}
        <ellipse cx="140" cy="70" rx="35" ry="50" fill={colors.top} opacity="0.7" transform="rotate(20 140 70)" />
        <ellipse cx="140" cy="70" rx="25" ry="35" fill={colors.bottom} opacity="0.5" transform="rotate(20 140 70)" />
        
        {/* Bottom left wing */}
        <ellipse cx="70" cy="120" rx="30" ry="40" fill={colors.top} opacity="0.6" transform="rotate(-15 70 120)" />
        <ellipse cx="70" cy="120" rx="20" ry="28" fill={colors.bottom} opacity="0.4" transform="rotate(-15 70 120)" />
        
        {/* Bottom right wing */}
        <ellipse cx="130" cy="120" rx="30" ry="40" fill={colors.top} opacity="0.6" transform="rotate(15 130 120)" />
        <ellipse cx="130" cy="120" rx="20" ry="28" fill={colors.bottom} opacity="0.4" transform="rotate(15 130 120)" />
        
        {/* Body */}
        <ellipse cx="100" cy="100" rx="4" ry="60" fill={colors.body} opacity="0.8" />
        
        {/* Antennae */}
        <line x1="100" y1="40" x2="90" y2="30" stroke={colors.body} strokeWidth="2" opacity="0.6" />
        <line x1="100" y1="40" x2="110" y2="30" stroke={colors.body} strokeWidth="2" opacity="0.6" />
        <circle cx="90" cy="30" r="2" fill={colors.body} opacity="0.8" />
        <circle cx="110" cy="30" r="2" fill={colors.body} opacity="0.8" />
        
        {/* Wing patterns */}
        <circle cx="55" cy="65" r="3" fill="white" opacity="0.4" />
        <circle cx="145" cy="65" r="3" fill="white" opacity="0.4" />
        <circle cx="65" cy="115" r="2.5" fill="white" opacity="0.4" />
        <circle cx="135" cy="115" r="2.5" fill="white" opacity="0.4" />
      </svg>
    </div>
  );
};

export default ButterflyDecoration;

