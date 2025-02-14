<template>
  <div class="flex items-center">
	  <template v-if="!isAuth">
		  <svgUser class="text-grey hover:text-green transition cursor-pointer" alt="user" width="22" @click.prevent="login"/>
		  <a v-if="!isAuth"
			 href="#"
			 class="ml-4 sm:hidden cursor-pointer border-opacity-50 border-dotted border-grey border-b-2 text-sm font-bold hover:border-green hover:text-green transition-all"
			 @click.prevent="login"
		  >{{ $t('enter') }}
		  </a>
	  </template>
	  <template v-else>
		  <NuxtLink :to="localePath({ name: 'cabinet-personal-data' })">
			  <svgUser class=" text-grey" alt="user" width="22" />
		  </NuxtLink>
		  <NuxtLink :to="localePath({ name: 'cabinet-personal-data' })" class="max-w-[100px] truncate sm:hidden">
			<span v-if="user.fullName"
				class=" ml-4 cursor-pointer border-opacity-50 border-dotted border-grey border-b-2 text-sm font-bold hover:border-green hover:text-green transition-all"
			>{{ user.fullName }}
				  </span>
		  </NuxtLink>
	  </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api'
import svgUser from '@/assets/icons/user.svg?inline'
import useModal from '~/utils/compositions/useModal'
import { ModalName } from '~/types/modal.enum'
import {useAccessor} from "~/utils/compositions/useAccessor";
export default defineComponent({
  components: { svgUser },
  setup() {
  	const accessor = useAccessor()
	const isAuth = computed(() => accessor.user.isAuth)
	const user = computed(() => accessor.user.userModel)
    const login = () => {
      const { showByName } = useModal()
      showByName(ModalName.login)
    }

    return { login, isAuth, user }
  },
})
</script>

<style lang="postcss">
</style>
