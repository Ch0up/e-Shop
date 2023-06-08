import { defineStore } from 'pinia'
import config from '../../config'

const url = config.AIRWEB_BASE_URL + 'products'
export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [] as Product[],
    isLoading: false,
    error: null as Error | null
  }),
  getters: {},
  actions: {
    async fetchProducts() {
      this.products = []
      this.isLoading = true
      try {
        const response = await fetch(url)
        this.products = (await response.json()) as Product[]
      } catch (error) {
        this.error = error as Error
      } finally {
        this.isLoading = false
      }
    }
  }
})
