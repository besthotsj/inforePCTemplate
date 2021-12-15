import { LoginModel } from '@/model/loginModel';
export type ILoginInfo = {
  loginInfo: LoginModel
}
export const state: ILoginInfo = {
  loginInfo: {
    expireTime: '',
    token: '',
    userInfo: {
    }
  }
}