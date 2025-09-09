type TagCompPropsType = {
  children: string
}
export default function TagComp(props: TagCompPropsType) {
  const { children } = props
  return (
    <div className="w-fit px-3 py-1 rounded-full bg-primary-300 text-primary-700 hover:bg-primary-300">
      {children}
    </div>
  )
}
