import { DotLottieReact } from '@lottiefiles/dotlottie-react'

type LottiePropsType = {
  src: string
  loop: boolean
  autoplay: boolean
  className: string
}
export default function LottieWrapper(props: LottiePropsType) {
  const { autoplay = true, className = '', loop = true, src } = props
  return (
    <DotLottieReact
      src={src}
      loop={loop}
      autoplay={autoplay}
      className={className}
    />
  )
}
