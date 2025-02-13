<template>
  <header class="header bg-gray-800 text-white py-6 w-full relative">
    <div class="absolute top-2 left-4 bg-white text-gray-600 rounded-md px-4 py-2 shadow-md">
      <span href="tel:+38005553535" class="flex items-center">
        <span class="font-bold text-lg mr-2">+3 (800) 555-35-35</span>
			</hr>
        <!-- <button @click="requestCallback" class="bg-blue-600 text-white text-sm px-2 py-1 rounded">Перезвоните мне</button> -->
			</span>
    </div>
		<nuxt-link to="/" ><h1 class="text-6xl font-bold text-blue-600 py-6 underline tracking-widest relative">
      Z O O L A N D
      <sup class="text-sm absolute top-[-10px] right-[-30px]">®</sup>
    </h1></nuxt-link>
    <HeaderNavbar />
  </header>
</template>

<script>
import HeaderNavbar from './HeaderNavbar.vue';

export default {
  name: 'Header',
  components: {
    HeaderNavbar,
  },
  methods: {
    requestCallback() {
      alert('Наш оператор скоро свяжется с вами!');
    }
  }
}
</script>

<style scoped>
.header {
  text-align: center;
  background-color: #ffffff;
  margin-bottom: 20px;
  position: relative;
}

.header h1 {
  margin: 0;
  font-size: 2em;
  color: #333;
}

a {
  text-decoration: none;
}
</style>
