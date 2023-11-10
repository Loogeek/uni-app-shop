import { request } from '@/utils/request'
import type { AddressParams } from '@/types/address'

export const postMemberAddressAPI = (data: AddressParams) => {
  return request({
    url: '/member/address',
    method: 'POST',
    data,
  })
}
