<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <router-view />
</template>

<style lang="stylus">
@import '~@/stylus/index.styl'
@import '~@pc/stylus/index.styl'
</style>
