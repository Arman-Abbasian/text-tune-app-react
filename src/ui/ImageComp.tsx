type ImageCompPropsType = {
  src: string
  alt: string
  className?: string
}
export default function ImageComp(props: ImageCompPropsType) {
  const { src, alt, className } = props
  return (
    <div className={`relative aspect-square ${className}`}>
      <img src={src} alt={alt} className="object-cover object-center" />
    </div>
  )
}
