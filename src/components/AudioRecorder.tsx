import { useAudioRecorder } from '../hooks/useAudioRecorder'
import ImageComp from '../ui/ImageComp'
import AudioPlayer from './AudioPlayer'

interface AudioRecorderPropsType {
  id: string
}
export default function AudioRecorder(props: AudioRecorderPropsType) {
  const { id } = props
  const { audioUrl, isRecording, stopRecording, startRecording, blobRef } =
    useAudioRecorder()

  return (
    <div className="flex flex-col items-center gap-4">
      {isRecording.current ? (
        <button
          onClick={stopRecording}
          className="bg-danger animate-pulse text-white w-24 h-24 p-4 rounded-full cursor-pointer shadow-2xl drop-shadow-2xl"
        >
          <ImageComp src={'/images/microphone.png'} alt="mic" />
        </button>
      ) : (
        <button
          onClick={startRecording}
          className="bg-primary-300 text-white w-24 h-24 p-4 rounded-full cursor-pointer shadow-2xl drop-shadow-2xl"
        >
          <ImageComp src={'/images/microphone.png'} alt="mic" />
        </button>
      )}
      {audioUrl && (
        <div className="flex flex-col gap-2">
          <AudioPlayer
            audioUrl={audioUrl}
            id={id}
            blobFile={blobRef.current}
            className="shadow-2xl drop-shadow-2xl"
          />
        </div>
      )}
    </div>
  )
}
