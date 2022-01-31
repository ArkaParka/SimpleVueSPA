import Vue from 'vue'
import App from './App.vue'
import DataTable from "@andresouzaabreu/vue-data-table";
import Donut from 'vue-css-donut-chart';
import 'vue-css-donut-chart/dist/vcdonut.css';
import 'bootstrap/dist/css/bootstrap.css'

import "@quintet/vue-quintable/dist/vue-quintable.css"
import VueTable from '@quintet/vue-quintable'

Vue.use(VueTable);
Vue.use(Donut);
Vue.component("data-table", DataTable);

new Vue({
  el: '#app',
  render: h => h(App)
})
