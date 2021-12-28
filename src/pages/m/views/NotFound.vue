<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import { useRouter } from 'vue-router'
const router = useRouter()
const routerTo = (path: string) => {
  router.replace(path)
  window.scrollTo(0, 0)
}
</script>

<template>
  <div class="notfound-wrap">

    <div role="button" class="back-btn" @click="routerTo('/home')">
      返回首页
    </div>
  </div>
</template>

<style lang="stylus">
.notfound-wrap
  width 100%
  display flex
  flex-direction column
  align-items center
  padding-top 10vh

  .back-btn
    width 240px
    height 40px
    text-align center
    background #FFFFFF
    border: 1px solid #f1f1f1
    font-size 18px
    color #666
    line-height 40px
    cursor pointer
    border-radius 8px
    user-select none
</style>
