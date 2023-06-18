<template>
  <div>
    <v-btn class="custom-button" @click="goToOrderPage()">
      Commander
    </v-btn>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const validationPaymentSnackbar = ref(false)

    const router = useRouter()

    const goToOrderPage = () => {
      router.push({ name: 'order' })
    }

    return { validationPaymentSnackbar, goToOrderPage }
  }
}
</script>
