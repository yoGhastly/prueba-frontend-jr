<template>
  <div class="accordion">
    <div v-for="(item, index) in items" :key="index" @click="toggleAccordion(index)" class="border-b border-gray-200">
      <div class="flex justify-between items-center p-4 cursor-pointer">
        <h3 class="text-lg font-medium">{{ item.title }}</h3>
        <svg class="w-6 h-6 text-gray-500 transform transition-transform" :class="{ 'rotate-180': isOpen[index] }"
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd" />
        </svg>
      </div>
      <div v-show="isOpen[index]" class="p-4 border-t border-gray-200 bg-gray-50">
        <p>{{ item.content }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineComponent, PropType } from "vue";

interface AccordionItem {
  title: string;
  content: string;
}

const props = defineProps<{
  items: AccordionItem[];
}>();

const isOpen = ref<boolean[]>(new Array(props.items.length).fill(false));

const toggleAccordion = (index: number) => {
  isOpen.value[index] = !isOpen.value[index];
};

defineComponent({
  name: "Accordion",
  props: {
    items: {
      type: Array as PropType<AccordionItem[]>,
      required: true,
    },
  },
});
</script>

<style scoped>

.rotate-180 {
  transform: rotate(180deg);
}
</style>
