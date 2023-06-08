<template>
  <v-layout>
    <Navbar :cartTotalQuantity="cartTotalQuantity" />
    <v-main>
      <v-container fluid>
        <RouterView />
      </v-container>
    </v-main>
  </v-layout>
</template>

<script lang="ts">
import { useCartStore } from '@/stores/cart'
import { computed } from 'vue'
import Navbar from '@/components/Navbar.vue'

export default {
  components: { Navbar },
  setup() {
    const cartStore = useCartStore()
    const cartTotalQuantity = computed(() => cartStore.totalQuantity)

    return {
      cartTotalQuantity
    }
  }
}
</script>
