<template>
  <header class="p-5 bg-gray-50 flex justify-between items-center">
    <nuxt-link to="/">
      <img src="images/qitadev-logo.svg" alt="Qitadev Logo" class="w-32">
    </nuxt-link>
    <button class="lg:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
      </svg>
    </button>
    <nav class="hidden lg:block">
      <nuxt-link to="/services" class="mr-8 hover:text-primary">
        Services
      </nuxt-link>
      <nuxt-link to="/works" class="mr-8 hover:text-primary">
        Works
      </nuxt-link>
      <nuxt-link to="/about-us" class="mr-8 hover:text-primary">
        About Us
      </nuxt-link>
      <nuxt-link to="/products" class="mr-8 hover:text-primary">
        Products
      </nuxt-link>
      <nuxt-link to="/for-clients" class="mr-8 hover:text-primary">
        For Clients
      </nuxt-link>
      <nuxt-link to="/contact-us" class="rounded-lg border border-primary text-primary px-2 py-1 transition hover:bg-primary hover:text-white">
        Contact Us
      </nuxt-link>
    </nav>
  </header>
</template>
