<template>
	<div class="bg-white border-b border-grey-light">
		<div class="container">
			<div class="flex items-center py-2.5 relative">
				<HeaderCatalogBtn
					class="mr-8"
				/>
				<HeaderSearch class="flex-grow" />
				<HeaderFeatureBtns
					class="border-r border-l border-grey-light mx-7"
				/>
				<HeaderCart />
				<!-- <HeaderCatalogBtn
					class="mr-8"
					@click.native="toggleCatalogModal"
				/>
				<HeaderSearch class="flex-grow" />
				<HeaderFeatureBtns
					class="border-r border-l border-grey-light mx-7"
				/>
				<HeaderCart />
				<CatalogModal /> -->
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
// import { defineComponent, nextTick, ref } from '@nuxtjs/composition-api'
// import useCatalogModal from '~/utils/compositions/useCatalogModal'

// export default defineComponent({
// 	methods: {
// 		toggleCatalogModal() {
// 			const { isOpen, open, close } = useCatalogModal()

// 			if (!isOpen.value) {
// 				if (
// 					this.$route.name ===
// 					this.localeRoute({ name: 'index' })?.name
// 				) {
// 					this.$scrollTo({
// 						el: document.body,
// 					})
// 					return
// 				}
// 				open()
// 			} else {
// 				close()
// 			}
// 		},
// 	},
// })
</script>

<style ></style>
