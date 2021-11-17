<template>
  <v-row class="cart-body">
    <v-col cols="8">
      <v-list v-if="hasProducts">
        <v-list-item-group>
          <cart-product
            v-for="{ product, count } in products"
            :key="product.uid"
            :product="product"
            :count="count"
            :is-favourite="isProductFavourite(product.id)"
            class="d-flex"
            @delete-from-cart="deleteProductFromCard"
            @set-count="setCountOfProduct"
            @add-in-favourites="addProductInFavourite"
            @delete-from-favourites="deleteProductFromFavourite"
          ></cart-product>
        </v-list-item-group>
      </v-list>
      <v-card v-else flat> В корзине пока нет товаров :( </v-card>
    </v-col>
    <v-col cols="4" class="d-flex flex-column">
      <v-btn color="primary" outlined class="mb-2" @click="buyProducts">
        Оформить
      </v-btn>
      <div>
        <div class="h6">Ваша корзина</div>
        <div class="d-flex justify-space-between">
          <span>Количество товара</span><span>{{ count }}</span>
        </div>
        <div class="d-flex justify-space-between">
          <div>Итоговая стоимость</div>
          <div>{{ totalCost }}</div>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import CartProduct from "@/components/CartProduct";

export default {
  name: "Cart",
  components: {
    CartProduct,
  },
  computed: {
    ...mapGetters({
      products: "productsInCart",
      count: "totalCountProducts",
      totalCost: "totalCost",
      isProductFavourite: "isProductFavourite",
    }),
    hasProducts() {
      return this.products?.length > 0;
    },
  },
  methods: {
    ...mapActions({
      deleteProductFromCard: "deleteProductFromCard",
      setCountOfProduct: "setCountOfProduct",
      addProductInFavourite: "addProductInFavourite",
      deleteProductFromFavourite: "deleteProductFromFavourite",
    }),
    buyProducts() {
      alert(
        this.products
          .map(({ product, count }) => `${product.dish} кол-во: ${count}`)
          .join("; ")
      );
    },
  },
};
</script>

<style scoped>
.cart-body {
  display: flex;
}
</style>
