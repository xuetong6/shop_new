<template>
  <header class="header-wrap">
    <div class="w">
      <router-link tag="img" :src="img" class="header-logo" to="/"></router-link>
      <div class="header-nologin">
        <router-link class="header-register-btn header-login-btn" to="/login">登录</router-link>
        <router-link class="header-register-btn" to="/register">注册</router-link>
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
.header-wrap {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 50px;
  background-color: $header-bgColor;
  padding: 12px 0;
  .w {
    @include w;
    .header-logo {
      height: 26px;
    }
    .header-nologin{
      float: right;
    }
    .header-register-btn {
      display: inline-block;
      line-height: 30px;
      padding: 0 10px;
      background: $blue;
      color: $white;
      font-size: .85em;
      border-radius: 3px;
    }
    .header-login-btn {
      background: $line-hui1;
      color: $font-default;
    }
  }
}
</style>
