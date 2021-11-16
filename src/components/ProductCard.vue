<template>
  <v-card max-width="250">
    <v-img height="250" :src="imageUrl"></v-img>
    <v-card-title>{{ product.dish }}</v-card-title>
    <v-card-subtitle>
      <span class="price">
        {{ price }}
      </span>
    </v-card-subtitle>
    <v-card-text>
      <div>
        {{ product.description }}
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn v-if="!isProductInCart" color="primary" text @click="addInCart">
        В корзину
      </v-btn>
      <product-counter
        v-else
        :count="count"
        @input="
          setCountOfProduct({
            productId: product.id,
            count: $event,
          })
        "
      ></product-counter>
    </v-card-actions>
  </v-card>
</template>

<script>
import ProductCounter from "@/components/ProductCounter";

export default {
  name: "ProductCard",
  components: {
    ProductCounter,
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
    isProductInCart: {
      type: Boolean,
      default: false,
    },
    count: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    imageUrl() {
      return require(`@/assets/images/${this.product.image}`);
    },
    price() {
      return `Цена: ${this.product.price}`;
    },
  },
  methods: {
    addInCart() {
      this.$emit("add-in-cart", this.product.id);
    },
    setCountOfProduct(e) {
      this.$emit("set-count", e);
    },
  },
};
</script>

<style scoped>
.price::after {
  content: "\20bd";
}
</style>
