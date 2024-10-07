<template>
  <div>
    <nuxt-link to="/about">{{ store.count }}</nuxt-link>
    Hello Pages
    <button @click="store.increment()">新增</button>
  </div>
</template>

<script setup>
import { useCounter } from '~/stores/useConter.ts'

const store = useCounter()

console.log(store.count)
</script>

<style lang="scss" scoped></style>
