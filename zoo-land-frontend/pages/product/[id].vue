<template>
  <div class="product-page">
    <img
    class="fit-picture"
    :src= product?.image
    alt="product image"/>
    <h1 class="text-2xl font-bold mb-4">{{ product?.name }}</h1>
    <p class="text-lg">Ціна:  USD</p>
    <p class="text-gray-600 mb-4">{{ product?.description }}</p>

    <button
          class="bg-blue-500 text-white px-4 py-2 rounded-md"
          @click="addToCart"
        >
          Add to Cart
        </button>
    <router-link to="/" class="back-button">Назад до каталогу</router-link>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';


const route = useRoute();
const product = ref(null);

// Заглушка товаров для поиска по ID
const products = [
  { id: 1, 
    name: 'Dog',
    description: 'This is a sample product description for dog.',
    price: 29.99,
    image: '/dog.png'},
  { id: 2, name: 'Dog',
    description: 'This is a sample product description for cat.',
    price: 50,
    image: '/cat.png' },
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
  { id: 28, name: 'Calvin Klein Euphoria', price: 95 },
  { id: 29, name: 'Marc Jacobs Daisy', price: 105 },
  { id: 30, name: 'Jo Malone Peony & Blush Suede', price: 155 },
  { id: 31, name: 'Hermès Terre d\'Hermès', price: 145 },
  { id: 32, name: 'Bvlgari Man in Black', price: 125 },
  { id: 33, name: 'Hugo Boss Bottled', price: 85 },
  { id: 34, name: 'Lancome La Vie Est Belle', price: 115 },
];

// Получаем товар по параметру id
onMounted(() => {
  const id = Number(route.params.id);
  product.value = products.find((item) => item.id === id);
});

const addToCart = () => {
  console.log('Product added to cart');
};
</script>

<style scoped>
.product-page {
  text-align: center;
  padding: 20px;
}

.back-button {
  margin-top: 20px;
  display: inline-block;
  color: #fff;
  background-color: #3498db;
  padding: 10px 15px;
  border-radius: 5px;
  text-decoration: none;
}
</style>
