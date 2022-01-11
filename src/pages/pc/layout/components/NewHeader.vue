<script lang="ts" setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import {currentLocale} from "@/config";
import { init } from '@/_ts/_NewHeader'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const {
  linkList,
  route,
  isShowMenu,
  isShowLocalMenu,
  triggerMenu,
  triggerLocaleMenu,
  onConnectAndLogin,
  routerTo,
} = init(t)

const store = useStore()

const changeLocale = (lang: 'zh' | 'en') => {
  window.localStorage.setItem('locale', lang)
  window.location.reload()
}
const hoverLink = ref(-1)
const hover = (i:number)=> {
    i >= 0 && (hoverLink.value = i)
}
const leave = ():true=> {
  hoverLink.value = -1
  return true
}
const hideMenus = ()=> {
  leave()
  triggerLocaleMenu(false)
}
</script>

<template>
  <div class="header-wrap">
    <div class="header" @mouseleave="hideMenus">
      <div class="logo" @click="routerTo('/home')">
        <img class="logo-icon" src="@pc/img/nav_pic_logo@2x.png" alt="TAF CAHIN LOGO" />
      </div>
      <div class="links-wrap">
        <a
          :class="['link', { active: route.path === link.path }]"
          v-for="(link, i) in linkList"
          :key="link.path"
          @click="routerTo(link.path)"
          @mouseenter="hover(i)"
        >
          <span>{{ link.text }}</span>
          <div
            v-if="link.children"
            :class="[
              'menu animate__animated animate__faster',
              { animate__fadeIn: i === hoverLink },
            ]"
            @mouseleave="leave"
            v-show="i === hoverLink"
            role="menu"
          >
            <a class="menu-btn" role="menuitem" v-for="sublink in link.children" :key="sublink.path">{{ sublink.text }}</a>
          </div>
        </a>
      </div>

      <div class="locale-wrap" @mouseleave="triggerLocaleMenu(false)">
        <a class="locale" @mouseenter="leave() && triggerLocaleMenu(true)">
          <img src="@pc/img/Icon_gj@2x.png" height="24" width="24" />
          <div class="locale-name">{{ currentLocale === 'zh'? '中文' : 'English' }}</div>
          <img src="@pc/img/icon_more_sq@2x.png" height="10" width="10" />
          <div
            :class="[
              'menu animate__animated animate__faster',
              { animate__fadeIn: isShowLocalMenu },
            ]"
            @mouseleave="triggerLocaleMenu(false)"
            v-show="isShowLocalMenu"
          >
            <a class="menu-btn" role="button" @click="changeLocale('zh')">简体中文</a>
            <a class="menu-btn" role="button" @click="changeLocale('en')">English</a>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
 @import "~@pc/stylus/variable.styl"
.header-wrap
  width 100%
  background #fff
  display flex
  justify-content center
  z-index 1100
  position fixed
  top 0
  left 50%
  transform translateX(-50%)
  .header
    position relative
    flex-wrap: nowrap;
    height 100%
    display flex
    align-items center
    width $visualWidth
    .locale-wrap
      margin-left auto
      height 100%
      display flex
      align-items center
      .locale
        position relative
        display flex
        align-items center
        flex-wrap nowrap
        cursor pointer
      .locale-name
        white-space: nowrap;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #1D2157;
        margin 0 4px
      .locale-icon
        width: 32px
        height: 32px
        display inline-block
        margin-right 2px

   .logo-icon
        display block
        height: 36.8px
        width: 120px
        margin-right 20px
.header .links-wrap
  flex-wrap: nowrap;
  display flex
.link
  position relative
  text-decoration none
  text-align center
  line-height 60px
  display inline-block
  margin-right 40px
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  width 100px
  height: 60px
  color: #1D2157;
  user-select none
  transition all ease-in .3s
  cursor pointer

  &:hover
    box-shadow: 0px 4px 16px 0px rgba(26, 36, 49, 0.08);

  &.active
    color: #1D2157;
    font-weight: 500;
.menu
  min-width: 192px;
  background: #FFFFFF;
  position absolute
  left 0
  top 60px
  z-index 1000
  box-shadow: 0px 4px 16px 0px rgba(26, 36, 49, 0.08)
  .menu-btn
    display block
    box-sizing border-box
    width 100%
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #9498AB;
    cursor pointer
    user-select none
    height 40px
    text-align left
    line-height 40px
    padding-left 16px
    &:hover
      background: #F0F2F5;
      color: #1D2157;

</style>
