<template>
  <main class="product-page">
    <product-card
      v-for="product in products"
      :key="product.uid"
      :product="product"
      :is-product-in-cart="checkProductInCart(product.id)"
      :count="getProductCount(product.id)"
      class="mt-2"
      @add-in-cart="addProductInCart"
      @set-count="setCountOfProduct"
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
    }),
  },
  methods: {
    ...mapActions({
      downloadProducts: "downloadProducts",
      addProductInCart: "addProductInCart",
      setCountOfProduct: "setCountOfProduct",
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
  async created() {
    await this.downloadProducts();
  },
};
</script>

<style scoped>
.product-page {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
