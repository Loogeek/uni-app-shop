import Swiper from '@/components/Swiper'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    Swiper: typeof Swiper
  }
}

export type SwiperInstance = InstanceType<typeof Swiper>
