<template>
  <main>
    <div class="px-4">
      <div class="text-h4 my-6 text-center font-weight-bold text-black">Vos Produits</div>
      <div
          v-if="!isProductsLoading && !isCategoriesLoading"
          class="d-flex align-center flex-column"
      >
        <div class="w-50">
          <v-select
              clearable
              v-model="selectedCategory"
              :items="categoryOptions"
              label="Selectionner une categorie"
              variant="solo"
          >
          </v-select>
        </div>
        <ProductCard :products="filterProductsByCategory(selectedCategory)"/>
      </div>
      <div v-else class="text-center">
        <LoadingSpinner/>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import {computed, ref} from 'vue'
import {storeToRefs} from 'pinia'
import {useProductsStore} from '@/stores/products'
import {useCategoriesStore} from '@/stores/categories'
import ProductCard from '@/components/ProductCard.vue'
import LoadingSpinner from "@/components/LoadingSpinner.vue";

export default {
  components: {LoadingSpinner, ProductCard},
  setup() {
    const productsStore = useProductsStore()
    const categoriesStore = useCategoriesStore()
    const {
      products,
      isLoading: isProductsLoading,
      error: productsError
    } = storeToRefs(productsStore)
    const {
      categories,
      isLoading: isCategoriesLoading,
      error: categoriesError
    } = storeToRefs(categoriesStore)
    const selectedCategory = ref(null)
    const categoryOptions = computed(() => categories.value.map((category) => category.label))
    const filterProductsByCategory = (selectedCategory) => {
      if (selectedCategory) {
        const categoryId = categories.value.find(
            (category) => category.label === selectedCategory
        ).id
        return products.value.filter((product) => product.category_id === categoryId)
      } else {
        return products.value
      }
    }

    productsStore.fetchProducts()
    categoriesStore.fetchCategories()

    return {
      productsStore,
      categoriesStore,
      products,
      categories,
      isProductsLoading,
      isCategoriesLoading,
      selectedCategory,
      categoryOptions,
      filterProductsByCategory
    }
  }
}
</script>
