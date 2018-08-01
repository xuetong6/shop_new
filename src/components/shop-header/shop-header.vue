<template>
  <header class="header-wrap">
    <div class="wrapper">
      <router-link class="header-logo" to="/"><img src="./logo.svg"></router-link>
      <ul class="head-nav">
        <li><a href="">商城</a></li>
        <li><a href="">关于我们</a></li>
      </ul>
      <div class="header-nologin">
        <router-link class="header-register-btn" to="/register">注册</router-link>
        <router-link class="header-login-btn" to="/login">登录</router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'ShopHeader',
  data () {
    return {
      img: require('./logo.svg')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~common/scss/variable";
@import "~common/scss/mixin";
body{min-width: 1200px;}
.header-wrap {
  position: relative;
  width: 100%;
  height: 60px;
  background-color: $header-bgColor;
  padding: 17px 20px;
  z-index: 500;
  .wrapper {
    @include box-flex;
    .header-logo {
     @include box-flex;
    }
    .header-logo img{
      height: 26px;
      vertical-align: middle;
    }
    .header-nologin{
      @include box-flex;
      margin-left: auto;
    }
    .header-register-btn {
      display: inline-block;
      line-height: 30px;
      color: $white;
      font-size: .85em;
    }
    .header-login-btn {
      margin: -4px 0 0 20px;
      @include btn;
      @include btn-primary;
    }
    .head-nav{
      @include box-flex;
      margin-left: 20px;
    }
    .head-nav>li{
      margin-left: 30px;
      line-height: 30px;
      font-size: .85em;
    }
    .head-nav>li>a{
      color: $white;
    }
  }
}
@media (max-width: 768px) {
  .header-wrap .header-nologin,.header-wrap ul{
     display: none !important;
  }
   .header-logo{
    align-items: center;
    -webkit-box-align: center;
   }
}
</style>
