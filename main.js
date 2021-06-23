import Vue from 'vue'
import App from './App'

import {
	GlobalData
} from "./common/global/GlobalData.js"

Vue.config.productionTip = false

GlobalData.getInstance().init()

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
