<template>
  <NavbarMenu />
  <main>
    <BigBanner />
    <ServicesCard />
    <OurCoreValue />
  </main>
</template>

<script setup>
import BigBanner from "./components/BigBanner.vue";
import NavbarMenu from "./components/NavbarMenu.vue";
import OurCoreValue from "./components/OurCoreValue.vue";
import ServicesCard from "./components/ServicesCard.vue";
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
