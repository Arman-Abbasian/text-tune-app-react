import { SearchIcon } from "lucide-react";

import SelectComp from "../../ui/SelectComp";
import TextInputComp from "../../components/TextInputComp";

const options = [
  { name: "همه", value: "null" },
  { name: "تایید شده", value: "true" },
  { name: "تایید نشده", value: "false" },
];

export interface FiltersType {
  isConfirmedVoice: "null" | "true" | "false";
  search: string;
}
interface FiltersPropsType {
  filters: FiltersType;
  setFilters: React.Dispatch<React.SetStateAction<FiltersType>>;
}

export default function Filters(props: FiltersPropsType) {
  const { filters, setFilters } = props;

  const changeSelectHandler = (e: "null" | "true" | "false", name: string) => {
    setFilters({ ...filters, [name]: e });
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, search: e.target.value });
  };

  return (
    <div className="flex items-center gap-4">
      <SelectComp
        options={options}
        className="w-36"
        name="type"
        value={filters.isConfirmedVoice}
        onChange={(data) => changeSelectHandler(data, "isConfirmedVoice")}
      />
      <TextInputComp
        placeholder="جستجوی متن"
        name="search"
        onChange={changeHandler}
        value={filters.search}
        icon={<SearchIcon className="!text-sm" />}
        className="max-w-md"
        disabled
      />
    </div>
  );
}
