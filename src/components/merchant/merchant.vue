<template>
    <div>
      <header class="header-wrap">
        <div class="wrapper">
          <!-- logo链接 -->
          <a href="/" class="head-logo"></a>
          <!-- 搜索框 -->
          <news :newsList="newsList"></news>
          <!-- 搜索框 -->
          <div class="head-coin">
            <div class="head-coin-search">
              <input type="text" class="">
              <span class="head-btn-show">检索</span>
            </div>
          </div>
          <!-- 登录/注册 -->
          <div class="head-user">
            <div class="no-user">
              <router-link to="/login">登录</router-link>／ <router-link to="/register">注册</router-link>
            </div>
          </div>
        </div>
      </header>

      <div class="home">
        <div class="home-banner-userlist">
          <div class="banner">
            <a href="" class="banner-1"></a>
          </div>
          <div class="currency-wrap">
            <currency :currencyInfo="merchantInfo"></currency>
          </div>
        </div>
      </div>
      <div class="sort-wrap">
        <button class="screen">筛选</button>
        <button class="sale">销量排序</button>
        <button class="price">单价排序</button>
      </div>
      <div class="goods">

        <goods-item  :item="item" v-for="(item, key) in goodsList" :key="key">
        </goods-item>
      </div>

    </div>
</template>

<script>
import GoodsItem from 'components/goods-item/goods-item'
import News from 'components/news/news'
import Currency from 'components/currency/currency'
export default {
  name: 'merchant',
  components: {
    GoodsItem,
    News,
    Currency
  },
  data () {
    return {
      goodsList: [],
      newsList: [],
      merchantInfo: {}
    }
  },
  mounted () {
    /* 获取路由参数 */
    console.log('mounted')
    console.log(this.$route.params)

    /* 获取商品数据 */
    this.$http.get('/api/goods')
      .then(res => {
        console.log('res')
        console.log(res)
        this.goodsList = res.data.data
      })

    /* 获取顶部新闻 */
    this.$http.get('/api/news')
      .then(res => {
        this.newsList = res.data.data
      })

    /* 获取商家简介信息 */
    this.$http.get('/api/merchant')
      .then(res => {
        this.merchantInfo = res.data.data
        console.log(1)
        console.log(this.merchantInfo)
      })
  }
}
</script>

<style lang="scss" scoped>
@import "~common/scss/variable";
@import "~common/scss/mixin";
html{min-width: 1200px;}
.header-wrap{
  height: 50px;
  background-color: $header-bgColor;
  position: relative;
  .wrapper{
    display: flex;
    padding: 10px 100px;
  }
  .head-logo{
    display: flex;
    flex: none;
    height: 30px;
    width: 100px;
    background: url("../shop-header/logo.svg") no-repeat center;
    background-size: 100% 100%;
  }
  .head-notice{
    /* display: flex; */
    flex: none;
    width: 378px;
    border-radius: 8px;
    background-color: $bgColor-hui;
    margin:5px 0 0 100px;
    height: 22px;
    line-height: 22px;
    font-size: .6em;
    .notice-content{
      line-height: 22px;
      margin-left: 10px;
    }
  }
  .head-btn-show{
    @include btn;
    @include btn-primary;
    height: 22px;
    line-height: 22px;
    font-size: .6em;
    padding: 0 5px;
    border-radius: 8px;
  }
  .head-coin{
    display: flex;
    flex: none;
    width: 150px;
    height: 22px;
    line-height: 22px;
    margin:5px 0 0 200px;
    padding-left: 6px;
    background: $bgColor-hui;
    border-radius: 8px;
    .head-coin-search input{
      width: 110px;
      line-height: 22px;
      float: left;
      background: $bgColor-hui;
    }
    .head-btn-show{
      float: right;
    }
  }
  .head-user{
    display: flex;
    flex: none;
    width: 150px;
    margin-left: auto;
    font-size: .85em;
    line-height: 30px;
    color: $white;
     a{
      color: $white;
    }
  }
}
.home{
  .home-banner-userlist{
    display: flex;
    position: relative;
    height: 466px;
    .banner{
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      .banner-1{
        height: 466px;
        display: block;
        background: url(./banner.jpg) no-repeat center top;
        background-size: 100% auto;
      }
    }
    .userlist{
      width: 1200px;
    }
  }
}

.sort-wrap {
  margin-left: auto;
  margin-right: auto;
  width: 1200px;
  height: 140px;
  padding-top: 100px;
  padding-left: 5px;
  button {
    border: none;
    color: #666666;
    font-size: 14px;
    cursor: pointer;
  }
}

.currency-wrap {
  width: auto;
  margin-left: auto;
  margin-right: auto;
  margin-top: 300px;
  z-index: 1;
}

.goods {
  display: flex;
  flex-flow: wrap;
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
  .item-wrap {

  }
}

</style>
