<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

</script>

<template>
  <div class="tag-wrap">
    <slot></slot>
  </div>
</template>

<style scoped lang="stylus">
.tag-wrap
  background: #F7F9FC;
  padding 6px 15px
  border: 1px solid rgba(18, 24, 55, 0.16);
  min-width 100px
  min-height 40px
  font-size: 10px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #9498AB;
  line-height 16px
  &:before
    content ''
    display inline-block
    position absolute
    top: 12px
    width 0
    height 0
    border 6px solid
    border-color transparent  transparent #9498AB  #9498AB;
    transform rotate(135deg)
  &:after
    content ''
    display inline-block
    position absolute
    top: 14px
    width 0
    height 0
    border 6px solid
    border-color transparent  transparent #fff  #fff;
    transform rotate(135deg)
</style>
