import { useEffect } from 'react'
import AudioRecorder from '../../../components/AudioRecorder'
import LottieWrapper from '../../../components/Lottie'
import ArrowBackComp from '../../../ui/ArrowBackComp'
import { useNavigate, useSearchParams } from 'react-router-dom'

export default function UserVoice() {
  const [searchParams] = useSearchParams()
  let navigate = useNavigate()
  const id = searchParams.get('id')
  const text = searchParams.get('text')
  useEffect(() => {
    if (!id || !text) {
      navigate('/user')
    }
  }, [])
  if (!id || !text) return
  return (
    <div className="text-primary-500 flex flex-col gap-8 items-center justify-center max-w-md mx-auto p-4 bg-white/30 backdrop-blur-xs rounded-lg relative">
      <ArrowBackComp href="/user" className="absolute left-2 top-2" />
      <LottieWrapper src="/json/speak.json" loop autoplay className="h-52" />
      <div className="flex flex-col gap-4 !bg-primary-100 rounded-2xl !p-2">
        <h5>پس از کلیک بر روی دکمه ضبط, متن زیر را بخوانید</h5>
        <p className="!bg-primary-700 rounded-2xl !p-4 !w-fit text-center text-primary-100 mb-10">
          {text}
        </p>
      </div>
      <AudioRecorder id={id} />
    </div>
  )
}
