import { Funnel, RotateCcw } from "lucide-react";
import moment from "moment-jalaali";
import type { GetFilteredTrainingTexts } from "../../../services/types/Admin";
import SelectComp from "../../../ui/SelectComp";
import TextInputComp from "../../../components/TextInputComp";
import ButtonComp from "../../../ui/ButtonComp";
import { Label } from "../../../components/ui/label";
import { Switch } from "../../../components/ui/switch";
import DatePickerComp from "../../../components/DatePickerComp";

const options = [
  { name: "همه", value: "null" },
  { name: "تایید شده", value: "true" },
  { name: "تایید نشده", value: "false" },
];

interface FiltersPropsType {
  filters: GetFilteredTrainingTexts;
  setFilters: React.Dispatch<React.SetStateAction<GetFilteredTrainingTexts>>;
  loading: boolean;
  onFilter: () => void;
  onReset: () => void;
}

export default function Filters(props: FiltersPropsType) {
  const { filters, setFilters, loading, onFilter, onReset } = props;

  const changeHandler = (e: React.ChangeEvent<any>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const changeSelectHandler = (e: any, name: string) => {
    setFilters({ ...filters, [name]: e });
  };

  const changeDateHandler = (date: any, name: string) => {
    const momentFromDate = moment(date.toDate()).format("jYYYY/jMM/jDD");
    setFilters({ ...filters, [name]: momentFromDate });
  };

  const changeSwitchHandler = (e: any, name: string) => {
    setFilters({ ...filters, [name]: e });
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <SelectComp
          options={options}
          name="type"
          className="w-32"
          value={filters.isConfirmedVoice}
          onChange={(data) => changeSelectHandler(data, "isConfirmedVoice")}
        />
        <TextInputComp
          name="searchText"
          onChange={changeHandler}
          value={filters.searchText}
          placeholder="search"
          className="flex-1 border-noe"
        />
      </div>
      <div className="flex !items-center gap-3">
        <Label htmlFor="airplane-mode" className="text-secondary-500">
          تاریخ صوت
        </Label>
        <div dir="ltr">
          <Switch
            id="airplane-mode"
            className="data-[state=checked]:bg-secondary-500 data-[state=unchecked]:bg-secondary-500 border-0"
            name="shouldFilteredVoiceDateTime"
            checked={filters.shouldFilteredVoiceDateTime}
            onCheckedChange={(checked: any) =>
              changeSwitchHandler(checked, "shouldFilteredVoiceDateTime")
            }
          />
        </div>
        <Label htmlFor="airplane-mode" className="text-secondary-500">
          تاریخ متن
        </Label>
      </div>
      <div className="flex items-center gap-4 w-full">
        <DatePickerComp
          placeholder="از تاریخ"
          name="startDateTime"
          value={filters.startDateTime}
          onChange={(data) => changeDateHandler(data, "startDateTime")}
        />
        <DatePickerComp
          placeholder="تا تاریخ"
          name="endDateTime"
          value={filters.endDateTime}
          onChange={(data) => changeDateHandler(data, "endDateTime")}
        />
      </div>
      <div className="flex items-center gap-4">
        <ButtonComp
          className={`w-20 bg-transparent border border-primary-100 text-secondary-100 hover:bg-secondary-500 hover:border-none`}
          isFormButton={true}
          canClick={true}
          type="submit"
          disabled={loading}
          loading={loading}
          onsubmit={onFilter}
          text={<Funnel className="text-xl" />}
        />
        <ButtonComp
          className={`w-20 bg-transparent border border-primary-100 text-secondary-100 hover:bg-secondary-500 hover:border-none`}
          isFormButton={true}
          canClick={true}
          type="submit"
          disabled={loading}
          loading={loading}
          onsubmit={onReset}
          text={<RotateCcw className="!text-xl" />}
        />
      </div>
    </div>
  );
}
