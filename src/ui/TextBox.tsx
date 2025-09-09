import type { ReactNode } from 'react'

type TextBoxPropsType = {
  children: ReactNode
  className?: string
}

export default function TextBox(props: TextBoxPropsType) {
  const { children, className } = props
  return (
    <p className={`w-fit !p-4 rounded-lg cursor-pointer ${className}`}>
      {children}
    </p>
  )
}
