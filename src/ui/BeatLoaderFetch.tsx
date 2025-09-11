import { BeatLoader } from 'react-spinners'

const BeatLoaderFetch = () => {
  return (
    <div className="flex items-center gap-1">
      <p>در حال بارگزاری</p>
      <BeatLoader className="text-center" size={'12px'} color="#fff" />
    </div>
  )
}
export default BeatLoaderFetch
