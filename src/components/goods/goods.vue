<template>
    <div>
        <goods-item :item="item"
            v-for="(item, key) in goodsList" :key="key"
        ></goods-item>
        <news :newsList="newsList"></news>
    </div>
</template>

<script>
import GoodsItem from 'components/goods-item/goods-item'
import News from 'components/news/news'
export default {
  name: 'goods',
  components: {
    GoodsItem,
    News
  },
  data () {
    return {
      goodsList: [],
      newsList: []
    }
  },
  mounted () {
    /* 获取数据 */
    this.$http.get('/api/goods')
      .then(res => {
        console.log('res')
        console.log(res)
        this.goodsList = res.data.data
      })

    this.$http.get('/api/news')
      .then(res => {
        this.newsList = res.data.data
      })
  }
}
</script>

<style lang="sass" scoped>

</style>
