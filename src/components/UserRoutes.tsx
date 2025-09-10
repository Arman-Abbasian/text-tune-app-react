import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import BeatLoaderComponent from '../ui/BeatLoaderComp'
import type { RootState } from '../store'

export default function UserRoutes() {
  const { isAuthenticated, userRole } = useSelector(
    (state: RootState) => state.auth
  )

  if (isAuthenticated === false) {
    return <Navigate to="/auth/login" replace />
  }
  if (isAuthenticated && userRole === 'Admin') {
    return <Navigate to="/admin" replace />
  }

  return (
    <div className="h-full">
      {isAuthenticated === null ? <BeatLoaderComponent /> : <Outlet />}
    </div>
  )
}
