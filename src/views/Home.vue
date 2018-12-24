<template>
  <div class="home">
    <HelloWorld msg="欢迎来到我的Vue.js应用项目"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '_c/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
