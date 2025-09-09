import { Navigate, Outlet } from 'react-router-dom'

import { useSelector } from 'react-redux'
import type { RootState } from '../store'

export default function GuestRoutes() {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  )

  if (isAuthenticated === true) {
    return <Navigate to="/services" replace />
  }

  return <div className="h-full">{isAuthenticated === null && <Outlet />}</div>
}
