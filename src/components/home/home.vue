<template>
  <div>
    <header class="header-wrap">
      <div class="wrapper">
        <a href="/" class="head-logo"></a>
        <div class="head-notice">
          <span class="head-btn-show">官方公告</span>
          <div class="notice-content"><p>我是公告公告，公告，公告</p></div>
        </div>
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
        <home-userlist></home-userlist>
        <button @click="clickBtn">测试mock</button>
      </div>

    </div>
    
  </div>

</template>

<script>
import HomeUserlist from './home-userlist'
export default {
  data () {
    return {}
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
    HomeUserlist
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
  }

}

</style>
