<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const emits = defineEmits<{
  (e: 'onSearch'):void
}>()
const onClicked = () => {
  emits('onSearch')
}
</script>

<template>
  <div class="search-wrap">
    <div class="input-wrap">
      <input class="search-input" type="text" placeholder="搜索公钥/区块/交易/账户">
      <div role="button" class="search-btn" @click="onClicked">
        <img src="@pc/img/icon_ss@2x.png" width="28" height="28" alt="search" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="stylus">
.search-wrap
  width 100%
  box-sizing border-box
  .input-wrap
    display flex
    width 626px
    height 46px
    margin 0 auto
    .search-input
      flex-shrink 0
      width 626px
      height 100%
      box-sizing border-box
      padding 15px 30px 14px 30px
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
      flex-shrink 0
      height 100%
      width 66px
      position relative
      display flex
      justify-content center
      align-items center
      user-select none
      cursor pointer
      background: #3269F0;
      border-radius: 0px 3px 3px 0;
</style>
