import Vue from 'vue'
import Router from 'vue-router'

import Commodity from '@/components/Commodity/Commodity'
import Newgoods from '@/components/Newgoods/Newgoods'
import Selling from '@/components/Selling/Selling'
import Discount from '@/components/Discount/Discount'
import Lifeservice from '@/components/Lifeservice/Lifeservice'
import Aboutus from '@/components/Aboutus/Aboutus'

Vue.use(Router);




export default new Router({
  routes: [
    {
      path: '/Commodity',
      name: 'Commodity',
      component: Commodity
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
      redirect: '/Commodity'
    }
    
  ]
})
