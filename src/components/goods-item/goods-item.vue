<template>
    <div class="item-wrap">
        <img class="item-img" :src="item.img" alt="">
        <div class="item-line"></div>
        <p class="item-name">{{item.name}}</p>
        <span class="item-price">{{item.price}}</span>
        <button class="item-add-cart" @click="addCart(item.name)">加入购物车</button>
    </div>
</template>

<script>
export default {
  name: 'goods-item',
  props: {
    item: {
      type: Object
    }
  },
  mounted () {
    console.log('goods-item mounted')
    console.log(this.item)
  },
  methods: {
    addCart (name) {
      alert(name)
    }
  }
}
</script>

<style lang="scss" scoped>
.item-wrap {
    display: inline-block;
    width: 300px;
    background: #eeeeee;
    padding: 10px;
    border: 5px solid #fff;
    cursor: pointer;
    .item-img {
        width: 100%;
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
    .item-add-cart {
        float: right;
        background: #fff;
        border: 1px solid rgb(202,177,95);
        cursor: pointer;
        outline: none;
    }
}
</style>
