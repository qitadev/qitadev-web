<template>
  <section class="mt-24 max-w-5xl mx-auto px-5 flex">
    <img src="images/service-step-image.png" alt="Service Step" class="w-[460px]">
    <div class="ml-8">
      <span class="block mb-2 font-medium">Alur Layanan</span>
      <h2 class="font-bold text-4xl text-primary">
        Kemudahan adalah prioritas kami
      </h2>
      <p class="mt-4 font-light">
        Cuplikan ringkas alur pembuatan produk digital bersama kami mulai dari awal sampai akhir tanpa perlu ribet.
      </p>
      <ol class="mt-4 grid grid-cols-2 gap-6">
        <li class="flex items-center">
          <span class="w-[64px] h-[64px] flex items-center justify-center rounded-full border-2 border-primary text-primary text-2xl font-medium">
            01
          </span>
          <div class="ml-2">
            <span class="text-xs text-gray-500">Langkah 1</span><br>
            Isi Formulir
          </div>
        </li>
        <li class="flex items-center">
          <span class="w-[64px] h-[64px] flex items-center justify-center rounded-full border-2 border-primary text-primary text-2xl font-medium">
            02
          </span>
          <div class="ml-2">
            <span class="text-xs text-gray-500">Langkah 2</span><br>
            Jadwalkan Pertemuan
          </div>
        </li>
        <li class="flex items-center">
          <span class="w-[64px] h-[64px] flex items-center justify-center rounded-full border-2 border-primary text-primary text-2xl font-medium">
            03
          </span>
          <div class="ml-2">
            <span class="text-xs text-gray-500">Langkah 3</span><br>
            Analisis Masalah
          </div>
        </li>
        <li class="flex items-center">
          <span class="w-[64px] h-[64px] flex items-center justify-center rounded-full border-2 border-primary text-primary text-2xl font-medium">
            04
          </span>
          <div class="ml-2">
            <span class="text-xs text-gray-500">Langkah 4</span><br>
            Solusi
          </div>
        </li>
      </ol>
      <nuxt-link to="#" class="mt-4 inline-block font-medium">
        Baca selengkapnya
        <svg xmlns="http://www.w3.org/2000/svg" class="inline h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </nuxt-link>
    </div>
  </section>
</template>
