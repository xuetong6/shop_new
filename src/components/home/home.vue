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
              <dd class="clear">
                <span class="col-3 text-left"><b>298*******111</b></span>
                <span class="col-3 text-center"><b>2018-09-01</b></span>
                <span class="col-3 text-center"><b>HLC</b></span>
                <span class="col-3 text-right"><b>安耐晒防晒霜</b></span>
              </dd>
              <dd class="clear">
                <span class="col-3 text-left"><b>298*******111</b></span>
                <span class="col-3 text-center"><b>2018-09-01</b></span>
                <span class="col-3 text-center"><b>HLC</b></span>
                <span class="col-3 text-right"><b>安耐晒防晒霜</b></span>
              </dd>
              <dd class="clear">
                <span class="col-3 text-left"><b>298*******111</b></span>
                <span class="col-3 text-center"><b>2018-09-01</b></span>
                <span class="col-3 text-center"><b>HLC</b></span>
                <span class="col-3 text-right"><b>安耐晒防晒霜</b></span>
              </dd>
              <dd class="clear">
                <span class="col-3 text-left"><b>298*******111</b></span>
                <span class="col-3 text-center"><b>2018-09-01</b></span>
                <span class="col-3 text-center"><b>HLC</b></span>
                <span class="col-3 text-right"><b>安耐晒防晒霜</b></span>
              </dd>
              <dd class="clear">
                <span class="col-3 text-left"><b>298*******111</b></span>
                <span class="col-3 text-center"><b>2018-09-01</b></span>
                <span class="col-3 text-center"><b>HLC</b></span>
                <span class="col-3 text-right"><b>安耐晒防晒霜</b></span>
              </dd>
              <dd class="clear">
                <span class="col-3 text-left"><b>298*******111</b></span>
                <span class="col-3 text-center"><b>2018-09-01</b></span>
                <span class="col-3 text-center"><b>HLC</b></span>
                <span class="col-3 text-right"><b>安耐晒防晒霜</b></span>
              </dd>
              <dd class="clear">
                <span class="col-3 text-left"><b>298*******111</b></span>
                <span class="col-3 text-center"><b>2018-09-01</b></span>
                <span class="col-3 text-center"><b>HLC</b></span>
                <span class="col-3 text-right"><b>安耐晒防晒霜</b></span>
              </dd>
              <dd class="clear">
                <span class="col-3 text-left"><b>298*******111</b></span>
                <span class="col-3 text-center"><b>2018-09-01</b></span>
                <span class="col-3 text-center"><b>HLC</b></span>
                <span class="col-3 text-right"><b>安耐晒防晒霜</b></span>
              </dd>
              <dd class="clear">
                <span class="col-3 text-left"><b>298*******111</b></span>
                <span class="col-3 text-center"><b>2018-09-01</b></span>
                <span class="col-3 text-center"><b>HLC</b></span>
                <span class="col-3 text-right"><b>安耐晒防晒霜</b></span>
              </dd>
              <dd class="clear">
                <span class="col-3 text-left"><b>298*******111</b></span>
                <span class="col-3 text-center"><b>2018-09-01</b></span>
                <span class="col-3 text-center"><b>HLC</b></span>
                <span class="col-3 text-right"><b>安耐晒防晒霜</b></span>
              </dd>
              <dd class="clear">
                <span class="col-3 text-left"><b>298*******111</b></span>
                <span class="col-3 text-center"><b>2018-09-01</b></span>
                <span class="col-3 text-center"><b>HLC</b></span>
                <span class="col-3 text-right"><b>安耐晒防晒霜</b></span>
              </dd>
              <dd class="clear">
                <span class="col-3 text-left"><b>298*******111</b></span>
                <span class="col-3 text-center"><b>2018-09-01</b></span>
                <span class="col-3 text-center"><b>HLC</b></span>
                <span class="col-3 text-right"><b>安耐晒防晒霜</b></span>
              </dd>
             </div>
           </dl>
        </div>
        <!-- <home-userlist></home-userlist> -->
        <!-- <button @click="clickBtn">测试mock</button>  -->
      </div>
      <div class="home-goodslist">
        <div class="w">
          <dl class="start-goods clear">
            <dd class="col-4">
              <img src="./images/goods-1.png">
              <div class="explain"><span>BTC</span> <span>比特币</span></div>
            </dd>
            <dd class="col-4">
              <img src="./images/goods-1.png">
              <div class="explain"><span>BTC</span> <span>比特币</span></div>
            </dd>
            <dd class="col-4">
              <img src="./images/goods-1.png">
              <div class="explain"><span>BTC</span> <span>比特币</span></div>
            </dd>
          </dl>
          <dl class="small-goods clear">
            <dd class="col-6">
              <div class="clear">
                <span class="goodsimg goodsimg-usdt"></span>
                <div class="goods-explain">
                  <span>USDT</span>
                  <p>泰达币</p>
                </div>
              </div>
              <div class="goodsimg-btn"><a href="">点击进入</a></div>
            </dd>
            <dd class="col-6">
              <div class="clear">
                <span class="goodsimg goodsimg-usdt"></span>
                <div class="goods-explain">
                  <span>USDT</span>
                  <p>泰达币</p>
                </div>
              </div>
              <div class="goodsimg-btn"><a href="">点击进入</a></div>
            </dd>
            <dd class="col-6">
              <div class="clear">
                <span class="goodsimg goodsimg-usdt"></span>
                <div class="goods-explain">
                  <span>USDT</span>
                  <p>泰达币</p>
                </div>
              </div>
              <div class="goodsimg-btn"><a href="">点击进入</a></div>
            </dd>
            <dd class="col-6">
              <div class="clear">
                <span class="goodsimg goodsimg-usdt"></span>
                <div class="goods-explain">
                  <span>USDT</span>
                  <p>泰达币</p>
                </div>
              </div>
              <div class="goodsimg-btn"><a href="">点击进入</a></div>
            </dd>
            <dd class="col-6">
              <div class="clear">
                <span class="goodsimg goodsimg-usdt"></span>
                <div class="goods-explain">
                  <span>USDT</span>
                  <p>泰达币</p>
                </div>
              </div>
              <div class="goodsimg-btn"><a href="">点击进入</a></div>
            </dd>
            <dd class="col-6">
              <div class="clear">
                <span class="goodsimg goodsimg-usdt"></span>
                <div class="goods-explain">
                  <span>USDT</span>
                  <p>泰达币</p>
                </div>
              </div>
              <div class="goodsimg-btn"><a href="">点击进入</a></div>
            </dd>
            <dd class="col-6">
              <div class="clear">
                <span class="goodsimg goodsimg-usdt"></span>
                <div class="goods-explain">
                  <span>USDT</span>
                  <p>泰达币</p>
                </div>
              </div>
              <div class="goodsimg-btn"><a href="">点击进入</a></div>
            </dd>
            <dd class="col-6">
              <div class="clear">
                <span class="goodsimg goodsimg-usdt"></span>
                <div class="goods-explain">
                  <span>USDT</span>
                  <p>泰达币</p>
                </div>
              </div>
              <div class="goodsimg-btn"><a href="">点击进入</a></div>
            </dd>
            <dd class="col-6">
              <div class="clear">
                <span class="goodsimg goodsimg-usdt"></span>
                <div class="goods-explain">
                  <span>USDT</span>
                  <p>泰达币</p>
                </div>
              </div>
              <div class="goodsimg-btn"><a href="">点击进入</a></div>
            </dd>
            <dd class="col-6">
              <div class="clear">
                <span class="goodsimg goodsimg-usdt"></span>
                <div class="goods-explain">
                  <span>USDT</span>
                  <p>泰达币</p>
                </div>
              </div>
              <div class="goodsimg-btn"><a href="">点击进入</a></div>
            </dd>
            <dd class="col-6">
              <div class="clear">
                <span class="goodsimg goodsimg-usdt"></span>
                <div class="goods-explain">
                  <span>USDT</span>
                  <p>泰达币</p>
                </div>
              </div>
              <div class="goodsimg-btn"><a href="">点击进入</a></div>
            </dd>
            <dd class="col-6">
              <div class="clear">
                <span class="goodsimg goodsimg-usdt"></span>
                <div class="goods-explain">
                  <span>USDT</span>
                  <p>泰达币</p>
                </div>
              </div>
              <div class="goodsimg-btn"><a href="">点击进入</a></div>
            </dd>
            <dd class="col-6">
              <div class="clear">
                <span class="goodsimg goodsimg-usdt"></span>
                <div class="goods-explain">
                  <span>USDT</span>
                  <p>泰达币</p>
                </div>
              </div>
              <div class="goodsimg-btn"><a href="">点击进入</a></div>
            </dd>
            <dd class="col-6">
              <div class="clear">
                <span class="goodsimg goodsimg-usdt"></span>
                <div class="goods-explain">
                  <span>USDT</span>
                  <p>泰达币</p>
                </div>
              </div>
              <div class="goodsimg-btn"><a href="">点击进入</a></div>
            </dd>
          </dl>
        </div>

      </div>
      <div class="other">

      </div>
    </div>
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
  </div>

