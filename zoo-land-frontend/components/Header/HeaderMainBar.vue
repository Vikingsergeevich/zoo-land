<template>
	<div class="py-3 bg-white border-b border-grey-light ">
		<div class="container">
			<div class="flex items-center">
                <NuxtLink to="/">
                    <Logo />
                </NuxtLink>
                <HeaderMenu />
                <HeaderLocaleSwitcher class="mr-6 lg:ml-auto" />
				<HeaderPhones />
				<!-- <NuxtLink :to="localePath('/')"> <Logo  /></NuxtLink>
				<HeaderMenu class="flex-auto px-6 lg:hidden" />
				<HeaderLocaleSwitcher class="mr-6 lg:ml-auto" />
				<HeaderPhones />
				## AUTH ##
				 <HeaderAccount class="ml-7"/>
				<HeaderBurger class="hidden lg:block ml-10" /> -->
			</div>
		</div>
	</div>
</template>

<script setup>
import Logo from '~/components/Base/Logo.vue';


</script>

<style></style>
