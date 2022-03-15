<template>
  <section class="mt-24 max-w-5xl mx-auto px-5">
    <span class="block mb-2 font-medium">Layanan</span>
    <div class="flex flex-col md:flex-row md:justify-between">
      <div class="max-w-[320px]">
        <h2 class="font-bold text-4xl text-primary">
          Solusi digital spesial untukmu
        </h2>
      </div>
      <div class="max-w-[400px] mt-4 md:mt-0">
        <p class="font-light mb-2">
          Kami berkomitmen dan bersinergi menyediakan layanan digital untuk tumbuh bersama.
        </p>
        <nuxt-link to="/services" class="font-medium">
          Baca selengkapnya
          <svg xmlns="http://www.w3.org/2000/svg" class="inline h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </nuxt-link>
      </div>
    </div>
    <ul class="mt-16 grid md:grid-cols-3 gap-6">
      <li class="p-6 rounded-lg border">
        <img src="icons/web-app-icon.svg" alt="Web App Icon" class="w-16">
        <h3 class="mt-4 text-2xl font-medium">
          Web Application
        </h3>
        <p class="mt-2">
          Buat dan bangun aplikasi versimu dengan mudah.
        </p>
        <nuxt-link to="/services#web-app" class="mt-4 inline-block font-medium">
          Lihat detail
          <svg xmlns="http://www.w3.org/2000/svg" class="inline h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </nuxt-link>
      </li>
      <li class="p-6 rounded-lg border">
        <img src="icons/landing-page-icon.svg" alt="Web App Icon" class="w-16">
        <h3 class="mt-4 text-2xl font-medium">
          Landing Page
        </h3>
        <p class="mt-2">
          Jangkau dan kenalkan produkmu  lebih luas kepada calon pengguna.
        </p>
        <nuxt-link to="/services#landing-page" class="mt-4 inline-block font-medium">
          Lihat detail
          <svg xmlns="http://www.w3.org/2000/svg" class="inline h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </nuxt-link>
      </li>
      <li class="p-6 rounded-lg border">
        <img src="icons/web-app-icon.svg" alt="Web App Icon" class="w-16">
        <h3 class="mt-4 text-2xl font-medium">
          UI/UX Design
        </h3>
        <p class="mt-2">
          Atasi masalah dengan cari solusi melalui desain.
        </p>
        <nuxt-link to="/services#ui-ux" class="mt-4 inline-block font-medium">
          Lihat detail
          <svg xmlns="http://www.w3.org/2000/svg" class="inline h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>
