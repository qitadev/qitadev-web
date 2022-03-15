<template>
  <footer>
    <div class="bg-primary py-16 text-white">
      <div class="max-w-5xl mx-auto px-5 grid grid-cols-2 md:grid-cols-6 gap-6">
        <div class="col-span-2">
          <img src="images/qitadev-logo-white.svg" alt="Qitadev Logo" class="w-32">
          <div class="mt-6">
            <a href="#" class="inline-block mr-2">
              <img src="icons/linkedin.svg" alt="Linkedin Logo">
            </a>
            <a href="#" class="inline-block mr-2">
              <img src="icons/instagram.svg" alt="Instagram Logo">
            </a>
            <a href="#" class="inline-block mr-2">
              <img src="icons/whatsapp.svg" alt="Whatsapp Logo">
            </a>
            <a href="#" class="inline-block mr-2">
              <img src="icons/envelope.svg" alt="Email Logo">
            </a>
          </div>
          <p class="mt-6 text-sm font-light">
            Email us at <a href="#" class="underline">qitadev@gmail.com</a>
          </p>
        </div>
        <div>
          <p class="font-medium">
            Services
          </p>
          <nav class="mt-6">
            <nuxt-link to="#" class="block font-light text-sm underline">
              Web Application
            </nuxt-link>
            <nuxt-link to="#" class="mt-4 block font-light text-sm underline">
              Landing Page
            </nuxt-link>
            <nuxt-link to="#" class="mt-4 block font-light text-sm underline">
              UI/UX Design
            </nuxt-link>
          </nav>
        </div>
        <div>
          <p class="font-medium">
            Products
          </p>
          <nav class="mt-6">
            <nuxt-link to="#" class="block font-light text-sm underline">
              Kunikahkan.id
            </nuxt-link>
          </nav>
        </div>
        <div>
          <p class="font-medium">
            For Clients
          </p>
          <nav class="mt-6">
            <nuxt-link to="#" class="block font-light text-sm underline">
              Figma Plugin
            </nuxt-link>
            <nuxt-link to="#" class="mt-4 block font-light text-sm underline">
              Blog
            </nuxt-link>
          </nav>
        </div>
        <div>
          <p class="font-medium">
            Headquarter
          </p>
          <p class="mt-6 text-sm font-light">
            Jl. Kaliurang KM 12.5, Ngaglik, Sleman, Yogyakarta, Indonesia, 55581
          </p>
        </div>
      </div>
    </div>
    <div class="bg-primary-dark p-5 text-center text-white text-sm">
      Hak Cipta {{ new Date().getFullYear() }} - Qitadev Technology
    </div>
  </footer>
</template>
