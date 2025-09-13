//components
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type OptionType = {
  name: string;
  value: string;
};

type SelectCompPropsType = {
  options: OptionType[];
  className?: string;
  name: string;
  value: string;
  onChange: (e: any) => void;
};

export default function SelectComp(props: SelectCompPropsType) {
  const { options, className, name, value, onChange } = props;
  return (
    <Select value={value} onValueChange={onChange} name={name}>
      <SelectTrigger
        className={`bg-primary-100 py-6 text-primary-700 ${className}`}
        name={name}
      >
        <SelectValue placeholder="همه" className="!text-primary-700" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map((option, index) => {
            return (
              <SelectItem
                key={index}
                value={option.value}
                className="text-primary-700"
              >
                {option.name}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
