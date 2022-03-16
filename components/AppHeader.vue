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
      <nuxt-link to="/services" class="link mr-8 relative">
        Services
        <img src="images/stripe-short.svg" alt="Stripe" class="stripe absolute w-0 inset-x-0 -bottom-3">
      </nuxt-link>
      <nuxt-link to="/works" class="link mr-8 relative">
        Works
        <img src="images/stripe-short.svg" alt="Stripe" class="stripe absolute w-0 inset-x-0 -bottom-3">
      </nuxt-link>
      <nuxt-link to="/about-us" class="link mr-8 relative">
        About Us
        <img src="images/stripe-short.svg" alt="Stripe" class="stripe absolute w-0 inset-x-0 -bottom-3">
      </nuxt-link>
      <nuxt-link to="/products" class="link mr-8 relative">
        Products
        <img src="images/stripe-short.svg" alt="Stripe" class="stripe absolute w-0 inset-x-0 -bottom-3">
      </nuxt-link>
      <nuxt-link to="/for-clients" class="link mr-8 relative">
        For Clients
        <img src="images/stripe-short.svg" alt="Stripe" class="stripe absolute w-0 inset-x-0 -bottom-3">
      </nuxt-link>
      <nuxt-link to="/contact-us" class="rounded-lg border border-primary text-primary px-2 py-1 transition hover:bg-primary hover:text-white">
        Contact Us
      </nuxt-link>
    </nav>
  </header>
</template>

<style scoped>
  .link .stripe {
    transition: width 0.2s ease-in-out;
  }

  .link:hover .stripe {
    width: 100%;
  }

  .nuxt-link-active .stripe {
    width: 100%;
  }
</style>
