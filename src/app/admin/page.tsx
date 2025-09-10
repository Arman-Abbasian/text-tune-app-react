import StatiscticsCart from '../../ui/StatiscticsCart'

export default function AdminHome() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-6 items-center">
        <StatiscticsCart
          statistics={15210}
          title="تعداد وویس های ضبط شده تا به حال"
          className="!bg-amber-300/20"
        />
        <StatiscticsCart
          statistics={15210}
          title="تعداد وویس های ضبط شده تا به حال"
          className="!bg-amber-300/20"
        />
        <StatiscticsCart
          statistics={15210}
          title="تعداد وویس های ضبط شده تا به حال"
          className="!bg-amber-300/20"
        />
        <StatiscticsCart
          statistics={15210}
          title="تعداد وویس های ضبط شده تا به حال"
          className="!bg-amber-300/20"
        />
      </div>
    </div>
  )
}
