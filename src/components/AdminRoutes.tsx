import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import type { RootState } from '../store'
import BeatLoaderFetch from '../ui/BeatLoaderFetch'

export default function AdminRoutes() {
  const { isAuthenticated, userRole } = useSelector(
    (state: RootState) => state.auth
  )

  if (isAuthenticated === false) {
    return <Navigate to="/auth/login" replace />
  }
  if (isAuthenticated && userRole === 'User') {
    return <Navigate to="/user" replace />
  }

  return (
    <div className="h-full">
      {isAuthenticated === null ? <BeatLoaderFetch /> : <Outlet />}
    </div>
  )
}
