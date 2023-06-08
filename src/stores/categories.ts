import { defineStore } from 'pinia'
import config from '../../config'

const url = config.AIRWEB_BASE_URL + 'categories'
export const useCategoriesStore = defineStore('categories', {
  state: () => ({
    categories: [] as Category[],
    isLoading: false,
    error: null as Error | null
  }),
  getters: {},
  actions: {
    async fetchCategories() {
      this.categories = []
      this.isLoading = true
      try {
        const response = await fetch(url)
        this.categories = (await response.json()) as Category[]
      } catch (error) {
        this.error = error as Error
      } finally {
        this.isLoading = false
      }
    }
  }
})
