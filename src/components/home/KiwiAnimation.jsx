import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const KiwiAnimation = () => {
  const kiwiRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const kiwi = kiwiRef.current;
    const img = imgRef.current;
    if (!kiwi || !img) return;

    // Start off-screen
    gsap.set(kiwi, { x: -200, y: 0 });
    // Ensure flipping happens around the center of the image to prevent shifting
    gsap.set(img, { transformOrigin: "50% 50%" });

    const startWalking = () => {
      const containerWidth = window.innerWidth;
      const targetX = Math.random() * (containerWidth - 150);
      const currentX = gsap.getProperty(kiwi, "x");
      
      const movingRight = targetX > currentX;

      // Flip the bird smoothly to face the direction of travel
      gsap.to(img, { 
        scaleX: movingRight ? 1 : -1, 
        duration: 0.5, 
        ease: "power2.inOut" 
      });

      const distance = Math.abs(targetX - currentX);
      const speed = 60 + Math.random() * 20; 
      const duration = distance / speed;

      // Move the container
      gsap.to(kiwi, {
        x: targetX,
        duration: duration,
        ease: "none",
        onComplete: () => {
          // Pause and peck
          setTimeout(startWalking, 2000 + Math.random() * 2000);
        }
      });

      // Walking bobbing
      gsap.to(kiwi, {
        y: -8,
        duration: 0.25,
        repeat: Math.floor(duration / 0.25),
        yoyo: true,
        ease: "sine.inOut"
      });
    };

    const timeout = setTimeout(startWalking, 1000);

    return () => {
      clearTimeout(timeout);
      gsap.killTweensOf(kiwi);
      gsap.killTweensOf(img);
    };
  }, []);

  return (
    <div className="absolute bottom-4 left-0 w-full h-32 pointer-events-none z-30 overflow-hidden">
      {/* Moving Container - reduced width to make it smaller */}
      <div 
        ref={kiwiRef} 
        className="absolute left-0 bottom-0 w-24 md:w-32 h-auto flex items-center justify-center"
      >
        <img 
          ref={imgRef}
          src="/src/assets/img.png" 
          alt="Realistic Kiwi"
          className="w-full h-auto block"
          style={{ 
            // This blend mode removes the white background
            mixBlendMode: 'multiply',
            // Adjusted filters to make it slightly smaller, warmer/golden to match theme
            filter: 'sepia(0.2) saturate(1.4) brightness(1.1) contrast(1.1)',
          }}
        />
      </div>
    </div>
  );
};

export default KiwiAnimation;
