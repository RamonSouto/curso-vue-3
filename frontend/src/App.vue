<template>
  {{ count }}
  {{ userName }}

  <ul>
    <li v-for="user in users">{{ user.firstName }} - {{ user.age }}</li>
  </ul>
  <div v-if="showHeader">
    <Header />
  </div>

  <button @click="showHeader = !showHeader">Header</button>
  
  <h2>App</h2>

  <router-link to="/">Home</router-link>
  <router-link to="/about">About</router-link>

  <router-view></router-view>
</template>

<script>
  import Header from '@/components/Header.vue'

  export default{
    components:{
      Header
    },
    data() {
      return {
        count: 0,
        showHeader: true,
        userName: 'Ramon Souto',
        users:[
          {
            firstName:'Ramon',
            age:35
          },
          {
            firstName:'Dani',
            age:39
          }
        ]
      }
    },
    mounted(){
      console.log('Montado')
    },
    updated(){
      console.log('Atualizado')
    }
  }
</script>

<style>

</style>
