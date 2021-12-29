<script setup lang="ts">


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
</template>

<style scoped lang="stylus">
@import "~@pc/stylus/variable.styl"

.top-search-wrap
  width 100%
  height 260px
  background url("../../img/pic_bg_1@2x.png") center center no-repeat
  background-size cover
  padding-top 105px
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
</style>
