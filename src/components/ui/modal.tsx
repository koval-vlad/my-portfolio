import * as React from "react"
import { Dialog } from "@/components/ui/dialog"

interface ModalProps {
  open: boolean
  onClose: () => void
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      {children}
    </Dialog>
  )
}

export { Modal }
