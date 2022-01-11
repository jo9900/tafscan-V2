<script setup lang="ts">
import {unit, unitUSD} from "@/config";
import {formatNumber} from "@/utils";
import {onMounted} from 'vue'
onMounted(()=> {
  const cnt=document.getElementById("count");
  const water=document.getElementById("water");
  let percent=cnt.innerText;
  let interval;
  interval=setInterval(function(){
    percent++;
    cnt.innerHTML = percent;
    water.style.transform='translate(0'+','+(100-percent)+'%)';
    if(percent==50){
      clearInterval(interval);
    }
  },60);
})

const more = () => {

}
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
      <div class="net-wrap-title section-title">全网概览</div>
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
      <div class="net-wrap-title section-title">过去7天统计</div>
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
    <div class="net-wrap-3">
      <div class="net-wrap-title section-title">质押</div>
      <div class="progress">
        <div class="progress-wrap">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="progress-text-wrap">
          <div>质押 11111%</div>
          <div>流通 11111%</div>
          <div>其他 11111%</div>
        </div>
      </div>
      <div class="net-wrap-title percentage section-title">当前网络使用率</div>
      <div class="container">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" style="display: none;">
          <symbol id="wave">
            <path d="M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z"></path>
            <path d="M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z"></path>
            <path d="M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z"></path>
            <path d="M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z"></path>
          </symbol>
        </svg>
        <div class="box">
          <div class="percent">
            <div class="percentNum" id="count">0</div>
            <div class="percentB">%</div>
          </div>
          <div id="water" class="water">
            <svg viewBox="0 0 560 20" class="water_wave water_wave_back">
              <use xlink:href="#wave"></use>
            </svg>
            <svg viewBox="0 0 560 20" class="water_wave water_wave_front">
              <use xlink:href="#wave"></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section section-3 block-shadow">
    <div class="block">
      <div class="section-title">
        全网概览
        <button @click="more" class="more">全部</button>
      </div>
      <div class="table-wrap">
        <div class="thead">
          <div>区块</div>
          <div>交易</div>
          <div>出块节点</div>
          <div class="text-right">时间</div>
        </div>
        <ul class="tbody">
          <li v-for="item in 9" class="trow">
            <div class="tcell table-blue">
              1165201
            </div>
            <div class="tcell table-blue">
              15
            </div>
            <div class="tcell table-blue">
              MathWallet
            </div>
            <div class="tcell table-default text-right">
              10 secs ago
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="divider"></div>
    <div class="block">
      <div class="section-title">
        最新交易
        <button @click="more" class="more">全部</button>
      </div>
      <div class="table-wrap">
        <div class="thead">
          <div>交易ID</div>
          <div>从</div>
          <div>到</div>
          <div>Txn Fee</div>
          <div class="text-right">时间</div>
        </div>
        <ul class="tbody">
          <li v-for="item in 9" class="trow">
            <div class="tcell table-blue">
              1165201
            </div>
            <div class="tcell table-blue">
              Di413U...V123E4
            </div>
            <div class="tcell table-blue">
              Di413U...V123E4
            </div>
            <div class="tcell table-default">
              32 TAFT
            </div>
            <div class="tcell table-default text-right">
              10 secs ago
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>

  <section class="section section-4 block-shadow">
    <div class="section-title">
      节点信息
      <button @click="more" class="more">全部</button>
    </div>
    <div class="table-wrap">
      <div class="thead">
        <div>排名</div>
        <div>角色</div>
        <div>节点名称</div>
        <div>Links</div>
        <div>节点质押</div>
        <div>总得票</div>
        <div>投票分成比例</div>
        <div class="text-right">最新出块</div>
      </div>
      <ul class="tbody">
        <li v-for="item in 9" class="trow">
          <div class="tcell table-default">
            1
          </div>
          <div class="tcell table-blue">
            验证节点
          </div>
          <div class="tcell table-blue">
            MathWallet
          </div>
          <div class="tcell">

          </div>
          <div class="tcell table-default">
            842,331 TAFT
          </div>
          <div class="tcell table-default">
            752,312,331
          </div>
          <div class="tcell table-default">
            3.01%
          </div>
          <div class="tcell table-blue text-right">
            1165201
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="stylus">
@import "~@pc/stylus/variable.styl"
@import "~@pc/stylus/wave.styl"

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
.section-title
  font-size: 16px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #1D2157;
  margin-bottom 30px
  position relative
  &::before
    width: 4px;
    height: 10px;
    background: #3269F0;
    position absolute
    content ''
    left -10px
    top 7px
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
      &.percentage
        margin-top: 45px
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
  .net-wrap-3
    .progress
      .progress-wrap, .progress-text-wrap
        display flex
        align-items center
        width 100%
        height 10px
        >div
          flex-shrink 0
          height 8px
          &:nth-of-type(1)
            background #3269F0;
            width 60%
            max-width 100%
          &:nth-of-type(2)
            background rgba(50, 105, 240, .6)
            width 30%
            max-width 100%
          &:nth-of-type(3)
            background rgba(50, 105, 240, .19)
            max-width 100%
      .progress-text-wrap
        >div
          background none !important
          width 33% !important
          font-size: 12px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #9498AB;
  .container
    position relative


.more
  width: 50px;
  height: 24px;
  background: #3269F0;
  border-radius: 3px;
  font-size: 12px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #FFFFFF;
  float right
  border none
  cursor pointer

.section-3
  padding 35px 23px
  background #FFFFFF
  margin-top 30px
  display flex
  justify-content center
  .divider
    border-left 1px solid rgba(18, 24, 55, 0.16);
    height: 380px;
    width 1px
    margin 0 20px
  .block
    width: 557px;
    .section-title
      margin-left 17px
      height 24px
      margin-bottom 18px
.section-4
  padding 35px 23px
  background #FFFFFF
  margin-top 30px
  margin-bottom 60px
  .section-title
    margin-left 17px
    height 24px
    margin-bottom 18px
.table-wrap
  .thead
    width 100%
    height: 35px;
    background: #F7F9FC;
    display flex
    align-items center
    font-size: 12px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #1D2157;
    padding 0 20px
    box-sizing border-box
    >div
      width 25%
      @extend .ell

  .trow
    display flex
    align-items center
    padding 0 20px
    box-sizing border-box
    padding-top 14px
    >div
      width 25%
      @extend .ell
</style>
