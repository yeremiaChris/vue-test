<template>
  <nav class="py-6 shadow sticky top-0 bg-white z-50">
    <div class="container box-between mx-auto">
      <!-- logo -->
      <a href="#">
        <img src="/images/logo.png" alt="logo" />
      </a>

      <!-- list of menus -->
      <ul class="gap-6 box-between">
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
