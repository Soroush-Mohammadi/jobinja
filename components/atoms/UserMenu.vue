<template>
  <div class="relative bg-gray-600 rounded-md ">
    <button
      ref="menuButton"
      @click="showMenu"
      class="shadow-sm p-2 w-60 flex flex-row-reverse justify-center items-center gap-x-5"
    >
      <span class="material-symbols-outlined text-3xl align-top"> arrow_drop_down </span>
      <span>UserName</span>
      <AtomsUser-icon />
    </button>
    <ul v-if="toggle" class="dropdown-menu w-60 text-right">
      <li v-for="item in items" :key="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script setup>
const toggle = ref(false);
const menuButton = ref(null);
const showMenu = () => (toggle.value = !toggle.value);
const handleClickOutside = (event) => {
  if (menuButton.value && !menuButton.value.contains(event.target)) {
    toggle.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});

const items = [
  "درخواست‌های من",
  "ایمیل‌های اطلاع‌رسانی من",
  "فرصت‌های شغلی نشان‌شده",
  "فرصت‌های شغلی پیشنهادی",
  "رزومه‌ساز",
  "مشاهده رزومه",
  "تنظیمات حساب‌کاربری من",
  "خروج"
];
</script>

<style scoped>
.dropdown-menu {
  position: absolute; /* Take the menu out of the normal flow */
  top: 100%; /* Position it just below the button */
  left: 0; /* Align it to the left of the button */
  background-color: rgb(54, 54, 54); /* Set the background color */
  border-radius: 4px; /* Optional: Add rounded corners */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Optional: Add shadow for better visibility */
  z-index: 50; /* Ensure it appears above other elements */
  padding: 10px 0; /* Optional: Add spacing inside the menu */
  list-style: none; /* Remove default list styling */
  margin-top: 2px;
}

.dropdown-menu li {
  padding: 12px 16px;
  cursor: pointer; /* Change the cursor to a pointer on hover */
}

.dropdown-menu li:hover {
  background-color: #1f1f1f; /* Add a hover effect */
}
</style>
