<template>
  <header class="p-5 bg-gray-50 flex justify-between items-center">
    <nuxt-link to="/">
      <img src="qitadev-logo.svg" alt="Qitadev Logo" class="w-32">
    </nuxt-link>
    <button class="lg:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
      </svg>
    </button>
    <nav class="hidden lg:block">
      <ul class="flex">
        <li class="mr-8">
          Services
        </li>
        <li class="mr-8">
          Works
        </li>
        <li class="mr-8">
          About Us
        </li>
        <li class="mr-8">
          Products
        </li>
        <li class="mr-8">
          For Clients
        </li>
        <li>
          <nuxt-link to="/contact-us" class="rounded-lg border border-primary text-primary px-2 py-1 transition hover:bg-primary hover:text-white">
            Contact Us
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
