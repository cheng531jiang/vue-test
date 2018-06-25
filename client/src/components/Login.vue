<template>
  <el-form ref="form" :model="user" label-width="180px" class="loginForm">
    <el-form-item label="用户名（邮箱）">
      <el-input v-model="user.email"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input type="password" v-model="user.password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { mapGetters } from 'vuex'
import Vue from 'vue'
// import socketapi from '../store/socketapi'

export default {
  name: 'login-view',
  data () {
    return {
      user:{
        email:"",
        password:""
      }
    }
  },
  computed: {
    ...mapGetters([
      'getState',
    ])
  },
  methods: {
    onSuccess: function () {
      // socketapi(Vue)
      this.$router.push({path: '/'})
    },
    onError: function () {
      this.$router.push({path: '/login'})
    },
    onSubmit: function () {
      this.$store.dispatch("login",this.user
      ).then( res => {
        if(this.getState != null && this.getState.islogined === true){
          this.onSuccess();
        }else{
          this.message = this.getState.errinfo.message
          // if(this.getState != null && this.getState.errinfo != null && this.getState.errinfo.otherused){
          //   var con = confirm(this.message+"，是否让其登出？"); //在页面上弹出对话框
          //   if(con){
          //     this.message = "正在登录...";
          //     this.form.forcedUndeline = true;
          //     this.onSubmit();
          //   }
          // }
          this.onError();
        }
      }, err => {
        console.log(err);
        // this.message = null;
        this.onError();
      });
    }
  }
}
</script>

<style>
.loginForm{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width:100%;
  height:200px;
  padding-top:30px;
}
.loginForm .el-form-item{
  width:40%;
  margin:auto;
}
</style>
