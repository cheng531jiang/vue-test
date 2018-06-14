<template>
  <div>
    <ul v-for="li in list">
      <li>{{li.msg}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list:[
        {"msg":"hello"},
        {"msg":"you"},
        {"msg":"sun"},
        {"msg":"of"},
        {"msg":"a"},
        {"msg":"gun"}
      ]
    }
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
