import * as React from "react"
import { cn } from "@/lib/utils"

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  sx?: Record<string, any>
}

const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  ({ className, sx, ...props }, ref) => {
    // Convert Material-UI sx prop to Tailwind classes
    const sxClasses = sx ? Object.entries(sx).map(([key, value]) => {
      // Simple conversion - in a real implementation you'd need more comprehensive conversion
      if (key === 'display' && value === 'flex') return 'flex'
      if (key === 'alignItems') return `items-${value}`
      if (key === 'justifyContent') return `justify-${value}`
      if (key === 'gap') return `gap-${value}`
      if (key === 'padding') return `p-${value}`
      if (key === 'paddingX') return `px-${value}`
      if (key === 'paddingY') return `py-${value}`
      if (key === 'margin') return `m-${value}`
      if (key === 'marginTop') return `mt-${value}`
      if (key === 'marginBottom') return `mb-${value}`
      if (key === 'marginLeft') return `ml-${value}`
      if (key === 'marginRight') return `mr-${value}`
      if (key === 'width') return `w-${value}`
      if (key === 'height') return `h-${value}`
      if (key === 'minHeight') return `min-h-${value}`
      if (key === 'backgroundColor') return `bg-${value}`
      if (key === 'borderRadius') return `rounded-${value}`
      if (key === 'flexDirection' && value === 'column') return 'flex-col'
      if (key === 'overflow') return `overflow-${value}`
      return ''
    }).filter(Boolean).join(' ') : ''

    return (
      <div
        ref={ref}
        className={cn(sxClasses, className)}
        {...props}
      />
    )
  }
)
Box.displayName = "Box"

export { Box }
