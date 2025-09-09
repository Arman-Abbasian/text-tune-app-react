import Filters from './Filters'
import TextsSection from './TextsSection'

const list = [
  {
    text: 'متنی که توسط ادمین جهت خواندن کاربران اضافه شده است',
    tags: ['تگ 1', 'تگ 2', 'تگ 3', 'تگ 4'],
  },
  {
    text: 'متنی که توسط ادمین جهت خواندن کاربران اضافه شده است',
    tags: ['تگ 1', 'تگ 2', 'تگ 3', 'تگ 4'],
  },
  {
    text: 'متنی که توسط ادمین جهت خواندن کاربران اضافه شده است',
    tags: ['تگ 1', 'تگ 2', 'تگ 3', 'تگ 4'],
  },
  {
    text: 'متنی که توسط ادمین جهت خواندن کاربران اضافه شده است',
    tags: ['تگ 1', 'تگ 2', 'تگ 3', 'تگ 4'],
  },
  {
    text: 'متنی که توسط ادمین جهت خواندن کاربران اضافه شده است',
    tags: ['تگ 1', 'تگ 2', 'تگ 3', 'تگ 4'],
  },
  {
    text: 'متنی که توسط ادمین جهت خواندن کاربران اضافه شده است',
    tags: ['تگ 1', 'تگ 2', 'تگ 3', 'تگ 4'],
  },
]

export function TextList() {
  return (
    <div className="flex flex-col h-full">
      <div className="mb-10">
        <p className="text-primary-500 mb-2">فیلتر</p>
        <Filters />
      </div>
      <p className="text-primary-500 mb-2">لیست</p>
      <TextsSection />
      <div className="flex flex-col flex-1 gap-4 overflow-y-auto"></div>
    </div>
  )
}
