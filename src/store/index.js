import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const IMAGE_NAMES = [
  "6123150777.webp",
  "6126039472.webp",
  "6126040354.webp",
  "6128597660.webp",
  "6134992334.webp",
  "6136170572.webp",
  "6136172483.webp",
  "6140906765.webp",
  "6142673815.webp",
  "6142681673.webp",
  "6142683276.webp",
  "6148226736.webp",
];

const getImage = () => {
  const rand = Math.random() * 12;
  const randIndex = Math.floor(rand);
  return `@/assets/images/${IMAGE_NAMES[randIndex]}`;
};

const getPrice = () => {
  const randPrice = 100 + Math.random() * 2000;
  return Math.floor(randPrice);
};

export default new Vuex.Store({
  state: {
    products: [],
    productsInCart: [],
    error: "",
  },
  getters: {
    products(state) {
      return state.products;
    },
    productsInCart(state) {
      return state.productsInCart;
    },
    totalCountProducts(state) {
      return state.productsInCart.length;
    },
    totalCost(state) {
      return state.productsInCart.reduce(
        (acc, currentProduct) => acc + currentProduct.price,
        0
      );
    },
  },
  mutations: {
    setProducts(state, payload) {
      const products = payload;
      products.forEach((product) => {
        product.image = getImage();
        product.price = getPrice();
      });
      state.products = payload;
    },
    setError(state, payload) {
      console.log(payload);
    },
    resetError(state, payload) {
      console.log(payload);
    },
    addProductInCart(state, product) {
      state.productsInCart.push(product);
    },
    deleteProductFromCard(state, productIndex) {
      state.productsInCart.splice(productIndex, 1);
    },
    setCountOfProduct(state, payload) {
      console.log(payload);
    },
  },
  actions: {
    async downloadProducts({ commit }) {
      const url = "https://random-data-api.com/api/food/random_food?size=30";
      try {
        const responce = await fetch(url);
        if (!responce.ok) {
          throw new Error(`HTTP error: ${responce.status}`);
        }
        const products = await responce.json();
        commit("setProducts", products);
      } catch (err) {
        commit("setError", err);
      }
    },
    addProductInCart({ state, commit }, productId) {
      const product = state.products.find(
        (product) => product.id === productId
      );
      if (!product) {
        return;
      }
      commit("addProductInCart", product);
    },
    deleteProductFromCard({ state, commit }, productId) {
      const productIndex = state.products.findIndex(
        (product) => product.id === productId
      );
      if (productIndex === -1) {
        return;
      }
      commit("deleteProductFromCard", productIndex);
    },
    setCountOfProduct({ state, commit }, productId) {
      const product = state.products.find(
        (product) => product.id === productId
      );
      if (!product) {
        return;
      }
      commit("setCountOfProduct", productId);
    },
  },
  modules: {},
});
