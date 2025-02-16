<template>
 <footer class="pt-7 bg-gray-800 footer mt-18 md:mt-14 sm:mt-9 w-full">
    <div class="container">
      <div class="flex pb-14 lg:flex-wrap">
        <FooterInfoCol class="footer-info-col w-1/4 lg:w-full lg:mb-12 sm:mb-10" />
        <FooterMenu
          class="w-3/4 lg:w-full"
          :items="menuItems" />
      </div>
      <div class="py-9 border-t border-grey border-opacity-20 flex items-center justify-between sm:flex-col">
        <div class="font-medium sm:order-2 sm:text-center sm:max-w-[172px]">
          <p>&copy;{{ currentYear }} Zooland. Усі права захищені.</p>
        </div>
        <div class="flex sm:mb-3 sm:max-w-[100px]">
          <img
            src="@/assets/icons/visa.svg"
            alt="visa"
            class="mr-3 min-w-0" />
          <img
            src="@/assets/icons/mastercard.svg"
            alt="mastercard"
            class="min-w-0" />
        </div>
      </div>
    </div>
  </footer>
<!-- 
      <p>&copy;{{ currentYear }} Zooland. Усі права захищені.</p>
      <nav class="mt-4">
        <ul class="flex justify-center space-x-4">
          <li><a href="/" class="hover:underline">Головна</a></li>
          <li><a href="/catalog" class="hover:underline">Каталог</a></li>
          <li><a href="/about" class="hover:underline">Про нас</a></li>
          <li><a href="/contact" class="hover:underline">Контакти</a></li>
        </ul>
      </nav> -->
</template>

<script setup>
import { ref } from 'vue';

const currentYear = ref(new Date().getFullYear());
</script>

<style scoped>

p {
  color: #fff;
  text-decoration: none;
}

p:hover {
  text-decoration: underline;
}
</style>
