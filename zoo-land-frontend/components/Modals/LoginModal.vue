<template>
  <Modal v-model="isOpen">
    <div class="w-96 p-6 bg-white rounded-md shadow-md">
      <h2 class="text-xl font-bold mb-4">Вхід</h2>
      <!-- Форма логіну -->
      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label class="block mb-1" for="email">Email</label>
          <input v-model="email" type="email" id="email" class="w-full border px-3 py-2 rounded" required />
        </div>
        <div class="mb-4">
          <label class="block mb-1" for="password">Пароль</label>
          <input v-model="password" type="password" id="password" class="w-full border px-3 py-2 rounded" required />
        </div>
        <div class="flex justify-end">
          <button type="button" @click="closeModal" class="mr-2 px-4 py-2 border rounded">Скасувати</button>
          <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded">Увійти</button>
        </div>
      </form>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import { ref, defineExpose } from 'vue';
import Modal from '@/components/Modal/Modal.vue';
import { useAccessor } from '~/composables/useAccessor';

const isOpen = ref(false);
const email = ref('');
const password = ref('');
const { setUser } = useAccessor();

const handleLogin = () => {
  if (email.value && password.value) {
    setUser({ fullName: 'Іван Петренко' });
    closeModal();
  } else {
    alert('Введіть коректні дані');
  }
};

const closeModal = () => {
  isOpen.value = false;
};

// Додаємо isOpen у defineExpose, щоб можна було керувати модалкою ззовні
defineExpose({ isOpen });
</script>

<style scoped>
/* Додаткові стилі */
</style>
