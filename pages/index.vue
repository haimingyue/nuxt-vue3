<template>
  <div>
    <nuxt-link to="/about">about</nuxt-link>
    Hello Pages
  </div>
</template>

<script setup>
const a = ref('')
watch(a, (val, oldVal) => {
  console.log('val', val)
})
</script>

<style lang="scss" scoped></style>
