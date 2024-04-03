<template>
  <div v-if="showModal"
    class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white p-4 rounded-lg">
      <h2 class="text-lg font-semibold mb-4">Your Cart</h2>
      <button @click="closeModal" class="mt-4 px-4 py-2 bg-black text-white rounded-md">
        Close
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
defineComponent({
  name: "CartModal",
  props: {
    showModal: Boolean,
    cartData: Array,
  },
});

const closeModal = () => {
  $emit("update:showModal", false);
};
</script>
