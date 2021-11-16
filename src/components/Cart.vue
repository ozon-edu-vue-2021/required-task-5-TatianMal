<template>
  <v-row class="cart-body">
    <v-col cols="8">
      <v-list v-if="hasProducts">
        <v-list-item-group>
          <v-list-item
            v-for="{ product, count } in products"
            :key="product.uid"
            class="d-flex"
          >
            <v-img height="100" width="100" :src="getImageUrl(product)"></v-img>
            <v-list-item-title>
              {{ product.dish }}
            </v-list-item-title>
            <div>{{ getPrice(product) }}</div>
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
            <v-btn text @click="deleteProductFromCard(product.id)">
              Удалить
            </v-btn>
          </v-list-item>
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

import ProductCounter from "@/components/ProductCounter";

export default {
  name: "Cart",
  components: {
    ProductCounter,
  },
  computed: {
    ...mapGetters({
      products: "productsInCart",
      count: "totalCountProducts",
      totalCost: "totalCost",
    }),
    hasProducts() {
      return this.products?.length > 0;
    },
  },
  methods: {
    ...mapActions({
      deleteProductFromCard: "deleteProductFromCard",
      setCountOfProduct: "setCountOfProduct",
    }),
    getImageUrl(product) {
      return require(`@/assets/images/${product.image}`);
    },
    getPrice(product) {
      return `Цена: ${product.price}`;
    },
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
