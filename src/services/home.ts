import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import { request } from '@/utils/request'

interface IHomeBannerParams {
  distributionSite: 1 | 2 // 1 为首页（默认值,2 为商品分类页
}

export const getHomeBannerAPI = (
  params: IHomeBannerParams = {
    distributionSite: 1,
  },
) => {
  const { distributionSite } = params

  return request<BannerItem[]>({
    url: '/home/banner',
    method: 'GET',
    data: {
      distributionSite,
    },
  })
}

export const getHomeCategoryPanelAPI = () => {
  return request<CategoryItem[]>({
    url: '/home/category/mutli',
    method: 'GET',
  })
}

/**
 * 首页-热门推荐-小程序
 */
export const getHomeHotPanelAPI = () => {
  return request<HotItem[]>({
    method: 'GET',
    url: '/home/hot/mutli',
  })
}
