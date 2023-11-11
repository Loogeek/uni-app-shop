import { request } from '@/utils/request'
import type { AddressParams, AddressItem } from '@/types/address'

export const postMemberAddressAPI = (data: AddressParams) => {
  return request({
    url: '/member/address',
    method: 'POST',
    data,
  })
}

export const getMemberAddressAPI = () => {
  return request<AddressItem[]>({
    url: '/member/address',
    method: 'GET',
  })
}
