<template>
  <h2>App</h2>

  <router-link to="/">Home</router-link>
  <router-link to="/about">About</router-link>
  <router-view />

  <p>{{ count }}</p>

  <button @click="count++">Add</button>
</template>

<script setup>
  import { onMounted, onUpdated, ref } from 'vue';

  const count = ref(0);

  onMounted(() => {
    console.log('Montado App')
  })
  onUpdated(() => {
    console.log('Update App')
  })
</script>

<style>

</style>
