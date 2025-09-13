import { useState } from "react";
import ArrowBackComp from "../../../ui/ArrowBackComp";
import AdminTextVoicesTable from "./AdminTextVoicesTable";
import { TextList } from "./TextList";
import type { TrainingTextVoiceDto } from "@/services/types/Admin";

export default function AdminReport() {
  const [voices, setVoices] = useState<TrainingTextVoiceDto[] | null>(null);
  const itemSelectHandler = (item: TrainingTextVoiceDto[]) => {
    setVoices(item);
  };
  return (
    <div className="grid lg:grid-cols-3 gap-4 h-full">
      <div className="lg:col-span-1 max-h-full overflow-auto w-full bg-secondary-300 rounded-lg p-4 relative">
        <ArrowBackComp
          href="/admin"
          className="text-secondary-700 text-2xl absolute top-2 left-2"
        />
        <TextList onItemSelect={itemSelectHandler} />
      </div>
      <div className="lg:col-span-2 overflow-auto bg-secondary-300 rounded-lg flex justify-center p-4">
        <AdminTextVoicesTable item={voices} setItem={setVoices} />
      </div>
    </div>
  );
}
