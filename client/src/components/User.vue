<template>
  <div>
    Hello, my name is {{name}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      name:this.$route.params.id
    }
  },
  beforeRouteEnter(to, from, next){
    console.log('beforeRouteEnter');
    next();
  },
  beforeRouteUpdate(to, from, next){
    console.log('beforeRouteUpdate');
  },
  mounted(){
    // console.log(this.$route.hash);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
