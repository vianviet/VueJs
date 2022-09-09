import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css'
import './assets/main.css'
import store from './stores'

const app = createApp(App)
app.use(Antd);
app.use(store)
app.use(router)

app.mount('#app')
