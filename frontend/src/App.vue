<template>
  <img :src="imageSrc" alt="" :class="{'my-class': is_admin,'my-other-class':!is_admin}" class="my-default-class">

  <button @click="add">Clique Aqui {{ count }}</button>
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
  import { onMounted, reactive, ref } from 'vue';
  import http from '@/Services/http.js'

  const count = ref(0)
  const is_admin = ref(false)
  const imageSrc = ref('https://picsum.photos/200/300')
  let users = reactive([])
  function add(){
    count.value++;
  }
  onMounted(async() => {
    try {
      const {data} = await http.get('/api/users')
      users = data
    } catch (error) {
      console.log(error)
    }
    
  })

</script>

<style scoped>
  .my-class{
    border: solid 4px red;
  }
  .my-other-class{
    border: solid 4px blue;
  }
</style>
