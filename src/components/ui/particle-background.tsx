"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface ParticleBackgroundProps {
  className?: string;
  weather?: 'sunny' | 'rain' | 'snow';
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  rotation: number;
  type: 'sunny' | 'rain' | 'snow';
}

export const ParticleBackground: React.FC<ParticleBackgroundProps> = ({
  className,
  weather,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const snowfallStartTime = useRef<number>(0);
  const isSnowing = useRef<boolean>(false);
  const lastWeatherRef = useRef(weather);
  const themeColorsRef = useRef({ foreground: '', primary: '' });

  useEffect(() => {
    // Update theme colors whenever weather changes
    const computedStyle = getComputedStyle(document.documentElement);
    themeColorsRef.current = {
      foreground: computedStyle.getPropertyValue('--foreground').trim(),
      primary: computedStyle.getPropertyValue('--primary').trim(),
    };

    // Handle weather changes
    if (weather === 'rain' || weather === 'snow') {
      // Start/create particles immediately when weather is rain or snow
      particlesRef.current = [];
      snowfallStartTime.current = 0; // Reset timer to start immediately
      isSnowing.current = true;
    } else if (weather === 'sunny') {
      // Clear all particles when switching to sunny
      particlesRef.current = [];
      isSnowing.current = false;
    }
    lastWeatherRef.current = weather;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create particles based on weather
    const createParticles = (count: number = 2) => {
      if (weather === 'sunny') return; // No particles for sunny weather

      for (let i = 0; i < count; i++) {
        const particle = {
          x: Math.random() * canvas.width,
          y: -20, // Start just above screen
          vx: (Math.random() - 0.5) * (weather === 'rain' ? 0.2 : 0.1), // More drift for rain
          vy: weather === 'rain'
            ? Math.random() * 0.01 + 0.008 // Rain falls faster (0.008-0.018)
            : Math.random() * 0.005 + 0.0025, // Snow falls slower
          size: weather === 'rain'
            ? Math.random() * 6 + 6 // 6-12px for rain (realistic drop size)
            : Math.random() * 8 + 6, // 6-14px for snow (larger)
          color: weather === 'rain'
            ? themeColorsRef.current.primary // Rain color
            : themeColorsRef.current.foreground, // Snow color
          rotation: weather === 'snow' ? Math.random() * Math.PI * 2 : 0, // Rotation only for snow
          type: weather, // Store particle type
        };

        particlesRef.current.push(particle);
      }
    };

    // No initial snowflakes - they will be created by the timer

    // No mouse interaction needed for snowflakes

    // Animation loop
    const animate = (currentTime: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update theme colors every frame (in case theme changed)
      // Check if we're in dark mode by looking at the document classes
      const isDark = document.documentElement.classList.contains('dark') ||
                    document.documentElement.className.includes('dark');


      // Debug: Use obviously different colors to test theme detection
      const lightColor = 'rgb(255, 255, 255)';  // Pure white for testing
      const darkColor = 'rgb(0, 0, 0)';         // Pure black for testing

      // Use obviously different colors for testing
      themeColorsRef.current = {
        foreground: isDark ? lightColor : 'rgb(173, 216, 230)', // Light blue snow for light theme
        primary: isDark
          ? 'rgb(173, 216, 230)'  // Light blue for dark theme
          : 'rgb(30, 144, 255)',  // Darker blue for light theme
      };

      // Debug logging to see theme detection (occasionally to avoid spam)
      if (Math.random() < 0.01) {
        console.log('Theme detection:', { isDark, classes: document.documentElement.className });
      }

      // Update existing particles' colors if theme changed
      particlesRef.current.forEach((particle) => {
        if (particle.type === 'rain') {
          particle.color = themeColorsRef.current.primary;
        } else if (particle.type === 'snow') {
          particle.color = themeColorsRef.current.foreground;
        }
      });

      // Handle particle creation based on weather
      if (weather === 'rain' || weather === 'snow') {
        // Continuous particle creation for rain and snow
        if (!isSnowing.current) {
          // Start particle creation
          isSnowing.current = true;
          snowfallStartTime.current = currentTime;
        }

        // Create particles every 2 seconds when weather is active
        if (currentTime - snowfallStartTime.current > 2000 && particlesRef.current.length < 6) {
          createParticles(2); // Add 2 particles at a time
          snowfallStartTime.current = currentTime;
        }
      } else { // Sunny weather
        if (isSnowing.current) {
          // Stop particle creation and clear existing particles
          isSnowing.current = false;
          particlesRef.current = []; // Clear all particles
        }
      }

      particlesRef.current.forEach((particle) => {
        // Add gravity (constant downward acceleration)
        particle.vy += 0.02; // Gravity effect

        // Gentle horizontal drift
        particle.vx += (Math.random() - 0.5) * 0.01;

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Reset snowflake when it goes off screen
        if (particle.y > canvas.height + 20) {
          particle.x = Math.random() * canvas.width;
          particle.y = -20; // Reset above screen
          particle.vx = (Math.random() - 0.5) * 0.5; // Reset horizontal drift
          particle.vy = Math.random() * 1 + 0.5; // Reset downward velocity
        }

        // Wrap around horizontally
        if (particle.x < -20) particle.x = canvas.width + 20;
        if (particle.x > canvas.width + 20) particle.x = -20;

        // Draw particle based on type
        ctx.save();
        ctx.translate(particle.x, particle.y);

        if (particle.type === 'rain') {
          // Draw realistic raindrop (teardrop shape)
          ctx.beginPath();

          // Create teardrop shape: wider at top, pointed at bottom
          const width = particle.size * 0.3; // Width of the drop
          const height = particle.size * 2; // Height of the drop

          // Top curve (rounded)
          ctx.ellipse(0, -height/2, width/2, width/3, 0, Math.PI, 0, false);

          // Bottom point (teardrop shape)
          ctx.quadraticCurveTo(width/4, height/2, 0, height);
          ctx.quadraticCurveTo(-width/4, height/2, -width/2, -height/2 + width/3);

          ctx.closePath();
          ctx.fillStyle = particle.color;
          ctx.fill();

          // Optional: Add highlight/reflection for realism
          ctx.beginPath();
          ctx.ellipse(-width/6, -height/3, width/8, width/6, -Math.PI/6, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
          ctx.fill();
        } else {
          // Draw snowflake with rotation
          ctx.rotate(particle.rotation || 0);
          particle.rotation = (particle.rotation || 0) + 0.01; // Slow rotation

          // Draw snowflake shape (simple 6-pointed star)
          ctx.beginPath();
          const spikes = 6;
          const outerRadius = particle.size;
          const innerRadius = particle.size * 0.4;

          for (let i = 0; i < spikes * 2; i++) {
            const radius = i % 2 === 0 ? outerRadius : innerRadius;
            const angle = (i * Math.PI) / spikes;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.closePath();

          ctx.fillStyle = particle.color;
          ctx.fill();
        }

        // Add subtle glow for both types
        ctx.shadowBlur = particle.type === 'rain' ? 2 : 3; // Less blur for rain
        // Create shadow color with lower opacity
        if (particle.color.startsWith('rgb(')) {
          // For RGB colors, add alpha
          ctx.shadowColor = particle.color.replace('rgb(', 'rgba(').replace(')', ', 0.2)');
        } else {
          // Fallback
          ctx.shadowColor = particle.color;
        }
        ctx.fill();
        ctx.shadowBlur = 0;

        ctx.restore();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [weather]);

  return (
    <div className={cn("bg-transparent", className)}>
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ display: "block" }}
      />
    </div>
  );
};
