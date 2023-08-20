<script setup lang="ts">
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'

import { getHomeBannerAPI, getHomeCategoryPanelAPI, getHomeHotPanelAPI } from '@/services/home'
import type { BannerItem, CategoryItem } from '@/types/home'
import Swiper from '@/components/Swiper'
import CategoryPanel from './components/CategoryPanel'
import HotPanel from './components/HotPanel.vue'
import Navbar from './components/Navbar.vue'

// 首页轮播图
const bannerList = ref<BannerItem>([])
const getBannerListData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

// 获取首页分类数据
const categoryPanelList = ref<CategoryItem>([])
const getCategoryPanelListData = async () => {
  const res = await getHomeCategoryPanelAPI()
  categoryPanelList.value = res.result
}

const hotPanelList = ref<HotItem>([])
const getHotPanelListData = async () => {
  const res = await getHomeHotPanelAPI()
  hotPanelList.value = res.result
}

onLoad(async () => {
  await Promise.all([getBannerListData(), getCategoryPanelListData(), getHotPanelListData()])
})
</script>

<template>
  <view class="index">
    <Navbar />
    <Swiper :list="bannerList" />
    <CategoryPanel :list="categoryPanelList" />
    <HotPanel :list="hotPanelList" />
  </view>
</template>

<style lang="scss">
//
</style>
