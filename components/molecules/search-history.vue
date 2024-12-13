<template>
  <div>
    <div
      class="border border-gray-400 flex w-52 justify-between h-14 items-center rounded-md px-2"
    >
      <slot />
      <AtomsMagnifier-icon />
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["data"]);
</script>
