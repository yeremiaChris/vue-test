<template>
  <div
    id="services"
    class="min-h-[400px] md:container md:flex grid flex-col justify-center mx-6 md:mx-auto py-10"
  >
    <!-- on desktop -->
    <div class="hidden md:grid grid-cols-3 gap-20">
      <!-- card -->
      <div v-for="(item, index) in list" :key="index + item.title">
        <h2 class="text-2xl text-blue-content font-bold">{{ item.title }}</h2>
        <h3 class="mt-3 mb-1">{{ item.subTitle }}</h3>
        <p class="text-soft-gray">
          {{ item.description }}
        </p>
      </div>
    </div>

    <!-- on mobile -->
    <div class="md:hidden grid grid-rows-2 h-full">
      <!-- content -->
      <div
        :class="`h-full duration-300 transform ${
          isAnimation ? 'opacity-0' : 'opacity-100'
        } `"
      >
        <h2 class="text-4xl text-blue-content font-bold">
          {{ list[activeCard].title }}
        </h2>
        <div>
          <h3 class="mt-3 mb-1 text-lg">{{ list[activeCard].subTitle }}</h3>
          <p class="text-soft-gray">S{{ list[activeCard].description }}</p>
        </div>
      </div>

      <!-- action -->
      <div class="h-full flex items-end">
        <div class="flex items-center w-full justify-between">
          <p class="text-2xl">
            {{ "0" + parseInt(activeCard + 1) }}
            <span class="text-soft-gray text-2xl">/</span>
            <span class="text-lg text-soft-gray">{{ "0" + list.length }}</span>
          </p>

          <!-- next and previous button -->
          <div class="flex">
            <button
              :class="`h-[46px] w-[51px] ${
                activeCard === 0
                  ? 'bg-[#F1F1F1] cursor-not-allowed'
                  : 'rotate-180 bg-[#1BA0E1]'
              } box-center`"
              @click="previous"
            >
              <img
                :src="`/svg/${activeCard === 0 ? 'gray-arrow' : 'arrow'}.svg`"
                alt="arrow"
              />
            </button>
            <button
              :class="`h-[46px] w-[51px] ${
                activeCard === list.length - 1
                  ? 'bg-[#F1F1F1] cursor-not-allowed rotate-180'
                  : 'bg-[#1BA0E1]'
              } box-center`"
              @click="next"
            >
              <img
                :src="`/svg/${
                  activeCard === list.length - 1 ? 'gray-arrow' : 'arrow'
                }.svg`"
                alt="arrow"
              />
            </button>
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
          title: "Who we are",
          subTitle: "Technology Company",
          description:
            "Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        },
        {
          title: "What we do",
          subTitle: "Professional Brand Management",
          description:
            "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
        },
        {
          title: "How we do",
          subTitle: "Strategize, Design, Collaborate",
          description:
            "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse sequam nihil molestiae consequatur.",
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
      if (this.activeCard < this.list.length - 1) {
        this.activeCard += 1;
      }
    },
    previous() {
      if (this.activeCard > 0) {
        this.activeCard -= 1;
      }
    },
  },
};
</script>

<style></style>
