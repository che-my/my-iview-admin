import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'

Vue.use(Router)

const router = new Router({
  // mode: 'history',  // 去掉# 无刷新
  routes
})

const HAS_LOGINED = true  //是true登录了 false 未登录

//全局守卫
// 前置钩子
router.beforeEach((to, from, next) => {
  if (to.name !== 'login') {
    if (HAS_LOGINED) next()
    else next({ name: 'login' })
  } else {
    if (HAS_LOGINED) next({ name: 'home' })
    else next()
  }
})

//导航被确认之前钩子
// router.beforeResolve(to, from, next) =>{})

//后置钩子
router.afterEach((to, from) => {

})

export default router
