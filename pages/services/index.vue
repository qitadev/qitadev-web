<template>
  <div class="pb-24">
    <div class="max-w-5xl mx-auto px-5">
      <p class="mt-16 font-medium text-primary text-center text-lg">
        Services
      </p>
      <h1 class="mt-2 text-center font-semibold text-4xl">
        Tersedia berbagai layanan spesial untukmu
      </h1>
      <p class="mt-4 font-light text-center">
        Kami hadir menyediakan berbagai layanan untuk memberikan solusi tumbuh dan berkembang bersama
      </p>

      <section class="mt-16 flex flex-col md:flex-row">
        <div class="flex-1 shrink-0">
          <img src="~/static/images/web-app.jpg" alt="Web Application" class="w-full aspect-video object-cover rounded-lg">
        </div>
        <div class="mt-6 md:mt-0 md:ml-6 flex-1 shrink-0">
          <span class="text-4xl font-bold text-primary">01</span>
          <h2 class="mt-2 font-medium text-2xl">
            Web Application
          </h2>
          <p class="mt-4 text-sm font-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit non illo quo incidunt voluptate numquam, corrupti praesentium sint provident nostrum vitae repellendus eaque sapiente facilis quae eius magni iure id!
          </p>
          <nuxt-link to="/services/web-application" class="mt-4 inline-block font-medium">
            Baca selengkapnya
            <svg xmlns="http://www.w3.org/2000/svg" class="inline h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </nuxt-link>
        </div>
      </section>

      <section class="mt-16 flex flex-col-reverse md:flex-row">
        <div class="mt-6 md:mt-0 flex-1 shrink-0">
          <span class="text-4xl font-bold text-primary">02</span>
          <h2 class="mt-2 font-medium text-2xl">
            Website/Landing Page
          </h2>
          <p class="mt-4 text-sm font-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit non illo quo incidunt voluptate numquam, corrupti praesentium sint provident nostrum vitae repellendus eaque sapiente facilis quae eius magni iure id!
          </p>
          <nuxt-link to="/services/landing-page" class="mt-4 inline-block font-medium">
            Baca selengkapnya
            <svg xmlns="http://www.w3.org/2000/svg" class="inline h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </nuxt-link>
        </div>
        <div class="md:ml-6 flex-1 shrink-0">
          <img src="~/static/images/landing-page.jpg" alt="Landing Page" class="w-full aspect-video object-cover rounded-lg">
        </div>
      </section>

      <section class="mt-16 flex flex-col md:flex-row">
        <div class="flex-1 shrink-0">
          <img src="~/static/images/ui-ux.png" alt="UI/UX Design" class="w-full aspect-video object-cover rounded-lg">
        </div>
        <div class="mt-6 md:mt-0 md:ml-6 flex-1 shrink-0">
          <span class="text-4xl font-bold text-primary">03</span>
          <h2 class="mt-2 font-medium text-2xl">
            UI/UX Design
          </h2>
          <p class="mt-4 text-sm font-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit non illo quo incidunt voluptate numquam, corrupti praesentium sint provident nostrum vitae repellendus eaque sapiente facilis quae eius magni iure id!
          </p>
          <nuxt-link to="/services/ui-ux-design" class="mt-4 inline-block font-medium">
            Baca selengkapnya
            <svg xmlns="http://www.w3.org/2000/svg" class="inline h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </nuxt-link>
        </div>
      </section>
    </div>

    <client-logos />

    <consultation-banner />
  </div>
</template>

<script>
export default {
  name: 'ServicesPage'
}
</script>
