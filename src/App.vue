<template>
  <v-layout>
    <NavbarContainer :cartTotalQuantity="cartTotalQuantity" :title="title" />
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
import NavbarContainer from '@/components/layout/NavbarContainer.vue'

export default {
  components: { NavbarContainer },
  setup() {
    const cartStore = useCartStore()
    const cartTotalQuantity = computed(() => cartStore.totalQuantity)
    const title = 'THE Boutique'

    return {
      cartTotalQuantity,
      title
    }
  }
}
</script>
