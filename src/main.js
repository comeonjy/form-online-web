import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import common from './assets/js/common.js'
import './assets/css/css.scss'

const app = createApp(App)
installElementPlus(app)
app.config.globalProperties.common = common
app.use(store).use(router).mount('#app')
