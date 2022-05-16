<template>
  <header :class="`sticky top-0 p-5 z-50 bg-gray-50 flex flex-col items-start overflow-hidden transition-shadow duration-300 ease-in-out lg:flex-row lg:justify-between lg:items-center ${shadowAppear ? 'shadow-lg' : 'shadow-none'}`">
    <div class="w-full flex-1 flex justify-between items-center lg:w-auto">
      <nuxt-link to="/">
        <img src="~/static/images/qitadev-logo.svg" alt="Qitadev Logo" class="w-32">
      </nuxt-link>
      <button class="lg:hidden" @click="toggleMenu">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>
    <nav ref="menu" :class="`w-full flex flex-col items-center transition-[max-height] duration-300 ease-in-out lg:flex-row lg:w-auto ${!isUnderLargeWidth || menuOpen ? 'max-h-96' : 'max-h-0'}`">
      <nuxt-link to="/services/" class="link mt-8 relative lg:mt-0 lg:mr-8">
        Services
        <img src="~/static/images/stripe-short.svg" alt="Stripe" class="stripe absolute w-0 inset-x-0 -bottom-3">
      </nuxt-link>
      <nuxt-link to="/works/" class="link mt-8 relative lg:mt-0 lg:mr-8">
        Works
        <img src="~/static/images/stripe-short.svg" alt="Stripe" class="stripe absolute w-0 inset-x-0 -bottom-3">
      </nuxt-link>
      <nuxt-link to="/about-us" class="link mt-8 relative lg:mt-0 lg:mr-8">
        About Us
        <img src="~/static/images/stripe-short.svg" alt="Stripe" class="stripe absolute w-0 inset-x-0 -bottom-3">
      </nuxt-link>
      <nuxt-link to="/products" class="link mt-8 relative lg:mt-0 lg:mr-8">
        Products
        <img src="~/static/images/stripe-short.svg" alt="Stripe" class="stripe absolute w-0 inset-x-0 -bottom-3">
      </nuxt-link>
      <nuxt-link to="/for-clients" class="link mt-8 relative lg:mt-0 lg:mr-8">
        For Clients
        <img src="~/static/images/stripe-short.svg" alt="Stripe" class="stripe absolute w-0 inset-x-0 -bottom-3">
      </nuxt-link>
      <nuxt-link to="/contact-us" class="mt-8 rounded-lg border border-primary text-primary px-2 py-1 transition hover:bg-primary hover:text-white lg:mt-0">
        Contact Us
      </nuxt-link>
    </nav>
  </header>
</template>

<script>
const LARGE_WIDTH = 1024

export default {
  data () {
    return {
      menuOpen: false,
      shadowAppear: false,
      windowWidth: 0,
      isUnderLargeWidth: true
    }
  },
  watch: {
    windowWidth (newWidth) {
      this.isUnderLargeWidth = newWidth < LARGE_WIDTH
    }
  },
  mounted () {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        this.shadowAppear = true
      } else {
        this.shadowAppear = false
      }
    })

    this.windowWidth = window.innerWidth

    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
    })
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    toggleMenu () {
      this.menuOpen = !this.menuOpen
    },
    onResize () {
      this.windowWidth = window.innerWidth
    }
  }
}
</script>

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
