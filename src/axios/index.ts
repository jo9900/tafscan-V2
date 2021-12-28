import axios from 'axios'
import store from '../store'
import errorCode from '@/locales/errorCode'
const locale: keyof typeof errorCode = (localStorage.getItem('locale') ||
  'en') as 'en' | 'zh'
const errorText = errorCode[locale]

const formatError = (code: any) => {
  let res = ''
  try {
    // @ts-ignore
    res = errorText[code]
  } catch (e) {
    // @ts-ignore
    res = errorText.other
  }
  return res
}
const instance = axios.create({
  baseURL: process.env.VUE_APP_API,
  timeout: 60 * 1000,
})
instance.interceptors.request.use(
  (config) => {
    const token: string = localStorage.getItem('uAuthorization') || ''
    if (token) {
      // @ts-ignore
      config.headers.Authorization = token
    }
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

// Response interceptors
instance.interceptors.response.use(
  (response) => {
    const res = response.data
    if (res.code !== 0) {
      store.dispatch('Message', {
        isShow: true,
        msg: formatError(res.code),
        type: 'warning',
      })
      return Promise.reject(res)
    } else {
      return response.data
    }
  },
  async (error) => {
    if (error.message.includes('timeout')) {
      store.dispatch('Message', {
        isShow: true,
        msg: formatError('timeout'),
        type: 'warning',
      })
    } else {
      store.dispatch('Message', {
        isShow: true,
        msg: formatError('other'),
        type: 'warning',
      })
    }
    return Promise.reject(error)
  }
)
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url: string, params: any) {
  return new Promise((resolve, reject) => {
    instance
      .get(url, {
        params: params,
      })
      .then((res) => {
        // @ts-ignore
        if (res.code !== 0) {
          reject(res)
          return
        }
        resolve(res)
      })
      .catch((err) => {
        throw err
      })
  })
}
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url: string, params: any) {
  return new Promise((resolve, reject) => {
    instance
      .post(url, params)
      .then((res) => {
        // @ts-ignore
        if (res.code !== 0) {
          reject(res)
          return
        }
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
