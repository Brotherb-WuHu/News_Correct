import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import 'normalize.css'
import './assets/css/index.less'
// @ts-ignore
import filter from './utils/filter' // global filter
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// pinia
import { createPinia } from 'pinia'
const pinia = createPinia()
import { setupStore } from '@/store/login/login'

const app = createApp(App)

// 全局过滤器
filter(app)

// 挂载
app.use(pinia).use(router).mount('#app')

// el-plus icon 全注册
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// 解决用户登录后刷新，缓存还在，store清空的问题
setupStore()
