<template>
  <h2>Lista de nome</h2>
  <ul>
    <template v-for="(user, key) in users" :key="key">
      <li>{{user.id}} - {{ user.firstName }} {{ user.lastName }} - {{ user.email }}</li>
    </template>
  </ul>
</template>

<script>
  import http from '@/services/http.js'

  export default{
    
    data() {
      return {
        users: [],
      }
    },

    async mounted(){
      try {
        const {data} = await http.get('http://localhost/api/users')
        this.users = data
      } catch (error) {
        console.log(error)
      }
    }
  }
</script>

<style>

</style>
