import React, { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };
    document.addEventListener('mousemove', moveCursor);
    return () => document.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="custom-cursor"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 32,
        height: 32,
        borderRadius: '50%',
        background: 'rgba(66,91,173,0.7)',
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'exclusion',
        transform: 'translate3d(-50%, -50%, 0)',
        transition: 'background 0.2s, transform 0.08s cubic-bezier(.22,1,.36,1)',
        border: '2px solid #fff',
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
      }}
    />
  );
}