import { ref, watch } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import { maskingAddress } from '@/utils'

interface ILinkArray {
  path: string
  text: string
}
export const init = (t: any) => {
  const linkList: ILinkArray[] = [
    {
      path: '/',
      text: t('text53'),
    },
    {
      path: '/market',
      text: t('text54'),
    },
    {
      path: '/sell',
      text: t('text55'),
    },
  ]
  const route = useRoute()
  const store = useStore()

  const onConnectAndLogin = async () => {
    await store.dispatch('connect')
    // await router.push('/center')
  }

  const router = useRouter()
  const routerTo = (path: string) => {
    router.push(path)
  }

  const isShowMenu = ref(false)
  const isShowLocalMenu = ref(false)

  const triggerMenu = (bool: boolean) => {
    isShowMenu.value = bool
  }
  const triggerLocaleMenu = (bool: boolean) => {
    isShowLocalMenu.value = bool
  }
  return {
    linkList,
    route,
    isShowMenu,
    isShowLocalMenu,
    triggerMenu,
    triggerLocaleMenu,
    onConnectAndLogin,
    routerTo,
  }
}
