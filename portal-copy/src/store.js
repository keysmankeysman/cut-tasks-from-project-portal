import Vue from 'vue'
import Vuex from 'vuex'

// local data
import { urls } from './localdata/urls'
import { user } from './localdata/user'
import { config } from './localdata/config'
import { layers } from './localdata/layers'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    urls,
    user,
    config,
    layers
  },
  mutations: {},
  actions: {},
  getters: {},
})