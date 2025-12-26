import Vue from 'vue'
import Router from 'vue-router'
import Widgets from '@/views/Widgets.vue'
import UserProfile from '@/views/UserProfile.vue'
import Apps from '@/views/Apps.vue'

import ThematicSet from '@/views/ThematicSet.vue'
import Layers from '@/views/Layers.vue'
import BaseMap from '@/views/BaseMap.vue'

import ManageThematicSets from '@/views/admin/ManageThematicSets.vue'
import InternalApp from '@/views/admin/InternalApp.vue'

import Login from '@/views/Login'
import NotFound from '@/views/NotFound'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Widgets',
      component: Widgets
    },
    // администрирование
    {
      path: '/admin',
      redirect: '/admin/apps'
    },
    {
      name: 'internal.create', 
      path: '/admin/internal/create',
      component: InternalApp
    },
    {
      name: 'internal.edit',
      path: '/admin/internal/edit/:id',
      component: InternalApp, 
      props: true 
    },
    { 
      name: 'managethematicsets', 
      path: '/admin/apps', 
      component: ManageThematicSets 
    },
    // настройки пользователя
    {
      path: '/userprofile',
      name: 'UserProfile',
      component: UserProfile
    },
    {
      path: '/apps',
      name: 'Apps',
      component: Apps
    },
    {
      name: 'app',
      path: '/app/:id',
      component: ThematicSet,
      children: [
        { name: 'basemaps', path: 'basemaps', component: BaseMap },
        { name: 'layers', path: 'layers', component: Layers },
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    },
  ]
})
