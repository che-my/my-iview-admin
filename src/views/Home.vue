<template>
  <div class="home">
    <h2>{{food}}</h2>
    <HelloWorld msg="欢迎来到我的Vue.js应用项目"/>
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转到parent</button>
    <button @click="handleClick('replace')">替换到parent</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '_c/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  props: {
    food: {
      type: String,
      default: '大家'
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log(to.name)
    next()
  },
  methods: {
    handleClick (type) {
      if (type === 'back') this.$router.back()
      // else if (type === 'push') this.$router.push('/parent') //直接跳转
      else if (type === 'push'){
        const name = 'xiaoming'
        this.$router.push({
          // 1.
          // name: 'parent',   //命名跳转
          // query: {
          //   name:'xiaoming'
          // }
          // 2.
          // name: 'user',   //命名跳转
          // params: {
          //   name:'xiaoming'
          // }
          // 3.
          path: `/user/${name}`
        })
      } else if (type === 'replace'){
        this.$router.replace({
          name: 'parent'   //路由替换跳转
        })
      }
    }
  }
}
</script>
