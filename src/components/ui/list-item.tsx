import * as React from "react"
import { cn } from "@/lib/utils"

const ListItem = React.forwardRef<
  HTMLLIElement,
  React.HTMLAttributes<HTMLLIElement>
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn("", className)}
    {...props}
  />
))
ListItem.displayName = "ListItem"

export { ListItem }
