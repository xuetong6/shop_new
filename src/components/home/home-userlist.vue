<template>
  <dd class="clear userlist-con">
    <span class="col-3 text-left"><b>{{item.username}}</b></span>
    <span class="col-3 text-center"><b>{{item.buytime}}</b></span>
    <span class="col-3 text-center"><b>{{item.coinname}}</b></span>
    <span class="col-3 text-right"><b>{{item.shopname}}</b></span>
  </dd>
</template>

<script>
export default {
  name: 'home-userlist',
  props: {
    item: {
      type: Object
    }
  },
  mounted () {
    console.log(this.item)
  }
}
</script>

<style lang="scss" scoped>
  @import "~common/scss/variable";
  @import "~common/scss/mixin";
  .userlist-con{
    cursor: pointer;
    span{
      display: block;
      float: left;
      line-height: 26px;
      padding: 0 15px;
    }
    .col-3{
      width: 25%;
    }
    .text-left{text-align: left;}
    .text-center{text-align: center;}
    .text-right{text-align: right;}
  }
  .userlist-con:hover{
    @include btn-primary;
  }

</style>
