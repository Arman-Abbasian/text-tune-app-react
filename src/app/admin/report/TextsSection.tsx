import TagComp from '../../../ui/TagComp'
import BeatLoaderComponent from '../../../ui/BeatLoaderComp'

interface TextsSectionType {
  loading: boolean
  data: any
  onItemSelect: (id: string) => void
}

export default function TextsSection(props: TextsSectionType) {
  const { loading, data, onItemSelect } = props

  if (loading) return <BeatLoaderComponent />

  if (data?.length > 0)
    return (
      <>
        {data?.map((item: any, index: number) => {
          return (
            <TextItem key={index} item={item} onItemSelect={onItemSelect} />
          )
        })}
      </>
    )

  return (
    <p className="text-primary-700 text-center">متنی جهت خواندن وجود ندارد</p>
  )
}

type TextItemPropsType = {
  item: any
  onItemSelect: (id: string) => void
}
function TextItem(props: TextItemPropsType) {
  const { item, onItemSelect } = props
  const { text, tags, id } = item

  return (
    <div
      className="flex flex-col gap-4 w-full bg-primary-100 text-primary-700 rounded-lg p-4"
      onClick={() => onItemSelect(id)}
    >
      <p>{text}</p>
      <div className="flex items-center gap-2 flex-wrap">
        {tags.map((item: any) => {
          return <TagComp key={item}>{item}</TagComp>
        })}
      </div>
    </div>
  )
}
