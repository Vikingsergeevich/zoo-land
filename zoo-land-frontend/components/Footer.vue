<template>
  <footer class="bg-gray-800 text-white py-6">
    <div class="container mx-auto text-center">
      <p>&copy;{{ currentYear }} Zooland. Усі права захищені.</p>
      <nav class="mt-4">
        <ul class="flex justify-center space-x-4">
          <li><a href="/" class="hover:underline">Головна</a></li>
          <li><a href="/catalog" class="hover:underline">Каталог</a></li>
          <li><a href="/about" class="hover:underline">Про нас</a></li>
          <li><a href="/contact" class="hover:underline">Контакти</a></li>
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
