<template>
  <div>
    <!-- Верхня панель з кнопками -->
    <nav class="py-3 bg-white border-b border-grey-light text-gray-600 flex items-center justify-evenly space-x-4">
      <NuxtLink to="/">
        <h1 class="text-3xl font-bold text-gray-600 py-3 underline tracking-widest relative">
          Z O O L A N D
          <span class="text-sm absolute">®</span>
        </h1>
      </NuxtLink>

      <ul class="flex items-center justify-around space-x-4">
        <li><NuxtLink to="/sale" class="hover:bg-amber-500 hover:shadow-lg px-4 py-2 rounded-md">Розпродаж</NuxtLink></li>
        <li><NuxtLink to="/about" class="hover:bg-amber-500 hover:shadow-lg px-4 py-2 rounded-md">Про нас</NuxtLink></li>
        <li><NuxtLink to="/delivery" class="hover:bg-amber-500 hover:shadow-lg px-4 py-2 rounded-md">Доставка</NuxtLink></li>
        <li><NuxtLink to="/contacts" class="hover:bg-amber-500 hover:shadow-lg px-4 py-2 rounded-md">Контакти</NuxtLink></li>
        <li><NuxtLink to="/offers" class="hover:bg-amber-500 hover:shadow-lg px-4 py-2 rounded-md text-red-500">Акції</NuxtLink></li>
      </ul>

      <!-- Блок з номером та кнопкою -->
      <!-- <div class="absolute top-1 right-4 bg-white text-gray-600 rounded-md px-4 py-3 shadow-md">
        <span class="flex items-center">
          <span class="font-bold text-lg mr-2">+3 (800) 555-35-35</span>
          <button @click="requestCallback" class="bg-blue-600 text-white text-sm px-2 py-1 rounded">Замовити дзвінок</button>
        </span>
      </div> -->
    </nav>

    <!-- Основне меню -->
    <nav class="bg-gray-800 text-gray-600 py-0 text-sm font-bold">
      <ul class="flex items-center  justify-evenly space-x-4">
        <li class="w-64">
          <NuxtLink
            to="/catalog"
            class="bg-amber-400 w-64 flex justify-around space-x-4 hover:bg-amber-500 px-4 py-4 rounded-md w-40"
          >
            <HeaderBurger class="ml-4" />
            Каталог
          </NuxtLink>
        </li>
        <li>
          <HeaderSearch />
        </li>
        <li><NuxtLink to="/account" class="hover:bg-amber-500 px-4 py-4 rounded-md">Особистий кабінет</NuxtLink></li>
        <li><NuxtLink to="/checkout" class="hover:bg-amber-500 px-4 py-4 rounded-md">Кошик</NuxtLink></li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import HeaderBurger from './HeaderBurger.vue';
import HeaderSearch from './HeaderSearch.vue';

//  Приймаємо пропс
defineProps({
  requestCallback: Function
});
</script>

<style scoped>
/* Додаткові стилі можна додати тут, якщо потрібно */
</style>
