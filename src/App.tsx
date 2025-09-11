import { Suspense, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { checkAuthFromStorage } from './features/authSlice'
import BeatLoaderFetch from './ui/BeatLoaderFetch'
import { ToastContainer } from 'react-toastify'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkAuthFromStorage())
  }, [])

  return (
    <div className="!p-4 h-screen overflow-auto bg-[radial-gradient(circle,_#fef3c7,_#b45309)] text-secondary-900">
      <Suspense
        fallback={
          <div className="h-screen flex justify-center items-center">
            <BeatLoaderFetch />
          </div>
        }
      >
        <Outlet />
      </Suspense>
      <ToastContainer />
    </div>
  )
}

export default App
