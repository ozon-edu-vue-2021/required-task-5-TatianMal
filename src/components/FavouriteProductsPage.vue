<template>
  <main class="product-page">
    <product-card
      v-for="product in products"
      :key="product.uid"
      :product="product"
      :is-product-in-cart="checkProductInCart(product.id)"
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
  name: "FavouriteProductsPage",
  components: {
    ProductCard,
  },
  computed: {
    ...mapGetters({
      products: "favouriteProducts",
      productsInCart: "productsInCart",
      isProductFavourite: "isProductFavourite",
    }),
  },
  methods: {
    ...mapActions({
      addProductInCart: "addProductInCart",
      setCountOfProduct: "setCountOfProduct",
      addProductInFavourite: "addProductInFavourite",
      deleteProductFromFavourite: "deleteProductFromFavourite",
    }),
    checkProductInCart(productId) {
      return !!this.getProductCount(productId);
    },
    getProductCount(productId) {
      const productInCart = this.productsInCart.find(
        ({ product }) => product.id === productId
      );
      return !productInCart ? 0 : productInCart.count;
    },
  },
};
</script>

<style scoped>
.product-page {
  display: flex;
  flex-wrap: wrap;
}
</style>
