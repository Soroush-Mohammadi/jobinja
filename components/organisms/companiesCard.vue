<template>
  <div class="overflow-x-hidden flex flex-row overflow-x md:flex justify-start gap-x-10 md:justify-start lg:justify-center">
    <div v-for="comp in companies.slice(0,3)" :key="comp" class="border border-gray-300 rounded-md min-w-80 flex flex-col gap-y-5 p-4 max-w-80 ">
    <MoleculesCompaniesCardHeader>
      <template #title>
        <h3 class="text-sm font-semibold">{{ comp.name }}</h3>
      </template>
      <template #logo>
        <img src="/clean-food.jpg" alt="" style="width: 50px" />
      </template>
      <template #category>
        <p class="text-sm font-light text-gray-400">
         {{ comp.category }}
        </p>
      </template>
    </MoleculesCompaniesCardHeader>
    <MoleculesCompaniesCardBody>
      <template #banner>
        <img src="/pictures/gap-film.jpg" alt="" class="rounded-2xl" />
      </template>
      <template #description>
        <p class="text-sm font-meduim text-gray-400 text-right">
          {{ comp.description }}
        </p>
      </template>
    </MoleculesCompaniesCardBody>
    <MoleculesCompaniesCardFooter>
      <template #popularity>
        <span class="text-primary p-2 ml-3">{{comp.stats.popularityAmongJobSeekers}}</span>
      </template>
      <template #offers>
        <span class="text-primary p-2 ml-3">6</span>
      </template>
      <template #reviews>
        <span class="text-primary p-2 ml-3">{{ comp.stats.resumeReviewQuality }}</span>
      </template>
      <template #availible>
        <p class="inline-block p-2 text-primary bg-bgcolor">{{ comp.stats.jobsAvailable}}</p>
      </template>
    </MoleculesCompaniesCardFooter>
  </div>
  </div>
</template>


<script setup>
const companies = [
  {
    name: "هلدینگ بان",
    category: "رسانه و انتشارات",
    description:
      "ما در خانواده‌ی بزرگ هلدینگ بان برای تحقق رؤیاهایمان میجنگیم. در کنار هم می‌سازیم و از تماشای آنچه روزی تصور کرده بودیم و حالا به آن تجسم بخشیدیم لذت می‌بریم.",
    stats: {
      popularityAmongJobSeekers: 10,
      jobOpportunitiesDiversity: 7,
      resumeReviewQuality: 9,
    },
    jobsAvailable: 18,
    companyPage: "صفحه شرکت",
  },
  {
    name: "شرکت نمونه 1",
    category: "فناوری اطلاعات",
    description:
      "این شرکت در زمینه توسعه نرم‌افزار و ارائه خدمات فناوری فعالیت می‌کند.",
    stats: {
      popularityAmongJobSeekers: 8,
      jobOpportunitiesDiversity: 6,
      resumeReviewQuality: 7,
    },
    jobsAvailable: 25,
    companyPage: "صفحه شرکت",
  },
  {
    name: "شرکت نمونه 2",
    category: "صنایع غذایی",
    description:
      "یک شرکت معتبر در حوزه تولید و توزیع محصولات غذایی باکیفیت.",
    stats: {
      popularityAmongJobSeekers: 9,
      jobOpportunitiesDiversity: 8,
      resumeReviewQuality: 8,
    },
    jobsAvailable: 12,
    companyPage: "صفحه شرکت",
  },
  {
    name: "شرکت نمونه 3",
    category: "ساختمان و معماری",
    description:
      "فعال در زمینه طراحی و ساخت پروژه‌های ساختمانی و معماری نوین.",
    stats: {
      popularityAmongJobSeekers: 7,
      jobOpportunitiesDiversity: 5,
      resumeReviewQuality: 6,
    },
    jobsAvailable: 10,
    companyPage: "صفحه شرکت",
  },
  {
    name: "شرکت نمونه 4",
    category: "حمل‌ونقل",
    description:
      "ارائه‌دهنده راهکارهای لجستیکی و خدمات حمل‌ونقل پیشرفته.",
    stats: {
      popularityAmongJobSeekers: 6,
      jobOpportunitiesDiversity: 7,
      resumeReviewQuality: 7,
    },
    jobsAvailable: 15,
    companyPage: "صفحه شرکت",
  },
];


</script>


<style scoped>


</style>




