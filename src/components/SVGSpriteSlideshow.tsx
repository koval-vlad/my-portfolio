"use client"

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState, useCallback, useRef } from 'react';

export type TransitionType =
  | 'random'
  | 'fade'
  | 'crossfade'
  | 'smooth-blur'
  | 'push-right'
  | 'push-left'
  | 'push-up'
  | 'push-down'
  | 'zoom-in'
  | 'zoom-out'
  | 'pop-up'
  | 'flip-x'
  | 'flip-y'
  | 'cube-turn'
  | '3d-lift'
  | 'wipe-right'
  | 'wipe-vertical'
  | 'circle-reveal'
  | 'bounce-drop'
  | 'tilt-shift'
  | 'swing-in'
  | 'glitch-fade'
  | 'scan-reveal'
  | 'shutter'
  | 'data-stream'
  | 'door-open'
  | 'spiral'
  | 'slide-and-skew'
  | 'float-and-glow';

interface SVGSpriteSlideshowProps {
  currentSlide: number;
  svgContent: string;
  transitionType?: TransitionType;
  className?: string;
}

export const transitionVariants = [
  // --- RANDOM TRANSITION (special case) ---
  { name: 'random', initial: {}, animate: {}, exit: {} },

  // --- SUBTLE & PROFESSIONAL ---
  { name: 'fade', initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } },
  { name: 'crossfade', initial: { opacity: 0, scale: 1.05 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.95 } },
  { name: 'smooth-blur', initial: { opacity: 0, filter: "blur(10px)" }, animate: { opacity: 1, filter: "blur(0px)" }, exit: { opacity: 0, filter: "blur(10px)" } },
  
  // --- DIRECTIONAL PUSH (PowerPoint Style) ---
  { name: 'push-right', initial: { x: '100%' }, animate: { x: 0 }, exit: { x: '-100%' } },
  { name: 'push-left', initial: { x: '-100%' }, animate: { x: 0 }, exit: { x: '100%' } },
  { name: 'push-up', initial: { y: '100%' }, animate: { y: 0 }, exit: { y: '-100%' } },
  { name: 'push-down', initial: { y: '-100%' }, animate: { y: 0 }, exit: { y: '100%' } },
  
  // --- ZOOM & SCALE ---
  { name: 'zoom-in', initial: { scale: 0.5, opacity: 0 }, animate: { scale: 1, opacity: 1 }, exit: { scale: 1.5, opacity: 0 } },
  { name: 'zoom-out', initial: { scale: 1.5, opacity: 0 }, animate: { scale: 1, opacity: 1 }, exit: { scale: 0.5, opacity: 0 } },
  { name: 'pop-up', initial: { scale: 0.8, y: 50, opacity: 0 }, animate: { scale: 1, y: 0, opacity: 1 }, exit: { scale: 1.1, y: -20, opacity: 0 } },
  
  // --- 3D & PERSPECTIVE (Futuristic) ---
  { name: 'flip-x', initial: { rotateX: 90, opacity: 0 }, animate: { rotateX: 0, opacity: 1 }, exit: { rotateX: -90, opacity: 0 } },
  { name: 'flip-y', initial: { rotateY: 90, opacity: 0 }, animate: { rotateY: 0, opacity: 1 }, exit: { rotateY: -90, opacity: 0 } },
  { name: 'cube-turn', initial: { rotateY: 45, x: '50%', opacity: 0 }, animate: { rotateY: 0, x: 0, opacity: 1 }, exit: { rotateY: -45, x: '-50%', opacity: 0 } },
  { name: '3d-lift', initial: { rotateX: -15, z: -200, opacity: 0 }, animate: { rotateX: 0, z: 0, opacity: 1 }, exit: { rotateX: 15, z: -200, opacity: 0 } },
  
  // --- WIPES & MASKS ---
  { name: 'wipe-right', initial: { clipPath: 'inset(0 100% 0 0)' }, animate: { clipPath: 'inset(0 0 0 0)' }, exit: { clipPath: 'inset(0 0 0 100%)' } },
  { name: 'wipe-vertical', initial: { clipPath: 'inset(100% 0 0 0)' }, animate: { clipPath: 'inset(0 0 0 0)' }, exit: { clipPath: 'inset(0 0 100% 0)' } },
  { name: 'circle-reveal', initial: { clipPath: 'circle(0% at 50% 50%)' }, animate: { clipPath: 'circle(100% at 50% 50%)' }, exit: { clipPath: 'circle(0% at 50% 50%)' } },
  
  // --- DYNAMIC & PLAYFUL ---
  { name: 'bounce-drop', initial: { y: -500 }, animate: { y: 0, transition: { type: 'spring', bounce: 0.5 } }, exit: { y: 500 } },
  { name: 'tilt-shift', initial: { rotate: -5, scale: 0.9, opacity: 0 }, animate: { rotate: 0, scale: 1, opacity: 1 }, exit: { rotate: 5, scale: 1.1, opacity: 0 } },
  { name: 'swing-in', initial: { rotateY: -90, originX: 0 }, animate: { rotateY: 0 }, exit: { rotateY: 90, originX: 1 } },
  
  // --- SCI-FI / TECH ---
  { name: 'glitch-fade', initial: { skewX: 20, opacity: 0 }, animate: { skewX: 0, opacity: 1 }, exit: { skewX: -20, opacity: 0 } },
  { name: 'scan-reveal', initial: { y: -20, opacity: 0, filter: 'brightness(2)' }, animate: { y: 0, opacity: 1, filter: 'brightness(1)' }, exit: { y: 20, opacity: 0 } },
  { name: 'shutter', initial: { scaleY: 0, opacity: 0 }, animate: { scaleY: 1, opacity: 1 }, exit: { scaleY: 0, opacity: 0 } },
  { name: 'data-stream', initial: { x: 100, letterSpacing: '10px', opacity: 0 }, animate: { x: 0, letterSpacing: 'normal', opacity: 1 }, exit: { x: -100, opacity: 0 } },
  
  // --- MISC / CREATIVE ---
  { name: 'door-open', initial: { rotateY: 90, originX: 0, opacity: 0 }, animate: { rotateY: 0, opacity: 1 }, exit: { rotateY: -90, originX: 1, opacity: 0 } },
  { name: 'spiral', initial: { rotate: 180, scale: 0, opacity: 0 }, animate: { rotate: 0, scale: 1, opacity: 1 }, exit: { rotate: -180, scale: 0, opacity: 0 } },
  { name: 'slide-and-skew', initial: { x: '100%', skewX: -10 }, animate: { x: 0, skewX: 0 }, exit: { x: '-100%', skewX: 10 } },
  { name: 'float-and-glow', initial: { y: 20, filter: 'drop-shadow(0 0 0px var(--primary))', opacity: 0 }, animate: { y: 0, filter: 'drop-shadow(0 0 10px var(--primary))', opacity: 1 }, exit: { y: -20, opacity: 0 } }
];


