<template>
  <nav class="relative flex items-center justify-between p-4 lg:px-6">
    <p class="uppercase font-bold">ecart</p>
    <button @click="showCart = !showCart"
      class="flex items-center justify-center px-4 py-2 bg-black hover:bg-black/80 transition delay-75 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
      </svg>
    </button>
    <div v-if="showCart"
      class="absolute top-16 right-0 z-50 w-72 bg-white border border-gray-200 shadow-lg p-4 rounded-lg">
      <div v-if="cart.length === 0">Your cart is empty</div>
      <div v-else>
        <div v-for="(item, index) in cart" :key="index"
          class="flex items-center justify-between border-b border-gray-200 py-2">
          <div class="flex gap-2">
            <picture class="relative block rounded-none w-10 h-10 aspect-square group">
              <img :src="item.imageUrl" :alt="item.name"
                class="object-contain w-full rounded-none h-full pointer-events-none group-hover:scale-100 transition delay-0" />
            </picture>
            <div class="flex flex-col">
              <p class="font-semibold">{{ item.name }}</p>
              <p class="text-xs">
                <span>{{ item.currency }}</span>{{ item.price }}
              </p>
            </div>
          </div>
          <div class="flex items-center">
            <input type="number" v-model="item.quantity" min="1" @input="updateQuantity(index, item.quantity)"
              class="w-16 border border-gray-300 rounded-md p-1 text-center" />
            <button @click="removeFromCart(index)" class="text-red-500 ml-2">
              Remove
            </button>
          </div>
        </div>
        <button @click="checkout" class="mt-4 px-4 py-2 bg-black text-white rounded-md hover:bg-black/80">
          Checkout
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { defineComponent, ref, watch } from "vue";
import { useRouter } from "vue-router";
import { Product } from "../types/index.ts";

const showCart = ref(false);
const router = useRouter();
const cart = ref<Product[]>(JSON.parse(localStorage.getItem("cart") || "[]"));

const removeFromCart = (index: number) => {
  cart.value.splice(index, 1); // Remove item from cart array
};

const checkout = () => {
  alert("Items successfully purchased");
  cart.value = [];
  localStorage.removeItem("cart");
};

watch(cart, (newCart) => {
  localStorage.setItem("cart", JSON.stringify(newCart));
});

defineComponent({
  name: "Navbar",
});
</script>
