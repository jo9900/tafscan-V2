<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

</script>

<template>
  <div class="no-data-wrap">

    <div class="no-data-text">暂无数据</div>
  </div>
</template>

<style scoped lang="stylus">
.no-data-wrap
  width 100%
  padding 20px 0
  .no-data
    width: 498px
    height: 290px
    display block
    pointer-events none
    user-select none
    margin 0 auto
  .no-data-text
    width 100%
    text-align center
    font-size: 36px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #666666;
    padding-top 66px
</style>
