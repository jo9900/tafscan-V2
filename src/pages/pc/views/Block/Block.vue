
<script setup lang="ts">
import  * as Element from '@pc/components'
const onSearch = () => {
  // 父组件的请求事件
}
</script>

<template>
  <div class="wrap">
    <div class="title-wrap">
      <div class="title">区块</div>
      <Element.Search class="search" @onSearch="onSearch"   />
    </div>
    <div class="content-wrap">
      <div class="table-wrap">
        <div class="thead">
          <div>区块高度</div>
          <div>状态</div>
          <div>交易数</div>
          <div>出块节点</div>
          <div>验证节点</div>
          <div>区块奖励</div>
          <div>区块哈希</div>
          <div>时间</div>
        </div>
        <ul class="tbody">
          <li v-for="item in 9" class="trow">
            <div class="tcell table-default">
              1165201
            </div>
            <div class="tcell">
              <span :class="true? 'yellow--text' : 'green--text'">待确认</span>
            </div>
            <div class="tcell table-blue">
              12
            </div>
            <div class="tcell table-blue">
              MathWallet
            </div>
            <div class="tcell table-blue">
              <div>查看</div>
              <Element.Tag>123</Element.Tag>
            </div>
            <div class="tcell table-default">
              842,331 TAFT
            </div>
            <div class="tcell table-blue">
              hj1k23h1......;3j12;l3
            </div>
            <div class="tcell table-default">
              10 secs ago
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="stylus">
@import "~@pc/stylus/variable.styl"
.wrap
  padding 20px 0 60px 0
  background-color transparent
  width $visualWidth
  margin 0 auto
.title-wrap
  display flex
  width: 100%
  margin-bottom 20px
  .title
    line-height 46px
    font-size: 18px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #1D2157;
    width 100%
  .search
    margin-left auto
.content-wrap
  padding 20px 22px
  width: $visualWidth
  background: #FFFFFF;
  box-shadow: 0px 4px 4px 0px rgba(26, 36, 49, 0.04), 0px 1px 4px 0px rgba(26, 36, 49, 0.08);
</style>
