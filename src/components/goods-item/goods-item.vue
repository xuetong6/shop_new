<template>
    <div class="item-wrap">
        <img class="item-img" :src="item.img" alt="">
        <div class="item-line"></div>
        <p class="item-name">{{item.name}}</p>
        <span class="item-price">{{item.price}}</span>
    </div>
</template>

<script>
export default {
  name: 'goods-item',
  props: {
    item: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.item-wrap {
    display: inline-block;
    background: #eeeeee;
    padding: 10px;
    border: 5px solid #fff;
    .item-img {

    }
    .item-line {
        width: 100%;
        height: 1px;
        border-top: 1px solid #ccc;
        text-align: center;
        margin: 10px 0;
    }
    .item-name {
        color: #777;
        font-size: 14px;
        margin-bottom: 10px;
    }
    .item-price {
        color: rgb(202,177,95);
        font-size: 18px;
    }
}
</style>
