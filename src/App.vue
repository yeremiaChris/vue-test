<template>
  <NavbarMenu class="hidden lg:block" />
  <BigBanner />
</template>

<script setup>
import BigBanner from "./components/BigBanner.vue";
import NavbarMenu from "./components/NavbarMenu.vue";
</script>

<script>
export default {
  data() {
    return {
      header: " test",
    };
  },
};
</script>
