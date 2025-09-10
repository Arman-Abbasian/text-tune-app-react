import { useEffect, useState } from 'react'
import type { GetFilteredTrainingTexts } from '../../../services/types/Admin'
import Filters from './Filters'
import TextsSection from './TextsSection'
import { useLazyGetFilteredTrainingTextsQuery } from '../../../services/Admin'

// const list = [
//   {
//     text: 'متنی که توسط ادمین جهت خواندن کاربران اضافه شده است',
//     tags: ['تگ 1', 'تگ 2', 'تگ 3', 'تگ 4'],
//   },
//   {
//     text: 'متنی که توسط ادمین جهت خواندن کاربران اضافه شده است',
//     tags: ['تگ 1', 'تگ 2', 'تگ 3', 'تگ 4'],
//   },
//   {
//     text: 'متنی که توسط ادمین جهت خواندن کاربران اضافه شده است',
//     tags: ['تگ 1', 'تگ 2', 'تگ 3', 'تگ 4'],
//   },
//   {
//     text: 'متنی که توسط ادمین جهت خواندن کاربران اضافه شده است',
//     tags: ['تگ 1', 'تگ 2', 'تگ 3', 'تگ 4'],
//   },
//   {
//     text: 'متنی که توسط ادمین جهت خواندن کاربران اضافه شده است',
//     tags: ['تگ 1', 'تگ 2', 'تگ 3', 'تگ 4'],
//   },
//   {
//     text: 'متنی که توسط ادمین جهت خواندن کاربران اضافه شده است',
//     tags: ['تگ 1', 'تگ 2', 'تگ 3', 'تگ 4'],
//   },
// ]

const initialFilters: GetFilteredTrainingTexts = {
  isConfirmedVoice: 'null',
  searchText: '',
  isActiveText: true,
  shouldFilteredVoiceDateTime: true,
  startDateTime: null,
  endDateTime: null,
}

interface TextListPropsType {
  onItemSelect: (id: string) => void
}

export function TextList(props: TextListPropsType) {
  const { onItemSelect } = props

  const [filters, setFilters] =
    useState<GetFilteredTrainingTexts>(initialFilters)

  const [
    LazyGetFilteredTrainingTexts,
    {
      data: LazyGetFilteredTrainingTextsData,
      isFetching: LazyGetFilteredTrainingTextsLoading,
    },
  ] = useLazyGetFilteredTrainingTextsQuery()

  useEffect(() => {
    LazyGetFilteredTrainingTexts(filters)
  }, [])

  const filtersHandler = async () => {
    const data = await LazyGetFilteredTrainingTexts(filters).unwrap()
    console.log(data)
  }
  const resetHandler = async () => {
    setFilters(initialFilters)
    const data = await LazyGetFilteredTrainingTexts(initialFilters).unwrap()
    console.log(data)
  }

  return (
    <div className="flex flex-col h-full">
      <div className="mb-10">
        <p className="text-primary-500 mb-2">فیلتر</p>
        <Filters
          onFilter={filtersHandler}
          onReset={resetHandler}
          loading={LazyGetFilteredTrainingTextsLoading}
          filters={filters}
          setFilters={setFilters}
        />
      </div>
      <p className="text-primary-500 mb-2">لیست</p>
      <TextsSection
        loading={LazyGetFilteredTrainingTextsLoading}
        data={LazyGetFilteredTrainingTextsData?.data}
        onItemSelect={onItemSelect}
      />
      <div className="flex flex-col flex-1 gap-4 overflow-y-auto"></div>
    </div>
  )
}
