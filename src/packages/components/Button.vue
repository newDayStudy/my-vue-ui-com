<template>
  <div>
    <button :class="[type,className, size]" @click="handleClick" :disabled="disabled">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'x-button',
  props: {
    type: {
      type: String,
      default: ''
    },
    className: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'medium'
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style scoped lang="scss">
@import "../theme.scss";
button{
  border: none;
  outline: none;
  color: #fff;
  border-radius:4px;
  background-color: #666;
  &:disabled{
    cursor: not-allowed;
  }
  &:hover{
   opacity: 0.8;
  }
  &.medium{
    padding: 10px 15px;
  }
  &.small{
    padding: 5px 15px;
  }
  &.mini{
    padding: 2px 10px;
  }
  &.primary{
    background-color: $color-primary;
  }
  &.warning{
    background-color: $color-warning;
  }
  &.error {
    background-color: $color-error;
  }
 }

</style>
