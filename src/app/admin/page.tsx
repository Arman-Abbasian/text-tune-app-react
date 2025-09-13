import { useGetAdminLandingPageStatisticsQuery } from "@/services/Admin";
import LottieWrapper from "../../components/Lottie";
import Barchart from "../../ui/Barchart";
import NavigateLink from "../../ui/NavigateLink";
import StatiscticsCart from "../../ui/StatiscticsCart";

export default function AdminHome() {
  const {
    data: GetAdminLandingPageStatistics,
    isLoading: GetAdminLandingPageStatisticsLoading,
  } = useGetAdminLandingPageStatisticsQuery();

  const adminTexts = () => {
    return GetAdminLandingPageStatistics?.data?.adminLandingPageAdminStatisticsDtoList.map(
      (item) => {
        return { x: item.userName, y: item.submitedTextCount };
      }
    );
  };
  const userSubmittedVoices = () => {
    return GetAdminLandingPageStatistics?.data?.adminLandingPageUserStatisticsDtoList.map(
      (item) => {
        return { x: item.userName, y: item.submitedVoiceCount };
      }
    );
  };
  return (
    <div className="flex flex-col items-center gap-10 max-w-6xl mx-auto">
      <div className="flex items-center gpa-2">
        <NavigateLink name="گزارشات" to="/admin/report" />
        <LottieWrapper
          src="/json/statistics.json"
          loop
          autoplay
          className="h-36"
        />

        <NavigateLink name="افزودن متن" to="/admin/addText" />
      </div>
      <div className="grid grid-cols-12 gap-6 w-full">
        <StatiscticsCart
          statistics={Number(
            GetAdminLandingPageStatistics?.data?.confirmedVoicesCount
          )}
          title="تعداد وویس های تایید شده"
          className="!bg-primary-300/20 col-span-12 sm:col-span-6 lg:col-span-3"
          loading={GetAdminLandingPageStatisticsLoading}
        />
        <StatiscticsCart
          statistics={Number(
            GetAdminLandingPageStatistics?.data?.notConfirmedVoicesCount
          )}
          title="تعداد وویس های تایید نشده"
          className="!bg-secondary-300/20 col-span-12 sm:col-span-6 lg:col-span-3"
          loading={GetAdminLandingPageStatisticsLoading}
        />
        <StatiscticsCart
          statistics={Number(GetAdminLandingPageStatistics?.data?.textsCount)}
          title="تعداد کل متن ها"
          className="!bg-success/20 col-span-12 sm:col-span-6 lg:col-span-3"
          loading={GetAdminLandingPageStatisticsLoading}
        />
        <StatiscticsCart
          statistics={Number(
            GetAdminLandingPageStatistics?.data?.textsCountForCurrentUser
          )}
          title="تعداد متن های ثبت شما توسط شما "
          className="!bg-danger/20 col-span-12 sm:col-span-6 lg:col-span-3"
          loading={GetAdminLandingPageStatisticsLoading}
        />
        <StatiscticsCart
          statistics={Number(
            GetAdminLandingPageStatistics?.data?.textsWithNoVoiceCount
          )}
          title="تعداد متن های بدون ویس "
          className="!bg-primary-300/20 col-span-12 sm:col-span-6 lg:col-span-3"
          loading={GetAdminLandingPageStatisticsLoading}
        />
        <StatiscticsCart
          statistics={Number(
            GetAdminLandingPageStatistics?.data?.textsWithVoiceCount
          )}
          title="تعداد متن های دارای ویس "
          className="!bg-secondary-300/20 col-span-12 sm:col-span-6 lg:col-span-3"
          loading={GetAdminLandingPageStatisticsLoading}
        />
        <StatiscticsCart
          statistics={Number(
            GetAdminLandingPageStatistics?.data?.undeterminedVoicesCount
          )}
          title="تعداد وویس های در انتظار بررسی"
          className="!bg-success/20 col-span-12 sm:col-span-6 lg:col-span-3"
          loading={GetAdminLandingPageStatisticsLoading}
        />
        <StatiscticsCart
          statistics={Number(GetAdminLandingPageStatistics?.data?.voicesCount)}
          title="تعداد کل ویس ها "
          className="!bg-danger/20 col-span-12 sm:col-span-6 lg:col-span-3"
          loading={GetAdminLandingPageStatisticsLoading}
        />
      </div>
      <div className="grid grid-cols-2  w-full gap-4">
        <Barchart
          data={userSubmittedVoices() || []}
          chartTitle="تعداد ویس تایید شده هر کاربر"
          className="col-span-2 lg:col-span-1"
          isLoading={GetAdminLandingPageStatisticsLoading}
        />
        <Barchart
          data={adminTexts() || []}
          chartTitle="تعداد متن هر ادمین"
          className="col-span-2 lg:col-span-1"
          isLoading={GetAdminLandingPageStatisticsLoading}
        />
      </div>
    </div>
  );
}
