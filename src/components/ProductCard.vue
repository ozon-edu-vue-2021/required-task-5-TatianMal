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
      <v-btn color="primary" text @click="addInCart"> В корзину </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    imageUrl() {
      return require(this.product.image);
    },
    price() {
      return `Цена: ${this.product.price}`;
    },
  },
  methods: {
    addInCart() {
      this.$emit("add-in-cart", this.product.id);
    },
  },
};
</script>

<style scoped>
.price::after {
  content: "\20bd";
}
</style>
