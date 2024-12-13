<template>
  <div class="w-full flex flex-col items-center relative lg:flex-row z-20">
    <input
      v-if="props.type === 'search'"
      class="w-full h-12 px-6 text-base rounded-sm pr-20 md:pr-12"
      placeholder="عنوان شغلی نام شرکت"
    />
    <div
      v-else
      name="pets"
      id="pet-div"
      class="w-full h-12 px-6 text-base rounded-sm pr-20 md:pr-12 bg-white relative cursor-pointer"
      @click="showMenu = !showMenu"
    >
      <span class="absolute bottom-3 px-2">{{ selectedOption }}</span>
      <ul
        class="absolute top-12 w-full right-0 p-3 border-2 bg-gray-50"
        v-if="showMenu"
      >
        <input
          type="text"
          class="w-full p-1 rounded-sm bg-white border-2"
          @click.stop
          v-model="searchQuery"
        />
        <li
          class="py-2 cursor-pointer hover:bg-gray-200 border-b text-sm text-text font-light"
          v-for="option in filteredOptions"
          :key="option"
          @click="selectOption(option)"
        >
          {{ option }}
        </li>
      </ul>
    </div>

    <slot name="icon" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const props = defineProps(["type",'data']);

let showMenu = ref(false);
const selectedOption = ref(null); // set default the first item

const selectOption = (opt) => {
  selectedOption.value = opt;
};

const searchQuery = ref("");
const filteredOptions = computed(() => {
  // If no search query, return all options
  if (!searchQuery.value.trim()) {
    return props.data;
  }
  // Filter options based on searchQuery
  return props.data.filter((item) =>
    item.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

onMounted(() => {
  if (props.data && props.data.length > 0) {
    selectedOption.value = props.data[0]; // Set the first element
  }
});
  
</script>
