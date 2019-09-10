import Vue from 'vue'
import axios from 'axios'
import menu from './menu'

import App from './App'
import router from './router'
import store from './store'
import './../../node_modules/bulma/css/bulma.css'
import './../../node_modules/bulma-pageloader/dist/css/bulma-pageloader.min.css'

// custom titlebar
const CustomTitlebar = require('custom-electron-titlebar')

let tbar = new CustomTitlebar.Titlebar({
  backgroundColor: CustomTitlebar.Color.fromHex('#1871ad'),
  icon: 'imgs/load--assets.svg',
  menu: menu
})
tbar.updateTitle('Student Companion')

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
