import * as React from "react"
import { cn } from "@/lib/utils"

const ListItemIcon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("mr-2 flex h-4 w-4 items-center justify-center", className)}
    {...props}
  />
))
ListItemIcon.displayName = "ListItemIcon"

export { ListItemIcon }
