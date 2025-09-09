import { Eye, EyeClosedIcon } from 'lucide-react'
import React, { useState } from 'react'
import type { FieldError, FieldValues, UseFormRegister } from 'react-hook-form'

type InputType = 'text' | 'number' | 'password' | 'email' | 'tel'

interface FormInputProps {
  name: string
  label?: string
  placeholder?: string
  type?: InputType
  icon?: React.ReactNode
  register: UseFormRegister<FieldValues>
  error?: FieldError
  className?: string
  showTogglePassword?: boolean
}

export default function FormInput({
  name,
  label,
  placeholder,
  type = 'text',
  icon,
  register,
  error,
  className = '',
  showTogglePassword = false,
}: FormInputProps) {
  const [showPassword, setShowPassword] = useState(false)
  const isPassword = type === 'password'

  return (
    <div className={`!w-full ${className}`}>
      {label && (
        <label className="block mb-1 text-sm font-medium text-secondary-500">
          {label}
        </label>
      )}

      <div
        className={`flex justify-between items-center gap-2 w-full px-5 py-3 border rounded-2xl bg-primary-100 ${
          error ? 'border-danger' : 'border-secondary-300'
        }`}
      >
        <input
          {...register(name)}
          type={
            isPassword && showTogglePassword
              ? showPassword
                ? 'text'
                : 'password'
              : type
          }
          placeholder={placeholder}
          dir={'rtl'}
          className={`flex-1 text-secondary-900 focus:outline-none placeholder:text-xs placeholder:text-secondary-300`}
        />

        {icon && <span className="text-primary-700 text-lg">{icon}</span>}

        {isPassword && showTogglePassword && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? (
              <Eye className="icon-small" />
            ) : (
              <EyeClosedIcon className="icon-small" />
            )}
          </button>
        )}
      </div>

      {error && <p className="mt-1 text-sm text-danger">{error.message}</p>}
    </div>
  )
}
