<template>
  <div class="app">
    <div class="header">
      <a-button type="primary" @click="showModal">
        Open Modal
      </a-button>
      <a-modal v-model="visible" title="Basic Modal" @ok="handleOk">
        <p>我是弹窗内容001</p>
        <p>我是弹窗内容002</p>
        <p>我是弹窗内容003</p>
      </a-modal>
    </div>
    <hr />
    <div class="nav">
      <router-link to="/" tag="button">Home</router-link>
      |
      <router-link to="/about" tag="button">About</router-link>
      |
      <router-link to="/user" tag="button">User</router-link>
      |
      <router-link to="/user/login" tag="button">Login</router-link>
      |
      <router-link to="/user/register" tag="button">Register</router-link>
    </div>
    <hr />
    <router-view class="app-rv" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    };
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      console.log(e);
      this.visible = false;
    }
  }
};
</script>

<style lang="less">
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .header {
    padding: 30px;
    background-color: lightgreen;
  }

  .nav {
    padding: 30px;
    background-color: skyblue;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }

  .app-rv {
    padding: 30px;
    background-color: lightgray;
  }
}
</style>
