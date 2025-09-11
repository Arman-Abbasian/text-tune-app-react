import React from 'react'
import BeatLoaderFetch from '../ui/BeatLoaderFetch'
import { RefreshCcw } from 'lucide-react'
import type { ApiResponse } from '../services/types/globalSerivicesType'

interface QueryReturnTyep<T> {
  data?: ApiResponse<T>
  isLoading: boolean
  isError: boolean
  refetch: () => any
}
type QueryWrapperPropsType<TData, TResult> = {
  queryResult: TResult
  children: (data: TData) => React.ReactNode
}

export function QueryWrapper<TData, TResult extends QueryReturnTyep<TData>>({
  queryResult,
  children,
}: QueryWrapperPropsType<TData, TResult>) {
  const { data, isLoading, isError, refetch } = queryResult

  if (isLoading) {
    return (
      <div>
        <BeatLoaderFetch />
      </div>
    )
  }

  if (isError) {
    return (
      <div className="flex items-center gap-2">
        <p className="text-sm text-danger">مشکلی رخ داده است</p>
        <button onClick={() => refetch()}>
          <RefreshCcw />
        </button>
      </div>
    )
  }

  if (data && !data.isSuccess) {
    return <div>{data.message || 'مشکلی رخ داده است'}</div>
  }

  if (data && data.isSuccess && data.data !== undefined) {
    return <>{children(data.data)}</>
  }

  return null
}
