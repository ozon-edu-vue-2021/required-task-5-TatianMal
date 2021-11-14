<template>
  <div>
    <div>
      <v-list v-if="hasProducts">
        <v-list-group>
          <v-list-item v-for="product in products" :key="product.uid">
            <v-list-item-title>
              {{ product.dish }}
            </v-list-item-title>
            <v-list-item-content>
              {{ product.description }}
            </v-list-item-content>
            <div>Количество:</div>
          </v-list-item>
        </v-list-group>
      </v-list>
      <v-card v-else> В корзине пока нет товаров :( </v-card>
    </div>
    <v-card>
      <v-btn>Оформить</v-btn>
      {{ count }}
      {{ totalCost }}
    </v-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Cart",
  computed: {
    ...mapGetters({
      products: "productsInCart",
      count: "totalCountProducts",
      totalCost: "totalCost",
    }),
    hasProducts() {
      return this.products?.length > 0;
    },
    imageUrl() {
      return require(this.product.image);
    },
    price() {
      return `Цена: ${this.product.price}`;
    },
  },
  methods: {
    ...mapActions({
      deleteProductFromCard: "deleteProductFromCard",
      setCountOfProduct: "setCountOfProduct",
    }),
  },
};
</script>

<style></style>
