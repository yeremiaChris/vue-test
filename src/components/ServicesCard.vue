<template>
  <div
    class="h-[400px] container md:flex flex-col justify-center mx-6 md:mx-auto bg-white py-10"
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
    <div class="md:hidden">mobile</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
};
</script>

<style></style>
