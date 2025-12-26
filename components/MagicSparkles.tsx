'use client';

interface MagicSparklesProps {
  count?: number;
  className?: string;
}

const MagicSparkles = ({ count = 20, className = '' }: MagicSparklesProps) => {
  const sparkles = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 2 + 1.5,
  }));

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute rounded-full bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            animation: `sparkle ${sparkle.duration}s ease-in-out infinite`,
            animationDelay: `${sparkle.delay}s`,
            opacity: 0.6,
          }}
        />
      ))}
    </div>
  );
};

export default MagicSparkles;

