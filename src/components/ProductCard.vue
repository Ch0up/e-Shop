<template>
  <div class="card-container">
    <v-card v-for="product in products" class="mx-auto rounded-lg" max-width="344">
      <v-img :src="product.thumbnail_url" height="250px" cover></v-img>
      <v-card-title>
        {{ product.label }}
      </v-card-title>

      <v-card-text>
        {{ product.description }}
      </v-card-text>

      <v-card-actions class="pr-4">
        <span class="pa-2 font-weight-bold">{{ product.price }} €</span>
        <v-spacer></v-spacer>
        <v-btn @click="addToCart(product)" variant="tonal">
          <v-icon>mdi-cart</v-icon><span class="d-none d-md-block ml-2">Ajouter au panier</span>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts">
import { useCartStore } from '@/stores/cart'
export default {
  props: ['products'],
  setup(props: { products: Product[] }) {
    const cartStore = useCartStore()
    const addToCart = (product: Product) => {
      cartStore.addToCart(product)
    }
    return {
      addToCart
    }
  }
}
</script>
