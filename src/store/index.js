import { createStore } from "vuex";
import app from './modules/app'
import getters from './getter'

const modules = {
  app
}


export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules,
  getters
});