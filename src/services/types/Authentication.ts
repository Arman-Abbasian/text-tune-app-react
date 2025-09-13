export interface Login {
  userName: string;
  passWord: string;
  rememberMe: true;
}

export interface LoginRes {
  token: string;
  roles: string[];
  userName: string;
}

export interface Register {
  email: string;
  userName: string;
  passWord: string;
  rePassWord: string;
}
