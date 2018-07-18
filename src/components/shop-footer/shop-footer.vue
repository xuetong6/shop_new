<template>
  <footer class="footer-wrap">
    <div class="w">
      <p>footer</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "ShopFooter"
};
</script>

<style lang="scss" scoped>
@import "~common/scss/variable";
@import "~common/scss/mixin";
.footer-wrap {
  width: 100%;
  height: 60px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: $footer-bgColor;
  .w {
    @include w;
  }
}
</style>
