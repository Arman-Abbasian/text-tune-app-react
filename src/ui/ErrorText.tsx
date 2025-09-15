import { RefreshCcw } from "lucide-react";

interface ErrorTextPropsType {
  refetch: () => void;
}
const ErrorText = (props: ErrorTextPropsType) => {
  const { refetch } = props;
  return (
    <div className="flex items-center gap-3 text-danger bg-white/20 backdrop-blur-lg p-2 rounded-lg">
      <p className="text-xs">مشکل در دریافت داده</p>
      <RefreshCcw size={15} onClick={refetch} className="cursor-pointer" />
    </div>
  );
};
export default ErrorText;
