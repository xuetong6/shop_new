<template>
  <section class="home-wrap">
    <el-carousel trigger="click" height="250px">
      <el-carousel-item>
        <img src="./carousel-01.jpg" alt="" class="home-carousel-img">
      </el-carousel-item>
      <el-carousel-item>
        <img src="./carousel-02.jpg" alt="" class="home-carousel-img">
      </el-carousel-item>
      <el-carousel-item>
        <img src="./carousel-03.jpg" alt="" class="home-carousel-img">
      </el-carousel-item>
      <el-carousel-item>
        <img src="./carousel-04.jpg" alt="" class="home-carousel-img">
      </el-carousel-item>
    </el-carousel>
    <section class="wapper">
      <article class="home-w-article"></article>
      <aside class="home-w-aside"></aside>
    </section>
    <button @click="clickBtn">click</button>
    <button @click="login">login</button>
  </section>
</template>

<script>
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
    },
/*     login () {
      this.$http.post('api/account/login', {username: 'lance', pwd: 333333})
        .then(res => {
          console.log(res)

        })
    } */
  }
}
</script>

<style lang="scss" scoped>
@import "~common/scss/variable";
@import "~common/scss/mixin";
.home-wrap {
  position: absolute;
  top: 60px;
  right: 0;
  bottom: 60px;
  left: 0;
  background-color: #ddd;
  .home-carousel-img {
    width: 100%;
    height: 100%;
  }
  .w {
    height: calc(100% - 250px);
    @include w;
    .home-w-article {
      float: left;
      width: 84%;
      height: 100%;
      background-color: rgb(187, 149, 95);
    }
    .home-w-aside {
      float: right;
      width: 16%;
      height: 100%;
      background-color: goldenrod;
    }
  }
}
</style>
