<template>
  <div>
    <!-- Верхняя панель с кнопками -->
    <nav class="bg-gray-700 text-white py-2 text-sm font-bold">
      <ul class="flex items-center justify-around space-x-4">
        <li><nuxt-link to="/sale" class="hover:bg-green-500 px-4 py-2 rounded-md">Розпродаж</nuxt-link></li>
        <li><nuxt-link to="/about" class="hover:bg-green-500 px-4 py-2 rounded-md">Про нас</nuxt-link></li>
        <li><nuxt-link to="/delivery" class="hover:bg-green-500 px-4 py-2 rounded-md">Доставка</nuxt-link></li>
        <li><nuxt-link to="/contacts" class="hover:bg-green-500 px-4 py-2 rounded-md">Контакти</nuxt-link></li>
        <li><nuxt-link to="/offers" class="hover:bg-green-500 px-4 py-2 rounded-md text-red-500">Акції</nuxt-link></li>
      </ul>
    </nav>

    <!-- Основное меню -->
    <nav class="bg-gray-800 text-white py-0 text-sm font-bold">
      <ul class="flex items-center justify-around space-x-4">
        <li class="w-64">
          <nuxt-link to="/catalog" class="w-64 flex justify-around space-x-4 hover:bg-green-500 px-4 py-4 rounded-md w-40">
            <HeaderBurger class="ml-4" />
            Каталог
          </nuxt-link>
        </li>
        <li><HeaderSearch class="w-64"></HeaderSearch></li>
        <li><nuxt-link to="/account" class="hover:bg-green-500 px-4 py-4 rounded-md">Особистий кабінет</nuxt-link></li>
        <li><nuxt-link to="/checkout" class="hover:bg-green-500 px-4 py-4 rounded-md">Кошик</nuxt-link></li>
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
