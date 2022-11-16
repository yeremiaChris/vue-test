<template>
  <footer
    class="min-h-[400px] py-10 bg-[#07477A] relative md:bg-gradient-to-r from-[#08385F] via-[#07477A] to-[#14619D]"
  >
    <div class="md:container mx-6 md:mx-auto">
      <img src="/images/white-logo.png" alt="logo" />

      <div class="grid md:grid-cols-2 gap-10 md:gap-20 mt-8 z-20 relative">
        <!-- address and field select -->
        <div
          class="md:w-1/2 bg-white px-7 md:px-3 py-6 md:py-3 flex flex-col items-start justify-center rounded"
        >
          <select
            id="location"
            name="location"
            class="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          >
            <option>TECHNOLOGY DEPARTMENT</option>
          </select>
          <p class="w-1/2 md:w-full mt-4 text-blue-content text-lg">
            Jl. Lembong No 8 Kel. Braga Kec. Sumur Bandung, Kota Bandung, Jawa
            Barat
          </p>
        </div>

        <!-- list of footer menu on desktop -->
        <div class="hidden text-white md:flex justify-between gap-4">
          <div v-for="(item, index) in list" :key="index + item.title">
            <h1 class="text-lg">{{ item.title }}</h1>
            <ul class="list-disc mt-3">
              <li
                v-for="(sub, idx) in item.child"
                :key="idx + sub"
                class="mb-2"
              >
                {{ sub }}
              </li>
            </ul>
          </div>
        </div>

        <!-- list of footer menu on mobile -->
        <ul class="md:hidden grid gap-6 text-white mb-10">
          <li
            v-for="(item, index) in list"
            :key="index + item.title"
            class="text-lg"
          >
            {{ item.title }}
          </li>
        </ul>
      </div>

      <!-- copy right -->
      <div
        class="flex justify-end items-center justify-end gap-5 text-white mt-10"
      >
        <img src="/images/white-logo.png" alt="logo" width="100" />
        <p class="mt-1.5">Copyright - Testing Company</p>
      </div>

      <!-- bg on mobile -->
      <div
        class="md:hidden absolute triangle-one bg-[#08385F] bottom-0 top-[60%] z-10 right-0 left-0"
      />
      <div
        class="md:hidden absolute triangle-two bg-[#14619D] bottom-0 top-[70%] z-10 right-0 left-0"
      />
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          title: "Who We Are",
          child: [
            "Technology Company",
            "Professional Brand Management",
            "Strategize, Design, Collaborate",
          ],
        },
        {
          title: "Our Values",
          child: [
            "Dedication",
            "Intellectual Honesty",
            "Strategize, Design, Collaborate",
          ],
        },
        {
          title: "The Perks",
          child: ["Accesories", "Speed Improvement", "Exhaust"],
        },
      ],
    };
  },
};
</script>

<style scoped>
.triangle-one {
  clip-path: polygon(0 0, 100% 100%, 100% 100%, 0% 100%);
}
.triangle-two {
  clip-path: polygon(0 100%, 100% 0, 100% 100%, 0% 100%);
}
</style>
