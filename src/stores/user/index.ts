import { defineStore } from 'pinia'
import { RootState } from './types'

export const useUserStore = defineStore('user', {
  state: (): RootState => ({
    userInfo: {
      id: null,
      name: '',
    },
    token: '',
    userName: '',
  }),
  actions: {
    setName(name: string) {
      this.userName = name
    },
  },
})