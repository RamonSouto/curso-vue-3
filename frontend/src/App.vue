<template>
  

    <template v-if="showHeader">
      <Header />
    </template>

  <hr>
  <h2>Lista de nome</h2>
  <ul>
    <template v-for="(user) in users" :key="user.id">
      <li>
        {{user.id}} - {{ user.firstName }} {{ user.lastName }} - {{ user.email }}
        <button v-if="user.is_admin ===1">Admin</button>
        <button v-else>Not Admin</button>
      </li>
    </template>
  </ul>
</template>

<script>
  import http from '@/services/http.js'
  import Header from '@/components/Header.vue'
  export default{
    
    data() {
      return {
        users: [],
        showHeader: false
      }
    },

    components:{
      Header
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
