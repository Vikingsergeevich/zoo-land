<template>
    <div>
      <!-- Якщо користувач не авторизований, показуємо кнопку -->
      <div v-if="!isAuth" class="cursor-pointer" @click="openLoginModal">
        <img src="/assets/icons/user.svg" alt="user" class="inline mr-2 w-4 h-4" />
        Увійти
      </div>
      <!-- Якщо користувач авторизований, показуємо його ім'я -->
      <div v-else>
        <NuxtLink to="/account" class="flex items-center">
          <img src="/assets/icons/user.svg" alt="user" class="inline mr-2 w-4 h-4" />
          <span>{{ user?.fullName }}</span>
        </NuxtLink>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue';
  import { useModal } from '~/composables/useModal';
  import { useAccessor } from '~/composables/useAccessor';
  import { ModalName } from '@/types/modals.enum';
  
  const { showByName } = useModal();
  const { isAuth, user } = useAccessor();
  
  const openLoginModal = () => {
    showByName(ModalName.login);
  };
  </script>
  
  <style scoped>
  /* Додаткові стилі, якщо потрібно */
  </style>
  