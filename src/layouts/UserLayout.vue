<template>
  <div class="user">
    <div class="user-nav">
      <router-link to="/user/login" tag="button">Login</router-link>
      |
      <router-link to="/user/register" tag="button">Register</router-link>
    </div>
    <div class="user-desc">
      <h3>Ant Design Vue Pro</h3>
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
  .user-desc {
    padding: 10px 0;

    h3 {
      margin: 0;
    }
  }
  .user-rv {
    padding: 10px;
    background-color: lightseagreen;
  }
}
</style>
