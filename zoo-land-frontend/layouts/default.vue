<template>
  <!-- Весь вміст у контейнері з боковими відступами -->
  <div class="min-h-screen flex flex-col ">
    <Header />
    <LoginModal />
    <main class="flex-grow">
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '~/components/Header/Header.vue'
import Footer from '~/components/Footer/Footer.vue'
import LoginModal from '~/components/Modals/LoginModal.vue';
</script>

<style scoped>
/* Якщо треба додаткові стилі */
</style>
