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
  border: 1px solid #d2d5dd;
  min-width 100px
  min-height 40px
  font-size: 10px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #9498AB;
  line-height 16px
  &:before
    box-sizing: content-box;
    width: 0px;
    height: 0px;
    position: absolute;
    top: 1px
    left 50%
    padding:0;
    border-bottom: 8px solid  #d2d5dd;
    border-top:8px solid transparent;
    border-left:8px solid transparent;
    border-right:8px solid transparent;
    display: block;
    content:'';
    z-index: 5;
    transform translate(-50%)
  &:after
    transform translate(-50%)
    box-sizing: content-box;
    width: 0px;
    height: 0px;
    position: absolute;
    top: 1px
    left 50%
    padding:0;
    border-bottom:9px solid #F7F9FC;
    border-top:9px solid transparent;
    border-left:9px solid transparent;
    border-right:9px solid transparent;
    display: block;
    content:'';
    z-index:10
</style>
