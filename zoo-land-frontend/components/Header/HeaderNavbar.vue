<template>
  <div>

    <!-- Верхняя панель с кнопками -->
    <nav class="py-3 bg-white border-b border-grey-light  text-gray-600 flex items-center justify-around space-x-4">
      <nuxt-link to="/" ><h1 class="text-3xl font-bold text-gray-600 py-3 underline tracking-widest relative">
      Z O O L A N D
      <span class="text-sm absolute">®</span>
    </h1></nuxt-link>

      <ul class="flex items-center justify-around space-x-4">
        <li><nuxt-link to="/sale" class="hover:bg-amber-500 hover:shadow-lg px-4 py-2 rounded-md">Розпродаж</nuxt-link></li>
        <li><nuxt-link to="/about" class=" hover:bg-amber-500 hover:shadow-lg px-4 py-2 rounded-md">Про нас</nuxt-link></li>
        <li><nuxt-link to="/delivery" class="hover:bg-amber-500 hover:shadow-lg px-4 py-2 rounded-md">Доставка</nuxt-link></li>
        <li><nuxt-link to="/contacts" class="hover:bg-amber-500 hover:shadow-lg px-4 py-2 rounded-md">Контакти</nuxt-link></li>
        <li><nuxt-link to="/offers" class="hover:bg-amber-500 hover:shadow-lg px-4 py-2 rounded-md text-red-500">Акції</nuxt-link></li>
      </ul>
      <div class="absolute top-1 right-4 bg-white text-gray-600 rounded-md px-4 py-3 shadow-md">
      <span href="tel:+38005553535" class="flex items-center">
        <span class="font-bold text-lg mr-2">+3 (800) 555-35-35</span>
			</hr>
        <!-- <button @click="requestCallback" class="bg-blue-600 text-white text-sm px-2 py-1 rounded">Перезвоните мне</button> -->
			</span>
    </div>
    </nav>

    <!-- Основное меню -->
    <nav class="bg-gray-800 text-gray-600 py-0 text-sm font-bold">
      <ul class="flex items-center justify-around space-x-4">
        <li class="w-64">
          <nuxt-link to="/catalog" class=" bg-amber-400 w-64 flex justify-around space-x-4 hover:bg-amber-500 px-4 py-4 rounded-md w-40">
            <HeaderBurger class="ml-4" />
            Каталог
          </nuxt-link>
        </li>
        <li><HeaderSearch class="w-64"></HeaderSearch></li>
        <li><nuxt-link to="/account" class="hover:bg-amber-500 px-4 py-4 rounded-md">Особистий кабінет</nuxt-link></li>
        <li><nuxt-link to="/checkout" class="hover:bg-amber-500 px-4 py-4 rounded-md">Кошик</nuxt-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
import HeaderBurger from './HeaderBurger.vue';
import HeaderSearch from './HeaderSearch.vue';

export default {
  name: 'Navbar',
  components: {
    HeaderSearch,
    HeaderBurger,
  },
}
</script>

<style scoped>
/* Дополнительные стили можно добавить здесь, если потребуется */
</style>
