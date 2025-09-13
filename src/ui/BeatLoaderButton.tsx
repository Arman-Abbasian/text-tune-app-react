//libraries
import { BeatLoader } from "react-spinners";

type BeatLoaderButtonPropsType = {
  color?: string;
};
const BeatLoaderButton = (props: BeatLoaderButtonPropsType) => {
  const { color = '"#fff"' } = props;
  return <BeatLoader className="text-center" size={"9px"} color={color} />;
};
export default BeatLoaderButton;
