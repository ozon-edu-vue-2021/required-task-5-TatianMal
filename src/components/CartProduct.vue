<template>
  <v-list-item>
    <v-img height="100" width="100" :src="imageUrl"></v-img>
    <v-list-item-title>
      {{ product.dish }}
    </v-list-item-title>
    <div class="price">{{ price }}</div>
    <div>
      <span>Количество:</span>
      <product-counter
        :count="count"
        @input="
          setCountOfProduct({
            productId: product.id,
            count: $event,
          })
        "
      ></product-counter>
    </div>
    <v-btn text @click="deleteProductFromCard"> Удалить </v-btn>
    <div>
      <v-btn v-if="!isFavourite" color="primary" text @click="addInFavourites">
        В избранное
      </v-btn>
      <v-btn v-else color="primary" text @click="deleteFromFavourites">
        Убрать из избранного
      </v-btn>
    </div>
  </v-list-item>
</template>

<script>
import ProductCounter from "@/components/ProductCounter";

export default {
  name: "CartProduct",
  props: {
    product: {
      type: Object,
      required: true,
    },
    count: {
      type: Number,
      default: 0,
    },
    isFavourite: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    ProductCounter,
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
    deleteProductFromCard() {
      this.$emit("delete-from-cart", this.product.id);
    },
    setCountOfProduct(e) {
      this.$emit("set-count", e);
    },
    addInFavourites() {
      this.$emit("add-in-favourites", this.product.id);
    },
    deleteFromFavourites() {
      this.$emit("delete-from-favourites", this.product.id);
    },
  },
};
</script>

<style scoped>
.price::after {
  content: "\20bd";
}
</style>
