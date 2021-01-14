<template>
  <div id="app">
    <router-link to="/">主页</router-link>
    <router-link to="/user">用户模块</router-link>
    <router-link to="/student">学生模块</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
