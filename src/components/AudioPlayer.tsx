//libraries
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { Download } from 'lucide-react'
//hooks
import { useEffect, useRef, useState } from 'react'
//stores
import { useAddOrUpdateTrainingTextVoicesMutation } from '../services/User'
//components
import ImageComp from '@/ui/ImageComp'
import ButtonComp from '@/ui/ButtonComp'

type AudioPlayerPropsType = {
  audioUrl: string
  id?: string
  blobFile?: Blob | null
  shouldSendVoice?: boolean
  className?: string
}

export default function AudioPlayer(props: AudioPlayerPropsType) {
  const { audioUrl, id, blobFile, className, shouldSendVoice = false } = props

  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const [
    AddOrUpdateTrainingTextVoices,
    { isLoading: AddOrUpdateTrainingTextVoicesLoading },
  ] = useAddOrUpdateTrainingTextVoicesMutation()

  useEffect(() => {
    const audioEl = audioRef.current
    if (!audioEl) return

    const handleEnded = () => {
      setIsPlaying(false)
    }

    audioEl.addEventListener('ended', handleEnded)

    return () => {
      audioEl.removeEventListener('ended', handleEnded)
    }
  }, [])

  const togglePlay = () => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const sendVoiceHandler = () => {
    if (!blobFile) {
      alert('هیچ صدایی ضبط نشده')
      return
    }

    const formData = new FormData()
    formData.append('formFile', blobFile, 'recording.webm')
    formData.append('Id', '0')
    formData.append('TrainingTextId', String(id))
    formData.append('InsertedUserDescription', '')

    AddOrUpdateTrainingTextVoices(formData)
  }

  return (
    <div
      className={`bg-primary-100 rounded-lg  p-1 flex flex-col items-center gap-2 min-w-fit ${className}`}
    >
      <DotLottieReact
        src="/json/play.json"
        loop
        autoplay
        className="w-full h-10 flex justify-center"
      />
      <div className="flex justify-between items-center w-full gap-4">
        <a href={audioUrl} download>
          <Download className="w-10 text-primary-700" />
        </a>

        <button onClick={togglePlay} className="cursor-pointer block h-full">
          {isPlaying ? (
            <ImageComp
              alt="pause"
              src="/images/pause.png"
              className="w-10 h-10"
            />
          ) : (
            <ImageComp
              alt="play"
              src="/images/play.png"
              className="w-10 h-10"
            />
          )}
        </button>
      </div>
      {shouldSendVoice && (
        <ButtonComp
          text="تایید و ارسال"
          isFormButton
          canClick
          loading={AddOrUpdateTrainingTextVoicesLoading}
          disabled={AddOrUpdateTrainingTextVoicesLoading}
          className="bg-secondary-700 w-full"
          onsubmit={sendVoiceHandler}
        />
      )}

      {/* Hidden audio element */}
      <audio ref={audioRef} src={audioUrl} />
    </div>
  )
}
