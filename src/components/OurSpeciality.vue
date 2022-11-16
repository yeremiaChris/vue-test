<template>
  <div class="min-h-[400px] bg-blue-brand">
    <div class="md:container mx-6 md:mx-auto h-full py-14 md:py-20">
      <div class="bg-white h-full px-10 md:text-center py-10">
        <!-- description -->
        <h1 class="text-4xl md:text-2xl text-blue-content font-bold">
          OUR SPECIALITY
        </h1>
        <p class="mt-6 md:mt-2 text-sm text-gray-500 leading-6 md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod
          libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc
          sit amet congue aliquam.
        </p>

        <!-- card on desktop -->
        <div class="mt-8 hidden md:grid grid-cols-3 gap-10">
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

        <!-- card on mobile -->
        <div class="md:hidden box-center">
          <div class="mt-10 flex flex-col items-between">
            <img
              class="self-center"
              src="/images/speed-improvement.png"
              alt="speed-improvement"
            />
            <h2 class="text-lg mt-4 text-center">Speed Improvement</h2>
            <p class="text-center text-soft-gray mt-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              euismod libero vel leo auctor, in venenatis nulla consequat. Sed
              commodo nunc sit amet congue aliquam.
            </p>
            <!-- bullet, next and previous button -->
            <div class="mt-10 flex justify-between items-center">
              <img src="/svg/gray-arrow.svg" alt="arrow" />
              <div class="flex items-center gap-5">
                <div class="h-3 w-3 rounded-full bg-soft-gray" />
                <div class="h-3 w-3 rounded-full bg-soft-gray" />
                <div class="h-3 w-3 rounded-full bg-soft-gray" />
              </div>
              <img src="/svg/gray-arrow.svg" alt="arrow" />
            </div>
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
