
import moment from "moment";
export const maskingAddress = (
  account: string | undefined | null,
  prefix: number = 4,
  suffix: number = 4
): string => {
  if (typeof account === 'string') {
    if (account.length <= 10) return account
    let str = ''
    str = account.substring(0, prefix)
    str = str + '...'
    str = str + account.substring(account.length - suffix)
    return str
  }
  return ''
}

export const formatTime = (time:any) => {
  if (!time) return ''
  return moment.utc(time).format('YYYY-MM-DD HH:mm:ss') + ' UTC'
}
export const formatNumber = (num:any) => {
  if (num == 0)  return 0
  if (num)
    return num.toString().replace( /\B(?=(?:\d{3})+\b)/g, ',' )
}
