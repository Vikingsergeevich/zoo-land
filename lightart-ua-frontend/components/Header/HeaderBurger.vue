<template>
  <div class="header-burger" :class="{ 'active': isOpen }" @click="toggle">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

const toggle = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style scoped>
.header-burger {
  @apply h-5 w-7 cursor-pointer relative;
}

.header-burger span {
  @apply w-full h-[3px] bg-gray-600 block absolute transition-all duration-300;
}

.header-burger span:nth-child(1) {
  @apply top-0;
}

.header-burger span:nth-child(2) {
  @apply top-[8px];
}

.header-burger span:nth-child(3) {
  @apply top-[16px];
}

.header-burger.active span:nth-child(1) {
  @apply transform rotate-[-135deg] top-[9px];
}

.header-burger.active span:nth-child(2) {
  @apply opacity-0 scale-0;
}

.header-burger.active span:nth-child(3) {
  @apply transform rotate-[135deg] top-[9px];
}
</style>
