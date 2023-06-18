import { defineStore } from 'pinia'
import Storage from '@/utils/storage'

const cart = Storage.fetchAll()

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: cart || ([] as Product[])
  }),
  getters: {
    cartItemsWithQuantity: (state: { cart: Product[] }) => {
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
    totalPrice: (state: { cart: Product[] }) => {
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

    findProductIndex(product: Product): number {
      return this.cart.findIndex((item: Product) => item.id === product.id);
    },

    async removeOneFromCart(product: Product) {
      const index = this.findProductIndex(product);
      if (index !== -1) {
        this.cart.splice(index, 1)
      }
      await this.save()
    },

    async addOneToCart(product: Product) {
      const index = this.findProductIndex(product);
      if (index !== -1) {
        // S'il existe déjà un élément avec le même ID, cela insère le nouvel élément à la suite de ceux déjà présent dans le tableau
        this.cart.splice(index + 1, 0, product)
      } else {
        this.cart.push(product)
      }
      await this.save()
    },

    async save() {
      Storage.save(this.cart)
    }
  }
})
