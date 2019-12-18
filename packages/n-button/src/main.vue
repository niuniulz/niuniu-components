<template>
  <div
    class="nn-button"
    :disabled="disabled || loading"
    :class="[
    type ? 'nn-button-'+type : '',
    size ? 'nn-button-'+size : '',
    round ? 'nn-button-round' : '',
    plain ? 'isplain' : ''
    ]"
    @click="handleClick"
  >
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  name: 'NButton'
})
export default class Nbutton extends Vue {
  @Prop({ default: '' }) type?: string
  @Prop({ default: '' }) size?: string
  @Prop({ default: false }) round?: boolean
  @Prop({ default: false }) plain?: boolean
  @Prop({ default: false }) disabled?: boolean
  @Prop({ default: false }) loading?: boolean
  handleClick(event: any) {
    this.$emit('click', event)
  }
}
</script>
<style lang="scss" scoped>
@import '@/static/varible';
.nn-button {
  background: #fff;
  border: 1px solid $info;
  color: #333;
  display: inline-block;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 4px;
}
.nn-button-primary {
  background: $primary;
  border: 1px solid $primary;
  color: #fff;
  &:hover {
    opacity: 0.6;
  }
  &.isplain {
    background: $primary-plain;
    color: $primary;
  }
}
.nn-button-danger {
  background: $danger;
  border: 1px solid $danger;
  color: #fff;
  &:hover {
    opacity: 0.6;
  }
  &.isplain {
    background: $danger-plain;
    color: $danger;
  }
}
.nn-button-warning {
  background: $warning;
  border: 1px solid $warning;
  color: #fff;
  &:hover {
    opacity: 0.6;
  }
  &.isplain {
    background: $warning-plain;
    color: $warning;
  }
}
.nn-button-info {
  background: $info;
  border: 1px solid $info;
  color: #fff;
  &:hover {
    opacity: 0.6;
  }
  &.isplain {
    background: $info-plain;
    color: $info;
  }
}
.nn-button-larger {
  padding: 12px 24px;
}
.nn-button-small {
  padding: 8px 15px;
  font-size: 12px;
  border-radius: 3px;
}

.nn-button-round {
  border-radius: 30px;
}
</style>
