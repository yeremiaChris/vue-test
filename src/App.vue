<template>
  <NavbarMenu />
  <main>
    <BigBanner />
    <ServicesCard />
    <OurCoreValue />
    <OurSpeciality />
  </main>
  <FooterCompany />
</template>

<script setup>
import BigBanner from "./components/BigBanner.vue";
import FooterCompany from "./components/FooterCompany.vue";
import NavbarMenu from "./components/NavbarMenu.vue";
import OurCoreValue from "./components/OurCoreValue.vue";
import OurSpeciality from "./components/OurSpeciality.vue";
import ServicesCard from "./components/ServicesCard.vue";
</script>
