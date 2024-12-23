import { defineStore, acceptHMRUpdate } from 'pinia'
import { ref } from 'vue'
import { useUserStore } from './userStore'

export const useAuthStore = defineStore('auth', () => {
  const isLogin = ref(false)
  const userStore = useUserStore()
  function login(email: string, password: string): boolean {
    const u = userStore.getUserByEmail(email)
    if (u && u.password === password) {
      isLogin.value = true
      return true
    }
    return false
  }
  function logout() {
    isLogin.value = false
  }
  return { login, isLogin, logout }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}
