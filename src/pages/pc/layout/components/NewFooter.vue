<script lang="ts" setup>
import { init } from '@/_ts/_NewFooter'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const { linkList, routerTo } = init(t)
</script>
<template>
 <div class="footer-wrap">
   <div class="footer">
     <div class="content-wrap">
       <div class="logo" @click="routerTo('/home')">
         <img src="@pc/img/pic_logo@2x.png" />
       </div>
       <div class="links-wrap">
         <a class="link"
            v-for="item in linkList"
            :key="item.path"
            @click="routerTo(item.path)"
        >{{ item.text }}</a>
       </div>
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
  background: #000000;
  position relative
  display flex
  flex-direction column
  align-items center
  .footer
    width: $visualWidth
    border-bottom: 1px solid rgba(255,255,255, .3)
    position relative

  .right-text
    height 84px
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 84px;
.content-wrap
  width 100%
  display flex
  padding 70px 0 28px 0
  .logo
    >img
      cursor pointer
      position relative
  .links-wrap
    margin-left 186px
    display flex
    align-items center
    .link
      cursor pointer
      margin-right 196px
      text-decoration none
      font-size: 20px;
      display inline-block
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #FFFFFF;
      white-space: nowrap;
</style>
