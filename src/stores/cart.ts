import { defineStore } from 'pinia'
import Storage from '@/utils/storage'

const cart = Storage.fetchAll()

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: cart || ([] as Product[])
  }),
  getters: {
    cartItemsWithQuantity: (state) => {
      const cartItemsMap = new Map<string, { product: Product; quantity: number }>()
      state.cart.forEach((product) => {
        const existingItem = cartItemsMap.get(product.id)
        if (existingItem) {
          existingItem.quantity += 1
        } else {
          cartItemsMap.set(product.id, { product, quantity: 1 })
        }
      })

      return Array.from(cartItemsMap.values())
    },
    totalPrice: (state) => {
      return state.cart.reduce((total, product) => total + product.price, 0)
    },
    totalQuantity: (state) => {
      return state.cart.length
    }
  },
  actions: {
    async addToCart(product: Product) {
      this.cart.push(product)
      await this.save()
    },
    async removeFromCart(product: Product) {
      this.cart = this.cart.filter((cart: Product) => cart.id !== product.id)
      await this.save()
    },

    async removeOneFromCart(product: Product) {
      const index = this.cart.findIndex((item) => item.id === product.id)
      if (index !== -1) {
        const item = this.cart[index]
        if (item.quantity > 1) {
          item.quantity -= 1
        } else {
          this.cart.splice(index, 1)
        }
      }
      await this.save()
    },

    async addOneToCart(product: Product) {
      const item = this.cart.find((cartItem) => cartItem.id === product.id)
      if (item) {
        const newItem = { ...product, quantity: 1 }
        this.cart.push(newItem)
      }
      await this.save()
    },

    async save() {
      Storage.save(this.cart)
    }
  }
})
