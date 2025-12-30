import * as React from "react"
import { cn } from "@/lib/utils"

interface ListItemTextProps extends React.HTMLAttributes<HTMLDivElement> {
  primary?: string
  secondary?: string
}

const ListItemText = React.forwardRef<HTMLDivElement, ListItemTextProps>(
  ({ className, primary, secondary, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col", className)}
      {...props}
    >
      {primary && (
        <span className="text-sm font-medium leading-tight">{primary}</span>
      )}
      {secondary && (
        <span className="text-xs text-muted-foreground leading-tight">{secondary}</span>
      )}
      {children}
    </div>
  )
)
ListItemText.displayName = "ListItemText"

export { ListItemText }
