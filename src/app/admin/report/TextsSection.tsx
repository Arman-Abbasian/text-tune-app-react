import TagComp from '../../../ui/TagComp'
import BeatLoaderFetch from '../../../ui/BeatLoaderFetch'
import type {
  AddOrUpdateTrainingTextsRes,
  TrainingTextVoiceDto,
} from '@/services/types/Admin'

interface TextsSectionType {
  loading: boolean
  data: any
  onItemSelect: (id: TrainingTextVoiceDto[]) => void
}

export default function TextsSection(props: TextsSectionType) {
  const { loading, data, onItemSelect } = props

  if (loading) return <BeatLoaderFetch />

  if (data?.length > 0)
    return (
      <div className="flex flex-col gap-4">
        {data?.map((item: any, index: number) => {
          return (
            <TextItem key={index} item={item} onItemSelect={onItemSelect} />
          )
        })}
      </div>
    )

  return (
    <p className="text-primary-700 text-center">متنی جهت نمایش وجود ندارد</p>
  )
}

type TextItemPropsType = {
  item: AddOrUpdateTrainingTextsRes
  onItemSelect: (item: TrainingTextVoiceDto[]) => void
}
function TextItem(props: TextItemPropsType) {
  const { item, onItemSelect } = props
  const { text, trainingTextKeywordDtoList, trainingTextVoiceDtoList } = item

  return (
    <div
      className="flex flex-col gap-4 w-full bg-primary-100 text-primary-700 rounded-lg p-4 cursor-pointer"
      onClick={() => onItemSelect(trainingTextVoiceDtoList)}
    >
      <p>{text}</p>
      <div className="flex items-center gap-2 flex-wrap">
        {trainingTextKeywordDtoList.map((item) => {
          return <TagComp key={item.id}>{item.keyword}</TagComp>
        })}
      </div>
    </div>
  )
}
