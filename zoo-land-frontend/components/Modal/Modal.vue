<template>
    <Teleport to="body">
      <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div class="bg-white p-6 rounded-lg shadow-lg relative w-96">
          <button class="absolute top-2 right-2 text-gray-500 hover:text-gray-800" @click="closeModal">✖</button>
          <slot></slot>
        </div>
      </div>
    </Teleport>
  </template>
  
  <script setup lang="ts">
  import { defineProps, defineEmits, ref, watchEffect } from 'vue';
  
  const props = defineProps<{ modelValue: boolean }>();
  const emit = defineEmits(['update:modelValue']);
  
  const isOpen = ref(props.modelValue);
  
  watchEffect(() => {
    isOpen.value = props.modelValue;
  });
  
  const closeModal = () => {
    emit('update:modelValue', false);
  };
  </script>
  
  <style scoped>
  /* Можна додати стилі за потребою */
  </style>
  