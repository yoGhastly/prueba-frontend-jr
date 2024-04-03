<template>
  <section class="flex flex-col gap-5">
    <h1 class="self-start font-bold">Products</h1>
    <ThreeItemGrid />
  </section>
</template>

<script setup lang>
import { defineComponent } from "vue";
import ThreeItemGrid from "../components/grid/three-grid.vue";
defineComponent({
  name: "Home",
  components: {
    ThreeItemGrid,
  },
});
</script>
