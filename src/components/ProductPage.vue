<template>
  <main>
    {{ products }}
    <product-card v-if="false"></product-card>
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
    }),
  },
  async created() {
    await this.downloadProducts();
  },
};
</script>

<style></style>
