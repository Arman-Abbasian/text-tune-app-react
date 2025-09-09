import type { ReactNode } from 'react'
import BeatLoaderComp from './BeatLoaderComp'

type ButtonProps = {
  onsubmit?: () => void
  loading?: boolean
  text: string | ReactNode
  isFormButton?: boolean
  canClick?: boolean
  className: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const ButtonComp = (props: ButtonProps) => {
  const {
    onsubmit,
    loading,
    text,
    isFormButton = false,
    canClick,
    className,
    ...restProps
  } = props

  return (
    <button
      onClick={onsubmit}
      className={`py-3 px-8 rounded-md text-sm text-secondary-100 cursor-pointer flex justify-center items-center  ${
        isFormButton && canClick
          ? 'bg-primary-700 cursor-pointer'
          : 'bg-secondary-300 cursor-not-allowed'
      } ${className}`}
      {...restProps}
    >
      {loading ? <BeatLoaderComp /> : text}
    </button>
  )
}
export default ButtonComp
