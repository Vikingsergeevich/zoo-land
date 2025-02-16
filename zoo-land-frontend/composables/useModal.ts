import { ref } from 'vue';
import { ModalName } from '@/types/modals.enum';

interface ModalState {
  isOpen: boolean;
  name: ModalName | null;
}

const modalState = ref<ModalState>({ isOpen: false, name: null });

export function useModal() {
  const showByName = (name: ModalName) => {
    modalState.value = { isOpen: true, name };
  };

  const closeModal = () => {
    modalState.value = { isOpen: false, name: null };
  };

  return {
    modalState,
    showByName,
    closeModal,
  };
}
