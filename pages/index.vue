<script setup lang="ts">
const counter = ref<number>(0);
</script>

<template>
  <main class="w-full h-full flex justify-center items-center">
    <button
      class="bg-red-300 w-fit rounded-md px-4 py-2 text-white"
      @click="counter++"
    >
      Increment
    </button>
    {{ counter }}
    <NuxtLink to="/student"> Go </NuxtLink>
  </main>
</template>
