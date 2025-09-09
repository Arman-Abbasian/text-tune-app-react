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
