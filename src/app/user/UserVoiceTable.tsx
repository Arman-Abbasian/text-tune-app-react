import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { Link } from "react-router-dom";
import TagComp from "../../ui/TagComp";
import ImageComp from "../../ui/ImageComp";
import { useLazyGetFilteredTrainingVoicesQuery } from "../../services/User";
import { useEffect } from "react";
import type { FiltersType } from "./Filters";
import BeatLoaderFetch from "@/ui/BeatLoaderFetch";
import { Hourglass, X, Check } from "lucide-react";

interface UserVoiceTablePropsType {
  filters: FiltersType;
}

const UserVoiceTable = (props: UserVoiceTablePropsType) => {
  const { filters } = props;
  const [
    LazyGetFilteredTrainingVoices,
    {
      data: LazyGetFilteredTrainingVoicesData,
      isFetching: LazyGetFilteredTrainingVoicesLoading,
    },
  ] = useLazyGetFilteredTrainingVoicesQuery();

  useEffect(() => {
    LazyGetFilteredTrainingVoices({
      isActiveText: true,
      voiceType: filters.voiceType,
    }).unwrap();
  }, [filters]);

  if (LazyGetFilteredTrainingVoicesLoading) return <BeatLoaderFetch />;
  if (LazyGetFilteredTrainingVoicesData?.data)
    return (
      <Table className="rounded-lg overflow-hidden w-full">
        <TableHeader className="bg-primary-700">
          <TableRow>
            <TableHead className="text-right text-primary-100 min-w-64 lg:w-auto">
              متن
            </TableHead>
            <TableHead className="text-center text-primary-100 w-64">
              عناوین
            </TableHead>
            <TableHead className="text-center text-primary-100 w-32">
              وضعیت
            </TableHead>
            <TableHead className="text-left text-primary-100 w-20">
              خواندن
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="bg-primary-100">
          {LazyGetFilteredTrainingVoicesData.data.length === 0 ? (
            <p>متنی جهت خواندن موجود نیست</p>
          ) : (
            LazyGetFilteredTrainingVoicesData.data.map((item) => (
              <TableRow key={item.id} className="text-primary-700">
                <TableCell className="text-right break-words whitespace-normal">
                  {item.text}
                </TableCell>
                <TableCell>
                  <div className="flex justify-center items-center gap-3">
                    {item.trainingTextKeywordDtoList.map((tag) => (
                      <TagComp key={tag.id}>{tag.keyword}</TagComp>
                    ))}
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  <div className="flex justify-center">
                    {item.trainingTextVoiceDtoList[0] ? (
                      item.trainingTextVoiceDtoList[0].isConfirmed ? (
                        <Check className="text-success" />
                      ) : item.trainingTextVoiceDtoList[0].isConfirmed ===
                        false ? (
                        <X className="text-danger" />
                      ) : (
                        <Hourglass className="text-secondary-500" />
                      )
                    ) : (
                      "بدون ویس"
                    )}
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  {(!item.trainingTextVoiceDtoList[0] ||
                    item.trainingTextVoiceDtoList[0].isConfirmed === false) && (
                    <Link
                      to={{
                        pathname: "/user/voice",
                        search: `?id=${item.id}&text=${item.text}`,
                      }}
                      className="flex justify-end"
                    >
                      <ImageComp
                        src={"/images/microphone.png"}
                        alt="mic"
                        className="w-10"
                      />
                    </Link>
                  )}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    );
};

export default UserVoiceTable;
