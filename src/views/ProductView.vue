<template>
  <main>
    <div class="px-4">
      <div class="text-h4 my-6 text-center font-weight-bold text-white">Vos Produits</div>
      <div v-if="!isProductsLoading && !isCategoriesLoading" class="d-flex align-center flex-column">
        <div class="w-100 d-flex">
          <v-select clearable v-model="selectedCategory" :items="categoryOptions" label="Selectionner une categorie"
            variant="solo">
          </v-select>
          <v-text-field class="ml-2" v-model="searchProduct" clearable label="Rechercher un produit..." variant="solo">
          </v-text-field>
        </div>
        <ProductCard :products="filterProductsByCategory(selectedCategory)" />
      </div>
      <div v-else class="text-center">
        <LoadingSpinner />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useProductsStore } from '@/stores/products'
import { useCategoriesStore } from '@/stores/categories'
import ProductCard from '@/components/product/ProductCard.vue'
import LoadingSpinner from "@/components/LoadingSpinner.vue";

export default {
  components: { LoadingSpinner, ProductCard },
  setup() {
    const categoriesStore = useCategoriesStore()
    const { categories, isLoading: isCategoriesLoading, error: categoriesError } = storeToRefs(categoriesStore)
    const selectedCategory = ref('')
    const categoryOptions = computed(() => categories.value.map((category) => category.label))

    const filterProductsByCategory = (selectedCategory: string) => {
      let filteredProducts = [...products.value];

      if (selectedCategory) {
        const category = categories.value.find(
          (category) => category.label === selectedCategory
        );

        if (category) {
          const categoryId = category.id;
          filteredProducts = filteredProducts.filter(
            (product) => product.category_id === categoryId
          );
        }
      }
      if (searchProduct.value) {
        const searchQuery = searchProduct.value.toLowerCase().trim();
        filteredProducts = filteredProducts.filter((product) =>
          product.label.toLowerCase().includes(searchQuery)
        );
      }
      return filteredProducts;
    };

    categoriesStore.fetchCategories()

    const searchProduct = ref('');
    const productsStore = useProductsStore()
    const { products, isLoading: isProductsLoading, error: productsError } = storeToRefs(productsStore)

    productsStore.fetchProducts()


    return {
      categories,
      categoriesStore,
      isCategoriesLoading,
      categoriesError,
      selectedCategory,
      categoryOptions,
      filterProductsByCategory,

      products,
      productsStore,
      isProductsLoading,
      productsError,
      searchProduct
    }
  }
}
</script>
