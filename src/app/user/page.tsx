import { useState } from 'react'
import Filters, { type FiltersType } from './Filters'
import UserVoiceTable from './UserVoiceTable'
import { LogOut } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { logout } from '@/features/authSlice'

export default function User() {
  const dispatch = useDispatch()

  const [filters, setFilters] = useState<FiltersType>({
    isConfirmedVoice: 'null',
    search: '',
  })
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-4">
        <Filters filters={filters} setFilters={setFilters} />
        <LogOut
          className="text-secondary-500"
          onClick={() => dispatch(logout())}
        />
      </div>
      <UserVoiceTable filters={filters} />
    </div>
  )
}
