import TagComp from '../../../ui/TagComp'
import BeatLoaderComponent from '../../../ui/BeatLoaderComp'

interface TextsSectionType {
  loading: boolean
  data: any
}

export default function TextsSection(props: TextsSectionType) {
  const { loading, data } = props

  if (loading) return <BeatLoaderComponent />

  if (data?.length > 0)
    return (
      <>
        {data?.map((item: any, index: number) => {
          return <TextItem key={index} text={item.text} tags={item.tags} />
        })}
      </>
    )

  return (
    <p className="text-primary-700 text-center">متنی جهت خواندن وجود ندارد</p>
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
