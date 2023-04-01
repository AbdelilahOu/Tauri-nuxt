<script setup lang="ts">
import { useCounterStore } from "~~/stores/counter";
import { storeToRefs } from "pinia";

definePageMeta({
  layout: "index",
});

const counterStore = useCounterStore();
const { counter } = storeToRefs(counterStore);
</script>

<template>
  <main class="w-full h-full flex flex-col gap-2 justify-center items-center">
    <button
      class="bg-red-300 w-fit rounded-md px-4 py-2 text-white"
      @click="counterStore.updateCounter(5)"
    >
      Increment
    </button>

    {{ counter }}
  </main>
</template>
