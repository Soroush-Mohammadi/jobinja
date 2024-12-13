<template>
  <div class="border border-gray-300 rounded-md">
    <slot />
    <div class="flex justify-end">
      <button class="m-10 flex items-center justify-start gap-x-5">
        <h4 class="text-sm font-semibold my-auto text-accent">
          مشاهده همه آگهی ها
        </h4>
        <span class="material-symbols-outlined text-accent">
          chevron_left
        </span>
      </button>
    </div>
  </div>
</template>
