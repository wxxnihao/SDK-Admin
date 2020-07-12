import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/Login/Login'
import Advertising from '@/components/Advertising'
import setting from '@/components/setting'
import change from '@/components/change'
import intermediary from '@/components/intermediary'
import Home from '@/components/Home'
import Register from '@/components/Register/Register'
import zonghe from '@/components/zonghe'
import active from '@/components/active'





Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path:"/Register/Register",
      name:'Register',
      component:Register
    },
    {
      path: '/zonghe',
      name: 'zonghe',
      component: zonghe
    },
    {
      path: '/active',
      name: 'active',
      component: active
    },

    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:"/Home",
      name:'Home',
      component:Home
    },
    {
      path:"/Advertising",
      name:'Advertising',
      component:Advertising
    },
    {
      path:"/setting",
      name:"setting",
      component:setting
    },
    {
      path:"/change",
      name:"change",
      component:change
    },
    {
      path:"/intermediary",
      name:"intermediary",
      component:intermediary
    },

  ]
})
