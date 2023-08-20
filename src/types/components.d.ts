import Swiper from '@/components/Swiper'
import Guess from '@/components/Guess'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    Swiper: typeof Swiper
    Guess: typeof Guess
  }
}

export type SwiperInstance = InstanceType<typeof Swiper>
export type GuessInstance = InstanceType<typeof Guess>
