import { SearchIcon } from 'lucide-react'
import React, { useState } from 'react'
import SelectComp from '../../ui/SelectComp'
import TextInputComp from '../../components/TextInputComp'

const options = [
  { name: 'همه', value: '0' },
  { name: 'خوانده نشده', value: '1' },
  { name: 'رد شده', value: '2' },
]
export default function Filters() {
  const [filters, setFilters] = useState({ type: '0', search: '' })
  console.log(filters)
  const changeSelectHandler = (e: string, name: string) => {
    setFilters({ ...filters, [name]: e })
  }
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, search: e.target.value })
  }
  return (
    <div className="flex items-center gap-4">
      <SelectComp
        options={options}
        className="w-36"
        name="type"
        value={filters.type}
        onChange={(data) => changeSelectHandler(data, 'type')}
      />
      <TextInputComp
        placeholder="جستجوی متن"
        name="search"
        onChange={changeHandler}
        value={filters.search}
        icon={<SearchIcon className="!text-sm" />}
        className="max-w-md"
      />
    </div>
  )
}
