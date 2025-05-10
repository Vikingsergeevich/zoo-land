<template>
	<div class="flex items-center">
		<img
			src="@/assets/icons/phone.svg"
			alt="phone"
			width="26"
			class="mr-3"
		/>
		<div class="text-gray text-sm font-bold">
			<div class=" bg-white text-gray-600 rounded-md px-4 py-3 shadow-md">
        		<span class="flex items-center">
          			<span class="font-bold text-lg mr-2">+3 (800) 555-35-35</span>
         		 	<button  class="bg-blue-600 text-white text-sm px-2 py-1 rounded">Замовити дзвінок</button>
        	</span>
        </div>
			<!-- <div class="space-y-1" v-for="(phone, idx) in phones" :key="idx">
				<a :href="'tel:' + phone"> {{ phone }}</a>
			</div> -->
		</div>
	</div>
</template>

<script lang="ts">

// import { defineComponent } from '@nuxtjs/composition-api'
// import { phones } from '~/types/constants'

// export default defineComponent({
// 	setup() {
// 		return {
// 			phones,
// 		}
// 	},
// })
</script>

<style lang="postcss"></style>
