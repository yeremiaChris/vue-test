<template>
  <nav class="py-6 shadow sticky top-0 bg-white z-50">
    <div class="md:container box-between mx-6 md:mx-auto">
      <!-- logo -->
      <a href="#">
        <img src="/images/logo.png" alt="logo" />
      </a>

      <!-- list of menus -->
      <ul class="gap-6 hidden md:flex justify-between">
        <li
          v-for="(menu, index) in menus"
          :key="index + menu.title"
          class="px-4 py-2 rounded-full box-center bg-blue-brand text-white font-medium"
        >
          <a href="#">
            {{ menu.title }}
          </a>
        </li>
      </ul>

      <!-- humburger menu -->
      <button class="md:hidden">
        <img src="/images/humburger-menu.png" alt="humburger-menu" />
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        {
          title: "Company",
        },
        {
          title: "Services",
        },
        {
          title: "Our Core Values",
        },
        {
          title: "Our Speciality",
        },
        {
          title: "Footer",
        },
      ],
    };
  },
};
</script>

<style></style>
