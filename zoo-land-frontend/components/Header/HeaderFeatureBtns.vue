<template>
	<div class="flex items-center px-8 space-x-6 text-grey">
		<div class="flex items-center">
      		<img src="@/assets/icons/star.svg" class="mr-2 w-4 h-4">
    	</div>
		<!-- COMPARE -->
		<!-- <NuxtLink :to="localeLocation('compare')">
			<svgCompare
				class="cursor-pointer text-grey hover:text-green transition"
				width="33"
			/>
		</NuxtLink> -->
		<!-- <NuxtLink :to="localePath({ name: 'wishlist' })" class="relative">
			<svgWishList
				class="cursor-pointer text-grey hover:text-green transition"
				width="30"
			/>
			<div
				v-if="favouriteCnt > 0"
				class="
					absolute
					top-0
					right-0
					text-xs
					leading-none
					text-white
					bg-green
					rounded-full
					py-0.5
					px-1.5
					transform
					translate-x-2/4
				"
			>
				{{ favouriteCnt }}
			</div>
		</NuxtLink> -->
	</div>
</template>

<script lang="ts">
// import { defineComponent } from '@nuxtjs/composition-api'
// // import svgCompare from '@/assets/icons/compare.svg?inline'
// import svgWishList from '@/assets/icons/star.svg?inline'
// export default defineComponent({
// 	components: { svgWishList },

// 	computed: {
// 		favouriteCnt() {
// 			return this.$accessor.favourite.items.length
// 		},
// 		items() {
// 			return this.$accessor.favourite.items
// 		},
// 		products() {
// 			return this.$accessor.favourite.products
// 		},
// 	},
// })
</script>

<style lang="postcss"></style>
