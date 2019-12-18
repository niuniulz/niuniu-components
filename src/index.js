import NButton from 'packages/n-button/index'

const components = [NButton]

const install = Vue => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

// 自动安装
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export { NButton, install }
