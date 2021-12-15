export interface LoginModel{
    expireTime: string
    token: string
    userInfo: Record<string, string|number>
}