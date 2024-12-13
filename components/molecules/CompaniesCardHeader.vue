<template>
  <div class="flex my-4 justify-start gap-x-5 items-center">
    <slot name="logo" />
    <div class="text-right flex flex-col gap-y-3">
      <slot name="title" />
      <slot name="category" />
    </div>
  </div>
</template>
