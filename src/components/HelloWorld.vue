<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <n-button>测试按钮</n-button>
    <n-button type="primary" size="small" plain>主要按钮</n-button>
    <n-button type="danger" size="larger">危险按钮</n-button>
    <n-button type="warning" round>警告按钮</n-button>
    <n-button type="info" plain @click="click">信息按钮</n-button>fd
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NButton from 'packages/n-button/index';

export default Vue.extend({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  components: {
    NButton,
  },
  methods: {
    click() {
      console.log('aa');
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
