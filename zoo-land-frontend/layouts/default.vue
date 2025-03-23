<template>
  <!-- Весь вміст у контейнері з боковими відступами -->
  <div class="min-h-screen flex flex-col">
    <Header />
    <main class="flex-grow">
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from "~/components/Header/Header.vue";
import Footer from "~/components/Footer/Footer.vue";
</script>

<style scoped>
/* Якщо треба додаткові стилі */
</style>
