<template>
    <v-card>
        <v-card-title>
            <span class="text-h5">
                <v-icon>mdi-credit-card-outline</v-icon>
                Informations de paiment</span>
        </v-card-title>
        <v-card-text>
            <v-row>
                <v-col cols="12">
                    <v-text-field label="Nom" type="text" required></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-text-field label="Numéro de carte" type="text" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-text-field label="Date d'expiration" type="text" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-text-field label="Code de sécurité" type="text" required pattern="[0-9]*"></v-text-field>
                </v-col>
            </v-row>
        </v-card-text>
        <v-card-actions class="justify-end">
            <v-btn class="custom-button" @click="validPayment()" prepend-icon="mdi-credit-card-outline">
                Payer et commander
            </v-btn>
        </v-card-actions>
    </v-card>
    <v-snackbar v-model="validationPaymentSnackbar">
        <span>Votre commande a bien été validée</span>
        <template v-slot:actions>
            <v-btn class="custom-button" variant="text" @click="validationPaymentSnackbar = false"> Fermer
            </v-btn>
        </template>
    </v-snackbar>
</template>

<script lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
    setup() {
        const validationPaymentSnackbar = ref(false)

        const router = useRouter()

        const validPayment = () => {
            validationPaymentSnackbar.value = true,
                setTimeout(() => {
                    router.push({ name: 'cartList' })
                }, 1500)
        }

        return { validationPaymentSnackbar, validPayment }
    }
}
</script>