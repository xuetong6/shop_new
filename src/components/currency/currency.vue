<template>
    <div class="currency">
        <div class="currency-left">
            <img class="currency-left-img" :src="currencyInfo.avatar" alt="">
        </div>
        <div class="currency-right">
            <h1 class="currency-name">{{currencyInfo.name}}</h1>
            <p class="currency-brief">{{currencyInfo.brief}}</p>
            <news :newsList="mergantAnnouncement"></news>
        </div>
    </div>
</template>

<script>
import News from 'components/news/news'
export default {
  name: 'currency',
  components: {
    News
  },
  data () {
    return {
      mergantAnnouncement: []
    }
  },

  props: {
    currencyInfo: {
      type: Object,
      require: true
    }
  },

  mounted () {
    /* 根据currencyInfo中的商户信息, 获取商户公告 */
    this.$http.get('/api/mergantAnnouncement')
      .then(res => {
        this.mergantAnnouncement = res.data.data
      })
  }
}
</script>

<style lang="scss" scoped>
.currency {
  width: 700px;
  height: 200px;
  padding: 10px;
  display: flex;
  align-items: center;
  box-sizing: content-box;
  box-shadow: 0 0 10px #ccc;
  .currency-left {
    width: 25%;
    border-right: 1px solid #ccc;
    padding-right: 10px;
    .currency-left-img {
      width: 100%;
      vertical-align: middle;
    }
  }
  .currency-right {
    width: 75%;
    padding-left: 10px;
    .currency-name {
      font-size: 20px;
      margin-bottom: 5px;
    }
    .currency-brief {
      font-size: 12px;
      color: #777;
      line-height: 16px;
      margin-bottom: 5px;
    }
  }
}
</style>
