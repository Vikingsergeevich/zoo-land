<template>
  <header class="header bg-white py-3 w-full relative">
    <div>
      <HeaderTopBar />
      <HeaderMainBar />
      <HeaderActionsBar />
      <!-- <HeaderNavbar :requestCallback="requestCallback" /> -->
    </div>
  </header>
</template>

<script setup>
import HeaderNavbar from './HeaderNavbar.vue';
import HeaderMainBar from './HeaderMainBar.vue';

// // Функція для виклику оператора
// const requestCallback = () => {
//   alert('Наш оператор скоро свяжется с вами!');
// };
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