import { DotLottieReact } from '@lottiefiles/dotlottie-react'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-secondary-300 h-screen w-full">
      <p className=" text-2xl font-bold mb-10">
        به نرم افزار اصلاح صوت خوش آمدید
      </p>
      <p>منتظر بمانید...</p>

      <DotLottieReact src="/json/loading.json" loop autoplay className="h-96" />
    </div>
  )
}
