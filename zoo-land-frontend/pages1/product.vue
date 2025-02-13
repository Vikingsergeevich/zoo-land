<template>
  <div class="container mx-auto px-4 py-8">
    <div class="flex flex-col md:flex-row">
      <div class="md:w-1/2">
        <img :src="product.image" alt="product image" class="w-full h-auto"/>
      </div>
      <div class="md:w-1/2 md:pl-8 mt-4 md:mt-0">
        <h1 class="text-3xl font-semibold mb-4">{{ product.name }}</h1>
        <p class="text-xl font-bold text-gray-900 mb-4">${{ product.price }}</p>
        <p class="text-gray-600 mb-4">{{ product.description }}</p>

        <button
          class="bg-blue-500 text-white px-4 py-2 rounded-md"
          @click="addToCart"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Mock product data
const product = ref({
  name: 'Product Name',
  description: 'This is a sample product description.',
  price: 29.99,
  image: 'https://via.placeholder.com/500x500'
});

const addToCart = () => {
  console.log('Product added to cart');
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
