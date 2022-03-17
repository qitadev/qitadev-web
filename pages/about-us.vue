<template>
  <div class="pb-24">
    <section class="max-w-5xl mx-auto px-5">
      <p class="mt-16 text-lg font-medium text-primary text-center">
        About Us
      </p>
      <h1 class="mt-2 font-semibold text-4xl text-center">
        Cerita sukses kontribusi kami
      </h1>
      <p class="font-light mt-4 text-center">
        Menjadi kebanggaan tak ternilai menjadi bagian dari proses tumbuh dan kembang bersama
      </p>
    </section>

    <section class="max-w-5xl mx-auto px-5 mt-16">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 mt-16">
        <div class="col-span-1 md:col-span-6 flex flex-col justify-center">
          <h1 class="text-4xl font-semibold">
            History
          </h1>
          <h2 class="text-xl font-medium mt-4">
            Lorem Ipsum is simply dummy text of the printing
          </h2>
          <p class="mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </p>
        </div>
        <div class="col-span-1 md:col-span-6 mt-4 lg:mt-0 flex justify-center">
          <img
            src="images/history-image.png"
            alt="history image"
            class="rounded-lg"
          >
        </div>
      </div>
    </section>

    <section class="max-w-5xl mx-auto px-5 mt-16">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 mt-16">
        <div class="vision col-span-1 md:col-span-6 flex flex-col justify-center border border-gray-400 hover:border-primary hover:text-primary transition-colors rounded-lg p-8">
          <img
            src="images/icon-vision.png"
            alt="vision"
            height="80px"
            width="80px"
          >
          <h1 class="mt-4 font-medium text-4xl">
            Vision
          </h1>
          <p class="mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </p>
        </div>
        <div class="mission col-span-1 md:col-span-6 flex flex-col justify-center border border-gray-400 hover:border-primary hover:text-primary transition-colors rounded-lg p-8">
          <img
            src="images/icon-mission.png"
            alt="vision"
            height="80px"
            width="80px"
          >
          <h1 class="mt-4 font-medium text-4xl">
            Mission
          </h1>
          <p class="mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </p>
        </div>
      </div>
    </section>

    <section class="max-w-5xl mx-auto px-5 mt-16">
      <p class="text-center text-primary font-medium">
        Our Team
      </p>
      <h1 class="text-center font-semibold text-4xl mt-4">
        Persona dibalik layar qitadev
      </h1>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
        <div class="flex flex-col items-center">
          <img
            src="images/albarra.png"
            alt="albarra naufala"
          >
          <h3 class="font-semibold text-center text-xl mt-4">
            Albarra Naufala
          </h3>
          <p class="text-gray-400">
            Software Engineer
          </p>
        </div>
        <div class="flex flex-col items-center">
          <img
            src="images/reza.png"
            alt="reza firdaus"
          >
          <h3 class="font-semibold text-center text-xl mt-4">
            Reza Firdaus
          </h3>
          <p class="text-gray-400">
            Software Engineer
          </p>
        </div>
        <div class="flex flex-col items-center">
          <img
            src="images/farhan.png"
            alt="muhammad farhan"
          >
          <h3 class="font-semibold text-center text-xl mt-4">
            Muhammad Farhan
          </h3>
          <p class="text-gray-400">
            Product Designer
          </p>
        </div>
      </div>
    </section>

    <consultation-banner />
  </div>
</template>

<script>
export default {
  name: 'AboutUsPage'
}
</script>
