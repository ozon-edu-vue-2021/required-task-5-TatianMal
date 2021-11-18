<template>
  <div class="d-flex">
    <v-btn :disabled="isMin" @click="decrement">-</v-btn>
    <span>{{ count }}</span>
    <v-btn :disabled="isMax" @click="increment">+</v-btn>
  </div>
</template>

<script>
export default {
  name: "ProductCounter",
  model: {
    prop: "count",
    event: "input",
  },
  props: {
    count: {
      type: Number,
      default: 1,
    },
    min: {
      type: Number,
      default: 1,
    },
    max: {
      type: Number,
      default: 5,
    },
  },
  computed: {
    isMin() {
      return this.count === this.min;
    },
    isMax() {
      return this.count === this.max;
    },
  },
  methods: {
    decrement() {
      this.$emit("input", this.count - 1);
    },
    increment() {
      this.$emit("input", this.count + 1);
    },
  },
};
</script>

<style></style>
