<template>
  <dd class="start-goods col-4">
    <img :src="item.coinimage">
    <div class="explain"><span>{{item.coin}}</span> <span>{{item.coinname}}</span></div>
  </dd>
</template>

<script>
export default {
  name: 'home-startgoods',
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
.col-4{
  width: 33%;
   margin-right: .5%;
}
.col-4:last-child{
  margin-right: 0;
}
.start-goods{
  background: $white;
  height:346px;
  float: left;
  padding-top: 125px;
  text-align: center;
  img{
    max-height: 70px;
    max-width: 300px;
  }
  .explain{
    margin-top: 50px;
    font-size: 1.2em;
  }
}
</style>
