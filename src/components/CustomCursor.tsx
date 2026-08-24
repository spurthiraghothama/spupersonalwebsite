import { useEffect, useState } from 'react';
import { useTheme } from './ThemeContext';

interface TrailDot {
  id: number;
  x: number;
  y: number;
}

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [trail, setTrail] = useState<TrailDot[]>([]);
  const [visible, setVisible] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    let trailId = 0;

    const onMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);

      trailId += 1;
      const dot: TrailDot = { id: trailId, x: e.clientX, y: e.clientY };
      setTrail((prev) => [...prev.slice(-8), dot]);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    const checkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest('a, button, [data-cursor="pointer"]');
      setIsHovering(!!interactive);
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mousemove', checkHover);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mousemove', checkHover);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
    };
  }, []);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  // Dark mode vs Light mode cursor icon
  const defaultEmoji = theme === 'dark' ? '✨' : '💗';
  const hoverEmoji = theme === 'dark' ? '⭐' : '💫';

  return (
    <>
      {trail.map((dot, i) => (
        <span
          key={dot.id}
          className="cursor-trail"
          style={{
            left: dot.x,
            top: dot.y,
            opacity: (i + 1) / trail.length * 0.4,
            transform: `translate(-50%, -50%) scale(${(i + 1) / trail.length})`,
          }}
          aria-hidden
        />
      ))}
      <div
        className={`custom-cursor ${isHovering ? 'custom-cursor--hover' : ''} ${visible ? 'custom-cursor--visible' : ''}`}
        style={{ left: position.x, top: position.y }}
        aria-hidden
      >
        <span className="custom-cursor__inner">
          {isHovering ? hoverEmoji : defaultEmoji}
        </span>
      </div>
    </>
  );
}
