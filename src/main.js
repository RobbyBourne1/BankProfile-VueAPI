import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import './../node_modules/bulma/css/bulma.css'

Vue.config.productionTip = false
Vue.filter('titleCaseString', function(value) {
  const string = value
    .split(' ')
    .map(m => {
      return m.charAt(0).toUpperCase() + m.slice(1)
    })
    .join(' ')
  return string
})

new Vue({
  el: '#app',
  vuetify,
  render: h => h(App)
})
