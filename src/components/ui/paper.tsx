import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const paperVariants = cva(
  "rounded-lg border-2 border-white/30 bg-card/10 backdrop-blur-xl text-card-foreground shadow-lg shadow-white/10",
  {
    variants: {
      elevation: {
        0: "shadow-none",
        1: "shadow-sm",
        2: "shadow",
        3: "shadow-md",
        4: "shadow-lg",
        5: "shadow-xl",
        6: "shadow-2xl",
      },
    },
    defaultVariants: {
      elevation: 1,
    },
  }
)

export interface PaperProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof paperVariants> {}

const Paper = React.forwardRef<HTMLDivElement, PaperProps>(
  ({ className, elevation, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(paperVariants({ elevation }), className)}
        {...props}
      />
    )
  }
)
Paper.displayName = "Paper"

export { Paper, paperVariants }
