<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Магазин</router-link> |
      <router-link to="/cart">Корзина</router-link> |
      <router-link to="/favourites">Избранное</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "App",
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

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
