<template>
  <div id="app">
    <shop-header></shop-header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <shop-footer></shop-footer>
  </div>
</template>

<script>
import ShopHeader from 'components/shop-header/shop-header.vue'
import ShopFooter from 'components/shop-footer/shop-footer.vue'
export default {
  name: 'App',
  components: {
    ShopHeader,
    ShopFooter
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
  #app {
    width: 100%;
    height: 100%;
  }
</style>
