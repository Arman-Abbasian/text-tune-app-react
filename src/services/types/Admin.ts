export interface AddOrUpdateTrainingTexts {
  id?: string
  text: string
  isActive: boolean
  addOrUpdateTrainingTextKeywordDtoList: { id?: number; keyword: string }[]
}

export interface ConfirmOrUnconfirmedTrainingVoice {
  id: string
  isConfirmed?: boolean
  confirmationDescription?: string
}

export interface GetFilteredTrainingTexts {
  isConfirmedVoice: 'null' | 'true' | 'false'
  isActiveText: boolean
  searchText: string
  shouldFilteredVoiceDateTime: boolean
  startDateTime: string | null
  endDateTime: string | null
}

type TrainingTextKeywordDto = {
  id: number
  keyword: string
}

type TrainingTextVoiceDto = {
  id: number
  voicePath: string
  insertedUserId: string
  insertedUserName: string
  insertedUserDescription: string
  insertedDateTime: string // ISO datetime string
  isConfirmed: boolean
  confirmingUserId: string
  confirmingUserName: string
  confirmationDateTime: string
  confirmationDescription: string | null
}

export type AddOrUpdateTrainingTextsRes = {
  id: number
  text: string
  isActive: boolean
  insertedUserId: string
  insertedUserName: string
  insertedDateTime: string
  trainingTextKeywordDtoList: TrainingTextKeywordDto[]
  trainingTextVoiceDtoList: TrainingTextVoiceDto[]
}

export type TrainingTextDto = {
  id: number
  text: string
  isActive: boolean
  insertedUserId: string
  insertedUserName: string
  insertedDateTime: string // ISO datetime string
  trainingTextKeywordDtoList: TrainingTextKeywordDto[]
  trainingTextVoiceDtoList: TrainingTextVoiceDto[]
}

type AdminStatistic = {
  userId: string
  userName: string
  submitedTextCount: number
}

type UserStatistic = {
  userId: string
  userName: string
  submitedVoiceCount: number
}

export type StatisticsData = {
  textsCount: number
  textsWithVoiceCount: number
  textsWithNoVoiceCount: number
  textsCountForCurrentUser: number
  voicesCount: number
  confirmedVoicesCount: number
  notConfirmedVoicesCount: number
  undeterminedVoicesCount: number
  adminLandingPageAdminStatisticsDtoList: AdminStatistic[]
  adminLandingPageUserStatisticsDtoList: UserStatistic[]
}
