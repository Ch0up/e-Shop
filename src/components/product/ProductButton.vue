<template>
    <v-btn class="custom-button" @click="addToCart(product)">
        <v-icon>mdi-cart</v-icon><span class="d-none d-md-block ml-2">Ajouter au panier</span>
    </v-btn>
</template>

<script lang="ts">
import { useCartStore } from '@/stores/cart'

export default {
    props: ['product'],
    setup() {
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