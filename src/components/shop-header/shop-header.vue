<template>
  <div class="header-wrap">
    <p>header</p>
  </div>
</template>

<script>
export default {
  name: 'ShopHeader'
}
</script>

<style lang="scss" scoped>
@import "~common/scss/variable";
.header-wrap {
  width: 100%;
  height: 60px;
  background-color: $header-bgColor;
}
</style>
