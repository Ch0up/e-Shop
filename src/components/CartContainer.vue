<template>
  <div class="px-4">
    <div class="text-h4 my-6 text-center font-weight-bold text-black">Votre Panier</div>
    <div v-if="cartTotalQuantity > 0">
      <div>
        <CartList :cartItemsWithQuantity="cartItemsWithQuantity" />
        <div class="pa-4 d-flex rounded-lg mb-4 background-total-price">
          <span class="font-weight-bold">Total :</span>
          <v-spacer></v-spacer>
          <span class="font-weight-bold">{{ totalPrice }} €</span>
        </div>
        <div class="text-right">
          <PaymentButton />
        </div>
      </div>
    </div>
    <div v-else class="text-center mt-8 text-black">Votre panier est vide</div>
  </div>
</template>

<script lang="ts">
import { useCartStore } from '@/stores/cart'
import { computed } from 'vue'
import PaymentButton from '@/components/PaymentButton.vue'
import CartList from '@/components/CartList.vue'

export default {
  components: { CartList, PaymentButton },
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
