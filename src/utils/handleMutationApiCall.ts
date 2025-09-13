//store
import type { ApiResponse } from "@/services/types/globalSerivicesType";
//components
import { RejectToast, SuccessToast } from "@/ui/Toasts";

export const handleMutationApiCall = async <T>(
  apiCall: () => Promise<ApiResponse<T>>,
  onSuccess?: (data?: T) => void,
  onError?: (data?: T) => void,
  successMessage?: string,
  errorMessage?: string
) => {
  try {
    const response = await apiCall();
    if (response.isSuccess) {
      onSuccess?.(response.data);
      SuccessToast(
        response.message || successMessage || "عملیات با موفقیت انجام شد"
      );
    } else if (!response.isSuccess) {
      onError?.(response.data);
      RejectToast(response?.message || errorMessage || "عملیات انجام نشد");
    }
  } catch (error: any) {
    if (error.status === 401) RejectToast("لطفا وارد شوید");
    else RejectToast("مشکلی رخ داده است");
  }
};
