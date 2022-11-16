<template>
  <div
    class="bg-[#F8F8F8] min-h-[400px] flex flex-col items-center justify-center pt-14 md:py-14"
  >
    <div class="md:container mx-6 md:mx-auto">
      <!-- description our core value -->
      <h2 class="text-center text-blue-content font-bold text-3xl mb-6">
        Our core value
      </h2>
      <p class="text-justify md:text-center text-soft-gray">
        Ridiculus laoreet libero pretium et, sit vel elementum convallis fames.
        Sit suspendisse etiam eget egestas. Aliquet odio et lectus etiam sit.
        <br />
        <br />
        In mauris rutrum ac ut volutpat, ornare nibh diam. Montes, vitae, nec
        amet enim.
      </p>

      <!-- our core value data -->
      <div class="grid md:grid-cols-3 md:gap-20">
        <div
          class="mt-7 md:mt-10"
          v-for="(item, index) in list"
          :key="index + item.title"
        >
          <h2 class="text-2xl">{{ item.title }}</h2>
          <p class="text-soft-gray mt-2">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
    <img class="mt-10" src="/images/study.png" alt="study" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          title: "Dedication",
          description:
            "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.",
        },
        {
          title: "Intellectual Honesty",
          description:
            "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias conse.",
        },
        {
          title: "Curiosity",
          description:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.",
        },
      ],
    };
  },
};
</script>

<style></style>
