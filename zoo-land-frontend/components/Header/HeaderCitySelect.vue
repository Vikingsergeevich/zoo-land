<template>
	<div class="relative z-100">
		<a
			href="javascript:void(0)"
			class="flex cursor-pointer items-center transform translate-y-0.5"
			@click="openCityModal"
		>
			<div
				class="
					font-bold
					text-grey
					border-opacity-50 border-dotted border-grey border-b-2
				"
			>
				Кременчук
			</div>
			<img src="@/assets/icons/arrow_down.svg"
				class="transform transition ml-2 text-grey"
				:class="{ 'rotate-180': isOpen }"
				width="6"
			/>
		</a>
		<!-- <transition name="t-fade">
			<div
				v-if="isOpen"
				class="
					absolute
					top-8
					left-0
					bg-white
					border border-grey-light
					rounded-md
					p-3
				"
			>
				<a
					v-for="(city, idx) in cities"
					:key="idx"
					href="javascript:void(0)"
					class="cursor-pointer hover:text-green"
					@click="selectCity(city.id)"
				>
					{{ city.name }}
				</a>
			</div>
		</transition> -->
	</div>
</template>

<script lang="ts">
// import { computed, defineComponent, ref } from '@nuxtjs/composition-api'
// import svgArrowDown from '@/assets/icons/arrow_down.svg?inline'
// import useModal from '~/utils/compositions/useModal'
// import { ModalName } from '~/types/modal.enum'
// export default defineComponent({
// 	components: { svgArrowDown },
// 	data: () => ({
// 		isOpen: false,
// 	}),
// 	computed: {
// 		cities(): any[] {
// 			return this.$accessor.city.cities(this.$i18n)
// 		},
// 		activeCity(): string {
// 			return this.$accessor.city.activeCity(this.cities)?.name || ''
// 		},
// 	},
// 	methods: {
// 		openCityModal() {
// 			const { showByName } = useModal()
// 			showByName(ModalName.cityModal)
// 		},
// 		selectCity(cityId: number) {
// 			this.$accessor.city.setActive(cityId)
// 			this.isOpen = false
// 		},
// 		toggle() {
// 			this.isOpen = !this.isOpen
// 		},
// 	},
// })
</script>

<style></style>
