<template>
  <div>
    <main class="text-center p-8">
      <h2 class="text-3xl font-bold text-gray-800 mb-4">Ласкаво просимо до ZooLand</h2>
      <p class="text-lg text-gray-600 mb-8">Найкращі товари для ваших улюбленців!</p>
      <Catalog />
    </main>
  </div>
</template>

<script>
import Catalog from '~/components/Catalog.vue';


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
