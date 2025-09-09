import { useLazyGetFilteredTrainingTextsQuery } from '../../../services/Admin'
import TagComp from '../../../ui/TagComp'

export default function TextsSection() {
  const [
    LazyGetFilteredTrainingTexts,
    {
      data: LazyGetFilteredTrainingTextsData,
      isFetching: LazyGetFilteredTrainingTextsLoading,
    },
  ] = useLazyGetFilteredTrainingTextsQuery()

  const data = LazyGetFilteredTrainingTextsData?.data || []
  return (
    <>
      {data.map((item: any, index: number) => {
        return <TextItem key={index} text={item.text} tags={item.tags} />
      })}
    </>
  )
}

type TextItemPropsType = {
  text: string
  tags: string[]
}
function TextItem(props: TextItemPropsType) {
  const { text, tags } = props

  return (
    <div className="flex flex-col gap-4 w-full bg-primary-100 text-primary-700 rounded-lg p-4">
      <p>{text}</p>
      <div className="flex items-center gap-2 flex-wrap">
        {tags.map((item) => {
          return <TagComp key={item}>{item}</TagComp>
        })}
      </div>
    </div>
  )
}
