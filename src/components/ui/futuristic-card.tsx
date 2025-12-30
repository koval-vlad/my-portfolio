"use client";

import React, { useRef, useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card";
import { cn } from "@/lib/utils";

interface FuturisticCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glowColor?: string;
  tiltIntensity?: number;
  className?: string;
}

export const FuturisticCard: React.FC<FuturisticCardProps> = ({
  children,
  glowColor = "oklch(var(--primary))",
  tiltIntensity = 15,
  className,
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -tiltIntensity;
    const rotateY = ((x - centerX) / centerX) * tiltIntensity;

    setMousePosition({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative group",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${mousePosition.x}deg) rotateY(${mousePosition.y}deg) scale(1.05)`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
        transition: "transform 0.1s ease-out",
      }}
      {...props}
    >
      {/* Glow effect */}
      <div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
        style={{
          background: `radial-gradient(circle at center, ${glowColor}20 0%, transparent 70%)`,
        }}
      />

      {/* Border glow */}
      <div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(45deg, transparent, ${glowColor}30, transparent)`,
          filter: "blur(1px)",
        }}
      />

      {/* Main card */}
      <Card
        className={cn(
          "relative z-10 border-2 transition-all duration-300 overflow-hidden rounded-2xl",
          "border-2 border-white/40 bg-card/10 backdrop-blur-xl shadow-lg shadow-white/10",
          "group-hover:border-primary/50 group-hover:shadow-2xl",
          "group-hover:shadow-primary/20"
        )}
        style={{
          boxShadow: isHovered
            ? `0 25px 50px -12px ${glowColor}30, 0 0 0 1px ${glowColor}50`
            : undefined,
        }}
      >
        {children}
      </Card>

      {/* Animated border lines */}
      <div className="absolute inset-0 rounded-lg overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div
          className="absolute top-0 left-0 w-full h-0.5 animate-pulse"
          style={{ background: `linear-gradient(90deg, transparent, ${glowColor}, transparent)` }}
        />
        <div
          className="absolute bottom-0 left-0 w-full h-0.5 animate-pulse"
          style={{ background: `linear-gradient(90deg, transparent, ${glowColor}, transparent)` }}
        />
        <div
          className="absolute left-0 top-0 w-0.5 h-full animate-pulse"
          style={{ background: `linear-gradient(180deg, transparent, ${glowColor}, transparent)` }}
        />
        <div
          className="absolute right-0 top-0 w-0.5 h-full animate-pulse"
          style={{ background: `linear-gradient(180deg, transparent, ${glowColor}, transparent)` }}
        />
      </div>
    </div>
  );
};

// Export individual components for convenience
export {
  Card as FuturisticCardBase,
  CardHeader as FuturisticCardHeader,
  CardTitle as FuturisticCardTitle,
  CardDescription as FuturisticCardDescription,
  CardContent as FuturisticCardContent,
  CardFooter as FuturisticCardFooter,
};
