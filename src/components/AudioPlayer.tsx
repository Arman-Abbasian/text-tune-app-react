//libraries
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Download, Pause, Play } from "lucide-react";
//hooks
import { useEffect, useRef, useState } from "react";
//stores
import { useAddOrUpdateTrainingTextVoicesMutation } from "../services/User";
//components
import ButtonComp from "@/ui/ButtonComp";
import { handleMutationApiCall } from "@/utils/handleMutationApiCall";
import { useNavigate } from "react-router-dom";

type AudioPlayerPropsType = {
  audioUrl: string;
  id?: string;
  blobFile?: Blob | null;
  shouldSendVoice?: boolean;
  className?: string;
};

export default function AudioPlayer(props: AudioPlayerPropsType) {
  const { audioUrl, id, blobFile, className, shouldSendVoice = false } = props;

  let navigate = useNavigate();

  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const [
    AddOrUpdateTrainingTextVoices,
    { isLoading: AddOrUpdateTrainingTextVoicesLoading },
  ] = useAddOrUpdateTrainingTextVoicesMutation();

  useEffect(() => {
    const audioEl = audioRef.current;
    if (!audioEl) return;

    const handleEnded = () => {
      setIsPlaying(false);
    };

    audioEl.addEventListener("ended", handleEnded);

    return () => {
      audioEl.removeEventListener("ended", handleEnded);
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const sendVoiceHandler = async () => {
    if (!blobFile) {
      alert("هیچ صدایی ضبط نشده");
      return;
    }

    const formData = new FormData();
    formData.append("formFile", blobFile, "recording.webm");
    formData.append("Id", "0");
    formData.append("TrainingTextId", String(id));
    formData.append("InsertedUserDescription", "");

    await handleMutationApiCall(
      () => AddOrUpdateTrainingTextVoices(formData).unwrap(),
      () => {
        navigate("/user");
      },
      () => {},
      "ویس با موفقیت ارسال شد"
    );
  };

  return (
    <div
      className={`bg-white/70 backdrop-blur-2xl rounded-lg p-1 flex justify-between items-center gap-2 !w-full ${className}`}
    >
      <a href={audioUrl} download>
        <Download className="w-10 text-primary-700" />
      </a>
      <DotLottieReact
        src="/json/play.json"
        loop
        autoplay
        className="w-full h-10 flex justify-center"
      />

      <button onClick={togglePlay} className="cursor-pointer block h-full">
        {isPlaying ? (
          <Pause className="w-8 h-8" />
        ) : (
          <Play className="w-8 h-8" />
        )}
      </button>

      {shouldSendVoice && (
        <ButtonComp
          text="تایید و ارسال"
          isFormButton
          canClick
          loading={AddOrUpdateTrainingTextVoicesLoading}
          disabled={AddOrUpdateTrainingTextVoicesLoading}
          className="bg-secondary-500 w-full"
          onsubmit={sendVoiceHandler}
        />
      )}

      {/* Hidden audio element */}
      <audio ref={audioRef} src={audioUrl} />
    </div>
  );
}
