import React from 'react'

type QueryWrapperProps<T> = {
  // می‌گیم هر چیزی که از useQuery بیاد قابل قبوله
  queryResult: ReturnType<any>
  children: (data: T) => React.ReactNode
}

export function QueryWrapper<T>({
  queryResult,
  children,
}: QueryWrapperProps<T>) {
  const { data, isLoading, isError, refetch } = queryResult

  if (isLoading) {
    return <div></div>
  }

  if (isError) {
    return (
      <div>
        <p>Something went wrong!</p>
        <button onClick={() => refetch()}>Retry</button>
      </div>
    )
  }

  if (data && !data.isSuccess) {
    return <div>{data.message}</div>
  }

  if (data && data.isSuccess && data.data !== undefined) {
    return <>{children(data.data)}</>
  }

  return null
}
