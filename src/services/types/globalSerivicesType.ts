export type ApiResponse<T> = {
  data?: T
  isSuccess: boolean
  statusCode: string
  message: string
}
