<template>
  <div class="footer-wrap">
    <p>footer</p>
  </div>
</template>

<script>
export default {
  name: 'ShopFooter'
}
</script>

<style lang="scss" scoped>
@import "~common/scss/variable";
.footer-wrap {
  width: 100%;
  height: 60px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: $footer-bgColor;
}
</style>
