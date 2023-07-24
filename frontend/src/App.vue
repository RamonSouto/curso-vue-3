<template>
  {{ count }}
  {{ userName }}

  <ul>
    <li v-for="user in users">{{user.firstName }} - {{ user.age }}</li>
  </ul>
  <button @click="count++">Add</button>
  <h2>App</h2>

  <router-link to="/">Home</router-link>
  <router-link to="/about">About</router-link>
  <router-view />

  
</template>

<script setup>
  import { onMounted, onUpdated, reactive, ref } from 'vue';

  const count = ref(0);
  const userName = ref('Ramon')

  const users = reactive([
    {
      firstName: "Ramon",
      age: 36
    },
    {
      firstName: "Dani",
      age: 39
    }
  ])

  onMounted(() => {
    console.log('Montado App')
  })
  onUpdated(() => {
    console.log('Update App')
  })
</script>

<style>

</style>
