<template>
  <nav class="py-6 shadow">
    <div class="container box-between mx-auto">
      <!-- logo -->
      <img src="/images/logo.png" alt="logo" />

      <!-- list of menus -->
      <ul class="box-between gap-6">
        <li
          v-for="(menu, index) in menus"
          :key="index + menu.title"
          class="px-4 py-2 rounded-full box-center bg-blue-400 text-white font-medium"
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