export default function SVGSpriteSlideshow({
  currentSlide,
  svgContent,
  transitionType = 'random',
  className = ''
}: SVGSpriteSlideshowProps) {
  const [processedSvgContent, setProcessedSvgContent] = useState<string>('');
  const [previousSlide, setPreviousSlide] = useState<number>(currentSlide);
  const [lastUsedTransition, setLastUsedTransition] = useState<string>('');
  const [activeTransition, setActiveTransition] = useState(() => {
    // For random mode, start with a random transition immediately
    if (transitionType === 'random') {
      const allTransitions = transitionVariants.filter(t => t.name !== 'random');
      const randomIndex = Math.floor(Math.random() * allTransitions.length);
      return allTransitions[randomIndex];
    }
    return transitionVariants[1]; // Default to fade for other modes
  });
  const hasInitializedRandom = useRef(transitionType === 'random');

  // Function to get random transition based on direction
  const getRandomTransition = useCallback((isForward: boolean = true) => {
    // Get all transitions except 'random'
    const allTransitions = transitionVariants.filter(t => t.name !== 'random');

    // Remove the last used transition to avoid repeats
    const availableTransitions = allTransitions.filter(t => t.name !== lastUsedTransition);

    // If no transitions left (rare), use all available
    const transitionsToChooseFrom = availableTransitions.length > 0 ? availableTransitions : allTransitions;

    // Pick random transition
    const randomIndex = Math.floor(Math.random() * transitionsToChooseFrom.length);
    const selectedTransition = transitionsToChooseFrom[randomIndex];

    setLastUsedTransition(selectedTransition.name);
    return selectedTransition;
  }, [lastUsedTransition]);

  useEffect(() => {
    if (!svgContent) {
      setProcessedSvgContent('');
      return;
    }

    // Process SVG content minimally to avoid breaking it
    let processedContent = svgContent;

    // Only add viewBox if missing and SVG has dimensions we can use
    if (processedContent.includes('<svg') && !processedContent.includes('viewBox=')) {
      // Try to extract width and height if available
      const widthMatch = processedContent.match(/width="(\d+)"/);
      const heightMatch = processedContent.match(/height="(\d+)"/);

      if (widthMatch && heightMatch) {
        const width = widthMatch[1];
        const height = heightMatch[1];
        processedContent = processedContent.replace('<svg', `<svg viewBox="0 0 ${width} ${height}"`);
      } else {
        // Fallback viewBox
        processedContent = processedContent.replace('<svg', '<svg viewBox="0 0 800 600"');
      }
    }

    setProcessedSvgContent(processedContent);
  }, [svgContent]);

  // Handle slide changes and random transition selection
  useEffect(() => {
    if (transitionType === 'random') {
      // Always pick a new random transition for slide changes OR if not yet initialized
      const isSlideChange = currentSlide !== previousSlide;
      const shouldPickRandom = isSlideChange || !hasInitializedRandom.current;

      if (shouldPickRandom) {
        const isForward = isSlideChange ? currentSlide > previousSlide : true;
        const newTransition = getRandomTransition(isForward);
        setActiveTransition(newTransition);
        hasInitializedRandom.current = true;
      }
    } else {
      // For specific transitions, set the selected variant
      const selectedVariant = transitionVariants.find(v => v.name === transitionType);
      if (selectedVariant) {
        setActiveTransition(selectedVariant);
      }
      // Reset random initialization flag when switching away from random
      hasInitializedRandom.current = false;
    }

    setPreviousSlide(currentSlide);
  }, [currentSlide, transitionType, previousSlide, getRandomTransition]);

  const transitionConfig = {
    initial: activeTransition.initial,
    animate: activeTransition.animate,
    exit: activeTransition.exit,
    transition: { duration: 0.6, ease: 'easeInOut' }
  };

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <AnimatePresence>
        <motion.div
          key={`${currentSlide}-${activeTransition.name}`}
          className="absolute inset-0 flex items-center justify-center"
          initial={transitionConfig.initial}
          animate={transitionConfig.animate}
          exit={transitionConfig.exit}
          transition={transitionConfig.transition}
          style={{ willChange: 'transform, opacity, clip-path' }}
        >
          {processedSvgContent ? (
            <img
              src={`data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(processedSvgContent)))}`}
              alt={`Slide ${currentSlide + 1}`}
              className="w-full h-full max-w-full max-h-full object-contain object-top"
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full">
              <div className="text-muted-foreground">Loading slide...</div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
