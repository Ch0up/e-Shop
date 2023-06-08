<template>
  <div>
    <v-btn @click="dialog = true" prepend-icon="mdi-credit-card-outline" variant="tonal">
      Accéder au paiement
    </v-btn>
    <!--    !!!!!!!!!!!!!!!!!!!-->
    <!--    !!!!!!!!!!!!!!!!!!!-->
    <!--    J'ai volontairement laissé la dialog et la snackbar ici plutôt que des les sortir en composant (car fictif)-->
    <!--    !!!!!!!!!!!!!!!!!!!-->
    <!--    !!!!!!!!!!!!!!!!!!!-->
    <v-dialog v-model="dialog" width="400">
      <v-card>
        <v-card-title>
          <span class="text-h5">Informations de paiment</span>
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
              <v-text-field
                label="Code de sécurité"
                type="text"
                required
                pattern="[0-9]*"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="grey-darken-1"
            block
            @click="dialog = false; snackbar = true"
            >Payer et fermer</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
  <v-snackbar v-model="snackbar">
    <span>Votre commande a bien été validée</span>
    <template v-slot:actions>
      <v-btn color="pink" variant="text" @click="snackbar = false"> Fermer </v-btn>
    </template>
  </v-snackbar>
</template>
<script lang="ts">
import { ref } from 'vue'

export default {
  setup() {
    const dialog = ref(false)
    const snackbar = ref(false)
    return { dialog, snackbar }
  }
}
</script>
