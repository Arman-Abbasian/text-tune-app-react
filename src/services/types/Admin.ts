export interface AddOrUpdateTrainingTexts {
  id: number
  text: string
  isActive: boolean
  addOrUpdateTrainingTextKeywordDtoList: { id: number; keyword: string }[]
}

export interface ConfirmOrUnconfirmedTrainingVoice {
  id: string
  isConfirmed?: 'true' | 'false'
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

export type TrainingTextVoiceDto = {
  confirmationDateTime: string
  confirmationDescription: string
  confirmingUserId: string
  confirmingUserName: string
  id: number
  insertedDateTime: string
  insertedUserDescription: string
  insertedUserId: string
  insertedUserName: string
  isConfirmed: boolean
  voicePath: string
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
