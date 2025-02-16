import { ref, computed } from 'vue';

interface UserModel {
  fullName: string;
  // можна додати інші властивості
}

interface Accessor {
  isAuth: boolean;
  userModel: UserModel | null;
}

// Початковий стан – користувач не авторизований
const userState = ref<Accessor>({
  isAuth: false,
  userModel: null,
});

export function useAccessor() {
  const isAuth = computed(() => userState.value.isAuth);
  const user = computed(() => userState.value.userModel);

  // Функція для встановлення даних користувача (наприклад, після логіну)
  const setUser = (userData: UserModel) => {
    userState.value = {
      isAuth: true,
      userModel: userData,
    };
  };

  // Функція для виходу
  const logout = () => {
    userState.value = {
      isAuth: false,
      userModel: null,
    };
  };

  return {
    isAuth,
    user,
    setUser,
    logout,
  };
}