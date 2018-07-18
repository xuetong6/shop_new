<template>
  <header class="header-wrap">
    <div class="w">
      <img src="./logo.png" alt="" class="header-logo">
      <button class="header-login-btn">登录</button>
      <button class="header-register-btn">注册</button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'ShopHeader'
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
  height: 60px;
  background-color: $header-bgColor;
  .w {
    @include w;
    .header-logo {
      width: 60px;
      height: 60px;
    }
    .header-login-btn {
      position: absolute;
      top: 10px;
      right: 20px;
    }
    .header-register-btn {
      position: absolute;
      top: 10px;
      right: 80px;
    }
  }
}
</style>
