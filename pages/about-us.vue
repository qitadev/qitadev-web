<template>
  <div class="pb-24">
    <section class="max-w-5xl mx-auto px-5">
      <p class="mt-16 text-lg font-medium text-primary text-center">
        About Us
      </p>
      <h1 class="mt-2 font-semibold text-4xl text-center">
        Berkenalan lebih dalam dengan kami
      </h1>
      <p class="font-light mt-4 text-center">
        Menurut kami, membangun kepercayaan terhadap sesama dimulai dari saling mengenal satu sama lain
      </p>
    </section>

    <section class="max-w-5xl mx-auto px-5 mt-16">
      <div class="grid md:grid-cols-2 gap-6 mt-16">
        <div class="flex items-center">
          <div>
            <h2 class="text-3xl font-medium">
              Siapa kami?
            </h2>
            <p class="mt-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde aliquid blanditiis nesciunt mollitia ipsam officiis aliquam? Voluptatem, totam? Cumque, possimus. Ad fugit nam beatae unde, deleniti exercitationem ullam veniam repellat.
            </p>
          </div>
        </div>
        <img
          src="images/history-image.png"
          alt="history image"
          class="rounded-lg"
        >
      </div>
    </section>

    <section class="max-w-5xl mx-auto px-5 mt-16 grid md:grid-cols-2 gap-6">
      <div class="border rounded-lg p-6">
        <img
          src="images/icon-vision.png"
          alt="vision"
          class="w-16"
        >
        <h2 class="mt-4 font-medium text-2xl">
          Visi
        </h2>
        <p class="mt-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam fuga provident et, hic quisquam laboriosam harum deleniti earum officiis eos magnam sunt aliquid, magni nemo. Dicta quos nihil velit corporis?
        </p>
      </div>
      <div class="border rounded-lg p-6">
        <img
          src="images/icon-mission.png"
          alt="mission"
          class="w-16"
        >
        <h2 class="mt-4 font-medium text-2xl">
          Misi
        </h2>
        <p class="mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eum officia consequuntur sed voluptatem quibusdam, pariatur delectus assumenda ipsam qui aliquam modi, earum non commodi eius animi nulla. Velit, quidem!
        </p>
      </div>
    </section>

    <section class="max-w-5xl mx-auto px-5 mt-16">
      <p class="text-center text-primary font-medium">
        Our Team
      </p>
      <h2 class="text-center font-semibold text-4xl mt-4">
        Persona dibalik layar qitadev
      </h2>
      <div class="max-w-2xl mx-auto flex flex-col sm:flex-row justify-center mt-16">
        <div class="flex-1 text-center px-5 mb-5 sm:mb-0">
          <img
            src="images/albarra.png"
            alt="albarra naufala"
            class="inline-block w-32 h-32 object-cover rounded"
          >
          <h3 class="font-semibold text-xl mt-4">
            Albarra
          </h3>
          <p class="text-gray-400 text-sm">
            Software Engineer
          </p>
        </div>
        <div class="flex-1 text-center px-5 mb-5 sm:mb-0">
          <img
            src="images/reza.png"
            alt="reza ali"
            class="inline-block w-32 h-32 object-cover rounded"
          >
          <h3 class="font-semibold text-xl mt-4">
            Reza
          </h3>
          <p class="text-gray-400 text-sm">
            Software Engineer
          </p>
        </div>
        <div class="flex-1 text-center px-5 mb-5 sm:mb-0">
          <img
            src="images/farhan.png"
            alt="farhan"
            class="inline-block w-32 h-32 object-cover rounded"
          >
          <h3 class="font-semibold text-xl mt-4">
            Farhan
          </h3>
          <p class="text-gray-400 text-sm">
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
