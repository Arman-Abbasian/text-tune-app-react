import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

type ArrowBackCompPropsType = {
  href: string
  className?: string
}
export default function ArrowBackComp(props: ArrowBackCompPropsType) {
  const { href, className } = props
  return (
    <Link to={href}>
      <ArrowLeft className={`text-secondary-700 text-2xl ${className}`} />
    </Link>
  )
}
