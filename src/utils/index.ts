
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
