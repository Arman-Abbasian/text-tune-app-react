import DatePicker from 'react-multi-date-picker'

import persian from 'react-date-object/calendars/persian'
import persian_fa from 'react-date-object/locales/persian_fa'

import { Funnel, RotateCcw } from 'lucide-react'
import { useState } from 'react'
import moment from 'moment-jalaali'
import type { GetFilteredTrainingTexts } from '../../../services/types/Admin'
import { useLazyGetFilteredTrainingTextsQuery } from '../../../services/Admin'
import SelectComp from '../../../ui/SelectComp'
import TextInputComp from '../../../components/TextInputComp'
import ButtonComp from '../../../ui/ButtonComp'
import { Switch } from '@radix-ui/react-switch'
import { Label } from '../../../components/ui/label'

const options = [
  { name: 'همه', value: 'null' },
  { name: 'تایید شده', value: 'true' },
  { name: 'تایید نشده', value: 'false' },
]

interface FiltersPropsType {
  loading: boolean
}

const initialFilters: GetFilteredTrainingTexts = {
  isConfirmedVoice: 'null',
  searchText: '',
  isActiveText: true,
  shouldFilteredVoiceDateTime: true,
  startDateTime: null,
  endDateTime: null,
}

export default function Filters() {
  const [
    LazyGetFilteredTrainingTexts,
    { isFetching: LazyGetFilteredTrainingTextsLoading },
  ] = useLazyGetFilteredTrainingTextsQuery()

  const [filters, setFilters] =
    useState<GetFilteredTrainingTexts>(initialFilters)

  const changeHandler = (e: React.ChangeEvent<any>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value })
  }

  const changeSelectHandler = (e: any, name: string) => {
    setFilters({ ...filters, [name]: e })
  }

  const changeDateHandler = (date: any, name: string) => {
    const momentFromDate = moment(date.toDate()).format('jYYYY/jMM/jDD')
    setFilters({ ...filters, [name]: momentFromDate })
  }

  const changeSwitchHandler = (e: any, name: string) => {
    setFilters({ ...filters, [name]: e })
  }

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
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <SelectComp
          options={options}
          name="type"
          className="w-32"
          value={filters.isConfirmedVoice}
          onChange={(data) => changeSelectHandler(data, 'isConfirmedVoice')}
        />
        <TextInputComp
          name="searchText"
          onChange={changeHandler}
          value={filters.searchText}
          placeholder="search"
          className="flex-1"
        />
      </div>
      <div className="flex !items-center space-x-2">
        <Label htmlFor="airplane-mode" className="text-primary-500">
          تاریخ صوت
        </Label>
        <div dir="ltr">
          <Switch
            id="airplane-mode"
            className="data-[state=checked]:bg-primary-500 data-[state=unchecked]:bg-primary-500 border-0"
            name="shouldFilteredVoiceDateTime"
            checked={filters.shouldFilteredVoiceDateTime}
            onCheckedChange={(checked: any) =>
              changeSwitchHandler(checked, 'shouldFilteredVoiceDateTime')
            }
          />
        </div>
        <Label htmlFor="airplane-mode" className="text-primary-500">
          تاریخ متن
        </Label>
      </div>
      <div className="flex items-center gap-4">
        <DatePicker
          calendar={persian}
          locale={persian_fa}
          placeholder="از تاریخ"
          inputClass="!flex-1 w-full border border-primary-900 rounded-lg p-2 bg-primary-100"
          name="startDateTime"
          value={filters.startDateTime}
          onChange={(data) => changeDateHandler(data, 'startDateTime')}
        />
        <DatePicker
          calendar={persian}
          locale={persian_fa}
          placeholder="تا تاریخ"
          inputClass="!flex-1 w-full border border-primary-900 rounded-lg p-2 bg-primary-100"
          name="endDateTime"
          value={filters.endDateTime}
          onChange={(data) => changeDateHandler(data, 'endDateTime')}
        />
      </div>
      <div className="flex items-center gap-4">
        <ButtonComp
          className={`w-20 hover:bg-primary-100 hover:text-primary-700 text-secondary-100 `}
          isFormButton={true}
          canClick={true}
          type="submit"
          disabled={LazyGetFilteredTrainingTextsLoading}
          loading={LazyGetFilteredTrainingTextsLoading}
          onsubmit={filtersHandler}
          text={<Funnel className="!text-2xl" />}
        />
        <ButtonComp
          className={`w-20 hover:bg-primary-100 hover:text-primary-700 text-secondary-100 `}
          isFormButton={true}
          canClick={true}
          type="submit"
          disabled={LazyGetFilteredTrainingTextsLoading}
          loading={LazyGetFilteredTrainingTextsLoading}
          onsubmit={resetHandler}
          text={<RotateCcw className="!text-xl" />}
        />
      </div>
    </div>
  )
}
