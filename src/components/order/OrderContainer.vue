<template>
    <template v-if="!isDeliveryValid">
        <OrderDelivery isDeliveryValid="isDeliveryValid" />
    </template>
    <template v-else>
        <OrderPayment />
    </template>
    <div class="mt-2">
        <div class="text-left">
            <v-btn class="custom-button" v-if="isDeliveryValid" @click="isDeliveryValid = false"
                prepend-icon="mdi-arrow-left">
                Précédent
            </v-btn>
        </div>
        <div class="text-right">
            <v-btn class="custom-button" v-if="!isDeliveryValid" @click="isDeliveryValid = true"
                prepend-icon="mdi-arrow-right">
                Suivant
            </v-btn>
        </div>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import OrderDelivery from './OrderDelivery.vue';
import OrderPayment from './OrderPayment.vue';

export default {
    components: { OrderDelivery, OrderPayment },
    setup() {

        const isDeliveryValid = ref(false)

        return { isDeliveryValid }
    }
}
</script>