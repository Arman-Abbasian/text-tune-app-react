export interface Login {
  userName: string
  passWord: string
  rememberMe: true
}

export interface LoginRes {
  token: string
  role: string
  userName: string
}

export interface Register {
  email: string
  userName: string
  passWord: string
  rePassWord: string
}
