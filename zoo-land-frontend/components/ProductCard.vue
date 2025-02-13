<template>
  <div class="product-card">
    <h3>{{ product.name }}</h3>
    <p>Ціна: {{ product.price }} USD</p>
    <router-link :to="`/product/${product.id}`" class="details-button">
      Дивитись детальніше
    </router-link>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.product-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
  background-color: #f9f9f9;
}

.details-button {
  display: inline-block;
  margin-top: 10px;
  padding: 8px 12px;
  background-color: #FFB300;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
}

.details-button:hover {
  background-color: #FFB300;
}
</style>
