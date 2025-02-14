<template>
  <div class="header-burger" :class="{ active: isOpen }" @click="toggle">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import useMobileMenu from '@/utils/compositions/useMobileMenu'
export default defineComponent({
  setup() {
    const { isOpen, toggle } = useMobileMenu()

    return { isOpen, toggle }
  },
})
</script>

<style lang="postcss">
.header-burger {
  @apply h-[20px] w-[30px] cursor-pointer relative;
  span {
    @apply w-[30px] h-[3px] bg-grey block absolute;
    transition: 0.4s;
    &:nth-child(1) {
      @apply top-0;
    }
    &:nth-child(2) {
      @apply top-[8px];
    }
    &:nth-child(3) {
      @apply top-[16px];
    }
  }
  &.active {
    span {
      &:nth-child(1) {
        @apply transform rotate-[-135deg] top-[9px];
      }
      &:nth-child(2) {
        @apply opacity-0 transform scale-0;
      }
      &:nth-child(3) {
        @apply transform rotate-[135deg] top-[9px];
      }
    }
  }
}
</style>