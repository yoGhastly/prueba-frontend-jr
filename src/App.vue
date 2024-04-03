<template>
  <Navbar />
  <RouterView />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import ThreeItemGrid from "./components/grid/three-grid.vue";
import Navbar from "./components/layout/navbar.vue";

export default defineComponent({
  components: {
    Navbar,
    ThreeItemGrid,
  },
});
</script>
