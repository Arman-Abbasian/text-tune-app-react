export interface Login {
  userName: string
  passWord: string
  rememberMe: true
}

export interface Register {
  email: string
  userName: string
  passWord: string
  rePassWord: string
}
