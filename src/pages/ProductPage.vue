<template>
  <header class="flex justify-start items-start px-6">
    <RouterLink to="/" class="text-gray-500 underline self-start">Go Back</RouterLink>
  </header>
  <section class="flex flex-col md:flex-row h-screen">
    <picture class="relative block rounded-none w-1/2 h-full aspect-square group">
      <img :src="product.imageUrl" :alt="product.name"
        class="object-contain w-full rounded-none h-full pointer-events-none group-hover:scale-100 transition delay-0" />
    </picture>
    <div class="w-full h-full px-4 flex flex-col justify-center items-center gap-8">
      <button
        class="bg-gray-200 rounded-sm px-2 py-1 font-semibold uppercase flex justify-center items-center drop-shadow-sm">
        new
      </button>
      <div class="flex flex-col items-center">
        <h1 class="font-bold uppercase">{{ product.name }}</h1>
        <p class="text-sm font-semibold" data-test-id="price-p">
          <span>{{ product.currency }}</span>{{ product.price }}
        </p>
      </div>
      <SizeSelector :sizes="sizes" />
      <button class="uppercase px-5 py-3 rounded-full bg-black text-white" @click="addToCart">
        Add to bag
      </button>
      <hr class="w-full h-[0.5px] bg-gray-400" />
      <Accordion :items="accordionItems" />
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  defineComponent,
  ref,
  onMounted,
  getCurrentInstance,
  watch,
} from "vue";
import { useRoute, RouterLink } from "vue-router";
import { Product } from "../types/index.ts";
import { Repository } from "../domain/product-repository.ts";
import { supabase } from "../lib/supabase/client.ts";
import Accordion from "../components/ui/accordion.vue";
import SizeSelector from "../components/ui/product/size-selector.vue";

const route = useRoute();
const instance = getCurrentInstance();

const productRepo = new Repository();
const product = ref<Product>({});
const accordionItems = ref<AccordionItem[]>([]);
const sizes = ref<string[]>([]);
const cart = ref<Product[]>(JSON.parse(localStorage.getItem("cart") || "[]")); // Define cart as a ref

const getProduct = async () => {
  product.value = await productRepo.getProductById({ id: route?.params?.id });
  accordionItems.value = [
    { title: "Description", content: product.value.description },
    { title: "Weight", content: product.value.dimensions.weight },
  ];
  sizes.value = product.value.options.map((option) => option.values).flat();
};

const addToCart = () => {
  cart.value.push(product.value); // Access cart.value instead of just cart
  localStorage.setItem("cart", JSON.stringify(cart.value)); // Update cart in localStorage
  location.reload();
};

onMounted(() => {
  getProduct();
});

defineComponent({
  name: "ProductPage",
  components: {
    Accordion,
    SizeSelector,
  },
  methods: {
    addToCart,
  },
});
</script>
