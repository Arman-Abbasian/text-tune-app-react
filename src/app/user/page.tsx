import { useState } from "react";
import Filters, { type FiltersType } from "./Filters";
import UserVoiceTable from "./UserVoiceTable";

export default function User() {
  const [filters, setFilters] = useState<FiltersType>({
    isConfirmedVoice: "null",
    search: "",
  });
  return (
    <div className="flex flex-col gap-4">
      <Filters filters={filters} setFilters={setFilters} />
      <UserVoiceTable filters={filters} />
    </div>
  );
}
