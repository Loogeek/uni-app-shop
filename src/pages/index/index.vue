<script setup lang="ts">
import { ref } from 'vue'

import Swiper from '@/components/Swiper'
import { onLoad } from '@dcloudio/uni-app'
import { getHomeBannerAPI } from '@/services/home'
import Navbar from './components/Navbar.vue'
import type { BannerItem } from '@/types/home'

// 首页轮播图
const bannerList = ref<BannerItem>([])
const getBannerListData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

onLoad(async () => {
  await Promise.all([getBannerListData()])
})
</script>

<template>
  <view class="index">
    <Navbar />
    <Swiper :list="bannerList" />
  </view>
</template>

<style lang="scss">
//
</style>
