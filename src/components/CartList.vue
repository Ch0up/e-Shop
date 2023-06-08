<template>
  <v-list lines="two">
    <v-list-item
      v-for="cartItem in cartItemsWithQuantity"
      :key="cartItem.product.id"
      :title="cartItem.product.label"
      :subtitle="`${cartItem.product.price} € (Quantité: ${cartItem.quantity})`"
    >
      <template v-slot:append>
        <v-btn
          @click="removeOneFromCart(cartItem.product)"
          color="grey-lighten-1"
          icon="mdi-minus"
          variant="text"
        ></v-btn>
        <v-btn
          @click="addOneToCart(cartItem.product)"
          color="grey-lighten-1"
          icon="mdi-plus"
          variant="text"
        ></v-btn>
        <v-btn
          @click="removeFromCart(cartItem.product)"
          color="grey-lighten-1"
          icon="mdi-trash-can"
          variant="text"
        ></v-btn>
      </template>
    </v-list-item>
  </v-list>
</template>
<script lang="ts">
import { useCartStore } from '@/stores/cart'

export default {
  props: ['cartItemsWithQuantity'],
  setup(props: { cartItemsWithQuantity }) {
    const cartStore = useCartStore()
    const removeFromCart = (product: Product) => {
      cartStore.removeFromCart(product)
    }
    const removeOneFromCart = (product: Product) => {
      cartStore.removeOneFromCart(product)
    }
    const addOneToCart = (product: Product) => {
      cartStore.addOneToCart(product)
    }
    return {
      removeFromCart,
      removeOneFromCart,
      addOneToCart
    }
  }
}
</script>
