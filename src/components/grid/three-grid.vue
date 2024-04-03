<template>
  <section class="mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-2">
    <ThreeItemGridItem v-for="product in products" :key="product.id" :item="product" :size="'half'" :priority="true" />
  </section>
</template>

<script setup lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { Product } from "../../types/index.ts";
import ThreeItemGridItem from "./three-item-grid-item.vue";
import { Repository } from "../../domain/product-repository.ts";

const productRepo = new Repository();

const products = ref<Product[]>([]);

const fetchProducts = async () => {
  products.value = await productRepo.all();
};

onMounted(fetchProducts);

defineComponent({
  name: "ThreeItemGrid",
  components: {
    ThreeItemGridItem,
  },
});
</script>
