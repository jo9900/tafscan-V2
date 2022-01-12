import { ref, watch } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import { maskingAddress } from '@/utils'

interface ILinkArray {
  path?: string
  text: string
  children?: ILinkArray[]
}
export const init = (t: any) => {
  const linkList: ILinkArray[] = [
    {
      path: '/',
      text: '首页',
    },
    {
      text: '区块链',
      children: [{
        path: '/block',
        text: '区块'
      },{
        path: '/tx',
        text: '交易'
      },{
        path: '/account',
        text: '账户'
      }]
    },
    {
      path: '/node',
      text: '节点',
    },
    {
      text: '治理',
      children: [{
        path: '/vote',
        text: '投票'
      },{
        path: '/proposal',
        text: '提案'
      },{
        path: '/committee',
        text: '委员会'
      }]
    },
    {
      text: '通证',
      children: [{
        path: '/fptoken',
        text: 'FP通证'
      },{
        path: '/nft',
        text: 'FPN通证(NFT)'
      }]
    }
  ]
  const route = useRoute()
  const store = useStore()


  const router = useRouter()
  const routerTo = (path: string) => {
    if (!path) return
    router.push(path)
  }

  const isShowLocalMenu = ref(false)
  const isShowNetworkMenu = ref(false)

  const triggerLocaleMenu = (bool: boolean) => {
    isShowLocalMenu.value = bool
  }
  const triggerNetworkMenu = (bool: boolean) => {
    isShowNetworkMenu.value = bool
  }
  const networkType = ref('test')

  return {
    networkType,
    linkList,
    route,
    isShowLocalMenu,
    isShowNetworkMenu,
    triggerLocaleMenu,
    triggerNetworkMenu,
    routerTo,
  }
}
