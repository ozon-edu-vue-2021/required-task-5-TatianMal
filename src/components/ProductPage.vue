<template>
  <main class="product-page">
    <product-card
      v-for="product in products"
      :key="product.uid"
      :product="product"
      :is-product-in-cart="isProductInCart(product.id)"
      :is-favourite="isProductFavourite(product.id)"
      :count="getProductCount(product.id)"
      class="mt-2"
      @add-in-cart="addProductInCart"
      @set-count="setCountOfProduct"
      @add-in-favourites="addProductInFavourite"
      @delete-from-favourites="deleteProductFromFavourite"
    >
    </product-card>
  </main>
</template>

<script>
import ProductCard from "@/components/ProductCard";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ProductPage",
  components: {
    ProductCard,
  },
  computed: {
    ...mapGetters({
      products: "products",
      productsInCart: "productsInCart",
      isProductFavourite: "isProductFavourite",
      isProductInCart: "isProductInCart",
      getProductCount: "getProductCount",
    }),
  },
  methods: {
    ...mapActions({
      downloadProducts: "downloadProducts",
      addProductInCart: "addProductInCart",
      setCountOfProduct: "setCountOfProduct",
      addProductInFavourite: "addProductInFavourite",
      deleteProductFromFavourite: "deleteProductFromFavourite",
    }),
  },
  async created() {
    await this.downloadProducts();
  },
};
</script>

<style scoped>
.product-page {
  display: flex;
  flex-wrap: wrap;
}
</style>
