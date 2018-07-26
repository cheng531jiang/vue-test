<template>
  <div class="order">
     {{msg}}
     <div class="sub-view">
       <router-view/>
     </div>
     <h1>test color purple</h1>
     <h2>test color blue</h2>
     <h3>test color green</h3>
     <div class="val"> test 命名空间 </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'this is the order main page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sub-view{margin:10px}
.order h2{color:blue;}
</style>
<style lang='less'>
@fontSize:30px;
.order{
  .val(@param) {
    font-size: @param !important;
    color:brown;
  }
}
 /* .class1{
   .inner-class1{color:gray !important}
 } */
.order{

  h1{color:purple};
  /* .val(20px); */
}

.myclass1{
  .val(@param) {
    font-size: @param;
    color:green;
  }
}
/*
.order {
 .myclass1>.val(20px);
} */
</style>
