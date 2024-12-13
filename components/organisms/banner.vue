<template>
  <div
    dir="rtl"
    class="w-screen banner h-72 flex flex-col justify-around items-center z-30"
  >
    <AtomsMessage />
    <div
      class="w-full flex flex-col items-center gap-y-4 px-10 lg:flex-row lg:gap-x-2"
    >
      <AtomsSearch-field type="search">
        <template #icon>
          <AtomsMagnifier-icon
            class="absolute right-12 top-1/2 transform -translate-y-1/2 md:right-4"
          />
        </template>
      </AtomsSearch-field>
      <AtomsSearch-field type="select" :data="iranProvinces" class="hidden lg:block">
        <template #icon>
          <span class="material-symbols-outlined text-black text-2xl absolute right-12 top-1/2 transform -translate-y-1/2 md:right-4">
            menu
          </span>
        </template>
        <template #title>
          <span>
            همه دسته بندی ها
          </span>
        </template>
      </AtomsSearch-field>
      <AtomsSearch-field type="select" :data="categories" class="hidden lg:block">
        <template #icon>
          <span
            class="material-symbols-outlined absolute right-12 top-1/2 transform -translate-y-1/2 md:right-4"
          >
            location_on
          </span>
        </template>
        <template #title>
          <span class="text-base">
            همه استان ها
          </span>
        </template>
      </AtomsSearch-field>
    
      <AtomsSearch-button />
    </div>
    <AtomsShowMore />
  </div>
</template>

<script setup>
const categories = [
  "همه دسته بندی ها",
  "مهندس نرم‌افزار", 
  "پزشک", 
  "معلم", 
  "وکيل", 
  "پرستار", 
  "آشپز", 
  "معمار", 
  "فروشنده", 
  "مدیر پروژه", 
  "کارگر ساختمانی", 
  "طراح گرافیک", 
  "مکانیک", 
  "خلبان", 
  "کارمند بانک" 
];

const iranProvinces = [
  "همه استان ها",
  "تهران",
  "فارس",
  "اصفهان",
  "خراسان رضوی",
  "خوزستان",
  "گیلان",
  "مازندران",
  "آذربایجان شرقی",
  "آذربایجان غربی",
  "کرمان",
  "کرمانشاه",
  "لرستان",
  "قم",
  "البرز",
  "هرمزگان"
];

</script>

<style>
.banner {
  background: rgb(54, 177, 220);
  background: linear-gradient(
    90deg,
    rgba(54, 177, 220, 1) 0%,
    rgba(26, 188, 156, 1) 100%
  );
}
</style>
