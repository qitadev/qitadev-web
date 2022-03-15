<template>
  <header class="p-5 bg-gray-50 flex justify-between items-center">
    <nuxt-link to="/">
      <img src="qitadev-logo.svg" alt="Qitadev Logo" class="w-32">
    </nuxt-link>
    <nav>
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
