<template>
  <div class="flex w-full justify-between gap-x-3 lg:flex-col lg:gap-y-5">
    <!-- we nedd slot here -->
    <MoleculesSearch-history class="mx-auto" v-for="item in items" :key="item">
      {{ item }}
    </MoleculesSearch-history>
  </div>
</template>

<script setup>
const items = ref(["Front-End", "Vue.js", "Nuxt.js","React.js", "Next.js"]);
</script>
