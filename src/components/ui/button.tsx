import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background/60 backdrop-blur-md hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "text-foreground hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        glow: "relative bg-primary text-primary-foreground border border-primary/50 hover:bg-primary/95 transition-all duration-300 overflow-hidden group",
        glowSimple: "relative bg-primary text-primary-foreground border border-primary/50 hover:bg-primary/95 transition-all duration-300 group",
        super3d: "",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"

    if (variant === "glowSimple") {
      return (
        <div className="relative inline-block group">
          {/* Simple glow ring */}
          <div className="absolute inset-0 rounded-md blur-lg bg-gradient-to-r from-primary/50 via-primary/70 to-primary/50 group-hover:from-primary/70 group-hover:via-primary/90 group-hover:to-primary/70 transition-all duration-300" />

          {/* Main button */}
          <Comp
            className={cn(
              buttonVariants({ variant: "glow", size }),
              "relative z-10 border-2 border-primary/80 shadow-lg shadow-primary/30 group-hover:shadow-primary/50 group-hover:shadow-2xl transition-all duration-300",
              className
            )}
            ref={ref}
            {...props}
          />
        </div>
      )
    }

    if (variant === "super3d") {
      return (
        <div className="relative inline-block group">
          {/* Outer glow ring */}
          <div className="absolute inset-0 rounded-xl blur-xl bg-gradient-to-r from-primary/70 via-primary/100 to-primary/70 opacity-0 group-hover:opacity-100 transition-all duration-300" />

          <div className="perspective-distant relative z-10">
            <Comp
              className={cn(
                buttonVariants({ size }),
                "relative bg-primary text-primary-foreground italic font-bold px-8 py-4 rounded-xl border-2 border-primary/80",
                "shadow-[0_4px_0_0_theme(colors.foreground/0.3)]",
                "rotate-x-12 transform-gpu",
                "hover:rotate-x-0 hover:not-italic hover:shadow-[0_4px_0_0_theme(colors.foreground/0.3)]",
                "active:translate-y-[8px] active:shadow-none active:rotate-x-0",
                "transition-all duration-200 ease-out",
                className
              )}
              ref={ref}
              {...props}
            />
          </div>
        </div>
      )
    }

    if (variant === "glow") {
      return (
        <div className="relative inline-block group">
          {/* Outer glow ring */}
          <div className="absolute inset-0 rounded-md blur-lg bg-gradient-to-r from-primary/60 via-primary/80 to-primary/60 animate-pulse group-hover:from-primary/80 group-hover:via-primary/100 group-hover:to-primary/80 transition-all duration-500" />

          {/* Moving border animation */}
          <div className="absolute inset-0 rounded-md overflow-hidden">
            <div className="absolute inset-0 rounded-md bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-[spin_2s_linear_infinite] opacity-60" />
            <div className="absolute inset-0 rounded-md bg-gradient-to-r from-primary/50 via-transparent to-primary/50 animate-[spin_2s_linear_infinite_reverse] opacity-40" />
          </div>

          {/* Inner glow */}
          <div className="absolute inset-0.5 rounded-[5px] bg-gradient-to-r from-primary/20 to-primary/10 group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300" />

          {/* Animated border lines */}
          <div className="absolute inset-0 rounded-md overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse delay-300" />
            <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent animate-pulse delay-150" />
            <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent animate-pulse delay-450" />
          </div>

          {/* Main button */}
          <Comp
            className={cn(
              buttonVariants({ variant, size }),
              "relative z-10 border-2 border-primary/80 shadow-lg shadow-primary/20 group-hover:shadow-primary/40 group-hover:shadow-xl transition-all duration-300",
              className
            )}
            ref={ref}
            {...props}
          />
        </div>
      )
    }

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
