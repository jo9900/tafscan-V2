<script setup lang="ts">
const emits = defineEmits<{
  (e: 'closeDialog'): void
}>()
const closeModal = (e) => {
  if ((e.target as HTMLDivElement).className === 'base-dialog') {
    emits('closeDialog')
  }
}
</script>

<template>
  <div class="base-dialog" @click="closeModal">
    <slot name="content" />
  </div>
</template>

<style scoped lang="stylus"></style>
