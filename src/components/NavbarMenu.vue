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
      <button class="md:hidden" @click="openHumburger">
        <img src="/images/humburger-menu.png" alt="humburger-menu" />
      </button>
    </div>

    <!-- popup mobile menu -->
    <div
      :class="`h-screen py-4 px-6 box-center absolute bg-gradient-to-r from-blue-brand via-blue-content to-blue-soft inset-0 z-50 duration-500 ${
        !isMenu && '-mt-[400%]'
      }`"
    >
      <!-- menu -->
      <button
        class="rounded-full px-2 py-2 w-10 h-10 border absolute top-6 right-8"
        @click="closeHumburger"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div>
        <img src="/images/white-logo.png" alt="logo" />
        <ul class="mt-20">
          <li
            v-for="(menu, index) in menus"
            :key="index + menu.title"
            @click="scroll(menu.name)"
            class="px-4 py-2 mb-10 cursor-pointer rounded-full box-center text-2xl text-white font-medium"
          >
            {{ menu.title }}
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenu: false,
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
      this.closeHumburger();
      window.scrollTo({
        top: document.querySelector("#" + id).offsetTop - 30,
        behavior: "smooth",
      });
    },

    openHumburger() {
      this.isMenu = true;
    },
    closeHumburger() {
      this.isMenu = false;
    },
  },
};
</script>

<style></style>
