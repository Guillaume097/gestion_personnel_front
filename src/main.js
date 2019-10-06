import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash, faEdit, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue';
import router from './router';
import './assets/main.scss';


library.add(faTrash)
library.add(faEdit)
library.add(faPlus)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
