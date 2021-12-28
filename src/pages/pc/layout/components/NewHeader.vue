<script lang="ts" setup>
import { onMounted } from 'vue'
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
</script>

<template>
  <div class="header-wrap">
    <div class="header" @mouseleave="triggerLocaleMenu(false)">
      <div class="logo" @click="routerTo('/home')">
        <img class="logo-icon" src="@pc/img/nav_pic_logo@2x.png" />
      </div>
      <div class="links-wrap">
        <a
          :class="['link', { active: route.path === link.path }]"
          v-for="link in linkList"
          :key="link.path"
          @click="routerTo(link.path)"
          >{{ link.text }}</a
        >
      </div>

      <div class="locale-wrap" @mouseleave="triggerLocaleMenu(false)">
        <a class="locale" @mouseenter="triggerLocaleMenu(true)">
          <img src="@pc/img/Icon_gj@2x.png" height="24" width="24" />
          <div class="locale-name">{{ currentLocale === 'zh'? '中文' : 'English' }}</div>
          <img src="@pc/img/icon_more_sq@2x.png" height="24" width="24" />
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
        font-size: 22px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #000000;
      .locale-icon
        width: 32px
        height: 32px
        display inline-block
        margin-right 2px

   .logo
      display flex
      margin-right 156px
      cursor pointer
      align-items center
      &-icon
        display block
        height: 60px
        width: 60px
        margin-right 16px
.header .links-wrap
  flex-wrap: nowrap;
  display flex
.link
  text-decoration none
  text-align center
  line-height 56px
  display inline-block
  margin-right 72px
  font-size: 20px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  border 1px solid #E4E4E4
  width 100px
  height: 56px
  color: #1D2157;
  border-radius: 28px;
  user-select none
  transition all ease-in .3s
  cursor pointer

  &:hover
    box-shadow: 0px 5px 17px 0px rgba(0, 0, 0, 0.1);

  &.active
    color: #1D2157;
    font-weight: 500;
.menu
  width: 186px;
  height: 98px;
  background: #FFFFFF;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.06);
  border: 1px solid #E4E7ED;
  position absolute
  right 0
  top 66px
  z-index 1000
  &:before
    content ''
    display inline-block
    position absolute
    top: -6px
    right 42px
    width 0
    height 0
    border 6px solid
    box-shadow -1px 1px 0px 0px rgba(0, 0, 0, 0.06);
    border-color transparent  transparent #fff  #fff
    transform rotate(135deg)
  .menu-btn
    display block
    box-sizing border-box
    width 100%
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #606266;
    cursor pointer
    user-select none
    height 40px
    text-align left
    line-height 40px
    padding-left 10px
    &:hover
      background: #F5F7FA;

</style>
