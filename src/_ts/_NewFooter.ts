import { useRouter } from 'vue-router'
export const init = (t: any) => {
  const linkList = [
    {
      path: '/about',
      text: '白皮书',
    },
    {
      path: '/cooperation',
      text: '交易信息',
    },
    {
      path: '/help',
      text: '合约信息',
    },
    {
      path: '/help',
      text: '转账信息',
    },
    {
      path: '/help',
      text: '节点信息',
    },
    {
      path: '/help',
      text: '联系我们',
    },
    {
      path: '/help',
      text: '钱包下载',
    },
  ]
  const router = useRouter()
  const routerTo = (path: string) => {
    router.push(path)
  }
  return {
    linkList,
    routerTo,
  }
}
