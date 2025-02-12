<template>
  <div>
    <main class="text-center p-8">
      <h2 class="text-3xl font-bold text-gray-800 mb-4">Добро пожаловать в наш магазин!</h2>
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
      <p class="text-lg text-gray-600 mb-8">Здесь вы найдете лучшие ароматы на любой вкус.</p>
      <Catalog />
    </main>
  </div>
</template>

<script>
import Catalog from '~/components/Catalog.vue';

const categories = [
  { name: 'Собаки', image: '/dog.png' },
  { name: 'Кішки', image: '/cat.png' },
  { name: 'Гризуни', image: 'hamster.png' },
  { name: 'Риби', image: '/fish.png' },
  { name: 'Птахи', image: '/bird.png' },
  { name: 'Рептилії', image: '/reptile.png' }
];

export default {
  name: 'HomePage',
  components: {
    Catalog,
  },

}
</script>

<style scoped>
/* Tailwind CSS уже стилизует компоненты, дополнительные стили не требуются */
</style>
