//icons
import { ArrowRight } from "lucide-react";
//libraries
import { Link } from "react-router-dom";

interface NavigateLinkPropsType {
  to: string;
  name: string;
  description: string;
  className?: string;
}
export default function NavigateLink(props: NavigateLinkPropsType) {
  const { name, description, to, className } = props;
  return (
    <div className={`w-full  ${className}`}>
      <Link
        to={to}
        className="flex p-8 bg-blue-500/30 hover:bg-blue-500/60 rounded-lg  gap-8 items-center hover:scale-105 w-full text-primary-100"
      >
        <ArrowRight />
        <div className="flex flex-col gap-2">
          <p className="text-lg font-bold">{name}</p>
          <p className="text-sm">{description}</p>
        </div>
      </Link>
    </div>
  );
}
