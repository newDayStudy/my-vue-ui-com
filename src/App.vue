<template>
  <div id="app">
    <img src="./assets/logo.png">
    <x-button>按钮</x-button>
  </div>
</template>

<script>

// import XButton from './packages/components/Button'
export default {
  name: 'App',
  // components: {XButton},
  data () {
    return {
      disabled: true
    }
  },
  methods: {
    onClick () {
      console.log(arguments)
    }
  }
}
</script>

<style lang="scss">
  @import "packages/theme.scss";
  #app {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    .button {
      span {
        color: $text-color;
      }
    }
  }
</style>
