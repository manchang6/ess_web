import Vue from 'vue'
import Router from 'vue-router'

import Commodity from '@/components/Commodity/Commodity'
import Newgoods from '@/components/Newgoods/Newgoods'
import Selling from '@/components/Selling/Selling'
import Discount from '@/components/Discount/Discount'
import Lifeservice from '@/components/Lifeservice/Lifeservice'
import Aboutus from '@/components/Aboutus/Aboutus'
import Land from '@/components/Land/Land'
import Register from '@/components/Register/Register'
import Multi from '@/components/Multi/Multi'
Vue.use(Router);



export default new Router({
  routes: [
    {
      path: '/Commodity',
      name: 'Commodity',
      component: Commodity
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Land',
      name: 'Land',
      component: Land
    },
    {
      path: '/Multi',
      name: 'Multi',
      component: Multi
    },
    {
      path: '/Newgoods',
      name: 'Newgoods',
      component: Newgoods
    },
    {
      path: '/Selling',
      name: 'Selling',
      component: Selling
    },
    {
      path: '/Discount',
      name: 'Discount',
      component: Discount
    },
    {
      path: '/Lifeservice',
      name: 'Lifeservice',
      component: Lifeservice
    },
    {
      path: '/Aboutus',
      name: 'Aboutus',
      component: Aboutus
    },
    {
      path: '/',
      redirect: '/Multi',
      component: Multi
    }
    
  ]
})
