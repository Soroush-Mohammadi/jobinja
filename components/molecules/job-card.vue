<template>
  <div>
    <div class="my-7" v-for="post in jobPosts" :key="post.id">
    <div  class="flex flex-col items-center">
      <img :src="post.image" alt="" style="max-width: 70px" />
    </div>
    <h1 class="text-lg mt-3 font-semibold text-blue-400">
     {{ post.title }}
    </h1>
    <ul class="flex flex-col py-1 justify-between text-sm text-gray-400">
      <li class="flex items-center gap-x-2 font-meduim">
        <span class="material-symbols-outlined text-lg"> home </span>
        <span>{{ post.company.name }}</span>
        | {{ post.company.englishName }}
      </li>
      <li class="flex items-center gap-x-2 font-meduim">
        <span class="material-symbols-outlined text-lg"> location_on </span>
        {{ post.location }}
      </li>
      <li class="flex items-center gap-x-2 font-meduim">
        <span class="material-symbols-outlined text-lg"> description </span>
       {{ post.contract }}
      </li>
    </ul>
    <button
      class="bg-primary w-full py-3 rounded-sm text-white font-semibold text-normal"
    >
      ارسال رزومه
    </button>
    <button
      class="w-full text-sm rounded-md font-light border border-gray-200 mt-3 py-1 text-text"
    >
      <span class="material-symbols-outlined font-thin text-base align-middle">star</span>
      <span> نشان کردن </span>
    </button>
  </div>
  </div>
</template>



<script setup>
import { ref } from 'vue';
const jobPosts = ref( [
  {
    id: 1,
    image: "/bertina.jpg",
    title: "برنامه‌نویس Front-End (شیراز)",
    company: {
      name: "نوین دو",
      englishName: "Novin dev"
    },
    location: "فارس، شیراز",
    contract: "قرارداد تمام‌وقت (حقوق توافقی)"
  },
  {
    id: 2,
    image: "/clean-food.jpg",
    title: "برنامه‌نویس Back-End (تهران)",
    company: {
      name: "کانون آفرینش",
      englishName: "Creative Hub"
    },
    location: "تهران، ایران",
    contract: "قرارداد نیمه‌وقت (حقوق توافقی)"
  },
  {
    id: 3,
    image: "/dana-pardaz.jpg",
    title: "طراح UI/UX (اصفهان)",
    company: {
      name: "چیتا دیزاین",
      englishName: "Cheetah Design"
    },
    location: "اصفهان، ایران",
    contract: "قرارداد پروژه‌ای (پرداخت توافقی)"
  },
  {
    id: 4,
    image: "/hami-system-sharif.jpg",
    title: "توسعه‌دهنده فول‌استک (مشهد)",
    company: {
      name: "توسعه گستر",
      englishName: "Development Expand"
    },
    location: "مشهد، ایران",
    contract: "قرارداد تمام‌وقت (حقوق ثابت)"
  },
  {
    id: 5,
    image: "/iran-hotel.jpg",
    title: "مدیر محصول (تبریز)",
    company: {
      name: "ایده‌پردازان",
      englishName: "Idea Creators"
    },
    location: "تبریز، ایران",
    contract: "قرارداد تمام‌وقت (مزایا کامل)"
  }
])


</script>
