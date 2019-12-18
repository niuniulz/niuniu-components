import NButton from './src/main.vue'

NButton.install = Vue => {
  Vue.component(NButton.name, NButton)
}

export default NButton
