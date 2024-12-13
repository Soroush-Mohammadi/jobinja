<template>
    <div
      dir="rtl"
      class="border border-gray-200  p-10 h-auto flex flex-col justify-center gap-y-5 overflow-hidden rounded-md"
    >
      <div>
        <slot name="header"></slot>
      </div>

      <hr class=" bg-gray-400" />
      <slot />
      <slot name="resume-view"></slot>
      <hr class=" bg-gray-400" />
      <div class="flex justify-between">
       <slot name="footer"></slot>
       <slot name="icon"></slot>
      </div>
    </div>
</template>
