<template>
  <div id="app">
  <el-button>默认按钮</el-button>
  </div>
</template>

<script>
import Vue from 'vue'
import Button  from 'element-ui/packages/button';
Vue.component(Button.name, Button);
export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
