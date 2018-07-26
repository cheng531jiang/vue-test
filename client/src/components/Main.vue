<template>
  <div>
    <!-- <iframe src="http://www.baidu.com" id="iframe1" scrolling="yes" width="100%" height="500px"></iframe> -->
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      @select="handleSelect"
      router="router"
      active-text-color="#ffd04b">
      <el-menu-item index="/mainpage" >主页</el-menu-item>
      <!-- <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu> -->
      <el-menu-item index="/msg">消息</el-menu-item>
      <el-menu-item index="/list">列表</el-menu-item>
      <el-menu-item index="/user/123">用户</el-menu-item>
      <el-menu-item index="/order/sport">订单</el-menu-item>
    </el-menu>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      router:true,
      activeIndex:this.$route.path,
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
    }
  },
  watch: {
    '$route' (to, from) {
      this.activeIndex = to.path;
      // console.log("from " , from );
      // console.log("to " , to );
    }
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
