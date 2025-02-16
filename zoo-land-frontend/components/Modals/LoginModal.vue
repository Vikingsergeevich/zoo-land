<template>
    <div v-if="modalState.isOpen && modalState.name === ModalName.login" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div class="bg-white p-6 rounded-md shadow-md w-96">
        <h2 class="text-xl font-bold mb-4">Вхід</h2>
        <!-- Проста форма для логіну -->
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
            <button type="button" @click="closeModal" class="mr-2 px-4 py-2">Скасувати</button>
            <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded">Увійти</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useModal } from '~/composables/useModal';
  import { useAccessor } from '~/composables/useAccessor';
  import { ModalName } from '@/types/modals.enum';
  
  const { modalState, closeModal } = useModal();
  const { setUser } = useAccessor();
  
  const email = ref('');
  const password = ref('');
  
  const handleLogin = () => {
    // Тут має бути логіка перевірки даних через API, але для прикладу:
    if (email.value && password.value) {
      // Проста перевірка і встановлення користувача:
      setUser({ fullName: 'Іван Петренко' });
      closeModal();
    } else {
      alert('Введіть коректні дані');
    }
  };
  </script>
  
  <style scoped>
  /* Стилі модального вікна */
  </style>
  