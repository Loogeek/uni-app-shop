import { request } from '@/utils/request'
import type { CategoryMenuItem } from '@/types/category'

/**
 * 分类列表-小程序
 */
export const getCategoryMenuAPI = () => {
  return request<CategoryMenuItem[]>({
    url: '/category/top',
    method: 'GET',
  })
}
