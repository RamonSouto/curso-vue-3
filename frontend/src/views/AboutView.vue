<template>
  <div class="about">
    <h1>About</h1>
  </div>
</template>

<script setup>
  import { onUnmounted } from 'vue';

  onUnmounted(() => {
    console.log('Desmontado about')
  })
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
