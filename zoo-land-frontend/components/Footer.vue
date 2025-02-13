<template>
  <footer class="bg-gray-800 text-white py-6">
    <div class="container mx-auto text-center">
      <p>&copy;{{ currentYear }} EssenceHub. Все права защищены.</p>
      <nav class="mt-4">
        <ul class="flex justify-center space-x-4">
          <li><a href="/" class="hover:underline">Главная</a></li>
          <li><a href="/catalog" class="hover:underline">Каталог</a></li>
          <li><a href="/about" class="hover:underline">О нас</a></li>
          <li><a href="/contact" class="hover:underline">Контакты</a></li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';

const currentYear = ref(new Date().getFullYear());
</script>

<style scoped>
.container {
  max-width: 1200px;
  padding-left: 15px;
  padding-right: 15px;
}

a {
  color: #fff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
