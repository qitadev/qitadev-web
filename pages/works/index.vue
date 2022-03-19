<template>
  <div class="pb-24">
    <div class="max-w-5xl mx-auto px-5">
      <p class="mt-16 font-medium text-primary text-center text-lg">
        Works
      </p>
      <h1 class="mt-2 text-center font-semibold text-4xl">
        Cerita sukses kontribusi kami
      </h1>
      <p class="mt-4 font-light text-center">
        Menjadi kebanggaan tak ternilai menjadi bagian dari proses tumbuh dan kembang bersama
      </p>
      <ul class="mt-4 text-center">
        <li class="inline-block m-1">
          <button class="px-2 py-1 text-sm border border-primary bg-primary text-white rounded-lg transition hover:bg-primary hover:text-white">
            All
          </button>
        </li>
        <li class="inline-block m-1">
          <button class="px-2 py-1 text-sm border border-primary text-primary rounded-lg transition hover:bg-primary hover:text-white">
            Web Application
          </button>
        </li>
        <li class="inline-block m-1">
          <button class="px-2 py-1 text-sm border border-primary text-primary rounded-lg transition hover:bg-primary hover:text-white">
            Landing Page
          </button>
        </li>
        <li class="inline-block m-1">
          <button class="px-2 py-1 text-sm border border-primary text-primary rounded-lg transition hover:bg-primary hover:text-white">
            UI/UX Design
          </button>
        </li>
      </ul>

      <ul class="mt-16 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        <li>
          <img src="~/static/images/dikadoin-portfolio.png" alt="Dikadoin Portfolio" class="rounded-lg">
          <div class="inline-block rounded-full border-2 border-white -mt-8 ml-4">
            <img src="~/static/images/dikadoin-logo.png" alt="Dikadoin Logo" class="w-16 rounded-full">
          </div>
          <span class="text-sm block">Landing Page</span>
          <nuxt-link to="/works/bingung-berbagi" class="font-medium text-xl hover:text-primary transition-colors block">
            Optimalisasi Bisnis Dikadoin.dong
          </nuxt-link>
        </li>
        <li>
          <img src="~/static/images/dikadoin-portfolio.png" alt="Dikadoin Portfolio" class="rounded-lg">
          <div class="inline-block rounded-full border-2 border-white -mt-8 ml-4">
            <img src="~/static/images/dikadoin-logo.png" alt="Dikadoin Logo" class="w-16 rounded-full">
          </div>
          <span class="text-sm block">Landing Page</span>
          <nuxt-link to="/works/bingung-berbagi" class="font-medium text-xl hover:text-primary transition-colors block">
            Optimalisasi Bisnis Dikadoin.dong
          </nuxt-link>
        </li>
        <li>
          <img src="~/static/images/dikadoin-portfolio.png" alt="Dikadoin Portfolio" class="rounded-lg">
          <div class="inline-block rounded-full border-2 border-white -mt-8 ml-4">
            <img src="~/static/images/dikadoin-logo.png" alt="Dikadoin Logo" class="w-16 rounded-full">
          </div>
          <span class="text-sm block">Landing Page</span>
          <nuxt-link to="/works/bingung-berbagi" class="font-medium text-xl hover:text-primary transition-colors block">
            Optimalisasi Bisnis Dikadoin.dong
          </nuxt-link>
        </li>
        <li>
          <img src="~/static/images/dikadoin-portfolio.png" alt="Dikadoin Portfolio" class="rounded-lg">
          <div class="inline-block rounded-full border-2 border-white -mt-8 ml-4">
            <img src="~/static/images/dikadoin-logo.png" alt="Dikadoin Logo" class="w-16 rounded-full">
          </div>
          <span class="text-sm block">Landing Page</span>
          <nuxt-link to="/works/bingung-berbagi" class="font-medium text-xl hover:text-primary transition-colors block">
            Optimalisasi Bisnis Dikadoin.dong
          </nuxt-link>
        </li>
        <li>
          <img src="~/static/images/dikadoin-portfolio.png" alt="Dikadoin Portfolio" class="rounded-lg">
          <div class="inline-block rounded-full border-2 border-white -mt-8 ml-4">
            <img src="~/static/images/dikadoin-logo.png" alt="Dikadoin Logo" class="w-16 rounded-full">
          </div>
          <span class="text-sm block">Landing Page</span>
          <nuxt-link to="/works/bingung-berbagi" class="font-medium text-xl hover:text-primary transition-colors block">
            Optimalisasi Bisnis Dikadoin.dong
          </nuxt-link>
        </li>
      </ul>
    </div>

    <consultation-banner />
  </div>
</template>

<script>
export default {
  name: 'WorksPage'
}
</script>
