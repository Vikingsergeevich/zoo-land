<template>
  <header class="header bg-white text-white py-3 w-full relative">
    <div class="absolute top-1 right-4 bg-white text-gray-600 rounded-md px-4 py-3 shadow-md">
      <span href="tel:+38005553535" class="flex items-center">
        <span class="font-bold text-lg mr-2">+3 (800) 555-35-35</span>
			</hr>
        <!-- <button @click="requestCallback" class="bg-blue-600 text-white text-sm px-2 py-1 rounded">Перезвоните мне</button> -->
			</span>
    </div>
		
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
  background-color: rgba(246, 246, 246, var(--tw-bg-opacity));
  margin-bottom: 20px;
  position: relative;
}

.header h1 {
  margin: 0;
  font-size: 2em;
  color: #5e5d55;
}

a {
  text-decoration: none;
}
</style>
