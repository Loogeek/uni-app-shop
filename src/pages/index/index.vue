<script setup lang="ts">
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'

import { getHomeBannerAPI, getHomeCategoryPanelAPI, getHomeHotPanelAPI } from '@/services/home'
import type { BannerItem, CategoryItem } from '@/types/home'
import Swiper from '@/components/Swiper'
import Guess from '@/components/Guess'
import { useGuessYouLike } from '@/composables'
import type { HotItem } from '@/types/home'
import CategoryPanel from './components/CategoryPanel'
import HotPanel from './components/HotPanel.vue'
import Navbar from './components/Navbar.vue'
import Skeletion from './components/Skeleton.vue'

// 首页轮播图
const bannerList = ref<BannerItem[]>([])
const getBannerListData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

// 获取首页分类数据
const categoryPanelList = ref<CategoryItem[]>([])
const getCategoryPanelListData = async () => {
  const res = await getHomeCategoryPanelAPI()
  categoryPanelList.value = res.result
}

const hotPanelList = ref<HotItem[]>([])
const getHotPanelListData = async () => {
  const res = await getHomeHotPanelAPI()
  hotPanelList.value = res.result
}

const { guessRef, onScrolltolower } = useGuessYouLike()

const isTriggered = ref(false)
const onRefresherrefresh = async () => {
  // 下拉动画
  isTriggered.value = true
  guessRef.value?.resetData()
  await Promise.all([
    getBannerListData(),
    getCategoryPanelListData(),
    getHotPanelListData(),
    guessRef.value?.getMore(),
  ])

  isTriggered.value = false
}

const isLoading = ref(true)

onLoad(async () => {
  await Promise.all([getBannerListData(), getCategoryPanelListData(), getHotPanelListData()])
  isLoading.value = false
})
</script>

<template>
  <view class="viewport">
    <Navbar />
    <scroll-view
      enable-back-to-top
      refresher-enabled
      @scrolltolower="onScrolltolower"
      @refresherrefresh="onRefresherrefresh"
      :refresher-triggered="isTriggered"
      class="scroll-view"
      scroll-y
    >
      <Skeletion v-if="isLoading" />
      <template v-else>
        <Swiper :list="bannerList" />
        <CategoryPanel :list="categoryPanelList" />
        <HotPanel :list="hotPanelList" />
        <Guess ref="guessRef" />
      </template>
    </scroll-view>
  </view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  overflow: hidden;
}

.viewport {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.scroll-view {
  flex: 1;
  overflow: hidden;
}
</style>
