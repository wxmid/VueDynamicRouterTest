// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'

import App from './App'
import router from './router'
// import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.config.productionTip = false

//状态检查缓存配置
const store = new Vuex.Store({
  satate:{
    domain:'http://test.example.com',
    userInfo: {
      nick: null,
      ulevel: null,
      uid: null,
      portrait: null
    }
  },
  mutations:{
    updateUserInfo(state,newUserInfo) {
      state.userInfo = newUserInfo;
    }
  }
})
  
  //设置cookie,增加到vue实例方便全局调用
//vue全局调用的理由是，有些组件所用到的接口可能需要session验证，session从cookie获取
//当然，如果session保存到vuex的话除外
Vue.prototype.setCookie = (c_name, value, expiredays) => {
  var exdate = new Date();
  exdate.setDate(exdate.getDate() + expiredays);
  document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
}

//获取cookie、
function getCookie(name) {
  var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (arr = document.cookie.match(reg))
    return (arr[2]);
  else
    return null;
}
Vue.prototype.getCookie = getCookie;

//删除cookie
Vue.prototype.delCookie =(name) => {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval = getCookie(name);
  if (cval != null)
    document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}

/* eslint-disable no-new */
var app = new Vue({
  data: {},
  el: '#app',
  render: h => h(App),
  router,
  store,
  methods: {
    checkLogin() {
      if(!this.getCookie('session')) {
        this.$router.push('/login');
      } else {
        this.$router.push('/');
      }
    }
  },
  created() {
    this.checkLogin();
  },
  watch: {
    "$router": "checkLogin"
  }
 /* router,
  components: { App },
  template: '<App/>'*/
})
