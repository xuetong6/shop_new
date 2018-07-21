<template>
  <div id="app">
    <shop-header></shop-header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import ShopHeader from 'components/shop-header/shop-header.vue'
export default {
  name: 'App',
  components: {
    ShopHeader
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
  #app {
    width: 100%;
    height: 100%;
  }
</style>
