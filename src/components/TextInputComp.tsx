import React from 'react'

type TextInputCompPropsType = {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  name: string
  className?: string
  icon?: React.ReactNode
} & Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'name'
>

function TextInputComp(props: TextInputCompPropsType) {
  const { className, value, onChange, name, icon, ...restProps } = props

  return (
    <div
      className={`flex justify-between items-center gap-2 px-2 py-1 border rounded-lg bg-primary-100 border-secondary-300 w-full  ${className}`}
    >
      <input
        className="flex-1 min-w-0 p-2 focus:outline-none hover:outline-none text-primary-700"
        value={value}
        onChange={onChange}
        name={name}
        {...restProps}
      />
      {icon && <span className="text-primary-700">{icon}</span>}
    </div>
  )
}

export default TextInputComp
