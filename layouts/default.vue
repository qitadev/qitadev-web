<template>
  <div class="min-h-screen flex flex-col">
    <app-header />
    <div class="flex-1">
      <nuxt />
    </div>
    <app-footer />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>