</template>

<script>
import HomeUserlist from './home-userlist'
import News from 'components/news/news'
export default {
  data () {
    return {
      newsList: []
    }
  },
  mounted () {
    this.$http.get('/api/homenews/')
      .then(res => {
        this.newsList = res.data.data
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
    News
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
      dd{cursor: pointer;}
      dd:hover{
        @include btn-primary;
      }
      .home-userlist-con{max-height: 260px;overflow: auto;}
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
  }
  .home-goodslist{
    background: $line-hui2;
    padding: 60px 0;
    margin-top: 50px;
    .w{
      @include w;
    }
    .start-goods{
      .col-4{
        width: 33%;
        margin-right: .5%;
      }
      .col-4:last-child{
        margin-right: 0;
      }
      dd{
        background: $white;
        height:346px;
        float: left;
        padding-top: 125px;
        text-align: center;
      }
      dd img{
        max-height: 70px;
        max-width: 300px;
      }
      .explain{
        margin-top: 50px;
        font-size: 1.2em;
      }
    }
    .small-goods{
      font-size: .85em;
      .col-6{
        width: 16.25%;
        margin-right: .5%;
      }
      dd{
        background: $white;
        height:110px;
        float: left;
        padding:20px 0 0 20px;
        margin-top: 5px;
      }
      .col-6:nth-child(6n){
        margin-right: 0;
      }
      dd:hover{
        @include btn-primary;
      }
      dd:hover .goodsimg-btn{
        display: block;
      }
      dd:hover .goods-explain{
        height: 60px;
      }
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
  }
  .other{
    height: 400px;
  }
}
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
        background: url(./images/footer-ex.png) no-repeat center;
        background-size: 100% auto;
      }
      .img-jp{
        background: url(./images/footer-jp.png) no-repeat center;
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
