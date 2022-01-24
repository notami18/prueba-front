import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {
    BootstrapVue,
    IconsPlugin
} from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Mixins
import usersMixin from '@/mixins/randomUser';
import localStorageMixin from '@/mixins/localStorage';
import globalMixin from '@/mixins/global'

import Popover from 'vue-js-popover'

Vue.use(Popover)

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.mixin(usersMixin)
Vue.mixin(localStorageMixin)
Vue.mixin(globalMixin)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')