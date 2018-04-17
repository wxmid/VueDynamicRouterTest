export function configRouter(router) {
  router.map({
    '/login': {
      name:'Login',
      title:'登录',
      component:(resolve) => require(['./components/Login.vue'],resolve)
    }
  })
}
