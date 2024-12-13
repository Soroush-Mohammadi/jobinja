<template>
  <div dir="rtl" class="m-6">
    <div>
      <ul class="flex gap-x-4 text-medium text-text border-b ">
        <button>
          <li class="border-b-4 border-primary py-6">آگهی‌های پیشنهادی</li>
        </button>
        <button>
          <li class="border-b-4 border-primary py-6">نشان‌شده‌ها</li>
        </button>
        <button>
          <li class="border-b-4 border-primary py-6">درخواست‌های من</li>
        </button>
      </ul>
    </div>
    <slot name="header"></slot>
    <slot name="body"></slot>
    <hr class="border border-gray-200">
  </div>
</template>
