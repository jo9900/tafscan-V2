<script lang="ts" setup>
import { init } from '@/_ts/_NewFooter'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const { linkList, routerTo } = init(t)
</script>
<template>
 <div class="footer-wrap">
   <div class="footer">
     <img class="logo" src="@pc/img/pic_logo@2x.png" @click="routerTo('/home')" />
     <div class="content-wrap">
       <a class="link"
          v-for="item in linkList"
          :key="item.path"
          @click="routerTo(item.path)"
      >{{ item.text }}</a>
     </div>
   </div>
  <div class="right-text">
    Copyright© 2021-2025 tafscan.con
  </div>
 </div>
</template>
<style lang="stylus" scoped>
@import "~@pc/stylus/variable.styl"
.footer-wrap
  width 100%
  position relative
  display flex
  flex-direction column
  align-items center
  background url("../../img/pic_bg_2@2x.png") center center no-repeat
  background-size cover
  .footer
    width: $visualWidth
    border-bottom: 1px solid rgba(255,255,255, .3)
    position relative

    padding-bottom 43px

  .right-text
    height 42px
    font-size: 10px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #FFFFFF;
    line-height 42px

.logo
  cursor pointer
  position relative
  height 36px
  width 120px
  margin 70px auto 10px auto
  display block

.content-wrap
  display flex
  justify-content center
  align-items center
  .link
    padding 0 26px
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #FFFFFF;
    cursor pointer
    text-decoration none
    display inline-block
    white-space: nowrap;
</style>
