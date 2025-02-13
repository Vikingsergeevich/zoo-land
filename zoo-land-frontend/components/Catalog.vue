<template>
  <div>
    <h2 class="text-center font-bold text-blue-600">Товари ZooLand</h2>
    <div class="product-grid">
      <div v-for="product in products" :key="product.id">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ProductCard from '~/components/ProductCard.vue';

const products = ref([
  { id: 1, name: 'Chanel No. 5', price: 100 },
  { id: 2, name: 'Dior Sauvage', price: 120 },
  { id: 3, name: 'Gucci Bloom', price: 110 },
  { id: 4, name: 'Versace Eros', price: 130 },
  { id: 5, name: 'Dolce & Gabbana Light Blue', price: 90 },
  { id: 6, name: 'Yves Saint Laurent Libre', price: 150 },
  { id: 7, name: 'Tom Ford Black Orchid', price: 140 },
  { id: 8, name: 'Givenchy L\'Interdit', price: 115 },
  { id: 9, name: 'Paco Rabanne 1 Million', price: 125 },
  { id: 10, name: 'Armani Code', price: 135 },
  { id: 11, name: 'Calvin Klein Euphoria', price: 95 },
  { id: 12, name: 'Marc Jacobs Daisy', price: 105 },
  { id: 13, name: 'Jo Malone Peony & Blush Suede', price: 155 },
  { id: 14, name: 'Hermès Terre d\'Hermès', price: 145 },
  { id: 15, name: 'Bvlgari Man in Black', price: 125 },
  { id: 16, name: 'Hugo Boss Bottled', price: 85 },
  { id: 17, name: 'Lancome La Vie Est Belle', price: 115 },
	{ id: 18, name: 'Chanel No. 5', price: 100 },
  { id: 19, name: 'Dior Sauvage', price: 120 },
  { id: 20, name: 'Gucci Bloom', price: 110 },
  { id: 21, name: 'Versace Eros', price: 130 },
  { id: 22, name: 'Dolce & Gabbana Light Blue', price: 90 },
  { id: 23, name: 'Yves Saint Laurent Libre', price: 150 },
  { id: 24, name: 'Tom Ford Black Orchid', price: 140 },
  { id: 25, name: 'Givenchy L\'Interdit', price: 115 },
  { id: 26, name: 'Paco Rabanne 1 Million', price: 125 },
  { id: 27, name: 'Armani Code', price: 135 },
  { id: 11, name: 'Calvin Klein Euphoria', price: 95 },
  { id: 12, name: 'Marc Jacobs Daisy', price: 105 },
  { id: 13, name: 'Jo Malone Peony & Blush Suede', price: 155 },
  { id: 14, name: 'Hermès Terre d\'Hermès', price: 145 },
  { id: 15, name: 'Bvlgari Man in Black', price: 125 },
  { id: 16, name: 'Hugo Boss Bottled', price: 85 },
  { id: 17, name: 'Lancome La Vie Est Belle', price: 115 },
]);
</script>

<style scoped>
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
}

.product-grid > div {
  display: flex;
  justify-content: center;
}
</style>
