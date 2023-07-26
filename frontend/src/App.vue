<template>
  

  <img :src="imageSrc" alt="" :class="{'my-class': is_admin,'my-other-class':!is_admin}" class="my-default-class">
  <br>
  <button @click="count++">Clique Aqui {{ count }}</button>

  <input type="text" @keyup="add" placeholder="Qualquer coisa">
  <br>
  <p>Nome: {{ userName }}</p>
  <input type="text" v-model="userName" placeholder="Qualquer coisa">
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
        count: 0,
        showHeader: false,
        imageSrc: 'https://picsum.photos/200/300',
        is_admin: false,
        userName: ''
      }
    },

    components:{
      Header
    },
    methods:{
      add(event){
        this.count += Number(event.target.value)
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

<style scoped>
  .my-class{
    border: solid 4px red;
  }
  .my-other-class{
    border: solid 4px blue;
  }
</style>
