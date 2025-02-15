<template>
  <NuxtLink to="/checkout">
  	<div class="flex items-center">
      <img src="@/assets/icons/cart.svg" alt="Корзина" class="mr-2 w-4 h-4">
      <div class="mr-2 border-opacity-50 border-dotted border-grey border-b-2"> 0 грн</div>
    </div>
  </NuxtLink>
  <!-- <NuxtLink
    :to="localePath({ name: 'checkout' })"
    class="flex items-center group"
    @click.prevent="openCart">
    <div class="relative">
      <svgCart
        width="30"
        class="text-grey group-hover:text-green transition" />
      <div
        v-if="cartCnt > 0"
        class="absolute top-0 right-0 text-xs leading-none text-white bg-green rounded-full py-0.5 px-1.5 transform translate-x-2/4">
        {{ cartCnt }}
      </div>
    </div>
    <div class="ml-3.5 xs:hidden">
      <span
        class="font-medium"
        :class="{
          'text-grey text-opacity-50': cartCnt === 0,
          'text-green': cartCnt > 0,
        }"
        >{{ cartPrice }}</span
      >
      <span class="text-sm text-grey text-opacity-70">{{ currency }}</span>
    </div>
  </NuxtLink> -->
</template>

<script lang="ts">
  // import { computed, defineComponent } from '@nuxtjs/composition-api'

  // import svgCart from '@/assets/icons/cart.svg?inline'
  // import { beautyPrice } from '~/utils/helpers/beauty-price'

  // export default defineComponent({
  //   components: { svgCart },
  //   data() {
  //     return {
  //       price: 0,
  //     }
  //   },
  //   computed: {
  //     currency() {
  //       return this.$accessor.currency.symbol
  //     },
  //     cartPrice() {
  //       const { totalAmount } = this.$accessor.cart
  //       return beautyPrice(totalAmount as number, true)
  //     },
  //     cartCnt(): number {
  //       return this.$accessor.cart.totalCnt
  //     },
  //     items(): any {
  //       return this.$accessor.cart.items
  //     },
  //     products(): any {
  //       return this.$accessor.cart.products
  //     },
  //   },
  // })
</script>

<style lang="postcss"></style>
