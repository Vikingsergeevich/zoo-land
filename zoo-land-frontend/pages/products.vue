<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Управление товарами</h1>
    
    <ExcelManager 
      :products="products"
      @import-success="handleImportSuccess"
      @export-success="handleExportSuccess"
    />

    <div class="mt-8">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-semibold">Список товаров</h2>
        <div class="flex gap-2">
          <input 
            v-model="searchQuery" 
            type="text" 
            placeholder="Поиск товаров..."
            class="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="product in filteredProducts" :key="product.id" 
             class="border p-4 rounded-lg shadow hover:shadow-lg transition-shadow bg-white">
          <div class="flex justify-between items-start">
            <h3 class="font-bold text-lg">{{ product.name }}</h3>
            <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
              ID: {{ product.id }}
            </span>
          </div>
          <p class="text-gray-600 text-xl font-semibold mt-2">{{ product.price }} USD</p>
          <p v-if="product.description" class="text-sm text-gray-500 mt-2">
            {{ product.description }}
          </p>
          <div class="flex justify-between items-center mt-4">
            <span v-if="product.category" class="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded">
              {{ product.category }}
            </span>
            <span v-if="product.stock !== undefined" 
                  :class="[
                    'text-sm px-2 py-1 rounded',
                    product.stock > 10 ? 'bg-green-100 text-green-800' : 
                    product.stock > 0 ? 'bg-yellow-100 text-yellow-800' : 
                    'bg-red-100 text-red-800'
                  ]">
              В наличии: {{ product.stock }}
            </span>
          </div>
        </div>
      </div>

      <!-- Сообщение, если товары не найдены -->
      <div v-if="filteredProducts.length === 0" 
           class="text-center py-8 text-gray-500">
        Товары не найдены
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import ExcelManager from '~/components/ExcelManager.vue';

const products = ref([
  { 
    id: 1, 
    name: 'Chanel No. 5', 
    price: 100,
    description: 'Классический аромат',
    category: 'Парфюмерия',
    stock: 15
  },
  { 
    id: 2, 
    name: 'Dior Sauvage', 
    price: 120,
    description: 'Свежий мужской аромат',
    category: 'Парфюмерия',
    stock: 20
  }
]);

const searchQuery = ref('');

// Фильтрация товаров по поисковому запросу
const filteredProducts = computed(() => {
  if (!searchQuery.value) return products.value;
  
  const query = searchQuery.value.toLowerCase();
  return products.value.filter(product => 
    product.name.toLowerCase().includes(query) ||
    product.description?.toLowerCase().includes(query) ||
    product.category?.toLowerCase().includes(query)
  );
});

const handleImportSuccess = (importedData) => {
  try {
    // Проверяем и обновляем существующие товары
    const updatedProducts = products.value.map(existingProduct => {
      const importedProduct = importedData.find(p => p.id === existingProduct.id);
      return importedProduct || existingProduct;
    });

    // Добавляем новые товары
    const newProducts = importedData.filter(importedProduct => 
      !products.value.some(p => p.id === importedProduct.id)
    );

    // Обновляем список товаров
    products.value = [...updatedProducts, ...newProducts];
    
    // Показываем уведомление
    alert(`Успешно импортировано ${newProducts.length} новых товаров!`);
  } catch (error) {
    console.error('Ошибка при импорте:', error);
    alert('Произошла ошибка при импорте данных');
  }
};

const handleExportSuccess = () => {
  alert('Данные успешно экспортированы!');
};
</script>

<style scoped>
.product-card {
  transition: all 0.3s ease;
}

.product-card:hover {
  transform: translateY(-2px);
}
</style> 