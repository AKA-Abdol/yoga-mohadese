export interface IApiPostLogin {
  token: string;
  is_admin: boolean;
}

export type IApiPostSignup = IApiPostLogin;
