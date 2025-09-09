import Filters from './Filters'
import UserVoiceTable from './UserVoiceTable'

export default function User() {
  return (
    <div className="flex flex-col gap-4">
      <Filters />
      <UserVoiceTable />
    </div>
  )
}
