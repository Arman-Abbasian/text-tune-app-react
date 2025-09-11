import { Navigate, Outlet } from 'react-router-dom'

import { useSelector } from 'react-redux'
import type { RootState } from '../store'
import BeatLoaderFetch from '../ui/BeatLoaderFetch'

export default function GuestRoutes() {
  const { isAuthenticated, userRole } = useSelector(
    (state: RootState) => state.auth
  )

  if (isAuthenticated === true) {
    if (userRole === 'Admin') {
      return <Navigate to="/admin" replace />
    } else {
      return <Navigate to="/user" replace />
    }
  }

  return (
    <div className="h-full">
      {isAuthenticated === null ? <BeatLoaderFetch /> : <Outlet />}
    </div>
  )
}
