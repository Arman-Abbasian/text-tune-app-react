import { useGetAdminLandingPageStatisticsQuery } from "@/services/Admin";
import LottieWrapper from "../../components/Lottie";
import Barchart from "../../ui/Barchart";
import NavigateLink from "../../ui/NavigateLink";
import StatiscticsCart from "../../ui/StatiscticsCart";
import { LogOut } from "lucide-react";
import { logout } from "@/features/authSlice";
import { useDispatch } from "react-redux";

export default function AdminHome() {
  const dispatch = useDispatch();

  const {
    data: GetAdminLandingPageStatistics,
    isFetching: GetAdminLandingPageStatisticsLoading,
    isError: GetAdminLandingPageStatisticsError,
    refetch: GetAdminLandingPageStatisticsRefetch,
  } = useGetAdminLandingPageStatisticsQuery();

  const adminTexts = () => {
    return GetAdminLandingPageStatistics?.data?.adminLandingPageAdminStatisticsDtoList.map(
      (item) => {
        return { x: item.userName, y: item.submitedTextCount };
      }
    );
  };
  const userRecordedVoices = () => {
    return GetAdminLandingPageStatistics?.data?.adminLandingPageUserStatisticsDtoList.map(
      (item) => {
        return { x: item.userName, y: item.submitedVoiceCount };
      }
    );
  };
  return (
    <div className="flex flex-col items-center gap-10 max-w-6xl mx-auto relative h-full pt-10">
      {/* header */}
      <LogOut
        className="absolute left-0 text-secondary-500 cursor-pointer top-0"
        onClick={() => dispatch(logout())}
      />
      <div className="flex items-center gpa-2 w-full">
        <div className="grid grid-cols-12 gap-8 w-full">
          <NavigateLink
            name="گزارشات"
            description="گزارشات رو از این قسمت ملاحظه بفرمایید"
            to="/admin/report"
            className="col-span-6 w-full"
          />
          {/* <LottieWrapper
          src="/json/statistics.json"
          loop
          autoplay
          className="h-36"
        /> */}

          <NavigateLink
            name="افزودن متن"
            description="افزودن متن جدید را از این قسمت ملاحظه بفرمایید"
            to="/admin/addText"
            className="col-span-6"
          />
        </div>
      </div>

      {/* cart section */}
      <div className="grid grid-cols-12 gap-8 w-full">
        <StatiscticsCart
          statistics={Number(
            GetAdminLandingPageStatistics?.data?.confirmedVoicesCount
          )}
          title="تعداد وویس های تایید شده"
          className="col-span-12 sm:col-span-6 lg:col-span-3 justify-self-center"
          isLoading={GetAdminLandingPageStatisticsLoading}
          isError={GetAdminLandingPageStatisticsError}
          refetch={GetAdminLandingPageStatisticsRefetch}
        />
        <StatiscticsCart
          statistics={Number(
            GetAdminLandingPageStatistics?.data?.notConfirmedVoicesCount
          )}
          title="تعداد وویس های تایید نشده"
          className="col-span-12 sm:col-span-6 lg:col-span-3 justify-self-center"
          isLoading={GetAdminLandingPageStatisticsLoading}
          isError={GetAdminLandingPageStatisticsError}
          refetch={GetAdminLandingPageStatisticsRefetch}
        />
        <StatiscticsCart
          statistics={Number(GetAdminLandingPageStatistics?.data?.textsCount)}
          title="تعداد کل متن ها"
          className="col-span-12 sm:col-span-6 lg:col-span-3 justify-self-center"
          isLoading={GetAdminLandingPageStatisticsLoading}
          isError={GetAdminLandingPageStatisticsError}
          refetch={GetAdminLandingPageStatisticsRefetch}
        />
        <StatiscticsCart
          statistics={Number(
            GetAdminLandingPageStatistics?.data?.textsCountForCurrentUser
          )}
          title="تعداد متن های ثبت شما توسط شما "
          className="col-span-12 sm:col-span-6 lg:col-span-3 justify-self-center"
          isLoading={GetAdminLandingPageStatisticsLoading}
          isError={GetAdminLandingPageStatisticsError}
          refetch={GetAdminLandingPageStatisticsRefetch}
        />
        <StatiscticsCart
          statistics={Number(
            GetAdminLandingPageStatistics?.data?.textsWithNoVoiceCount
          )}
          title="تعداد متن های بدون ویس "
          className="col-span-12 sm:col-span-6 lg:col-span-3 justify-self-center"
          isLoading={GetAdminLandingPageStatisticsLoading}
          isError={GetAdminLandingPageStatisticsError}
          refetch={GetAdminLandingPageStatisticsRefetch}
        />
        <StatiscticsCart
          statistics={Number(
            GetAdminLandingPageStatistics?.data?.textsWithVoiceCount
          )}
          title="تعداد متن های دارای ویس "
          className="col-span-12 sm:col-span-6 lg:col-span-3 justify-self-center"
          isLoading={GetAdminLandingPageStatisticsLoading}
          isError={GetAdminLandingPageStatisticsError}
          refetch={GetAdminLandingPageStatisticsRefetch}
        />
        <StatiscticsCart
          statistics={Number(
            GetAdminLandingPageStatistics?.data?.undeterminedVoicesCount
          )}
          title="تعداد وویس های در انتظار بررسی"
          className="col-span-12 sm:col-span-6 lg:col-span-3 justify-self-center"
          isLoading={GetAdminLandingPageStatisticsLoading}
          isError={GetAdminLandingPageStatisticsError}
          refetch={GetAdminLandingPageStatisticsRefetch}
        />
        <StatiscticsCart
          statistics={Number(GetAdminLandingPageStatistics?.data?.voicesCount)}
          title="تعداد کل ویس ها "
          className="col-span-12 sm:col-span-6 lg:col-span-3 justify-self-center"
          isLoading={GetAdminLandingPageStatisticsLoading}
          isError={GetAdminLandingPageStatisticsError}
          refetch={GetAdminLandingPageStatisticsRefetch}
        />
      </div>
      {/* chart section */}
      <div className="grid grid-cols-2  w-full gap-4">
        <Barchart
          data={userRecordedVoices() || []}
          chartTitle="تعداد ویس ضبط شده توسط هر کاربر"
          className="col-span-2 lg:col-span-1"
          isLoading={GetAdminLandingPageStatisticsLoading}
          isError={GetAdminLandingPageStatisticsError}
          refetch={GetAdminLandingPageStatisticsRefetch}
        />
        <Barchart
          data={adminTexts() || []}
          chartTitle="تعداد متن ایجاد شده توسط هر ادمین"
          className="col-span-2 lg:col-span-1"
          isLoading={GetAdminLandingPageStatisticsLoading}
          isError={GetAdminLandingPageStatisticsError}
          refetch={GetAdminLandingPageStatisticsRefetch}
        />
      </div>
    </div>
  );
}
