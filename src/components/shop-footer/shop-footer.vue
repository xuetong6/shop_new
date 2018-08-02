<template>
  <footer class="footer">
      <div class="w">
        <div class="footer-img">
          <h2 class="footer-title">战略合作伙伴</h2>
          <div class="footer-imglist clear">
            <span class="img-ex"></span>
            <span class="img-jp"></span>
          </div>
        </div>
        <div class="footer-list clear">
          <dl class="col-3">
            <dt>关于我们</dt>
            <dd><a href="#">友情链接</a></dd>
            <dd><a href="#">使用条款</a></dd>
            <dd><a href="#">隐私申明</a></dd>
          </dl>
          <dl class="col-3">
            <dt>关于我们</dt>
            <dd><a href="#">友情链接</a></dd>
            <dd><a href="#">使用条款</a></dd>
            <dd><a href="#">隐私申明</a></dd>
          </dl>
          <dl class="col-3">
            <dt>关于我们</dt>
            <dd><a href="#">友情链接</a></dd>
            <dd><a href="#">使用条款</a></dd>
            <dd><a href="#">隐私申明</a></dd>
          </dl>
          <dl class="col-3">
            <dt>关于我们</dt>
            <dd><a href="#">友情链接</a></dd>
            <dd><a href="#">使用条款</a></dd>
            <dd><a href="#">隐私申明</a></dd>
          </dl>

        </div>
      </div>
      <div class="footer-bar">
        <p>@conejguj ssdfu dfhgyu </p>
      </div>
    </footer>
</template>

<script>
export default {
  name: 'ShopFooter'
}
</script>

<style lang="scss" scoped>
@import "~common/scss/variable";
@import "~common/scss/mixin";
.footer{
  background: $line-hui2;
  .w{
    @include w;
  }
  .footer-img{
    border-bottom:1px solid $footer-bgColor;
    .footer-title{
      text-align: center;
      font-size: 1.4em;
      padding: 40px 0 20px;
      font-weight: 400;
    }
    .footer-imglist{
      width: 420px;
      margin: 0 auto;
      padding-bottom: 36px;
      span{
        width: 130px;
        height: 30px;
        display: block;
        float: left;
        margin: 0 40px;
      }
      .img-ex{
        background: url(./footer-ex.png) no-repeat center;
        background-size: 100% auto;
      }
      .img-jp{
        background: url(./footer-jp.png) no-repeat center;
        background-size: 100% auto;
      }
    }
  }
  .footer-list{
    width: 720px;
    padding: 26px 0 30px;
    margin: 0 auto;
    font-size: .85em;
    line-height: 30px;
    .col-3{
      width: 25%;
    }
    dl{
      float: left;
    }
    dt{
      font-weight: 600;
    }
  }
  .footer-bar{
    height: 36px;
    line-height: 36px;
    font-size:.85em;
    color: $white;
    text-align: center;
    background: $footer-bgColor;
  }
}
</style>
