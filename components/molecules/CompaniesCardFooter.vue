<template>
  <div dir="rtl">
    <ul dir="rtl" class="flex flex-col gap-y-5 text-gray-500 text-xs">
      <li>
        <slot name="popularity" />
        <span>محبوبیت میان کارجویان</span>
      </li>
      <li class="bg-highlight">
       <slot name="offers" />
        <span>تعدد و تنوع فرصت های شغلی</span>
      </li>
      <li>
       <slot name="reviews" />
        <span>بررسی رزومه های دریافتی</span>
      </li>
    </ul>
    <hr class="my-7" />
    <div class="my-6 flex justify-between text-xs">
     <slot name="availible" />
      <div class="flex items-center gap-x-2">
        <p class="text-accent  font-bold align-middle">صفحه شرکت</p>
        <span class="material-symbols-outlined text-accent"> chevron_left </span>
      </div>
    </div>
  </div>
</template>


<script>


</script>
