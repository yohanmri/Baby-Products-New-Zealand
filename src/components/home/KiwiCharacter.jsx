import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const KiwiCharacter = () => {
  const kiwiRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const kiwi = kiwiRef.current;
    
    // Mouse movement effect
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 40;
      const yPos = (clientY / window.innerHeight - 0.5) * 40;

      gsap.to(kiwi, {
        x: xPos,
        y: yPos,
        duration: 0.6,
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // ScrollTrigger animation
    gsap.to(kiwi, {
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      },
      rotate: 360,
      scale: 1.2,
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed bottom-10 right-10 z-50 pointer-events-none select-none"
    >
      <div ref={kiwiRef} className="relative">
        {/* We use a character SVG or image. Since I don't have the 3D baby image, 
            I'll provide a stylized SVG that represents a Kiwi baby/bird with a flag 
            as requested in your image description. */}
        <svg
          width="120"
          height="120"
          viewBox="0 0 200 200"
          className="drop-shadow-2xl"
        >
          {/* Simple character body (placeholder for the 3D baby) */}
          <circle cx="100" cy="110" r="40" fill="#f0ebe4" stroke="#cda67c" strokeWidth="2" />
          <circle cx="100" cy="60" r="30" fill="#f0ebe4" stroke="#cda67c" strokeWidth="2" />
          
          {/* Eyes */}
          <circle cx="90" cy="55" r="3" fill="#3f4d46" />
          <circle cx="110" cy="55" r="3" fill="#3f4d46" />
          
          {/* Smile */}
          <path d="M 90 70 Q 100 80 110 70" fill="none" stroke="#3f4d46" strokeWidth="2" strokeLinecap="round" />

          {/* New Zealand Flag in hand */}
          <g transform="translate(130, 40) rotate(-15)">
            <rect x="0" y="0" width="40" height="25" fill="#00247D" />
            {/* Union Jack representation */}
            <rect x="0" y="10" width="40" height="5" fill="white" />
            <rect x="17" y="0" width="5" height="25" fill="white" />
            {/* Flagpole */}
            <line x1="0" y1="0" x2="0" y2="80" stroke="#333" strokeWidth="3" />
          </g>
          
          {/* Arms */}
          <path d="M 70 100 Q 50 90 40 110" fill="none" stroke="#f0ebe4" strokeWidth="8" strokeLinecap="round" />
          <path d="M 130 100 Q 150 70 140 50" fill="none" stroke="#f0ebe4" strokeWidth="8" strokeLinecap="round" />
        </svg>
        
        {/* "Peeking" text bubble */}
        <div className="absolute -top-10 -left-20 bg-white px-3 py-1 rounded-full border border-[#cda67c] shadow-md">
          <p className="text-[10px] font-black uppercase text-[#3f4d46]">Gidday! 🇳🇿</p>
        </div>
      </div>
    </div>
  );
};

export default KiwiCharacter;
