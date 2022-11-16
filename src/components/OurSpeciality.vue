<template>
  <div class="min-h-[400px] bg-blue-brand">
    <div class="container mx-auto h-full py-20">
      <div class="bg-white h-full px-10 text-center py-10">
        <!-- description -->
        <h1 class="text-2xl text-blue-content font-bold">OUR SPECIALITY</h1>
        <p class="mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod
          libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc
          sit amet congue aliquam.
        </p>

        <!-- card -->
        <div class="mt-8 grid grid-cols-3 gap-10">
          <div
            class="flex flex-col gap-2 justify-center items-center text-center"
            v-for="(item, index) in list"
            :key="index + item.title"
          >
            <img :src="`/images/${item.icon}.png`" :alt="item.icon" />
            <h2 class="mt-3 text-lg">{{ item.title }}</h2>
            <p class="text-soft-gray">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          title: "Accesories",
          icon: "accesories",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.",
        },
        {
          title: "Speed Improvement",
          icon: "speed-improvement",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.",
        },
        {
          title: "Exhaust",
          icon: "exhaust",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.",
        },
      ],
    };
  },
};
</script>

<style></style>
