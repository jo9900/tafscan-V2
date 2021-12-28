<script setup lang="ts">
import * as Layout from './components/index'
import { ref } from 'vue'
import { throttle } from 'lodash'

import { currentLocale } from "@/config";
const isScrollDown = ref(false)
const switchState = throttle(() => {
  let scrollTop =
    document.documentElement.scrollTop ||
    window.pageYOffset ||
    document.body.scrollTop
  isScrollDown.value = scrollTop > 60
}, 150)

window.addEventListener('scroll', switchState)
</script>

<template>
  <main :class="['main', currentLocale]">
    <Layout.Snackbar />
    <Layout.Header
      :class="[isScrollDown ? 'scroll-status' : 'initial-status']"
    />
    <router-view v-slot="{ Component }">
      <div class="pt140">
        <component :is="Component" />
      </div>
    </router-view>
    <Layout.Footer />
  </main>
</template>

<style lang="stylus">
.main
  position relative
  background #fff
  z-index 1 // web3modal是2
$topSpace = 146px
.pt140
  padding-top $topSpace
.header-wrap
  height $topSpace
.scroll-status
  height 100px
  animation: .5s  narrow linear 1

@keyframes narrow {
  0%{
    height $topSpace
  }
  50%{
    height 126px
  }
  70%{
    height 116px
  }
  100%{
    height 100px
  }
}
.initial-status
  position fixed
  height $topSpace
  animation: .5s  expand linear 1


@keyframes expand {
  0%{
    height 110px
  }
  50%{
    height 116px
  }
  70%{
    height 126px
  }
  100%{
    height $topSpace
  }
}

.en
  .links-wrap .link:nth-of-type(2)
    width 172px !important
  .wallet.unlink
    width 206px !important
  .load-more-btn
    width 168px !important
</style>
