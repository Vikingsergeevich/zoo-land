<template>
  <div>
    <div v-if="!isAuth" class="cursor-pointer" @click="openLoginModal">
      <img src="/assets/icons/user.svg" alt="user" class="inline mr-2 w-4 h-4" />
      Увійти
    </div>
    <div v-else>
      <NuxtLink to="/account" class="flex items-center">
        <img src="/assets/icons/user.svg" alt="user" class="inline mr-2 w-4 h-4" />
        <span>{{ user?.fullName }}</span>
      </NuxtLink>
    </div>

    <!-- Підключаємо модалку -->
    <LoginModal ref="loginModalRef" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAccessor } from '~/composables/useAccessor';
import LoginModal from '~/components/Modals/LoginModal.vue';

const { isAuth, user } = useAccessor();
const loginModalRef = ref<InstanceType<typeof LoginModal> | null>(null);

const openLoginModal = () => {
  if (loginModalRef.value) {
    loginModalRef.value.isOpen = true;
  }
};
</script>
