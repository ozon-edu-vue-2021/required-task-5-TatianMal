<template>
  <main class="product-page">
    <product-card
      v-for="product in products"
      :key="product.uid"
      :product="product"
      class="mt-2"
      @add-in-cart="addProductInCart"
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
    }),
  },
  methods: {
    ...mapActions({
      downloadProducts: "downloadProducts",
      addProductInCart: "addProductInCart",
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
  justify-content: space-around;
}
</style>
