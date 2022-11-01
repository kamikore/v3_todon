import { createApp } from 'vue'
// import '@/styles/test.scss'  // main 需要导入一个scss，导入的scss才能操作 body
import '@/styles/normalize.scss' // a modern alternative to CSS resets ，转成scss 是为了解决additionalData 导入的scss 无法操作<body>
import App from './App.vue'

createApp(App).mount('#app')
