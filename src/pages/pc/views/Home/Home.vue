<script setup lang="ts">
import {unit, unitUSD} from "@/config";
import {formatNumber} from "@/utils";

</script>

<template>
  <div class="top-search-wrap">
    <div class="input-wrap">
      <input class="search-input" type="text" placeholder="按地址/交易哈希/区块/通证进行搜索">
      <div role="button" class="search-btn">
        <img src="@pc/img/icon_ss@2x.png" width="28" height="28" alt="search" />
      </div>
    </div>
  </div>
  <section class="section total-data-wrap">
    <div class="data-item-wrap">
      <div>当前总量</div>
      <div>11111 {{ unit }}</div>
    </div>
    <div class="data-item-wrap">
      <div>流通总量</div>
      <div>11111 {{ unit }}</div>
    </div>
    <div class="data-item-wrap">
      <div>价格</div>
      <div class="data-item-price">
        $ 11111 {{ unitUSD }}
      </div>
    </div>
    <div class="data-item-wrap">
      <div>市值</div>
      <div>$ 11111 {{ unitUSD }}</div>
    </div>
  </section>
  <section class="section net-wrap">
    <div class="net-wrap-1">
      <div class="net-wrap-title">全网概览</div>
      <div class="items">
        <div class="item">
          <div>最新高度</div>
          <div>111111</div>
        </div>
        <div class="item">
          <div>交易总数</div>
          <div>111111</div>
        </div>
        <div class="item">
          <div>节点总数</div>
          <div>111111</div>
        </div>
        <div class="item">
          <div>账户总数</div>
          <div>111111</div>
        </div>
        <div class="item">
          <div>通证总数</div>
          <div>111111</div>
        </div>
        <div class="item">
          <div>已销毁</div>
          <div>111111</div>
        </div>
      </div>
    </div>
    <div class="net-wrap-2">
      <div class="net-wrap-title">过去7天统计</div>
      <div class="items">
        <div class="item">
          <span>平均出块时间</span>
          <span>111111 sec</span>
        </div>
        <div class="item">
          <span>平均区块产出</span>
          <span>111111 {{ unit }}</span>
        </div>
        <div class="item">
          <span>平均交易费用</span>
          <span>111111 {{ unit }}</span>
        </div>
        <div class="item">
          <span>交易量</span>
          <span>111111 {{ unit }}</span>
        </div>
        <div class="item">
          <span>交易数</span>
          <span>111111</span>
        </div>
        <div class="item">
          <span>地址增加</span>
          <span>111111</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="stylus">
@import "~@pc/stylus/variable.styl"

.top-search-wrap
  width 100%
  height 260px
  background url("../../img/pic_bg_1@2x.png") center center no-repeat
  background-size cover
  padding-top 105px
  box-sizing border-box
  .input-wrap
    display flex
    width $visualWidth
    height 46px
    margin 0 auto
    .search-input
      flex-shrink 0
      width 626px
      height 100%
      box-sizing border-box
      padding 18px 30px 11px 30px
      font-size: 12px;
      color: #9498AB;
      outline none
      border: none;
      border-radius: 3px 0 0 3px;
      &::-webkit-input-placeholder
        color: #9498AB;
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
    .search-btn
      height 100%
      width 66px
      position relative
      display flex
      justify-content center
      align-items center
      user-select none
      cursor pointer
      background: #CDDBFC;
      border-radius: 0px 3px 3px 0;
.block-shadow
  box-shadow: 0px 4px 4px 0px rgba(26, 36, 49, 0.04), 0px 1px 4px 0px rgba(26, 36, 49, 0.08);

.section
  width $visualWidth
  margin 0 auto
.mb30
  margin-bottom: 30px
.total-data-wrap
  @extend .block-shadow
  background #fff
  box-sizing border-box
  padding 40px 88px
  display flex
  align-items center
  justify-content space-between
  border-radius: 3px;
  top -36px
  position relative
  .data-item-wrap
    >div:first-child
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #9498AB;
      margin-bottom 10px
    >div:last-child
      font-size: 18px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #2F3447;

.net-wrap
  display flex
  justify-content space-between
  >div
    @extend .block-shadow
    width 390px
    height 320px
    box-sizing border-box
    padding 35px 40px
    background #fff
    .net-wrap-title
      font-size: 16px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #1D2157;
      margin-bottom 30px
  .net-wrap-1 .items
    display grid
    grid-row-gap 30px
    grid-template-columns: auto auto
    .item
      width 50%
      color: #9498AB;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      >div:first-child
        font-size: 12px;
        margin-bottom 6px
      >div:last-child
        font-size: 16px;
        font-weight: 600;
        color #1D2157;
  .net-wrap-2 .items
    display grid
    grid-row-gap 16px
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #9498AB;
    .item
      display flex
      justify-content space-between
      >span:last-child
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #1D2157;




</style>
