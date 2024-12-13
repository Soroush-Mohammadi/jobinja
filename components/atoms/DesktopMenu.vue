<template>
<div>
    <div dir="rtl" class=" bg-text justify-around lg:flex lg:items-center hidden w-full">
    <ul class="flex text-white" style="max-width: 550px">
      <li class="py-6 px-3">
        <span class="material-symbols-outlined align-middle"> home </span>
        <span> خانه </span>
      </li>
      <li class="py-6 px-3">
        <AtomsMagnifier-icon />
        <span> جستجوی مشاغل </span>
      </li>
      <li class="py-6 px-3">
        <span class="material-symbols-outlined align-middle"> article </span>
        <span> رزومه ساز </span>
      </li>
      <li class="py-6 px-3">
        <span class="material-symbols-outlined align-middle"> diamond </span>
        <span> 50 شرکت برتر </span>
      </li>
    </ul>
    <ul class="flex text-white items-center" style="max-width: 400px">
      <li class="py-6 px-3">
        <AtomsBell-icon />
      </li>
      <li class="py-6 px-3">
        <AtomsUserMenu />
      </li>
      <li class="py-6 px-3">
        <AtomsLogo />
      </li>
    </ul>
  </div>
</div>
</template>

<script></script>

<style scoped>
li {
  border-left: 1px solid rgb(89, 89, 89);
  border-right: 1px solid rgb(89, 89, 89);
}
</style>
