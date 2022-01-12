<script lang="ts" setup>
import { ref, watch, onBeforeUnmount } from 'vue'
import { useClipboard } from 'vue-reactive-clipboard'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const props = defineProps<{
  copyText: string
}>()
const isCopied = ref(false)
const { copy } = useClipboard()
const onCopy = () => {
  isCopied.value = true
  copy(props.copyText)
}
let timer = undefined
watch(()=> isCopied.value, (cur)=> {
  if (cur) {
    timer = setTimeout(()=> {
      isCopied.value = false
    }, 2 * 1000)
  }
})
onBeforeUnmount(()=> {
  isCopied.value = false
  if (timer) {
    clearTimeout(timer)
    timer = null
  }
})
</script>

<template>
  <ui-icon @click="onCopy" class="copy_icon">content_copy</ui-icon>
  <div class="copy-state-wrap" v-if="isCopied">
    <div>{{ t('text48') }}</div>
  </div>
</template>
<style scoped>
.copy_icon {
  color: #333333;
  margin-left: 4px;
}
.copy-state-wrap {
  width: 2.8rem;
  height: 2.8rem;
  background: rgba(0, 0, 0, 0.75);
  border-radius: 0.16rem;
  position: fixed;
  z-index: 100;
  top: 50vh;
  left: 50%;
  transform: translate(-50%, -1.4rem);
  font-size: .3rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.icon {
  width: 0.8rem;
  height: 0.8rem;
  margin-bottom: .16rem;
}
</style>
