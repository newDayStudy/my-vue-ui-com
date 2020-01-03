// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import myUI from 'my-vue-ui-com'
console.log(myUI.Button)
// Vue.use(myUI)
Vue.component(myUI.Button.name, myUI.Button)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
