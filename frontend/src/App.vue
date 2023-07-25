<template>

  <span v-if="showName">Mostrar Nome</span>

  <div :class="teste">teste</div>

  <img :src="image" >

  <ul>
    <template v-for="(user,key) in users" :key="key">
      <li v-if="user.is_admin===1">{{ key }} - {{ user.firstName }} - {{ user.age }}</li>
    </template>
  </ul>
</template>

<script setup>
  import { onMounted, onUpdated, reactive, ref } from 'vue';

  const count = ref(0);
  const userName = ref('Ramon')
  const showName = ref(true)
  const teste = ref('classe')
  const image = ref('https://picsum.photos/200/300')
  const users = reactive([
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
