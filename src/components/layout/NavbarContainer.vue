<template>
  <v-app-bar color="light">
    <v-app-bar-title>
      <RouterLink color="grey-darken-1" class="router-link" to="/">{{ title }}</RouterLink>
    </v-app-bar-title>
    <template v-slot:append>
      <RouterLink to="/cart">
        <v-btn color="#3a8e99" stacked>
          <v-badge :content="cartTotalQuantity" color="red">
            <v-icon>mdi-cart</v-icon>
          </v-badge>
        </v-btn>
      </RouterLink>
    </template>
  </v-app-bar>
</template>

<script setup>
defineProps(['cartTotalQuantity', 'title'])
</script>

<style>
.router-link:visited {
  color: inherit;
}
</style>
