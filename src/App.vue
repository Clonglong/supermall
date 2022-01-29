<template>
  <div id="app">
    <router-view></router-view>
    <router-link to="/profile" tag='button'>首页</router-link>
    <router-link to="/category" tag='button'>类别</router-link>
    <router-link to="/cart" tag='button'>购物车</router-link>
    <router-link to='/home' tag='button'>我的</router-link>
  </div>
</template>

<script>
  
</script>

<style>
  @import "./assets/css/base.css";
  .btn {
    display: flex;
    position: flex;
  }
</style>
