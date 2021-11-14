import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

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
  },
  mutations: {
    setProducts(state, payload) {
      state.products = payload;
    },
    setError(state, payload) {
      console.log(payload);
    },
    resetError(state, payload) {
      console.log(payload);
    },
    addProductInCart(state, payload) {
      console.log(payload);
    },
    deleteProductFromCard(state, payload) {
      console.log(payload);
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
        console.log(responce);
        if (!responce.ok) {
          throw new Error(`HTTP error: ${responce.status}`);
        }
        const products = await responce.json();
        commit("setProducts", products);
      } catch (err) {
        commit("setError", err);
      }
    },
  },
  modules: {},
});
