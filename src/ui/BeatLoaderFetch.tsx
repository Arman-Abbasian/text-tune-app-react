//libraries
import { BeatLoader } from 'react-spinners'

const BeatLoaderFetch = () => {
  return (
    <div className="flex items-center gap-3">
      <p>در حال بارگزاری</p>
      <BeatLoader className="text-center" size={'12px'} color="#ffc300" />
    </div>
  )
}
export default BeatLoaderFetch
