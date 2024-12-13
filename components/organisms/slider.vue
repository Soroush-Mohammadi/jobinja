<template>
  <div dir="rtl" class="card w-full m-auto md:w-2/3">
    <Carousel
      :value="companies"
      :numVisible="5"
      :numScroll="1"
      :responsiveOptions="responsiveOptions"
      circular
      :autoplayInterval="3000"
    >
      <template #previcon>
        <div v-if="display">
          <span class="material-symbols-outlined"> chevron_left </span>
        </div>
        <div v-else>
          {{ null }}
        </div>
      </template>

      <template #item="slotProps">
        <div class="my-10 flex flex-col items-center">
          <img :src="slotProps.data.logo" class="w-20" />
          <div class="flex gap-x-2 mt-3">
            <span class="mt-0 font-semibold text-sm">{{
              slotProps.data.jobs
            }}</span>
            <span class="text-sm">فرصت شغلی</span>
          </div>
          <div>
            <span class="mb-4 font-medium text-sm">{{
              slotProps.data.name
            }}</span>
          </div>
        </div>
        
      </template>
      <template #nexticon>
        <div v-if="display">
          <span class="material-symbols-outlined"> chevron_right </span>
        </div>
        <div v-else>
          {{ null }}
        </div>
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Data
const companies = ref([
  { name: "دانا پرداز", logo: "/dana-pardaz.jpg", jobs: "5", id: "flre" },
  { name: "غذای تمیز", logo: "/clean-food.jpg", jobs: "5", id: "dgd" },
  { name: "برتینا", logo: "/bertina.jpg", jobs: "5", id: "fdg" },
  {
    name: "حامی سیستم شریف",
    logo: "/hami-system-sharif.jpg",
    jobs: "5",
    id: "wer",
  },
  { name: "نوبیتکس", logo: "/nobitex.png", jobs: "5", id: "egh" },
  { name: "سیبچه", logo: "/sibcheh.png", jobs: "5", id: "fdb" },
  { name: "مستر بلیط", logo: "/mrblit.png", jobs: "5", id: "egh" },
]);

const responsiveOptions = ref([
  {
    breakpoint: "1400px",
    numVisible: 4,
    numScroll: 1,
  },
  {
    breakpoint: "1199px",
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: "767px",
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: "575px",
    numVisible: 3,
    numScroll: 1,
  },
]);

// Reactive screen size handling
const displaySize = ref(typeof window !== "undefined" ? window.innerWidth : 0);

const display = computed(() => displaySize.value > 767);

onMounted(() => {
  const updateSize = () => {
    displaySize.value = window.innerWidth;
  };

  window.addEventListener("resize", updateSize);
  updateSize(); // Ensure we set the initial value when mounted.

  onBeforeUnmount(() => {
    window.removeEventListener("resize", updateSize);
  });
});
</script>

