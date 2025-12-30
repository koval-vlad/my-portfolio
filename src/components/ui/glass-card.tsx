"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Base glass effect - frosted glass with backdrop blur
          "relative backdrop-blur-2xl bg-black/5",
          // Alternative solid background for visibility
          // "bg-slate-800/90",
          // Border
          "border-2 border-white/50",
          // Rounded corners
          "rounded-lg",
          // Overflow hidden for the glow effect
          "overflow-hidden",
          className
        )}
        style={{
          // Neon glow on bottom-right corner using box-shadow
          boxShadow: `
            inset 0 0 0 1px rgba(255, 255, 255, 0.2),
            0 0 30px rgba(var(--primary), 0.5),
            0 0 60px rgba(var(--primary), 0.3),
            0 0 120px rgba(var(--primary), 0.2)
          `,
        }}
        {...props}
      >
        {/* Scanline overlay using pseudo-element via CSS-in-JS */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 1px,
                rgba(255, 255, 255, 0.08) 1px,
                rgba(255, 255, 255, 0.08) 2px
              )
            `,
            content: '""',
          }}
        />
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    )
  }
)

GlassCard.displayName = "GlassCard"

export { GlassCard }
