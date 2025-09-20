import { SearchIcon } from "lucide-react";

import SelectComp from "../../ui/SelectComp";
import TextInputComp from "../../components/TextInputComp";

const options = [
  { name: "ضبط نشده ها", value: "4" },
  { name: "همه", value: "3" },
  { name: "تایید شده", value: "1" },
  { name: "تایید نشده", value: "2" },
];

export interface FiltersType {
  voiceType: "1" | "2" | "3" | "4";
  search: string;
}
interface FiltersPropsType {
  filters: FiltersType;
  setFilters: React.Dispatch<React.SetStateAction<FiltersType>>;
}

export default function Filters(props: FiltersPropsType) {
  const { filters, setFilters } = props;

  const changeSelectHandler = (data: "1" | "2" | "3" | "4", name: string) => {
    setFilters({ ...filters, [name]: data });
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, search: e.target.value });
  };

  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <SelectComp
        options={options}
        className="w-36"
        name="type"
        value={filters.voiceType}
        onChange={(data) => changeSelectHandler(data, "voiceType")}
      />
      <TextInputComp
        placeholder="جستجوی متن"
        name="search"
        onChange={changeHandler}
        value={filters.search}
        icon={<SearchIcon className="!text-sm" />}
        className="!w-64"
        disabled
      />
    </div>
  );
}
