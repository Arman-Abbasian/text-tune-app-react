import type { ReactNode } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../components/ui/dialog'
type ModalCompPropsType = {
  title: string
  description: string
  children: ReactNode
  open: boolean
  onOpenChange: (open: boolean) => void
}
export default function ModalComp(props: ModalCompPropsType) {
  const { description, children, title, onOpenChange, open } = props
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md  bg-secondary-100">
        <DialogHeader className="flex justify-center items-center gap-2">
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  )
}
