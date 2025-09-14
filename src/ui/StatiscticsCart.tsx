//libraries
import { ChartSpline } from 'lucide-react'
//components
import LogoBox from './LogoBox'
import BeatLoaderButton from './BeatLoaderButton'

interface StatiscticsCartPropsType {
  className?: string
  title: string
  statistics: number
  loading: boolean
}
export default function StatiscticsCart(props: StatiscticsCartPropsType) {
  const { statistics, title, className, loading } = props
  return (
    <div
      className={`w-56 h-56 !bg-white/20  backdrop-blur-md shadow-2xl drop-shadow-2xl rounded-lg relative p-4 flex flex-col gap-2 hover:scale-110 text-primary-900 ${className}`}
    >
      <div className="flex justify-end">
        <LogoBox className="bg-secondary-100 text-primary-300">
          <ChartSpline />
        </LogoBox>
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <p>{title}</p>
        <div className="flex justify-between items-center">
          <ChartSpline />
          {loading ? (
            <p>
              <BeatLoaderButton color="#000" />
            </p>
          ) : (
            <p className="text-secondary-500">{statistics}</p>
          )}
        </div>
      </div>
    </div>
  )
}
