<template>
  <div class="flex items-center bg-yellow-600 w-[300px] lg:w-[250px]">
    <img src="@/assets/icons/burger.svg" width="20" class="mr-4">
    <div class="font-bold">Каталог</div>
    <img src="@/assets/icons/arrow_down.svg"
        width="12"
				class="ml-auto transform transition-transform"
				:class="{ 'rotate-180': isOpen }"
			/>

    <!-- <svgBurger width="20" class="mr-4" />
    <div class="font-bold">{{ $t('catalog') }}</div>
    <svgArrowDown
      width="12"
      class="ml-auto transform transition-transform"
      :class="{ 'rotate-180': isOpen }"
    /> -->
  </div>
</template>

<script lang="ts">
// import { defineComponent, ref } from '@nuxtjs/composition-api'
// import svgArrowDown from '@/assets/icons/arrow_down.svg?inline'
// import svgBurger from '@/assets/icons/burger.svg?inline'
// import useCatalogModal from '~/utils/compositions/useCatalogModal'
// export default defineComponent({
//   components: { svgArrowDown, svgBurger },
//   setup() {
//     const { isOpen } = useCatalogModal()
//     return {
//       isOpen,
//     }
//   },
// })
</script>

<style lang="postcss">
.header-catalog-btn {
  box-shadow: 0 5px 20px rgba(146, 133, 12, 0.5);
}
</style>