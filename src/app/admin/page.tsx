import LottieWrapper from '../../components/Lottie'
import Barchart from '../../ui/Barchart'
import NavigateLink from '../../ui/NavigateLink'
import StatiscticsCart from '../../ui/StatiscticsCart'

const data = [
  { x: 'کاربر 1', y: 4000 },
  { x: 'کاربر 2', y: 3000 },
  { x: 'کاربر 3', y: 2000 },
  { x: 'کاربر 4', y: 2780 },
  { x: 'کاربر 5', y: 1890 },
  { x: 'کاربر 6', y: 2390 },
  { x: 'کاربر 7', y: 3490 },
]
export default function AdminHome() {
  return (
    <div className="flex flex-col items-center gap-10 max-w-6xl mx-auto">
      <div className="flex items-center gpa-2">
        <NavigateLink name="گزارشات" to="/admin/report" />
        <LottieWrapper
          src="/json/statistics.json"
          loop
          autoplay
          className="h-36"
        />

        <NavigateLink name="افزودن متن" to="/admin/addText" />
      </div>
      <div className="grid grid-cols-12 gap-6">
        <StatiscticsCart
          statistics={15210}
          title="تعداد وویس های ضبط شده تا به حال"
          className="!bg-primary-300/20 col-span-12 sm:col-span-6 lg:col-span-3"
        />
        <StatiscticsCart
          statistics={15210}
          title="تعداد وویس های ضبط شده تا به حال"
          className="!bg-secondary-300/20 col-span-12 sm:col-span-6 lg:col-span-3"
        />
        <StatiscticsCart
          statistics={420}
          title="تعداد وویس های ضبط شده تا به حال"
          className="!bg-success/20 col-span-12 sm:col-span-6 lg:col-span-3"
        />
        <StatiscticsCart
          statistics={246574}
          title="تعداد وویس های ضبط شده تا به حال"
          className="!bg-danger/20 col-span-12 sm:col-span-6 lg:col-span-3"
        />
      </div>
      <Barchart data={data} chartTitle="تعداد وویس هر کاربر" />
    </div>
  )
}
