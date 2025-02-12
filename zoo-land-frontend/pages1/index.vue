<template>
  <div class="container mx-auto px-4 py-8">
    <h2 class="text-3xl font-bold text-gray-800">Ласкаво просимо до ZooLand</h2>
    <p class="text-gray-600 mt-2">Найкращі товари для ваших улюбленців</p>
    
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-6">
      <div v-for="category in categories" :key="category.name" class="text-center">
        <img :src="category.image" :alt="category.name" class="rounded-full w-20 h-20 mx-auto" />
        <p class="mt-2 text-gray-700">{{ category.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const categories = [
  { name: 'Собаки', image: '/dog.png' },
  { name: 'Кішки', image: '/cat.png' },
  { name: 'Гризуни', image: 'hamster.png' },
  { name: 'Риби', image: '/fish.png' },
  { name: 'Птахи', image: '/bird.png' },
  { name: 'Рептилії', image: '/reptile.png' }
];
</script>
