<template>
  <div>
    <header class="header-wrap">
      <div class="wrapper">
        <a href="/" class="head-logo"></a>
        <news :newsList="newsList" time="3000" ></news>
        <div class="head-coin">
          <div class="head-coin-search">
            <input type="text" class="">
            <span class="head-btn-show">检索</span>
          </div>
        </div>
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
        <div class="home-userlist">
           <dl>
             <dt class="clear">
               <span class="col-3 text-left"><b>用户账号</b></span>
               <span class="col-3 text-center"><b>购买日期</b></span>
               <span class="col-3 text-center"><b>币种名称</b></span>
               <span class="col-3 text-right"><b>商品名称</b></span>
             </dt>
             <div class="home-userlist-con">
                <home-userlist :item="item" v-for="(item , key) in homeuserlist" :key="key"></home-userlist>
             </div>
           </dl>
        </div>
      </div>
      <div class="home-goodslist">
        <div class="w">
          <dl class="clear">
            <home-startgoods :item=item v-for="(item , key) in homestartgoods" :key="key"></home-startgoods>
          </dl>
          <dl class="small-goods clear">
            <home-smallgoods :item="item" v-for="(item , key) in homesmallgoods" :key="key"></home-smallgoods>
          </dl>
        </div>

      </div>
      <div class="other">
      </div>
    </div>
    <shop-footer></shop-footer>
  </div>
</template>

<script>
// 用户购买信息列表
import HomeUserlist from './home-userlist'
// 推荐币种列表
import HomeStartgoods from './home-startgoods'
// 币种列表
import HomeSmallgoods from './home-smallgoods'
// 公告列表
import News from 'components/news/news'
// 底部
import ShopFooter from '../shop-footer/shop-footer'
export default {
  data () {
    return {
      newsList: [],
      homeuserlist: [],
      homestartgoods: [],
      homesmallgoods: []
    }
  },
  mounted () {
    this.$http.get('/api/homenews/')
      .then(res => {
        this.newsList = res.data.data
      })
    /* 获取商品数据 */
    this.$http.get('/api/userlists')
      .then(res => {
        this.homeuserlist = res.data.data
      })
    // 获取推荐币种列表
    this.$http.get('/api/homestartgoods')
      .then(res => {
        this.homestartgoods = res.data.data
      })
    // 获取全部币种列表
    this.$http.get('/api/homesmallgoods')
      .then(res => {
        this.homesmallgoods = res.data.data
      })
  },
  methods: {
    clickBtn () {
      /* 测试json-server mock */
      this.$http.get('api/goods')
        .then((res) => {
          console.log('res')
          console.log(res)
        })
    }
    /*     login () {
      this.$http.post('api/account/login', {username: 'lance', pwd: 333333})
        .then(res => {
          console.log(res)

        })
    } */
  },
  components: {
    HomeUserlist,
    HomeStartgoods,
    HomeSmallgoods,
    News,
    ShopFooter
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
    display: flex;
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
@media (max-width: 768px) {
  .header-wrap .head-coin,.header-wrap .head-notice{
     display: none !important;
  }
   .header-logo{
    align-items: center;
    -webkit-box-align: center;
   }
   .no-user{
     margin-left: auto;
   }
}
.home{
  .home-banner-userlist{
    display: flex;
    position: relative;
    .banner{
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      .banner-1{
        height: 466px;
        display: block;
        background: url(./images/banner.jpg) no-repeat center top;
        background-size: 100% auto;
      }
    }
    .userlist{
      width: 1200px;
    }
    .home-userlist{
      width: 750px;
      z-index: 3;
      background: $white;
      font-size: .6em;
      box-shadow: 0px 1px 5px 1px #eee;
      margin:300px auto 0;
      dt{
        border-bottom: 1px solid $line-hui2;
        margin-bottom: 2px;
      }
      dt span{
        display: block;
        float: left;
        line-height: 26px;
        padding: 0 15px;
      }
      .home-userlist-con{max-height: 260px;overflow: auto;}
      .col-3{
        width: 25%;
      }
      .text-left{text-align: left;}
      .text-center{text-align: center;}
      .text-right{text-align: right;}
    }
  }
  .home-goodslist{
    background: $line-hui2;
    padding: 60px 0;
    margin-top: 50px;
    .w{
      @include w;
    }
  }
  .other{
    height: 400px;
  }
}

</style>
