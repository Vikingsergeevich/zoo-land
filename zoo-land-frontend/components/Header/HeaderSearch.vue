<template>
  <div class="flex items-center justify-center my-4">
    <input 
      type="text" 
      v-model="searchQuery" 
      placeholder="Искать ароматы..." 
      class="border border-gray-300 text-black rounded-l-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-gray-500"
    />
    <button 
      @click="handleSearch" 
      class="bg-green-500 text-white px-4 py-2 rounded-r-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
    >
      Поиск
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Реактивная переменная для хранения значения поиска
const searchQuery = ref('');

// Функция обработки поиска
const handleSearch = () => {
  console.log('Искать:', searchQuery.value);
  // Здесь можно добавить логику для обработки поиска
};
</script>

<style scoped>
/* Можешь добавить свои стили, если нужно */
</style>
