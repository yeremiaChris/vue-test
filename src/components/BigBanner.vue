<template>
  <!-- desktop -->
  <div
    class="min-h-[400px] hidden md:flex flex-col justify-center relative overflow-hidden z-10 bg-gradient-to-r from-blue-brand via-blue-soft to-green-brand text-white"
  >
    <div class="container grid grid-cols-2 mx-6 md:mx-auto h-full">
      <div class="h-full flex flex-col justify-center">
        <!-- content -->
        <h1 class="text-5xl font-bold">
          Discover <br />
          Your Wonder
        </h1>
        <p class="text-lg mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </div>

      <!-- image -->
      <img
        class="absolute right-0 z-10 -bottom-28"
        width="400"
        src="/images/small-banner.png"
        alt="banner"
      />
    </div>
  </div>

  <!-- mobile -->
  <div class="h-[550px] grid grid-rows-2 md:hidden relative bg-blue-brand">
    <div
      style="background-image: url(/images/banner.jpg)"
      class="bg-cover bg-[center_top_330px]"
    />

    <div class="-mt-20 relative">
      <div
        class="h-full left-slant-box box-center bg-blue-content relative z-20"
      >
        <div class="px-6 text-white">
          <h1 class="text-5xl font-bold">
            Discover <br />
            Your Wonder
          </h1>
          <p class="text-lg mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
      </div>

      <!-- right-slant-box -->
      <div class="h-full right-slant-box bg-blue-soft absolute inset-0" />
    </div>
  </div>
</template>

<style scoped>
.left-slant-box {
  clip-path: polygon(0 0, 100% 20%, 100% 100%, 0% 100%);
}
.right-slant-box {
  clip-path: polygon(0 36%, 100% 0, 100% 100%, 0% 100%);
}
</style>
