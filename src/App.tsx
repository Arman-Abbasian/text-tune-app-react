import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { checkAuthFromStorage } from './features/authSlice'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkAuthFromStorage())
  }, [])

  return (
    <div className="!p-4 h-screen overflow-auto bg-[radial-gradient(circle,_#fbbf24,_#0f172a)] text-secondary-300">
      <Outlet />
    </div>
  )
}

export default App
