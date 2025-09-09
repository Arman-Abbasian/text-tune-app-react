import ImageComp from '../../../ui/ImageComp'
import LoginForm from './LoginForm'

export default function Login() {
  return (
    <div className="flex justify-center items-center h-full w-full relative">
      <div className="absolute !w-24 top-0 left-40  animate-floatYPlus">
        <ImageComp src="/images/sphere.png" alt="sphere" />
      </div>

      <div className="absolute w-24 top-60 left-16 animate-floatXPlus">
        <ImageComp src="/images/sphere.png" alt="sphere" />
      </div>

      <div className="absolute w-24 top-0 right-[50%] animate-floatXMinus">
        <ImageComp src="/images/sphere.png" alt="sphere" />
      </div>

      <div className="absolute w-24 bottom-0 right-3.5  animate-floatYMinus">
        <ImageComp src="/images/sphere.png" alt="sphere" />
      </div>

      <div className="absolute w-24 top-72 right-[40%]  animate-floatYPlus">
        <ImageComp src="/images/sphere.png" alt="sphere" />
      </div>

      <div className="absolute w-24 bottom-10 left-60  !animate-floatXPlus">
        <ImageComp src="/images/sphere.png" alt="sphere" />
      </div>

      <div className="absolute w-24 top-10 right-10 animate-floatXMinus">
        <ImageComp src="/images/sphere.png" alt="sphere" />
      </div>

      <div className="absolute w-24 top-96 right-10 animate-floatXPlus">
        <ImageComp src="/images/sphere.png" alt="sphere" />
      </div>

      <div className="absolute w-24 top-[50%] left-[50%]  animate-floatXMinus">
        <ImageComp src="/images/sphere.png" alt="sphere" />
      </div>
      <div className="absolute w-24 bottom-[80%] left-[70%] animate-floatXPlus">
        <ImageComp src="/images/sphere.png" alt="sphere" />
      </div>

      <div className="absolute w-24 bottom-[20%] left-[20%]  animate-floatXMinus">
        <ImageComp src="/images/sphere.png" alt="sphere" />
      </div>

      <div className="bg-white/30 backdrop-blur-xs container mx-auto max-w-4xl p-2 h-[80%] rounded-xl shadow-2xl drop-shadow-2xl flex justify-center items-center">
        <div className="w-80 h-[500px] bg-white/30 backdrop-blur-xs rounded-xl overflow-hidden p-4">
          <LoginForm />
        </div>
      </div>
    </div>
  )
}
