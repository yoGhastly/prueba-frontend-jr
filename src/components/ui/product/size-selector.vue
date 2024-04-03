<template>
  <div class="flex flex-col items-center">
    <h2 class="font-semibold">Available Sizes:</h2>
    <div class="flex flex-wrap gap-2">
      <button v-for="(value, i) in sizes" :key="i" @click="selectSize(value)" :class="{
        'bg-black text-white': selectedSize === value,
        'bg-gray-200 text-black': selectedSize !== value,
      }" class="uppercase px-4 py-2 rounded-full">
        {{ value }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";

interface Props {
  sizes: string[];
}

const props = defineProps<Props>();

const selectedSize = ref<string | null>(null);

const selectSize = (value: string) => {
  selectedSize.value = value;
};
</script>
