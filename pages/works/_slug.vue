<template>
  <div class="pb-24">
    <section class="max-w-5xl px-5 mx-auto">
      <p class="mt-16 block">
        <nuxt-link to="/works" class="text-gray-400">
          Works
        </nuxt-link>
        / {{ project.name }}
      </p>
      <div class="grid grid-cols-1 md:grid-cols-12 gap-6 mt-16">
        <div class="col-span-1 md:col-span-6 flex flex-col items-start justify-center">
          <img
            src="~/static/images/bingber-logo.png"
            alt="logo bingung berbagi"
            width="125px"
          >
          <h1 class="text-4xl mt-6 font-semibold">
            {{ project.slogan }}
          </h1>
          <p class="mt-6">
            {{ project.orgType }} | {{ project.location }}
          </p>
          <nuxt-link :to="project.link" class="hover:text-primary mt-6">
            Lihat Website
            <svg xmlns="http://www.w3.org/2000/svg" class="inline h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </nuxt-link>
        </div>
        <div class="col-span-1 md:col-span-6 mt-8 md:mt-0">
          <img
            src="~/static/images/bingung-berbagi-showcase.jpg"
            alt="showcase bingber"
            class="rounded-lg shadow-lg"
          >
        </div>
      </div>
    </section>
    <section class="max-w-5xl mx-auto px-5 py-16">
      <div class="grid grid-cols-1 md:grid-cols-12 mt-16 gap-6">
        <div class="col-span-1 md:col-span-8 flex flex-col items-center">
          <div class="w-full">
            <h2 class="text-2xl font-medium">
              Tentang {{ project.name }}
            </h2>
            <p class="mt-4">
              {{ project.desc }}
            </p>
          </div>
          <div class="w-full mt-8">
            <h2 class="text-2xl font-medium">
              Tantangan
            </h2>
            <p class="mt-4">
              {{ project.vision }}
            </p>
          </div>
          <div class="w-full mt-8">
            <h2 class="text-2xl font-medium">
              Tujuan
            </h2>
            <p class="mt-4">
              {{ project.mission }}
            </p>
          </div>
        </div>
        <div class="col-span-1 md:col-span-4 mt-8 md:mt-0">
          <div class="card-item px-6 py-8 bg-primary-light rounded-lg">
            <h4 class="text-sm text-primary font-medium">
              Katergori
            </h4>
            <p class="mt-2">
              {{ project.orgCategory }}
            </p>
          </div>
          <div class="card-item px-6 py-8 bg-primary-light rounded-lg mt-4">
            <h4 class="text-sm text-primary font-medium">
              Waktu Pengerjaan
            </h4>
            <p class="mt-2">
              {{ project.projectDuration }}
            </p>
          </div>
          <div class="card-item px-6 py-8 bg-primary-light rounded-lg mt-4">
            <h4 class="text-sm text-primary font-medium">
              Peran Qitadev
            </h4>
            <ul class="list-disc mt-2">
              <li v-for="service in project.qitadevServices" :key="service" class="ml-4">
                {{ service }}
              </li>
            </ul>
          </div>
          <div class="card-item px-6 py-8 bg-primary-light rounded-lg mt-4">
            <h4 class="text-sm text-primary font-medium">
              Teknologi yang digunakan
            </h4>
            <ul class="list-disc mt-2">
              <li v-for="tech in project.techUsed" :key="tech" class="ml-4">
                {{ tech }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="max-w-5xl px-5 mx-auto mt-8">
      <h1 class="font-semibold text-4xl">
        Dokumentasi
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div v-for="gallery in project.gallery" :key="gallery" class="col-span-1">
          <img
            :src="require(`~/static/images/${gallery}`)"
            alt="bingber gallery"
            class="rounded-lg shadow-lg"
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      slug: this.$route.params.slug,
      projects: [
        {
          slug: 'bingung-berbagi',
          name: 'Bingung Berbagi',
          slogan: 'Permudah Aktivitas Berbagimu Bersama Kami',
          orgType: 'Non-profit organization',
          orgCategory: 'Donasi & Organisasi',
          desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          vision: 'Lorem Ipsum is simply dummy text of the printing',
          mission: 'Lorem Ipsum is simply dummy text of the printing',
          projectDuration: '1 Month',
          qitadevServices: ['UI/UX Design', 'eCommerce Website', 'Cloud Hosting', 'Support and Maintenance'],
          techUsed: ['Vue', 'Nuxt', 'Cloudinary', 'Figma', 'Whimsical'],
          location: 'Indonesia',
          link: 'https://qitadev.github.io/bingung-berbagi/',
          gallery: ['bingber-gallery-1.png', 'bingber-gallery-2.png']
        }
      ]
    }
  },
  computed: {
    project () {
      return this.projects.filter(project => project.slug === this.slug)[0]
    }
  }
}
</script>
