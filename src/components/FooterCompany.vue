<template>
  <footer
    class="min-h-[400px] py-10 bg-gradient-to-r from-[#08385F] via-[#07477A] to-[#14619D]"
  >
    <div class="container mx-6 md:mx-auto">
      <img src="/images/white-logo.png" alt="logo" />

      <div class="grid grid-cols-2 gap-20 mt-8">
        <!-- address and field select -->
        <div
          class="w-1/2 bg-white px-3 py-3 flex flex-col items-start justify-center rounded"
        >
          <select
            id="location"
            name="location"
            class="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          >
            <option>TECHNOLOGY DEPARTMENT</option>
          </select>
          <p class="mt-4">
            Jl. Lembong No 8 Kel. Braga Kec. Sumur Bandung, Kota Bandung, Jawa
            Barat
          </p>
        </div>

        <!-- list of footer menu -->
        <div class="text-white flex justify-between gap-4">
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
      </div>

      <!-- copy right -->
      <div
        class="flex justify-end items-center justify-end gap-5 text-white mt-10"
      >
        <img src="/images/white-logo.png" alt="logo" width="100" />
        <p class="mt-1.5">Copyright - Testing Company</p>
      </div>
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

<style></style>
