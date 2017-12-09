import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello.vue'

Vue.use(Router)

interface route{
  path:string
  name:string
  component:any
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
