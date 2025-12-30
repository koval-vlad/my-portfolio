"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface BackgroundBeamsWithCollisionProps {
  className?: string;
}

export const BackgroundBeamsWithCollision: React.FC<BackgroundBeamsWithCollisionProps> = ({
  className,
}) => {
  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden",
        className
      )}
    >
      {/* Primary beams with collision effects */}
      <div className="absolute inset-0">
        {/* Horizontal beams */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-pulse" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-pulse delay-1000" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent animate-pulse delay-500" />

        {/* Vertical beams */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent animate-pulse" />
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-pulse delay-1000" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-primary/25 to-transparent animate-pulse delay-500" />

        {/* Diagonal beams for collision effect */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-primary/20 via-transparent to-primary/20 animate-pulse origin-left transform rotate-45" />
          <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-primary/15 via-transparent to-primary/15 animate-pulse delay-750 origin-right transform -rotate-45" />
        </div>
      </div>

      {/* Collision particles at intersection points */}
      <div className="absolute inset-0">
        {/* Center collision */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-2 h-2 bg-primary/40 rounded-full animate-ping" />
          <div className="absolute inset-0 w-2 h-2 bg-primary/20 rounded-full animate-pulse" />
        </div>

        {/* Corner collisions */}
        <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-1.5 h-1.5 bg-primary/30 rounded-full animate-ping delay-300" />
        </div>
        <div className="absolute top-1/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-1.5 h-1.5 bg-primary/25 rounded-full animate-ping delay-600" />
        </div>
        <div className="absolute top-3/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-1.5 h-1.5 bg-primary/35 rounded-full animate-ping delay-900" />
        </div>
        <div className="absolute top-3/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-1.5 h-1.5 bg-primary/20 rounded-full animate-ping delay-1200" />
        </div>
      </div>

      {/* Floating particles with collision trajectories */}
      <div className="absolute inset-0">
        <div className="absolute top-1/6 left-1/6 w-1 h-1 bg-primary/40 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '2s' }} />
        <div className="absolute top-1/3 left-5/6 w-1 h-1 bg-primary/30 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '2.5s' }} />
        <div className="absolute top-2/3 left-1/3 w-1 h-1 bg-primary/35 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }} />
        <div className="absolute top-5/6 left-2/3 w-1 h-1 bg-primary/25 rounded-full animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '2.8s' }} />

        {/* Additional particles for collision effect */}
        <div className="absolute top-1/4 left-1/2 w-0.5 h-0.5 bg-primary/50 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/4 w-0.5 h-0.5 bg-primary/45 rounded-full animate-ping" style={{ animationDelay: '2.5s' }} />
        <div className="absolute top-3/4 left-1/2 w-0.5 h-0.5 bg-primary/40 rounded-full animate-ping" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-3/4 w-0.5 h-0.5 bg-primary/35 rounded-full animate-ping" style={{ animationDelay: '3.5s' }} />
      </div>

      {/* Energy wave effects at collision points */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-8 h-8 border border-primary/20 rounded-full animate-ping" style={{ animationDelay: '1s', animationDuration: '4s' }} />
          <div className="absolute inset-0 w-12 h-12 border border-primary/10 rounded-full animate-ping" style={{ animationDelay: '2s', animationDuration: '5s' }} />
          <div className="absolute inset-0 w-16 h-16 border border-primary/5 rounded-full animate-ping" style={{ animationDelay: '3s', animationDuration: '6s' }} />
        </div>
      </div>

      {/* Subtle gradient overlay with collision tint */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/2 to-transparent opacity-30" />
    </div>
  );
};
