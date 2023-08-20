import { ref } from 'vue'
import type { GuessInstance } from '@/types/components'

/**
 * 猜你喜欢组合式函数
 */
export const useGuessYouLike = () => {
  const guessRef = ref<GuessInstance>()

  const onScrolltolower = () => {
    guessRef.value?.getMore()
  }

  return {
    guessRef,
    onScrolltolower,
  }
}
