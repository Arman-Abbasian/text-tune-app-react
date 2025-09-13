//types
import type { TextareaHTMLAttributes } from "react";

type TextAreaCompPropsType = TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function TextAreaComp(props: TextAreaCompPropsType) {
  const { className, ...rest } = props;
  return (
    <textarea
      className={`bg-primary-100 text-primary-700 rounded-md focus:outline-none w-full h-36 p-2 placeholder:text-sm ${className}`}
      {...rest}
    />
  );
}
