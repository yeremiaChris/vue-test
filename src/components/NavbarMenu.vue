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
          @click="scroll(menu.name)"
          class="px-4 py-2 cursor-pointer rounded-full box-center bg-blue-brand text-white font-medium"
        >
          {{ menu.title }}
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
          name: "company",
        },
        {
          title: "Services",
          name: "services",
        },
        {
          title: "Our Core Values",
          name: "our-core-values",
        },
        {
          title: "Our Speciality",
          name: "our-speciality",
        },
        {
          title: "Footer",
          name: "footer",
        },
      ],
    };
  },

  methods: {
    scroll(id) {
      // element.scrollTo({ top: 200, behavior: "smooth" });
      window.scrollTo({
        top: document.querySelector("#" + id).offsetTop - 30,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style></style>
