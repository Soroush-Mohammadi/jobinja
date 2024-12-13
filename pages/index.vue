<template>
  <div>
    <OrganismsBanner />
    <AtomsResume-tracking />

    <OrganismsSlider />
    <div
      class="flex flex-col gap-y-10 lg:flex lg:flex-row lg:justify-center lg:gap-10 lg:m-20"
    >
      <div class="lg:w-72">
        <TemplatesRecent-searches>
          <template v-slot:header>
            <h5 class="text-md font-bold">جستجوهای پیشین</h5>
          </template>
          <template v-slot:footer>
            <button>
              <h5 class="text-md font-semibold text-red-800">حذف همه</h5>
            </button>
          </template>
          <template #icon>
            <button>
              <span
                class="material-symbols-outlined text-red-700 font-semibold"
              >
                delete
              </span>
            </button>
          </template>
          <OrganismsSearch-list />
        </TemplatesRecent-searches>
        <TemplatesRecent-searches>
          <template v-slot:header>
            <h5 class="text-md font-bold">رزومه من</h5>
          </template>

          <template v-slot:footer>
            <button>
              <h5 class="text-md font-semibold text-blue-400">تکمیل رزومه</h5>
            </button>
          </template>
          <template #icon>
            <button>
              <span
                class="material-symbols-outlined text-blue-400 font-semibold"
              >
                <span class="material-symbols-outlined font-bold">
                  chevron_left
                </span>
              </span>
            </button>
          </template>
          <MoleculesProgress />
        </TemplatesRecent-searches>
        <TemplatesRecent-searches>
          <template v-slot:header>
            <h5 class="text-md font-bold">ایمیل اطلاع‌رسانی شغلی</h5>
          </template>
          <MoleculesEmail />
          <template v-slot:resume-view>
            <button class="flex justify-between my-2">
              <p class="text-normal text-gray-400 font-medium">
                مشاهده ایمیل‌های اطلاع رسانی
              </p>
              <span class="material-symbols-outlined font-bold text-text">
                chevron_left
              </span>
            </button>
          </template>
          <template v-slot:footer>
            <button>
              <h5 class="text-normal font-medium text-blue-400">
                ایجاد ایمیل اطلاع رسانی جدید
              </h5>
            </button>
          </template>
          <template #icon>
            <button>
              <span
                class="material-symbols-outlined text-blue-400 font-semibold"
              >
                <span class="material-symbols-outlined font-bold">
                  chevron_left
                </span>
              </span>
            </button>
          </template>
        </TemplatesRecent-searches>
      </div>
      <div class="lg:w-2/3">
        <TemplatesJobsContainer>
          <TemplatesJobOffers>
            <template #header>
              <p class="text-normal mt-4 font-light text-gray-400">
                بر اساس آخرین بازدید یا آخرین رزومه ارسالی شما نمایش داده
                می‌شوند.
              </p>
            </template>
            <template #body>
              <MoleculesJobCard />
            </template>
          </TemplatesJobOffers>
        </TemplatesJobsContainer>
      </div>
    </div>

    <div class="lg:m-2">
      <TemplatesCompaniesCardSlider />

      <TemplatesCompaniesCardSlider>
        <template #header>
          <MoleculesCompaniesTopBar />
        </template>
        <template #body>
          <OrganismsCompaniesCard />
        </template>
      </TemplatesCompaniesCardSlider>
    </div>

    <div>
      <TemplatesJobsListMenu>
        <template #title>
          <h5 class="text-normal my-2">لیست مشاغل جابینجا</h5>
        </template>
        <template #list-item1>
          <span>جستجوهای پرطرفدار</span>
        </template>
        <template #list-item2>
          <span>بر اساس دسته‌بندی</span>
        </template>
        <template #list-item3>
          <span>بر اساس استان</span>
        </template>
      </TemplatesJobsListMenu>
    </div>
    <div class="md:m-24">
      <TemplatesCompaniesCardSlider>
        <template #header>
          <MoleculesBlogHeader />
        </template>
        <template #body>
          <OrganismsCompaniesCard>
            <template #body>
              <MoleculesPostCard />
            </template>
          </OrganismsCompaniesCard>
        </template>
      </TemplatesCompaniesCardSlider>
    </div>
    <TemplatesJobsListMenu color="#505050">
      <template #list-item1>
        <span>کارجویان</span>
      </template>
      <template #list-item3> میانبرها </template>
      <template #list-item2> جابینجا </template>
    </TemplatesJobsListMenu>
    <TemplatesFooter>
      <template #icons>
        <MoleculesSocialIcons />
      </template>
      <template #slogen>
        <MoleculesMessage />
      </template>
    </TemplatesFooter>
  </div>
</template>

<script setup>

</script>
