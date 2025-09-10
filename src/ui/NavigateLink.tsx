import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

interface NavigateLinkPropsType {
  to: string
  name: string
}
export default function NavigateLink(props: NavigateLinkPropsType) {
  const { name, to } = props
  return (
    <div>
      <Link
        to={to}
        className="flex p-2 bg-blue-500/30 hover:bg-blue-500/60 rounded-lg justify-between gap-2 items-center hover:scale-105 w-36"
      >
        <ArrowRight />
        <p>{name}</p>
      </Link>
    </div>
  )
}
