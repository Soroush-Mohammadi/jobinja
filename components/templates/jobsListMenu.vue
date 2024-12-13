<template>
  <div dir="rtl" class="flex items-center text-base font-medium">
    <div
      class="shadow-md w-full flex-wrap"
      :class="props.color ? 'text-white' : ''"
      :style="
        props.color
          ? { backgroundColor: props.color }
          : { backgroundColor: '#F9F9F9' }
      "
    >
      <div
        v-if="!props.color"
        class="p-4 border-b my-3 flex justify-between items-center"
      >
        <slot name="title" />
      </div>
      <div class="border-b">
        <div
          class="flex justify-between items-center p-4 my-3 cursor-pointer"
          @click="toggleMenu('menu-1')"
        >
          <slot name="list-item1" />
          <span class="material-symbols-outlined text-4xl">
            arrow_drop_down
          </span>
        </div>
        <div id="menu1 p-4" :class="showMenu[0] ? 'block' : 'hidden'">
          <!-- Add menu items here -->
          <p>مورد ۱</p>
          <p>مورد ۲</p>
          <p>مورد ۳</p>
        </div>
      </div>
      <div class="border-b">
        <div
          class="flex justify-between items-center p-4 my-3 cursor-pointer"
          @click="toggleMenu('menu-2')"
        >
          <slot name="list-item3" />
          <span class="material-symbols-outlined text-4xl">
            arrow_drop_down
          </span>
        </div>
        <div id="menu2" class="p-4" :class="showMenu[1] ? 'block' : 'hidden'">
          <!-- Add menu items here -->
          <p>استان ۱</p>
          <p>استان ۲</p>
          <p>استان ۳</p>
        </div>
      </div>
      <div>
        <div
          class="flex justify-between items-center p-4 my-3 cursor-pointer"
          @click="toggleMenu('menu-3')"
        >
          <slot name="list-item2" />
          <span class="material-symbols-outlined text-4xl">
            arrow_drop_down
          </span>
        </div>
        <div id="menu3" class="p-4" :class="showMenu[2] ? 'block' : 'hidden'">
          <!-- Add menu items here -->
          <p>دسته‌بندی ۱</p>
          <p>دسته‌بندی ۲</p>
          <p>دسته‌بندی ۳</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["color"]);

const showMenu = ref([false, false, false]);
const toggleMenu = (menuNum) => {
  if (menuNum === "menu-1") {
    showMenu.value[0] = !showMenu.value[0];
  } else if (menuNum === "menu-2") {
    showMenu.value[1] = !showMenu.value[1];
  } else {
    showMenu.value[2] = !showMenu.value[2];
  }
};
</script>
