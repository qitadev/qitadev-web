<template>
  <div class="pb-24">
    <section class="max-w-5xl mx-auto px-5">
      <div class="grid grid-cols-1 md:grid-cols-12 mt-16">
        <div class="col-span-1 md:col-span-6 flex flex-col items-start px-10 md:py-16">
          <h1 class="font-semibold text-4xl">
            Konsultasi Gratis
          </h1>
          <p class="mt-4">
            Tuliskan cerita, kebutuhan dan pesanmu untuk kami.
          </p>
          <form action="#" class="mt-8 w-full">
            <div class="w-full flex flex-col items-start">
              <label for="#name" class="text-sm">
                Nama <span class="text-red-400">*</span>
              </label>
              <input id="name" type="text" name="name" class="mt-2 px-4 py-2 w-full border-2 border-gray-400 focus:outline-primary rounded-lg">
            </div>
            <div class="w-full flex flex-col items-start mt-4">
              <label for="#email" class="text-sm">
                Email <span class="text-red-400">*</span>
              </label>
              <input id="email" type="email" name="name" class="mt-2 px-4 py-2 w-full border-2 border-gray-400 focus:outline-primary rounded-lg">
            </div>
            <div class="w-full flex flex-col items-start mt-4">
              <label for="#phone" class="text-sm">
                Nomor HP <span class="text-red-400">*</span>
              </label>
              <input id="phone" type="text" name="name" class="mt-2 px-4 py-2 w-full border-2 border-gray-400 focus:outline-primary rounded-lg">
            </div>
            <div class="w-full flex flex-col items-start mt-4">
              <label for="#message" class="text-sm">
                Pesan <span class="text-red-400">*</span>
              </label>
              <textarea id="message" type="text" name="name" rows="4" class="mt-2 px-4 py-2 w-full border-2 border-gray-400 focus:outline-primary rounded-lg" />
            </div>
            <div class="w-max mt-4">
              <input type="submit" name="submit" class="border border-primary rounded-lg px-4 py-2 text-primary bg-transparent hover:bg-primary hover:text-white transition-colors cursor-pointer" value="Kirim Pesan">
            </div>
          </form>
        </div>
        <div class="col-span-1 md:col-span-6 bg-gray-200 flex justify-center items-center px-10 mt-8 md:mt-0 py-16">
          <div class="w-full flex flex-col items-start">
            <img
              src="icons/quotation.svg"
              alt="quotation"
              width="50px"
              height="50px"
            >
            <p class="mt-8">
              Sangat memenuhi ekspetasi sekali website yang dibuat oleh qitadev, bahkan diluar ekspetasi.
            </p>
            <div class="flex items-center mt-8">
              <img
                src="images/albarra.png"
                alt="profile picture"
                class="rounded-full"
                width="80px"
                height="80px"
              >
              <div class="block ml-4">
                <h2 class="text-md font-medium">
                  Albarra Naufala Erdanto
                </h2>
                <p class="text-sm text-gray-400">
                  Founder Qitadev
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ContactUsPage'
}
</script>
