<template>
  <div id="our-speciality" class="min-h-[400px] bg-blue-brand">
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
          <div class="mt-10">
            <div
              :class="`flex flex-col items-between duration-300 ${
                isAnimation ? 'opacity-0' : 'opacity-100'
              }`"
            >
              <img
                class="self-center"
                :src="`/images/${list[activeCard].icon}.png`"
                alt="speed-improvement"
              />
              <h2 class="text-lg mt-4 text-center">
                {{ list[activeCard].title }}
              </h2>
              <p class="text-center text-[#A7A7A7] mt-12">
                {{ list[activeCard].description }}
              </p>
            </div>
            <!-- bullet, next and previous button -->
            <div class="mt-10 flex justify-between items-center">
              <button @click="previous">
                <img
                  :class="`${
                    activeCard > 0 ? 'rotate-180' : 'cursor-not-allowed'
                  }`"
                  :src="`/svg/${
                    activeCard > 0 ? 'blue-arrow' : 'gray-arrow'
                  }.svg`"
                  alt="arrow"
                />
              </button>
              <div class="flex items-center gap-5">
                <button
                  v-for="(item, index) in list.length"
                  :key="item"
                  @click="handleClickBullet(index)"
                  :class="`h-3 w-3 rounded-full ${
                    activeCard === index
                      ? 'border-2 border-[#3D46A2]'
                      : 'bg-[#DAF3FC]'
                  }`"
                />
              </div>
              <button @click="next">
                <img
                  :class="`${
                    activeCard === list.length - 1 &&
                    'rotate-180 cursor-not-allowed'
                  }`"
                  :src="`/svg/${
                    activeCard < list.length - 1 ? 'blue-arrow' : 'gray-arrow'
                  }.svg`"
                  alt="arrow"
                />
              </button>
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
      activeCard: 0,
      isAnimation: false,
      list: [
        {
          title: "Accesories",
          icon: "accesories",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit.",
        },
        {
          title: "Speed Improvement",
          icon: "speed-improvement",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo.",
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

  watch: {
    activeCard() {
      this.isAnimation = true;
      setTimeout(() => {
        this.isAnimation = false;
      }, 300);
    },
  },

  methods: {
    next() {
      if (this.activeCard < 2) {
        this.activeCard += 1;
      }
    },
    previous() {
      if (this.activeCard > 0) {
        this.activeCard -= 1;
      }
    },
    handleClickBullet(index) {
      this.activeCard = index;
    },
  },
};
</script>

<style></style>
