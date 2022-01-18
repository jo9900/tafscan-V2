<script setup lang="ts">
import {toRefs, ref} from 'vue'
const props = defineProps<{
  pageNum: number,
  totalPageNum: number
}>()
const cursor = ref('pointer')
const _pageNum = toRefs(props).pageNum.value
const emits = defineEmits<{
  (e: 'changePage', pageNum: number):void
}>()
const trigger = (pageNum:number) => {
  if (props.totalPageNum === 1) return
  console.log(pageNum);
  emits('changePage', pageNum)
}
</script>

<template>
<div class="pagination-wrap">
  <div class="first" @click="trigger(1)">First</div>
  <div class="icon-arrow" @click="trigger(++ _pageNum)">
    <img src="@pc/img/icon_z@2x.png" alt="prev">
  </div>
  <div class="text"><span>Page {{ props.pageNum }} of {{ props.totalPageNum }}</span></div>
  <div class="icon-arrow" @click="trigger(-- _pageNum)">
    <img src="@pc/img/icon_y@2x.png" alt="next">
  </div>
  <div class="last" @click="trigger(props.totalPageNum)">Last</div>
</div>
</template>


<style scoped lang="stylus">
.pagination-wrap
  display flex
  align-items center
  justify-content center
  >div
    height: 26px;
    background: #F2F6FF;
    border-radius: 3px;
    font-size: 10px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #3269F0;
    text-align center
    line-height 26px
    margin 0 2px
  .first,.last
    width 44px
    cursor pointer
  .text
    min-width 115px
    cursor default
    span
      font-size: 10px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #9498AB;
  .icon-arrow
    display flex
    justify-content center
    align-items center
    cursor v-bind(cursor)
    img
      display block
      height 24px
      width 24px
      user-select none
</style>
