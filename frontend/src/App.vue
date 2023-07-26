<template>

  <h2>Lista de Nomes</h2>
  <ul>
    <template v-for="(user, key) in users" :key="user.id">
      <li>
        {{ user.id }} - {{ user.firstName }} {{ user.lastName }} - {{ user.email }}
        <button v-if="user.is_admin === 1">Admin</button>
        <button v-else>Not Admin</button>
      </li>
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
