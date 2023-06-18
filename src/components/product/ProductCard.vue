<template>
  <div class="card-container">
    <v-card v-for="product in products" :key="product.id" class="mx-auto rounded-lg" max-width="344">
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
        <ProductButton :product="product" />
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts">
import ProductButton from './ProductButton.vue';

export default {
  props: ["products"],
  components: { ProductButton }
}
</script>
