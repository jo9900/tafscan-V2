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

  let address = ref('')
  window.addEventListener('beforeunload', () => {
    if (store.state.nftData)
      localStorage.setItem('nftData', JSON.stringify(store.state.nftData))
  })
  window.addEventListener('load', async () => {
    let nftData = localStorage.getItem('nftData')
    if (nftData && JSON.parse(nftData)) {
      store.commit('SAVE_NFTDATA', JSON.parse(nftData))
    }
    if (
      localStorage.getItem('uAuthorization') &&
      localStorage.getItem('account')
    ) {
      await store.dispatch('initConnect')
      await store.dispatch('connect')
    }
  })

  watch(
    () => store.state.wallet.account,
    (cur, old) => {
      if (cur) {
        address.value = maskingAddress(localStorage.getItem('account'), 2)
      } else {
        address.value = ''
      }
    },
    {
      immediate: true,
    }
  )

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
    address,
    isShowMenu,
    isShowLocalMenu,
    triggerMenu,
    triggerLocaleMenu,
    onConnectAndLogin,
    routerTo,
  }
}
