import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import BeatLoaderComponent from '../ui/BeatLoaderComp'
import type { RootState } from '../store'

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

  return <div className="h-full">{isAuthenticated === null && <Outlet />}</div>
}
