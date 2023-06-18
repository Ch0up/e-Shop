<template>
  <div class="px-4">
    <div class="text-h4 my-6 text-center font-weight-bold text-white">Votre Panier</div>
    <div v-if="cartTotalQuantity > 0">
      <div>
        <CartList :cartItemsWithQuantity="cartItemsWithQuantity" />
        <div class="mt-2 pa-4 d-flex rounded-lg mb-4 background-total-price">
          <span class="font-weight-bold">Total :</span>
          <v-spacer></v-spacer>
          <span class="font-weight-bold">{{ totalPrice }} €</span>
        </div>
        <div class="text-right">
          <OrderButton />
        </div>
      </div>
    </div>
    <div v-else class="text-center mt-8 text-white">Votre panier est vide</div>
  </div>
</template>

<script lang="ts">
import { useCartStore } from '@/stores/cart'
import { computed } from 'vue'
import OrderButton from '@/components/order/OrderButton.vue'
import CartList from '@/components/cart/CartList.vue'

export default {
  components: { CartList, OrderButton },
  setup() {
    const cartStore = useCartStore()
    const cartItemsWithQuantity = computed(() => cartStore.cartItemsWithQuantity)
    const totalPrice = computed(() => cartStore.totalPrice)
    const cartTotalQuantity = computed(() => cartStore.totalQuantity)

    return {
      cartItemsWithQuantity,
      totalPrice,
      cartTotalQuantity
    }
  }
}
</script>

<style scoped>
.background-total-price {
  background-color: lightgrey;
}
</style>
