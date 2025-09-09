import DatePicker from 'react-multi-date-picker'

import persian from 'react-date-object/calendars/persian'
import persian_fa from 'react-date-object/locales/persian_fa'
import type DateObject from 'react-date-object'

interface DatePickerCompPropsType {
  value: string | null
  onChange: (data: DateObject | null) => void
  name: string
  placeholder?: string
}
export default function DatePickerComp(props: DatePickerCompPropsType) {
  const { onChange, value, name, placeholder } = props
  return (
    <DatePicker
      calendar={persian}
      locale={persian_fa}
      placeholder={placeholder}
      inputClass="!flex-1 w-full border border-primary-900 rounded-lg p-2 text-primary-700 bg-primary-100 placeholder:text-primary-500/70 placeholder:text-sm"
      name={name}
      value={value}
      onChange={onChange}
    />
  )
}
