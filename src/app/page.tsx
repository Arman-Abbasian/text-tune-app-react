import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { useEffect } from 'react'
import type { RootState } from '../store'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Home() {
  const { isAuthenticated, userRole } = useSelector(
    (state: RootState) => state.auth
  )

  let navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      if (!isAuthenticated) navigate('/auth/login')
      if (isAuthenticated && userRole === 'Admin') navigate('/admin')
      if (isAuthenticated && userRole === 'User') navigate('/user')
    }, 2000)
  }, [isAuthenticated])

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <p className=" text-2xl font-bold mb-10">
        به نرم افزار کلمات صوت خوش آمدید
      </p>
      <p>منتظر بمانید...</p>

      <DotLottieReact src="/json/loading.json" loop autoplay className="h-96" />
    </div>
  )
}
