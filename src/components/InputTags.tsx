import React, { useState, useRef } from 'react'
import { X } from 'lucide-react'

type InputTagsPropsType = {
  placeholder: string
  initialTags: string[]
  maxTags: number
  className: string
  tags: string[]
  name: string
  setTags: React.Dispatch<React.SetStateAction<string[]>>
}

export default function InputTags(props: InputTagsPropsType) {
  const {
    placeholder = '',
    maxTags,
    className = '',
    name,
    tags,
    setTags,
  } = props

  const [inputValue, setInputValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const addTag = (tagText: string) => {
    const trimmedTag = tagText.trim()

    // چک کردن اینکه تگ خالی نباشه
    if (!trimmedTag) return

    // چک کردن تکراری نبودن
    if (tags.includes(trimmedTag)) return

    // چک کردن حد مجاز
    if (maxTags && tags.length >= maxTags) return

    const newTags = [...tags, trimmedTag]
    setTags(newTags)
    setInputValue('')
  }

  const removeTag = (indexToRemove: number) => {
    const newTags = tags.filter((_, index) => index !== indexToRemove)
    setTags(newTags)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      addTag(inputValue)
    } else if (e.key === 'Backspace' && !inputValue && tags.length > 0) {
      removeTag(tags.length - 1)
    }
  }

  const handleInputBlur = () => {
    if (inputValue.trim()) {
      addTag(inputValue)
    }
  }

  const isMaxReached = maxTags && tags.length >= maxTags

  return (
    <div className={`w-full ${className}`}>
      <div
        className={`
          flex flex-wrap gap-2 rounded-md bg-primary-100 p-3 text-sm 
          disabled:cursor-not-allowed disabled:opacity-50
          ${isMaxReached ? 'border-destructive' : ''}
        `}
        onClick={() => inputRef.current?.focus()}
      >
        {tags.map((tag, index) => (
          <div
            key={index}
            className="inline-flex items-center gap-1 rounded-md bg-primary-300 px-2 py-1 text-xs text-primary-700"
          >
            <span>{tag}</span>
            <button
              type="button"
              className="ml-1 rounded-sm hover:bg-danger/80"
              onClick={(e) => {
                e.stopPropagation()
                removeTag(index)
              }}
            >
              <X className="h-3 w-3 hover:text-primary-100/80 cursor-pointer" />
            </button>
          </div>
        ))}

        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={handleInputBlur}
          placeholder={isMaxReached ? 'حد مجاز رسیده' : placeholder}
          disabled={!!isMaxReached}
          name={name}
          className="flex-1 border-0 bg-transparent p-0 placeholder:text-primary-700/50  focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>
    </div>
  )
}
