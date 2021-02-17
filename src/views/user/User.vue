<template>
  <div class="user">
    <div class="user-nav">
      <router-link to="/user/login" tag="button">Login</router-link>
      |
      <router-link to="/user/register" tag="button">Register</router-link>
    </div>
    <hr />
    <router-view class="user-rv" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.user {
  // .user-nav {}

  .user-rv {
    padding: 10px;
    background-color: lightseagreen;
  }
}
</style>
