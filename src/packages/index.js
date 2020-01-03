import Button from './components/button'
const components = [
  Button
]

const install = (Vue,opts = {})=>{
  // 将所有的 组件 挂载到全局资源
  components.map(component => {
    Vue.component(component.name,component)
  })
}

// 当检测到 Vue 是全局变量的时候，自动将 执行 `install` 方法
if(typeof window !== 'undefined' && window.Vue){
  install(window.Vue)
}

export default {
  version: '0.0.1',
  install,
  Button   // 单独暴露 Button 组件，方便单独引入
}

