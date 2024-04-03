<template>
  <div :class="size === 'full'
      ? 'md:col-span-4 md:row-span-2'
      : 'md:col-span-2 md:row-span-1'
    ">
    <RouterLink v-if="item" :to="'/product/' + item.id" class="flex flex-col gap-3 cursor-pointer">
      <picture class="relative block aspect-square rounded-none h-full w-full group">
        <img :src="item.imageUrl" :alt="item.name"
          class="object-fill w-full rounded-none h-full pointer-events-none group-hover:scale-100 transition delay-0" />
      </picture>
      <section class="flex flex-col justify-center items-start">
        <p>{{ item.name }}</p>
        <p class="font-semibold text-sm">
          <span>{{ item.currency }}</span>{{ item.price }}
        </p>
      </section>
    </RouterLink>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
import { Product } from "../../types/index.ts";

export default defineComponent({
  name: "ThreeItemGridItem",
  props: {
    item: Object as () => Product,
    size: String,
    priority: Boolean,
  },
});
</script>
