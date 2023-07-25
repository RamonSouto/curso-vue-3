<template>

  <h2>Lista de Nomes</h2>
  <ul>
    <template v-for="(user, key) in users" :key="key">
      <li>{{ user.id }} - {{ user.firstName }} {{ user.lastName }} - {{ user.email }}</li>
    </template>
  </ul>
  
</template>

<script setup>
  import { onMounted, reactive,  } from 'vue';
  import http from '@/Services/http.js'

  let users = reactive([])

  onMounted(async() => {
    try {
      const {data} = await http.get('/api/users')
      users = data
    } catch (error) {
      console.log(error)
    }
    
  })

</script>

<style>

</style>
