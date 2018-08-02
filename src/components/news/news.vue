<template>
    <div class="head-notice">
        <span class="head-btn-show">官方公告</span>
        <div class="notice-content">
            <ul class="scroll-content" :style="{ top }">
                <li v-for="(item, key) in newsList" :key="key">{{item.title}}</li >
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: 0
    }
  },

  props: {
    newsList: {
      type: Array,
      required: true
    },
    time: {
      type: String,
      default: '1000'
    }
  },

  computed: {
    top () {
      return -this.activeIndex * 24 + 'px'
    }
  },

  mounted () {
    setInterval(() => {
      if (this.activeIndex < this.newsList.length - 1) {
        this.activeIndex += 1
      } else {
        this.activeIndex = 0
      }
    }, this.time)
  }
}
</script>

<style lang="scss" scoped>
@import "~common/scss/variable";
@import "~common/scss/mixin";
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
    .head-btn-show{
        @include btn;
        @include btn-primary;
        height: 22px;
        line-height: 22px;
        font-size: .6em;
        padding: 0 5px;
        border-radius: 8px;
    }
    .notice-content{
        line-height: 10px;
        margin-left: 10px;
        overflow: hidden;
        .scroll-content {
        position: relative;
        transition: top 0.5s;
            li {
                line-height: 24px;
                text-align: left;
            }
        }
    }
}
</style>
