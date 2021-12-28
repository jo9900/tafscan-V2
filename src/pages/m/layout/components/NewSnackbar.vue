<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { MsgConfig } from '@/types'
//=====
enum IconType {
  common = 'info-circle',
  warning = 'exclamation-circle',
  success = 'check-circle',
}
//=========
const store = useStore()
const msgConfig = computed(():MsgConfig=> store.state.msgConfig)

</script>

<template>
  <div
    :class="[
      'msg-wrap animate__animated',
      { animate__bounceInDown: msgConfig.isShow }
    ]"
    v-if="msgConfig.isShow"
  >
    <font-awesome-icon :icon="['fas', IconType[msgConfig.type]]" :class="['fa', msgConfig.type]" />
    <div class="inner-wrap">{{ msgConfig.msg }}</div>
  </div>
</template>

<style lang="stylus">
.msg-wrap
  position fixed
  top 146px
  right 30px
  border-radius 4px
  color white
  box-shadow: 0px 6px 7px 0px rgba(0, 0, 0, 0.04);
  transform translateX(-50%)
  background #2a2a2a
  display flex
  justify-content flex-end
  align-items center
  overflow hidden
  z-index 10000
  .fa
    font-size 28px
    padding 0 5px
    &.success
      color mediumseagreen
    &.common
      color #2584e9
    &.warning
      color #fff
.inner-wrap
  min-width 300px
  max-width 400px
  min-height 40px
  padding 10px
  letter-spacing 0.02em
  display flex
  align-items center
  background rgba(255, 255, 255, .1)
</style>
