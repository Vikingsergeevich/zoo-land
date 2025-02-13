<template>
  <header class="bg-white shadow-md p-4">
    <nav class="container mx-auto flex justify-between items-center">
      <h1 class="text-2xl font-bold text-green-600">ZooLand</h1>
      <ul class="flex space-x-4">
        <li><NuxtLink to="/" class="text-gray-700 hover:text-green-500">Головна</NuxtLink></li>
        <li><NuxtLink to="/catalog" class="text-gray-700 hover:text-green-500">Каталог</NuxtLink></li>
        <li><NuxtLink to="/contacts" class="text-gray-700 hover:text-green-500">Контакти</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>
