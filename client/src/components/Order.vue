<template>
  <div>
     {{msg}}
     <div class="sub-view">
       <router-view/>
     </div>
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
</style>
