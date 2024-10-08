<template>
  <div>
    <nuxt-link to="/about">{{ store.count }}</nuxt-link>
    Hello Pages
    <button class="btn px-4" @click="store.increment()">新增</button>
    <div>pos: {{ x }}, {{ y }}</div>
  </div>
</template>

<script setup>
import { useCounter } from '~/stores/useConter.ts'

const store = useCounter()

const { x, y } = useMouse()

console.log(store.count)
</script>

<style lang="scss" scoped>
$width: 320px;

.btn {
  width: $width;
}
</style>
