import type { LoginResult } from '@/types/member'
import { request } from '@/utils/request'

type LoginWxMinParams = {
  code: string
  encryptedData?: string
  iv?: string
}

export const postLoginWxMinAPI = (data: LoginWxMinParams) => {
  return request<LoginResult>({
    url: '/login/wxMin',
    method: 'POST',
    data,
  })
}

/**
 * 小程序登录_内测版
 * @param phoneNumber 模拟手机号码
 */
export const postLoginWxMinSimpleAPI = (phoneNumber: string) => {
  return request<LoginResult>({
    url: '/login/wxMin/simple',
    method: 'POST',
    data: {
      phoneNumber,
    },
  })
}

type LoginParams = {
  account: string
  password: string
}
/**
 * 传统登录-用户名+密码
 * @param data 请求参数
 */
export const postLoginAPI = (data: LoginParams) => {
  return request<LoginResult>({
    method: 'POST',
    url: '/login',
    data,
  })
}
