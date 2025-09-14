import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { useState } from 'react'
import { useAddOrUpdateTrainingTextsMutation } from '../../../services/Admin'
import ArrowBackComp from '../../../ui/ArrowBackComp'
import InputTags from '../../../components/InputTags'
import TextAreaComp from '../../../components/TextAreaComp'
import ButtonComp from '../../../ui/ButtonComp'
import { handleMutationApiCall } from '@/utils/handleMutationApiCall'

export default function AddTextForm() {
  const [tags, setTags] = useState<string[]>([])
  const [text, setText] = useState('')

  const [
    AddOrUpdateTrainingTexts,
    { isLoading: AddOrUpdateTrainingTextsLoading },
  ] = useAddOrUpdateTrainingTextsMutation()

  const submitHandler = async () => {
    await handleMutationApiCall(
      () =>
        AddOrUpdateTrainingTexts({
          id: 0,
          text,
          isActive: true,
          addOrUpdateTrainingTextKeywordDtoList: tags.map((tag) => ({
            id: 0,
            keyword: tag,
          })),
        }).unwrap(),
      (data: any) => {
        console.log(data)
        setTags([])
        setText('')
      },
      () => {},
      'فرم با موفقیت ثبت شد'
    )
  }
  return (
    <div className="max-w-md mx-auto flex flex-col gap-8  p-4 bg-white/30 backdrop-blur-xs rounded-lg relative">
      <ArrowBackComp href="/admin" className="absolute left-2 top-2" />
      <DotLottieReact src="/json/form.json" loop autoplay className="h-36" />
      <InputTags
        tags={tags}
        setTags={setTags}
        placeholder="عناوین اصلی را وارد نمایید..."
        maxTags={10}
        className=""
        initialTags={tags}
        name="tags"
      />
      <TextAreaComp
        value={text}
        name="text"
        onChange={(e) => setText(e.target.value)}
        placeholder="متن خود را وارد نمایید..."
      />
      <ButtonComp
        className={`flex-1 hover:bg-primary-100 hover:text-primary-700 text-secondary-100 `}
        isFormButton={true}
        canClick={true}
        type="submit"
        disabled={
          tags.length === 0 ||
          text.trim() === '' ||
          AddOrUpdateTrainingTextsLoading
        }
        loading={AddOrUpdateTrainingTextsLoading}
        text="افزودن"
        onsubmit={submitHandler}
      />
    </div>
  )
}
