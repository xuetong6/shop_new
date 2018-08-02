<template>
    <dd class="small-goods">
        <div class="clear">
        <span class="goodsimg goodsimg-usdt"></span>
        <div class="goods-explain">
          <span>{{item.coin}}</span>
          <p>{{item.coinname}}</p>
        </div>
    </div>
    <div class="goodsimg-btn"><a href="">点击进入</a></div>
</dd>
</template>

<script>
export default {
  name: 'small-goods',
  props: {
    item: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~common/scss/variable";
@import "~common/scss/mixin";
.small-goods{
    font-size: .85em;
    width: 16.25%;
    margin-right: .5%;
    background: $white;
    height:110px;
    float: left;
    padding:20px 0 0 20px;
    margin-top: 5px;
    .goodsimg{
        width: 50px;
        height: 50px;
        display: block;
        float: left;
        margin-top: 10px;
      }
      .goodsimg-usdt{
        background: url(./images/small-1.png) no-repeat center;
        background-size: 100% 100%;
      }
      .goods-explain{
        float: right;
        width: 90px;
        height: 70px;
        border-left: 1px solid $line-hui2;
        padding: 12px 15px;
      }
      .goods-explain span{
        line-height: 30px;
      }
      .goodsimg-btn{
        text-align: center;
        display: none;
      }
      .goodsimg-btn a{
        width: 80px;
        height: 20px;
        line-height: 20px;
        border-radius: 16px;
        border:1px solid $white;
        color: $white;
        font-size: .6em;
        display: inline-block;
        text-align: center;
        margin-top: 5px;
      }
}
.small-goods:nth-child(6n){
    margin-right: 0;
}
.small-goods:hover{
    @include btn-primary;
    .goodsimg-btn{
        display: block;
    }
    .goods-explain{
        height: 60px;
    }
}
</style>
