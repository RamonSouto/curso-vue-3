<template>
  <span v-if="showName">Mostrar nome</span>

  <div :class="teste"></div>

  <img :src="image">
  <ul>
    <template v-for="(user, key) in users" :key="key">
      <li v-if="user.is_admin===1">{{ key }} - {{ user.firstName }} - {{ user.age }}</li>
    </template>
  </ul>
</template>

<script>
  import Header from '@/components/Header.vue'

  export default{
    
    data() {
      return {
        userName: 'Ramon',
        showName: true,
        teste: 'classe',
        image: 'https://picsum.photos/200/300',
        users:[
          {
            id:1,
            firstName: "Ramon",
            age: 36,
            is_admin:1
          },
          {
            id:2,
            firstName: "Dani",
            age: 39,
            is_admin:1
          },
          {
            id:3,
            firstName: "Bruna",
            age: 17,
            is_admin:0
          },
          {
            id:4,
            firstName: "Beatriz",
            age: 14,
            is_admin:0
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
