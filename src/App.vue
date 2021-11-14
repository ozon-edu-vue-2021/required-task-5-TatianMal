<template>
  <div id="app">
    <product-page>
    </product-page>
  </div>
</template>

<script>
import ProductPage from "@/components/ProductPage";

export default {
  name: "App",
  components: {
    ProductPage,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  background-color: #fafafa;
  padding: 24px;
  box-sizing: border-box;
}

html,
body,
#app {
  height: 100%;
}

* {
  box-sizing: border-box;
}
</style>
