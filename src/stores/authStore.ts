import { defineStore, acceptHMRUpdate } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const isLogin = ref(false)
  function login(email:string, password:string): boolean {
    if(email === 'admin@mail.com'  && password === 'Pass@1234'){
      isLogin.value = true
      return true
    }
    return false
  }
  function logout() {
    isLogin.value = false
  }
  return { login, isLogin, logout}
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}
