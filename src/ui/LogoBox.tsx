//types
import type { ReactNode } from "react";

interface LogoBoxPropsType {
  children: ReactNode;
  className?: string;
}
export default function LogoBox(props: LogoBoxPropsType) {
  const { children, className } = props;
  return (
    <div
      className={`w-10 h-10  backdrop-blur-2xl shadow-2xl p-2 drop-shadow-2xl rounded-lg flex justify-end hover:scale-110 hover:rotate-180 ${className}`}
    >
      {children}
    </div>
  );
}
