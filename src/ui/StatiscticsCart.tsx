import { ChartSpline } from 'lucide-react'
import LogoBox from './LogoBox'

interface StatiscticsCartPropsType {
  className?: string
  title: string
  statistics: number
}
export default function StatiscticsCart(props: StatiscticsCartPropsType) {
  const { statistics, title, className } = props
  return (
    <div
      className={`w-56 h-56 backdrop-blur-2xl shadow-2xl drop-shadow-2xl rounded-lg relative p-4 flex flex-col gap-2 hover:scale-110 text-secondary-900/80 ${className}`}
    >
      <div className="flex justify-end">
        <LogoBox>
          <ChartSpline />
        </LogoBox>
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <p>{title}</p>
        <div className="flex justify-between items-center">
          <ChartSpline />
          <p>{statistics}</p>
        </div>
      </div>
    </div>
  )
}
