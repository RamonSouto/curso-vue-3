<template>
  <input type="text" name="" id="" v-model="userName">

  <template v-for="user in users">
    <input type="checkbox" name="" @click="userName = user.firstName" :checked="userName == user.firstName">{{ user.firstName }}
  </template>
  
  <select name="" id="" v-model="userName">
    <option :value="user.firstName" v-for="(user) in users">{{ user.firstName }}</option>
  </select>

</template>

<script>
export default {
  data() {
    return {
      userName: "Ramon",
      users:[
        {
          id:1,
          firstName: "Ramon"
        },
        {
          id:2,
          firstName: "Dani"
        },
        {
          id:3,
          firstName: "Souto"
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
