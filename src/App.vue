<template>
  <div id="app">
    <div id="nav">
      <h1>my-iview-admin</h1>
      <!-- 命名路由 -->
      <router-link :to="{ name: 'home' }">首页</router-link> |
      <router-link :to="{ name: 'about' }">关于</router-link>
    </div>
    <!-- 命名视图默认名字default -->
    <router-view/>
    <!-- 命名视图名字 email-->
    <router-view name="email"/>
    <!-- 命名视图名字 tel-->
    <router-view name="tel"/>
  </div>
</template>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
